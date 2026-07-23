import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    num: '01',
    icon: '🐘',
    title: 'Laravel Backend Development',
    desc: 'Robust, scalable backend systems with Laravel & PHP. MVC architecture, service layers, middleware, authentication, authorization, and clean business logic.',
    tags: ['Laravel', 'PHP', 'MVC', 'Middleware'],
    grad: 'from-red-500 to-orange-500',
  },
  {
    num: '02',
    icon: '🔗',
    title: 'REST API Development',
    desc: 'Secure, well-documented RESTful APIs with proper auth (JWT / Sanctum), versioning, error handling, and response formatting ready for any frontend or mobile app.',
    tags: ['REST API', 'Laravel Sanctum', 'JWT', 'JSON'],
    grad: 'from-emerald-500 to-teal-600',
  },
  {
    num: '03',
    icon: '🗄️',
    title: 'Database Design & MySQL',
    desc: 'Optimized relational schemas, complex queries, migrations, seeders, Eloquent ORM relationships, and efficient data modeling for any scale.',
    tags: ['MySQL', 'Eloquent ORM', 'Migrations', 'Query Builder'],
    grad: 'from-blue-500 to-cyan-600',
  },
  {
    num: '04',
    icon: '🔒',
    title: 'Authentication & Security',
    desc: 'Secure login systems — registration, email verification, password reset, JWT tokens, Laravel Sanctum, role-based access control, and middleware protection.',
    tags: ['Laravel Sanctum', 'JWT', 'RBAC', 'Middleware'],
    grad: 'from-pink-500 to-rose-600',
  },
  {
    num: '05',
    icon: '🚀',
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end development — solid Laravel backend with a clean, functional frontend. From database to UI, I deliver complete production-ready systems.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'CSS3'],
    grad: 'from-violet-500 to-purple-600',
  },
  {
    num: '06',
    icon: '🤖',
    title: 'AI-Powered Integrations',
    desc: 'Integrating AI APIs (Groq, OpenAI) into backend systems — NLP-driven database queries, automated admin actions, and intelligent system automation.',
    tags: ['Groq API', 'Llama 3.3', 'Laravel', 'AI Automation'],
    grad: 'from-indigo-500 to-pink-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50/80 dark:bg-white/[0.01]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">02 — Services</p>
          <h2 className="section-title">What I Offer</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-3 max-w-xl">
            Full-stack services with a strong backend core — clean APIs, secure systems, and solid databases.
          </p>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 70}>
              <div className="group relative card h-full flex flex-col overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:-translate-y-1">
                {/* Top accent line */}
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${s.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Number */}
                <span className="absolute top-4 right-5 font-mono text-4xl font-black text-gray-100/80 dark:text-white/[0.04] select-none leading-none group-hover:text-gray-200/80 dark:group-hover:text-white/[0.06] transition-colors">
                  {s.num}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>

                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => <span key={t} className="tag text-xs">{t}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
