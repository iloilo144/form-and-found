import { useEffect, useState } from 'react'
import { useReveal } from './hooks/useReveal'
import { PROJECTS } from './data/studio'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Work from './components/Work'
import ProjectDialog from './components/ProjectDialog'
import Studio from './components/Studio'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Philosophy from './components/Philosophy'
import Inquiry from './components/Inquiry'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  // ?project=casa-varela opens that project directly, so projects can be shared by link.
  const [project, setProject] = useState(() => {
    const id = new URLSearchParams(window.location.search).get('project')
    return PROJECTS.find((p) => p.id === id) ?? null
  })

  useEffect(() => {
    const url = new URL(window.location.href)
    if (project) url.searchParams.set('project', project.id)
    else url.searchParams.delete('project')
    window.history.replaceState(null, '', url)
  }, [project])

  // Honour links such as /#work on first load (the content renders after the browser tried to jump).
  // Waits for the load event so fonts and images can't shift the target after we jump to it.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    if (document.readyState === 'complete') {
      const t = setTimeout(go, 0)
      return () => clearTimeout(t)
    }
    window.addEventListener('load', go, { once: true })
    return () => window.removeEventListener('load', go)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Loader />
      <Nav />
      <main id="main">
        <Hero />
        <Intro />
        <Work onOpen={setProject} />
        <Studio />
        <Services />
        <Gallery />
        <Philosophy />
        <Inquiry />
      </main>
      <Footer />
      <ProjectDialog project={project} onClose={() => setProject(null)} />
    </>
  )
}
