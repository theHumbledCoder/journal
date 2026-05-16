import { Link } from 'react-router-dom'
import { featuredPost } from '../lib/content.js'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function Featured({ visible = true }) {
  if (!visible || !featuredPost) return null

  return (
    <section className="featured reveal" id="featured">
      <aside className="featured-meta">
        <span className="label">→ LATEST</span>
        <span className="date">{formatDate(featuredPost.date)}</span>
        {featuredPost.readTime && (
          <span className="read">{featuredPost.readTime} read</span>
        )}
      </aside>
      <div>
        <h1 className="featured-title">{featuredPost.title}</h1>
        {featuredPost.excerpt && (
          <p className="featured-excerpt">{featuredPost.excerpt}</p>
        )}
        <Link className="featured-link" to={`/posts/${featuredPost.slug}`}>
          Read essay →
        </Link>
      </div>
    </section>
  )
}
