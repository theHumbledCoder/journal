import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <main className="post-page">
        <a href="/" className="back-link">← Home</a>
        <h1 className="post-title">About</h1>
        <div className="post-body">
          <p>I am an engineer based in Bangalore, India, focused on building clean, functional software and exploring quantitative market analysis.</p>
          <p>This space serves as a central repository for my active projects, personal journals, and technical notes. Outside of code and architecture, my time is spent practicing Vipassana meditation, driving through the Western Ghats, and reading.</p>
          <p>I write to move ideas out of abstract frameworks and test them against reality. Expect short, concise breakdowns of technical challenges, market data experiments, and thoughts on human behavior.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
