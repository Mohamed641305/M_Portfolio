import ScrollReveal from '../components/ScrollReveal'

const reasons = [
  {
    num: '01',
    icon: '✨',
    title: 'Clean & Readable Code',
    desc: 'I write well-structured, documented code that is easy to maintain and scale over time.',
    grad: 'from-indigo-500 to-purple-600',
  },
  {
    num: '02',
    icon: '🎯',
    title: 'Attention to Detail',
    desc: 'Pixel-perfect UI, consistent spacing, and smooth UX in every single project I deliver.',
    grad: 'from-pink-500 to-rose-500',
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Full-Stack Capability',
    desc: 'From database design to React UI — I handle the complete development cycle end to end.',
    grad: 'from-orange-400 to-amber-500',
  },
  {
    num: '04',
    icon: '🤝',
    title: 'Reliable & Communicative',
    desc: 'I keep clients updated at every step and deliver on time, every time — no surprises.',
    grad: 'from-emerald-500 to-teal-500',
  },
]

const softSkills = [
  { label: 'Problem Solving', icon: '🧩', level: 95 },
  { label: 'Teamwork',        icon: '👥', level: 90 },
  { label: 'Communication',   icon: '💬', level: 92 },
  { label: 'Time Management', icon: '⏱️', level: 88 },
  { label: 'Fast Learner',    icon: '📚', level: 96 },
  { label: 'Creative Thinking', icon: '💡', level: 89 },
  { label: 'Attention to Detail', icon: '🔍', level: 94 },
  { label: 'Adaptability',    icon: '🌊', level: 91 },
]

export default function WhyMe() {
  return (
    <>
      <section id="whyme">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">06 — Why Me</p>
            <h2 className="section-title">Why Work With Me</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mb-3">
              What sets me apart from the rest.
            </p>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="card flex gap-4 group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {/* BG number */}
                  <span className="absolute top-3 right-4 font-mono text-5xl font-black text-gray-100/80 dark:text-white/[0.03] select-none leading-none">
                    {r.num}
                  </span>
                  <div className={`w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${r.grad} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {r.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Banner */}
          <ScrollReveal delay={350}>
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-10 text-center text-white overflow-hidden animate-gradient" style={{ backgroundSize: '200% 200%' }}>
              {/* Orbs */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
              {/* Dots */}
              <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Available for work
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Ready to turn your idea into reality?
                </h3>
                <p className="text-indigo-200 mb-6 max-w-md mx-auto">
                  Let&apos;s collaborate and build something amazing together. I&apos;m just a message away.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50 transition-all duration-200 hover:scale-105 shadow-xl">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Hire Me Now
                  </a>
                  <a href="https://wa.me/201008942847" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-200 hover:scale-105 border border-white/30">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Soft Skills */}
      <section id="softskills" className="bg-gray-50/80 dark:bg-white/[0.01]">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">07 — Soft Skills</p>
            <h2 className="section-title">Soft Skills</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 50}>
                <div className="card flex flex-col items-center text-center gap-3 hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800 dark:text-gray-200">{s.label}</div>
                    <div className="text-xs text-indigo-500 dark:text-indigo-400 font-bold mt-0.5">{s.level}%</div>
                  </div>
                  <div className="w-full progress-bar">
                    <div className="progress-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
