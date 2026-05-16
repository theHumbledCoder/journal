import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'
import { reflections } from '../lib/content.js'

function shortDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' · ' + d.getFullYear()
}

export default function ReflectionsPage() {
  return (
    <>
      <TopBar />
      <main className="post-page">
        <Link to="/" className="back-link">← Back</Link>
        <h1 className="post-title">Reflections</h1>
        <div className="index" id="reflections">
          <h2>
            <span>All entries</span>
            <span className="count">{String(reflections.length).padStart(2, '0')} {reflections.length === 1 ? 'entry' : 'entries'}</span>
          </h2>
          {reflections.length === 0 ? (
            <p style={{ opacity: 0.5 }}>No reflections yet.</p>
          ) : (
            <ol>
              {reflections.map((r, i) => {
                const tags = Array.isArray(r.tags) ? r.tags : r.tags ? [r.tags] : []
                const tag = tags[0]
                const num = String(reflections.length - i).padStart(2, '0')
                return (
                  <li key={r.slug}>
                    <Link to={`/reflections/${r.slug}`}>
                      <span className="num">{num}</span>
                      <span className="title">
                        {r.title}
                        {tag && <span className="tag">{tag}</span>}
                      </span>
                      <span className="meta">{shortDate(r.date)}</span>
                    </Link>
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
