import ScrollReveal from '../components/ScrollReveal'

const projects = [
  {
    n: '01',
    title: 'E-Commerce Web App',
    desc: 'Full-stack e-commerce platform with product management, shopping cart, orders, and admin dashboard.',
    tags: ['React', 'Laravel', 'MySQL', 'REST API'],
    grad: 'from-indigo-500 to-purple-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/',
  },
  {
    n: '02',
    title: 'Task Management System',
    desc: 'Project & task tracker with user roles, assignments, deadlines, and status management.',
    tags: ['React', 'Laravel', 'MySQL', 'Sanctum'],
    grad: 'from-blue-500 to-cyan-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/',
  },
  {
    n: '03',
    title: 'Blog Platform',
    desc: 'Full-featured blog with categories, tags, comments, user authentication, and admin panel.',
    tags: ['Laravel', 'PHP', 'MySQL', 'HTML5', 'CSS3'],
    grad: 'from-emerald-500 to-teal-600',
    type: 'Full-Stack',
    github: 'https://github.com/Mohamed641305/',
  },
  {
    n: '04',
    title: 'Restaurant Landing Page',
    desc: 'Modern, fully responsive restaurant website with menu, booking form, and smooth animations.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    grad: 'from-orange-500 to-red-500',
    type: 'Frontend',
    github: 'https://github.com/Mohamed641305/',
  },
  {
    n: '05',
    title: 'User Auth API',
    desc: 'Secure RESTful authentication API with registration, login, email verification, and password reset.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JWT'],
    grad: 'from-pink-500 to-rose-600',
    type: 'Backend',
    github: 'https://github.com/Mohamed641305/',
  },
  {
    n: '06',
    title: 'Portfolio Website',
    desc: 'This portfolio — built with React and Tailwind CSS, featuring dark mode and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    grad: 'from-violet-500 to-purple-600',
    type: 'Frontend',
    github: 'https://github.com/Mohamed641305/',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">05 — Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mb-3">
            A selection of projects I&apos;ve built — full-stack apps, APIs, and frontend interfaces.
          </p>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 70}>
              <div className="card group h-full flex flex-col hover:scale-[1.02] transition-all duration-300 overflow-hidden relative pt-2">
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${p.grad}`} />

                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-5xl font-black text-gray-100 dark:text-gray-800/60 leading-none select-none">{p.n}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${p.grad} text-white`}>{p.type}</span>
                </div>

                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>

                <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
