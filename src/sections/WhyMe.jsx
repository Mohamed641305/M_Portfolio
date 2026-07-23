import ScrollReveal from '../components/ScrollReveal'

const reasons = [
  { icon: '✨', title: 'Clean & Readable Code', desc: 'I write well-structured, documented code that is easy to maintain and scale.' },
  { icon: '🎯', title: 'Attention to Detail', desc: 'Pixel-perfect UI, consistent spacing, and smooth UX in every project I deliver.' },
  { icon: '🚀', title: 'Full-Stack Capability', desc: 'From database design to React UI — I handle the complete development cycle.' },
  { icon: '🤝', title: 'Reliable & Communicative', desc: 'I keep clients updated at every step and deliver on time, every time.' },
]

const softSkills = [
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Teamwork', icon: '👥' },
  { label: 'Communication', icon: '💬' },
  { label: 'Time Management', icon: '⏱️' },
  { label: 'Fast Learner', icon: '📚' },
  { label: 'Creative Thinking', icon: '💡' },
  { label: 'Attention to Detail', icon: '🔍' },
  { label: 'Adaptability', icon: '🌊' },
]

export default function WhyMe() {
  return (
    <>
      <section id="whyme">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">06 — Why Me</p>
            <h2 className="section-title">Why Work With Me</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="card flex gap-4 group hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{r.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{r.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Banner */}
          <ScrollReveal delay={400}>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 left-8 w-32 h-32 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-4 right-8 w-40 h-40 rounded-full bg-purple-300 blur-3xl" />
              </div>
              <p className="text-indigo-200 font-medium mb-2 relative z-10">Let&apos;s build something great</p>
              <h3 className="text-3xl font-extrabold mb-6 relative z-10">
                Ready to turn your idea into reality?
              </h3>
              <a href="#contact"
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50 transition-all duration-200 hover:scale-105 shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Hire Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Soft Skills */}
      <section id="softskills" className="bg-gray-50 dark:bg-gray-900/30">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">07 — Soft Skills</p>
            <h2 className="section-title">Soft Skills</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="flex flex-wrap gap-4 justify-center">
            {softSkills.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 55}>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
