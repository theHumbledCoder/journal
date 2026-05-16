import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot.jsx'
import { galleryImages } from '../generated/gallery-manifest.js'

const PREVIEW_COUNT = 6

export default function Gallery() {
  const preview = galleryImages.slice(0, PREVIEW_COUNT)

  return (
    <section className="gallery reveal" id="gallery">
      <div className="gallery-head">
        <h2>Photos · a side project</h2>
        <Link className="all" to="/gallery">View all →</Link>
      </div>
      <div className="gallery-strip">
        {Array.from({ length: PREVIEW_COUNT }).map((_, i) => {
          const img = preview[i]
          return (
            <ImageSlot
              key={i}
              src={img?.src}
              alt={img?.alt ?? `Photo ${String(i + 1).padStart(2, '0')}`}
              placeholder={`Photo ${String(i + 1).padStart(2, '0')}`}
            />
          )
        })}
      </div>
    </section>
  )
}
