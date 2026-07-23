import { useCallback, useEffect, useState } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const sectionIds = ['about', 'services', 'skills', 'stack', 'projects', 'whyme', 'contact']

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [open,      setOpen]      = useState(false)
  const [active,    setActive]    = useState('')
  const [progress,  setProgress]  = useState(0)

  /* scroll progress + active section */
  const onScroll = useCallback(() => {
    const scrollY   = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
    setScrolled(scrollY > 20)

    let current = ''
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && scrollY >= el.offsetTop - 120) current = id
    }
    setActive(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  /* close mobile menu on outside click */
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#menu-btn')) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-[#080b14]/85 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-white/[0.06]'
        : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 z-10"
        style={{ width: `${progress}%` }}
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            ME
          </div>
          <span className="font-bold text-gray-900 dark:text-white hidden sm:block tracking-tight">
            Mohamed<span className="text-gradient">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100/80 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/60 dark:border-indigo-500/20" />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/[0.06] hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-200 border border-transparent dark:border-white/[0.06]"
          >
            {darkMode ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </button>

          {/* Hire Me */}
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-sm px-4 py-2">
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            id="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-gray-100 dark:bg-white/[0.06]"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="bg-white/95 dark:bg-[#080b14]/95 backdrop-blur-xl px-4 py-3 space-y-0.5 border-b border-gray-200/60 dark:border-white/[0.06]">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 py-2.5 px-4 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />}
                {l.label}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 btn-primary justify-center text-center text-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
