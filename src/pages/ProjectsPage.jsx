import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../lib/content.js'

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <main className="post-page list-page">
        <Link to="/" className="back-link">← Home</Link>

        <h1 className="post-title">Projects</h1>
        <p className="page-intro">A minimal catalog of projects, with clean links and compact metadata.</p>

        <div className="table-card">
          <table className="list-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Year · Type</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                const num = String(projects.length - index).padStart(2, '0')
                const tags = Array.isArray(project.tags) ? project.tags : project.tags ? [project.tags] : []
                const tag = tags[0]
                const year = project.year ?? new Date(project.date + 'T12:00:00').getFullYear()
                const type = project.type ?? 'project'
                return (
                  <tr key={project.slug}>
                    <td>{num}</td>
                    <td className="title-cell">
                      <Link to={`/projects/${project.slug}`}>
                        <span>{project.title}</span>
                        {tag && <span className="tag">{tag}</span>}
                      </Link>
                    </td>
                    <td className="meta-cell">
                      {year} · {type}
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
