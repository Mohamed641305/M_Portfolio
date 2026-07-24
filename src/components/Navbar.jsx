import { useCallback, useEffect, useState } from 'react'

const links = [
  { label:'About',    href:'#about'    },
  { label:'Services', href:'#services' },
  { label:'Skills',   href:'#skills'   },
  { label:'Projects', href:'#projects' },
  { label:'Contact',  href:'#contact'  },
]
const sectionIds = ['about','services','skills','stack','projects','whyme','contact']

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback(() => {
    const y = window.scrollY
    const doc = document.documentElement.scrollHeight - window.innerHeight
    setProgress(doc > 0 ? (y / doc) * 100 : 0)
    setScrolled(y > 40)
    let cur = ''
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && y >= el.offsetTop - 120) cur = id
    }
    setActive(cur)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent'
    }`}>
      <div className="absolute bottom-0 left-0 h-[1px] transition-all duration-150 z-10"
        style={{ width:`${progress}%`, background:'#00ff87', boxShadow:'0 0 8px #00ff87' }}/>

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded bg-[#00ff87] flex items-center justify-center font-black text-[#0a0a0a] text-xs group-hover:shadow-[0_0_16px_rgba(0,255,135,0.6)] transition-all duration-300">ME</span>
          <span className="font-black text-white hidden sm:block tracking-tight">Mohamed<span className="text-neon">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const id = l.href.replace('#','')
            const isActive = active === id
            return (
              <li key={l.href}>
                <a href={l.href} className={`relative px-4 py-2 text-sm font-semibold font-mono transition-all duration-200 ${
                  isActive ? 'text-[#00ff87]' : 'text-gray-500 hover:text-white'
                }`}>
                  {isActive && <span className="absolute inset-0 rounded-lg bg-[#00ff87]/[0.07] border border-[#00ff87]/20"/>}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme"
            className="w-8 h-8 rounded flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.07] transition-all">
            {darkMode
              ? <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              : <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            }
          </button>
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-xs px-4 py-2">Hire Me</a>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded bg-white/[0.05]">
            <span className={`block w-4 h-[1.5px] bg-white rounded transition-all duration-300 ${open?'rotate-45 translate-y-[6.5px]':''}`}/>
            <span className={`block w-4 h-[1.5px] bg-white rounded transition-all duration-300 ${open?'opacity-0':''}`}/>
            <span className={`block w-4 h-[1.5px] bg-white rounded transition-all duration-300 ${open?'-rotate-45 -translate-y-[6.5px]':''}`}/>
          </button>
        </div>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open?'max-h-96':'max-h-0'}`}>
        <div className="bg-[#0d0d0d] border-b border-white/[0.05] px-4 py-3 space-y-0.5">
          {links.map((l) => {
            const id = l.href.replace('#','')
            const isActive = active === id
            return (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`flex items-center gap-3 py-2.5 px-3 text-sm font-mono font-semibold rounded-lg transition-all ${
                  isActive ? 'text-[#00ff87] bg-[#00ff87]/[0.07]' : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}>
                {isActive && <span className="w-1 h-4 bg-[#00ff87] rounded-full"/>}
                {l.label}
              </a>
            )
          })}
          <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 btn-primary justify-center text-center text-sm">Hire Me</a>
        </div>
      </div>
    </header>
  )
}
