import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'
import { posts } from '../lib/content.js'

function shortDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ThoughtsPage() {
  return (
    <>
      <TopBar />
      <main className="post-page list-page">
        <Link to="/" className="back-link">← Home</Link>

        <h1 className="post-title">Thoughts</h1>
        <p className="page-intro">All essays and notes, cleanly arranged for browsing in one minimal list.</p>

        <div className="table-card">
          <table className="list-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date · Read time</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                const num = String(posts.length - index).padStart(2, '0')
                const tags = Array.isArray(post.tags) ? post.tags : post.tags ? [post.tags] : []
                const tag = tags[0]
                return (
                  <tr key={post.slug}>
                    <td>{num}</td>
                    <td className="title-cell">
                      <Link to={`/posts/${post.slug}`}>
                        <span>{post.title}</span>
                        {tag && <span className="tag">{tag}</span>}
                      </Link>
                    </td>
                    <td className="meta-cell">
                      {shortDate(post.date)}{post.readTime ? ` · ${post.readTime} read` : ''}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}
