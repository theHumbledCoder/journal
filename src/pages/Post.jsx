import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'
import { getPost, getProject, getReflection } from '../lib/content.js'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Post({ type = 'post' }) {
  const { slug } = useParams()
  const entry = type === 'post' ? getPost(slug) : type === 'project' ? getProject(slug) : getReflection(slug)

  if (!entry) return <Navigate to="/" replace />

  const tags = Array.isArray(entry.tags) ? entry.tags : entry.tags ? [entry.tags] : []

  return (
    <>
      <TopBar />
      <main className="post-page">
        <Link to="/" className="back-link">← Back</Link>

        <div className="post-meta">
          {tags.map(tag => (
            <span key={tag} className="post-tag">{tag}</span>
          ))}
          {entry.date && <span>{formatDate(entry.date)}</span>}
          {entry.readTime && <span>{entry.readTime} read</span>}
        </div>

        <h1 className="post-title">{entry.title}</h1>

        <div className="post-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {entry.content}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  )
}
