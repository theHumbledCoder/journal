import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import Hub from '../components/Hub.jsx'
import Featured from '../components/Featured.jsx'
import Gallery from '../components/Gallery.jsx'
import Footer from '../components/Footer.jsx'
import TweaksPanel from '../components/TweaksPanel.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Home() {
  const [tweaks, setTweaks] = useState({
    showDivider: true,
    showFeatured: true,
    revealAnimations: true,
  })
  const [tweaksOpen, setTweaksOpen] = useState(false)

  useReveal(tweaks.revealAnimations)

  return (
    <>
      <TopBar />
      <Hub showDivider={tweaks.showDivider} />
      <Featured visible={tweaks.showFeatured} />
      <Gallery />
      <Footer />
      <TweaksPanel
        open={tweaksOpen}
        onClose={() => setTweaksOpen(false)}
        onChange={next => setTweaks(next)}
      />
    </>
  )
}
