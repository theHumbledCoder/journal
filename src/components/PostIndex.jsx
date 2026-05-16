import { Link } from 'react-router-dom'
import { posts, projects } from '../lib/content.js'

function shortDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' · ' + d.getFullYear()
}

function IndexList({ label, items, basePath, tagField = 'tags', metaField = 'date', metaExtra }) {
  return (
    <div className="index reveal" id={label.toLowerCase()}>
      <h2>
        <span>{label}</span>
        <span className="count">{String(items.length).padStart(2, '0')} {items.length === 1 ? 'entry' : 'entries'}</span>
      </h2>
      <ol>
        {items.map((item, i) => {
          const tags = Array.isArray(item[tagField]) ? item[tagField] : item[tagField] ? [item[tagField]] : []
          const tag = tags[0]
          const num = String(items.length - i).padStart(2, '0')
          return (
            <li key={item.slug}>
              <Link to={`${basePath}/${item.slug}`}>
                <span className="num">{num}</span>
                <span className="title">
                  {item.title}
                  {tag && <span className="tag">{tag}</span>}
                </span>
                <span className="meta">
                  {label === 'Projects'
                    ? `${item.year ?? new Date(item.date + 'T12:00:00').getFullYear()} · ${item.type ?? 'project'}`
                    : shortDate(item.date)}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function PostIndex() {
  return (
    <section className="indexes">
      <IndexList label="Thoughts" items={posts} basePath="/posts" />
      <IndexList label="Projects" items={projects} basePath="/projects" />
    </section>
  )
}
