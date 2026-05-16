import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './lib/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ReflectionsPage from './pages/ReflectionsPage.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:slug" element={<Post type="post" />} />
          <Route path="/projects/:slug" element={<Post type="project" />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reflections" element={<ReflectionsPage />} />
          <Route path="/reflections/:slug" element={<Post type="reflection" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
