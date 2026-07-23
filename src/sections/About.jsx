import { useEffect, useRef, useState } from 'react'
import avatar from '../assets/avatar.jpg'
import ScrollReveal from '../components/ScrollReveal'

const cards = [
  { icon: '🚀', value: 'Full-Stack',    sub: 'End-to-End Developer',    grad: 'from-indigo-500 to-purple-600' },
  { icon: '🐘', value: 'Backend',       sub: 'Laravel & PHP Expert',    grad: 'from-red-500 to-orange-500'   },
  { icon: '🗄️', value: 'Database',      sub: 'MySQL & Eloquent ORM',    grad: 'from-blue-500 to-cyan-500'    },
  { icon: '🤝', value: 'Open to Work',  sub: 'Freelance & Full-time',   grad: 'from-emerald-500 to-teal-500' },
]

const counters = [
  { target: 10,  suffix: '+', label: 'Projects' },
  { target: 2,   suffix: '+', label: 'Years Exp.' },
  { target: 100, suffix: '%', label: 'Commitment' },
  { target: 5,   suffix: '+', label: 'Technologies' },
]

function Counter({ target, suffix, label, animate }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate) return
    const duration = 1200
    const step     = target / (duration / 16)
    let current    = 0
    const interval = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.floor(current))
      if (current >= target) clearInterval(interval)
    }, 16)
    return () => clearInterval(interval)
  }, [animate, target])

  return (
    <div className="text-center">
      <div className="text-2xl font-black text-gradient leading-none">
        {count}{suffix}
      </div>
      <div className="text-xs text-gray-400 mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function About() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">01 — About</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">

          {/* ── Photo ── */}
          <ScrollReveal delay={100} className="w-full lg:w-72 flex-shrink-0">
            <div className="relative group">
              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-gray-200/80 dark:border-white/[0.08] aspect-[3/4]">
                <img
                  src={avatar}
                  alt="Mohamed Eldmerdash"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: '50% 10%' }}
                />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-950/90 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="text-white font-bold text-base">Mohamed Eldmerdash</div>
                  <div className="text-indigo-300 text-sm">Full-Stack Developer</div>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Open to work
                </div>
              </div>

              {/* Counters below photo */}
              <div className="mt-4 grid grid-cols-4 gap-2 card p-4">
                {counters.map((c) => (
                  <Counter key={c.label} {...c} animate={animate} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Text + Cards ── */}
          <div className="flex-1 flex flex-col gap-8">
            <ScrollReveal delay={150}>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  Hi, I&apos;m{' '}
                  <strong className="text-gray-900 dark:text-white">Mohamed Eldmerdash</strong>, a
                  passionate{' '}
                  <span className="text-gradient font-bold">Full-Stack Developer</span>{' '}
                  with a strong focus on Backend development and solid experience building real-world systems.
                </p>
                <p>
                  My core strength is{' '}
                  <strong className="text-gray-900 dark:text-white">Laravel & PHP</strong> — designing
                  scalable APIs, complex{' '}
                  <strong className="text-gray-900 dark:text-white">MySQL</strong> schemas, and secure
                  auth systems with{' '}
                  <strong className="text-gray-900 dark:text-white">Sanctum & JWT</strong>. I handle
                  the full stack end-to-end, from database to a clean, functional UI.
                </p>
                <p>
                  I care about writing{' '}
                  <strong className="text-gray-900 dark:text-white">clean, maintainable code</strong>{' '}
                  and delivering complete, production-ready applications.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://github.com/Mohamed641305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-5 py-2.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <ScrollReveal key={c.value} delay={i * 80 + 200}>
                  <div className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${c.grad} opacity-10 rounded-bl-3xl group-hover:opacity-20 transition-opacity`} />
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-xl mb-3 shadow-lg group-hover:scale-110 transition-transform`}>{c.icon}</div>
                    <div className="font-bold text-base text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{c.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{c.sub}</div>
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
