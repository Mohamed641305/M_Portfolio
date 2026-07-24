import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const cats = [
  { icon:'🐘', title:'Backend',  color:'#ff6b6b',
    skills:[{n:'Laravel',v:87},{n:'PHP',v:85},{n:'REST APIs',v:88},{n:'Sanctum/JWT',v:80}] },
  { icon:'🗄️', title:'Database', color:'#00d4ff',
    skills:[{n:'MySQL',v:85},{n:'Database Design',v:82},{n:'Eloquent ORM',v:86},{n:'SQL Queries',v:84}] },
  { icon:'⚛️', title:'Frontend', color:'#00ff87',
    skills:[{n:'JavaScript',v:82},{n:'Bootstrap',v:88},{n:'React',v:75},{n:'HTML5/CSS3',v:90}] },
  { icon:'🛠️', title:'Tools',    color:'#ffd700',
    skills:[{n:'Git & GitHub',v:88},{n:'Postman',v:85},{n:'Tailwind CSS',v:85},{n:'Responsive Design',v:88}] },
]

function SkillRow({ n, v, animate, color }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-mono text-gray-400">{n}</span>
        <span className="text-xs font-black font-mono" style={{ color }}>{v}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{
          width: animate ? `${v}%` : '0%',
          background:`linear-gradient(90deg,${color}90,${color})`,
          boxShadow:`0 0 6px ${color}80`,
        }}/>
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setAnimate(true), 200); obs.disconnect() }
    }, { threshold:0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="bg-[#0a0a0a]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">03 — Skills</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-gray-600 font-mono text-sm mb-3">// Continuously growing with every project</p>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {cats.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div className="bg-[#111] rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-white/[0.06]"
                    style={{ background:`${cat.color}18` }}>
                    {cat.icon}
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">{cat.title}</p>
                    <p className="text-[10px] text-gray-600 font-mono">{cat.skills.length} skills</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full"
                    style={{ background:cat.color, boxShadow:`0 0 8px ${cat.color}` }}/>
                </div>
                <div className="space-y-4">
                  {cat.skills.map(s => <SkillRow key={s.n} {...s} animate={animate} color={cat.color}/>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
