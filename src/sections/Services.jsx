import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    icon: '⚛️',
    title: 'React Frontend Development',
    desc: 'Modern, fast, and responsive SPAs built with React. Clean components, smooth UX, and pixel-perfect design.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    grad: 'from-indigo-500 to-purple-600',
  },
  {
    icon: '🐘',
    title: 'Laravel Backend Development',
    desc: 'Robust backend systems with Laravel & PHP. MVC architecture, authentication, authorization, and clean APIs.',
    tags: ['Laravel', 'PHP', 'REST API', 'MySQL'],
    grad: 'from-red-500 to-orange-500',
  },
  {
    icon: '🗄️',
    title: 'Database Design & MySQL',
    desc: 'Optimized relational database schemas, complex queries, migrations, and efficient data modeling.',
    tags: ['MySQL', 'Database Design', 'Migrations'],
    grad: 'from-blue-500 to-cyan-600',
  },
  {
    icon: '🔗',
    title: 'REST API Development',
    desc: 'Secure, scalable RESTful APIs with proper authentication (JWT / Sanctum), documentation, and error handling.',
    tags: ['REST API', 'Laravel Sanctum', 'JWT', 'JSON'],
    grad: 'from-emerald-500 to-teal-600',
  },
  {
    icon: '🔒',
    title: 'Authentication & Security',
    desc: 'Secure login systems with Laravel Sanctum, JWT tokens, role-based access control, and middleware protection.',
    tags: ['Laravel Sanctum', 'JWT', 'RBAC', 'Middleware'],
    grad: 'from-pink-500 to-rose-600',
  },
  {
    icon: '🚀',
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end development — from database to UI. React + Laravel combo for complete, production-ready apps.',
    tags: ['React', 'Laravel', 'MySQL', 'Full-Stack'],
    grad: 'from-violet-500 to-purple-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900/30">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">02 — Services</p>
          <h2 className="section-title">My Services</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-3">What I can build for you</p>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 70}>
              <div className="card h-full flex flex-col hover:scale-[1.02] transition-transform duration-300 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
