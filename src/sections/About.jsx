import { useEffect, useRef, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import ScrollReveal from '../components/ScrollReveal'

const stats = [
  { target:6,   suffix:'+', label:'Projects'     },
  { target:2,   suffix:'+', label:'Years Exp.'   },
  { target:100, suffix:'%', label:'Commitment'   },
  { target:5,   suffix:'+', label:'Technologies' },
]
const cards = [
  { icon:'🐘', title:'Backend-First', sub:'Laravel & PHP Expert',  color:'border-[#ff6b6b]/40 hover:border-[#ff6b6b]/70' },
  { icon:'🗄️', title:'Database',      sub:'MySQL & Eloquent ORM',  color:'border-[#00d4ff]/40 hover:border-[#00d4ff]/70' },
  { icon:'🔗', title:'REST APIs',     sub:'Sanctum, JWT & JSON',   color:'border-[#00ff87]/40 hover:border-[#00ff87]/70' },
  { icon:'🤝', title:'Open to Work',  sub:'Freelance & Full-time', color:'border-[#ffd700]/40 hover:border-[#ffd700]/70' },
]

function Counter({ target, suffix, animate }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!animate) return
    let cur = 0
    const step = target / (1200 / 16)
    const iv = setInterval(() => {
      cur = Math.min(cur + step, target)
      setCount(Math.floor(cur))
      if (cur >= target) clearInterval(iv)
    }, 16)
    return () => clearInterval(iv)
  }, [animate, target])
  return <>{count}{suffix}</>
}

export default function About() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="bg-[#0a0a0a]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">01 — About</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[280px_1fr] gap-14 items-start">
          {/* Photo */}
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#00ff87]/50"/>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#00ff87]/50"/>
              <div className="rounded-xl overflow-hidden border border-white/[0.06] aspect-[3/4]"
                style={{ boxShadow:'0 0 40px -10px rgba(0,255,135,0.2)' }}>
                <img src={avatar} alt="Mohamed" className="w-full h-full object-cover" style={{ objectPosition:'50% 10%' }}/>
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0a0a]/95 to-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-black text-sm">Mohamed Eldmerdash</p>
                  <p className="text-[#00ff87] text-xs font-mono">Full-Stack Developer</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-[#111] border border-white/[0.06] rounded-lg p-3 text-center hover:border-[#00ff87]/30 transition-colors">
                    <p className="text-xl font-black text-gradient font-mono"><Counter target={s.target} suffix={s.suffix} animate={animate}/></p>
                    <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wider mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal delay={150}>
              <div className="space-y-4 font-mono text-sm text-gray-500 leading-relaxed bg-[#111] rounded-xl p-6 border border-white/[0.06]">
                <p><span className="text-[#00ff87]">const</span> <span className="text-[#00d4ff]">developer</span> <span className="text-white">=</span> {'{'}</p>
                <div className="pl-6 space-y-2">
                  <p><span className="text-gray-400">name:</span> <span className="text-white">&quot;Mohamed Eldmerdash&quot;</span>,</p>
                  <p><span className="text-gray-400">role:</span> <span className="text-white">&quot;Full-Stack Developer&quot;</span>,</p>
                  <p><span className="text-gray-400">focus:</span> <span className="text-white">&quot;Backend Development&quot;</span>,</p>
                  <p><span className="text-gray-400">core:</span> [<span className="text-[#00ff87]">&quot;Laravel&quot;</span>, <span className="text-[#00ff87]">&quot;PHP&quot;</span>, <span className="text-[#00ff87]">&quot;MySQL&quot;</span>, <span className="text-[#00ff87]">&quot;REST APIs&quot;</span>],</p>
                  <p><span className="text-gray-400">frontend:</span> [<span className="text-[#00d4ff]">&quot;JS&quot;</span>, <span className="text-[#00d4ff]">&quot;Bootstrap&quot;</span>, <span className="text-[#00d4ff]">&quot;React&quot;</span>],</p>
                  <p><span className="text-gray-400">available:</span> <span className="text-[#00ff87]">true</span>,</p>
                </div>
                <p className="text-white">{'}'}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://github.com/Mohamed641305/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">LinkedIn</a>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3">
              {cards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 70 + 200}>
                  <div className={`bg-[#111] border rounded-xl p-4 ${c.color} transition-all duration-300 hover:scale-[1.02] group`}>
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{c.icon}</span>
                    <p className="font-black text-white text-sm">{c.title}</p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">{c.sub}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
