import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import Footer from '../components/Footer.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { galleryImages } from '../generated/gallery-manifest.js'

export default function GalleryPage() {
  return (
    <>
      <TopBar />
      <main className="gallery-page">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Photos</h1>

        {galleryImages.length === 0 ? (
          <p className="gallery-empty">
            No photos yet. Drop images into <code>public/images/gallery/</code> and redeploy.
          </p>
        ) : (
          <div className="gallery-grid">
            {galleryImages.map(img => (
              <ImageSlot key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
