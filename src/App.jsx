import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Stack from './sections/Stack'
import WhyMe from './sections/WhyMe'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="relative">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Stack />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
    </div>
  )
}
