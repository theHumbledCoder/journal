import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './lib/ThemeContext.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ReflectionsPage from './pages/ReflectionsPage.jsx'
import ThoughtsPage from './pages/ThoughtsPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thoughts" element={<ThoughtsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/posts/:slug" element={<Post type="post" />} />
          <Route path="/projects/:slug" element={<Post type="project" />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reflections" element={<ReflectionsPage />} />
          <Route path="/reflections/:slug" element={<Post type="reflection" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
