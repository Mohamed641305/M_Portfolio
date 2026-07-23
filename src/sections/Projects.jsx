import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const projects = [
  {
    n: '01',
    title: 'Hospital Management System',
    desc: 'Full-stack hospital management system — patient records, doctor scheduling, appointments, departments, and a complete admin dashboard. Backend-heavy with a clean Blade/CSS frontend.',
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Blade', 'CSS3'],
    grad: 'from-blue-500 to-cyan-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/Medical_Project_Pro',
    demo: null,
    features: ['Patient Records', 'Doctor Scheduling', 'Admin Dashboard'],
    highlight: false,
  },
  {
    n: '02',
    title: 'Online Courses Platform',
    desc: 'E-learning platform with course creation, lesson management, student enrollment, user roles, and progress tracking. Fully server-side with clean frontend integration.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Blade'],
    grad: 'from-violet-500 to-purple-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/PJ_2',
    demo: null,
    features: ['Course Management', 'Enrollment System', 'Progress Tracking'],
    highlight: false,
  },
  {
    n: '03',
    title: 'User Management System',
    desc: 'Complete user management platform with role-based access control, permissions, authentication, profile management, and a full-featured admin panel.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Sanctum', 'REST API'],
    grad: 'from-emerald-500 to-teal-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/PJ_3_New',
    demo: null,
    features: ['RBAC', 'Auth System', 'Admin Panel'],
    highlight: false,
  },
  {
    n: '04',
    title: 'User Management + AI Automation',
    desc: 'Same system elevated with an AI assistant (Groq / Llama 3.3) that understands natural language, queries the database, and executes admin actions automatically.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Groq API', 'Llama 3.3', 'AI'],
    grad: 'from-indigo-500 to-pink-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/PJ_3_AI',
    demo: null,
    features: ['AI Chat Assistant', 'NLP → DB Actions', 'Auto Automation'],
    highlight: true,
  },
  {
    n: '05',
    title: 'Array Algorithms Dashboard',
    desc: 'Full-stack dashboard for visualizing and managing array-based data structures and algorithms. Backend handles data logic; frontend renders interactive results.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    grad: 'from-orange-400 to-amber-500',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/Final_Array',
    demo: null,
    features: ['Backend Logic', 'Interactive UI', 'Data Visualization'],
    highlight: false,
  },
  {
    n: '06',
    title: 'User Management System v1',
    desc: 'The original version — solid Laravel backend with authentication, user CRUD, and role management. The foundation that evolved into the AI-powered version.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    grad: 'from-slate-500 to-gray-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/PJ_3',
    demo: null,
    features: ['User CRUD', 'Role Management', 'Auth System'],
    highlight: false,
  },
]

const filters = ['All', 'Full-Stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.type === active)

  return (
    <section id="projects">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">05 — Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mb-3">
            Real-world projects I&apos;ve built — full-stack systems and AI-powered applications.
          </p>
          <div className="divider" />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={50}>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                    : 'bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-gray-600 dark:text-gray-400 hover:border-indigo-400/60 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {f}
                <span className={`ml-1.5 text-xs ${active === f ? 'opacity-70' : 'opacity-40'}`}>
                  ({f === 'All' ? projects.length : projects.filter((p) => p.type === f).length})
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <div className={`card group h-full flex flex-col hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative pt-2 ${
                p.highlight ? 'gradient-border' : ''
              }`}>
                {/* Top gradient line */}
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${p.grad}`} />

                {/* AI badge */}
                {p.highlight && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    AI Powered
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-5xl font-black text-gray-100 dark:text-white/[0.04] leading-none select-none">
                    {p.n}
                  </span>
                  {!p.highlight && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${p.grad} text-white shadow-sm`}>
                      {p.type}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400">
                      ✓ {f}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className={`tag ${t === 'AI' || t === 'Groq API' || t === 'Llama 3.3' ? 'bg-purple-100/80 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-500/20' : ''}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="pt-3 border-t border-gray-200/80 dark:border-white/[0.06]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-white/[0.03] rounded-xl transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    View on GitHub
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Mohamed641305"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              See All Projects on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
