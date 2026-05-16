// Loads all markdown from content/ at build time via Vite's import.meta.glob.
// Each .md file uses YAML frontmatter (the --- block at the top).

const postFiles = import.meta.glob('/content/posts/*.md', { as: 'raw', eager: true })
const projectFiles = import.meta.glob('/content/projects/*.md', { as: 'raw', eager: true })
const reflectionFiles = import.meta.glob('/content/reflections/*.md', { as: 'raw', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    val = val.replace(/^["'](.*)["']$/, '$1')
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^["'](.*)["']$/, '$1'))
        .filter(Boolean)
    }
    data[key] = val
  })

  return { data, content: match[2].trim() }
}

function parseEntry(filePath, raw) {
  const { data, content } = parseFrontmatter(raw)
  const slug = filePath.split('/').pop().replace(/\.md$/, '')
  return { slug, content, ...data }
}

export const posts = Object.entries(postFiles)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const projects = Object.entries(projectFiles)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const reflections = Object.entries(reflectionFiles)
  .map(([path, raw]) => parseEntry(path, raw))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export const featuredPost = posts.find(p => p.featured === 'true') ?? posts[0] ?? null

export const getPost = slug => posts.find(p => p.slug === slug) ?? null
export const getProject = slug => projects.find(p => p.slug === slug) ?? null
export const getReflection = slug => reflections.find(r => r.slug === slug) ?? null
