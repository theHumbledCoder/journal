import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot.jsx'

export default function Hub({ showDivider = true }) {
  return (
    <section className="hub-section" id="top">
      <div className="hub">
        <svg className="hub-svg" viewBox="0 0 100 100" aria-hidden="true">
          <circle className="ring-outer" cx="50" cy="50" r="49.5" />
          <circle className="ring-inner" cx="50" cy="50" r="47" />
          {showDivider && (
            <line className="divider" x1="50" y1="0.5" x2="50" y2="99.5" />
          )}
        </svg>

        <Link className="hub-half left" to="/thoughts">
          <span className="num">01 / WRITE</span>
          Thoughts<span className="arrow">→</span>
        </Link>
        <Link className="hub-half right" to="/projects">
          <span className="num">02 / BUILD</span>
          Projects<span className="arrow">→</span>
        </Link>

        <Link className="hub-photo" to="/gallery" aria-label="View photo gallery">
          <ImageSlot
            src="images/profile.jpg"
            alt="Profile photo"
            placeholder="Your portrait"
            circle
            style={{ width: '100%', height: '100%' }}
          />
          <div className="hub-photo-overlay">
            <span className="o-eyebrow">↑ Photos</span>
            <span className="o-label">click to view gallery</span>
            <span className="o-arrow">↗</span>
          </div>
        </Link>
      </div>

      <p className="hub-tagline">
        <span className="name">Suhas Bharadwaj</span>
        {' '}— exploring the universe, one token at a time. Writing, building, occasionally pausing to introspect (or is it the other way round!?)
      </p>
    </section>
  )
}
