import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const cats = [
  {
    icon: '⚛️',
    title: 'Frontend',
    grad: 'from-indigo-500 to-purple-600',
    ring: '#818cf8',
    skills: [
      { n: 'React',      v: 80, icon: '⚛️' },
      { n: 'JavaScript', v: 82, icon: '⚡' },
      { n: 'Bootstrap',  v: 88, icon: '🅱️' },
      { n: 'HTML5 / CSS3', v: 90, icon: '🌐' },
    ],
  },
  {
    icon: '🐘',
    title: 'Backend',
    grad: 'from-red-500 to-orange-500',
    ring: '#f87171',
    skills: [
      { n: 'Laravel',             v: 87, icon: '🐘' },
      { n: 'PHP',                 v: 85, icon: '🔷' },
      { n: 'REST APIs',           v: 88, icon: '🔗' },
      { n: 'Sanctum / JWT',       v: 80, icon: '🔒' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database',
    grad: 'from-blue-500 to-cyan-600',
    ring: '#60a5fa',
    skills: [
      { n: 'MySQL',             v: 85, icon: '🗄️' },
      { n: 'Database Design',   v: 82, icon: '📐' },
      { n: 'Eloquent ORM',      v: 86, icon: '🔄' },
      { n: 'SQL Queries',       v: 84, icon: '📊' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    grad: 'from-emerald-500 to-teal-600',
    ring: '#34d399',
    skills: [
      { n: 'Git & GitHub',       v: 88, icon: '🐙' },
      { n: 'Postman',            v: 85, icon: '📮' },
      { n: 'Tailwind CSS',       v: 90, icon: '💨' },
      { n: 'Responsive Design',  v: 92, icon: '📱' },
    ],
  },
]

/* ── SVG Ring ── */
function Ring({ value, animate, color }) {
  const r   = 22
  const circ = 2 * Math.PI * r
  const offset = circ - (circ * (animate ? value : 0)) / 100

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="flex-shrink-0 -rotate-90">
      {/* Track */}
      <circle cx="28" cy="28" r={r} fill="none" stroke="currentColor" strokeWidth="3.5"
        className="text-gray-200 dark:text-gray-700/60" />
      {/* Fill */}
      <circle cx="28" cy="28" r={r} fill="none" stroke={color} strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)' }}
      />
    </svg>
  )
}

function SkillRow({ n, v, icon, animate, color }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative flex-shrink-0">
        <Ring value={v} animate={animate} color={color} />
        <span className="absolute inset-0 flex items-center justify-center text-sm leading-none">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 truncate">{n}</span>
          <span className="text-xs font-bold ml-2 flex-shrink-0" style={{ color }}>{v}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: animate ? `${v}%` : '0%' }} />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setAnimate(true), 200); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">03 — Skills</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mb-3">
            My technical toolkit — continuously growing with every project.
          </p>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {cats.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div className="card h-full space-y-5 group hover:scale-[1.01] transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.grad} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cat.title}</h3>
                    <p className="text-xs text-gray-400">{cat.skills.length} skills</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <SkillRow key={s.n} {...s} animate={animate} color={cat.ring} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
