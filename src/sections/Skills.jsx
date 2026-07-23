import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const cats = [
  {
    icon: '⚛️', title: 'Frontend', grad: 'from-indigo-500 to-purple-600',
    skills: [
      { n: 'React', v: 88 },
      { n: 'JavaScript', v: 85 },
      { n: 'HTML5', v: 95 },
      { n: 'CSS3', v: 90 },
    ],
  },
  {
    icon: '🐘', title: 'Backend', grad: 'from-red-500 to-orange-500',
    skills: [
      { n: 'Laravel', v: 87 },
      { n: 'PHP', v: 85 },
      { n: 'REST APIs', v: 88 },
      { n: 'Laravel Sanctum / JWT', v: 80 },
    ],
  },
  {
    icon: '🗄️', title: 'Database', grad: 'from-blue-500 to-cyan-600',
    skills: [
      { n: 'MySQL', v: 85 },
      { n: 'Database Design', v: 82 },
      { n: 'Eloquent ORM', v: 86 },
      { n: 'SQL Queries', v: 84 },
    ],
  },
  {
    icon: '🛠️', title: 'Tools & Others', grad: 'from-emerald-500 to-teal-600',
    skills: [
      { n: 'Git & GitHub', v: 88 },
      { n: 'Postman', v: 85 },
      { n: 'Tailwind CSS', v: 87 },
      { n: 'Responsive Design', v: 92 },
    ],
  },
]

function Bar({ name, value, animate }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setAnimate(true), 250); observer.disconnect() } },
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

        <div className="grid sm:grid-cols-2 gap-5">
          {cats.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 100}>
              <div className="card space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.grad} flex items-center justify-center text-lg shadow-lg`}>{cat.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((s) => <Bar key={s.n} name={s.n} value={s.v} animate={animate} />)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
