import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext.jsx'

export default function TopBar() {
  const { toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="brand">Suhas Bharadwaj</Link>
      <nav>
        <Link to="/thoughts" className="hide-mobile">Thoughts</Link>
        <Link to="/projects" className="hide-mobile">Projects</Link>
        <Link to="/gallery" className="hide-mobile">Photos</Link>
        <Link to="/about" className="hide-mobile">About</Link>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode" />
      </nav>
    </header>
  )
}
