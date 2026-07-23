import ScrollReveal from '../components/ScrollReveal'

const items = [
  { name: 'React', icon: '⚛️', cls: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300' },
  { name: 'Laravel', icon: '🐘', cls: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300' },
  { name: 'PHP', icon: '🔷', cls: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300' },
  { name: 'MySQL', icon: '🗄️', cls: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
  { name: 'JavaScript', icon: '⚡', cls: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300' },
  { name: 'HTML5', icon: '🌐', cls: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300' },
  { name: 'CSS3', icon: '💅', cls: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' },
  { name: 'Tailwind CSS', icon: '💨', cls: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300' },
  { name: 'REST API', icon: '🔗', cls: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' },
  { name: 'Git & GitHub', icon: '🐙', cls: 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' },
  { name: 'Postman', icon: '📮', cls: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300' },
  { name: 'Eloquent ORM', icon: '🔄', cls: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300' },
]

export default function Stack() {
  return (
    <section id="stack" className="bg-gray-50 dark:bg-gray-900/30">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">04 — Stack</p>
          <h2 className="section-title">Core Technologies</h2>
          <div className="divider" />
        </ScrollReveal>

        <div className="flex flex-wrap gap-3 justify-center">
          {items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 40}>
              <div className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold text-sm cursor-default hover:scale-110 hover:shadow-lg transition-all duration-200 ${item.cls}`}>
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
