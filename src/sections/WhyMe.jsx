import ScrollReveal from '../components/ScrollReveal'

const reasons = [
  { num:'01', icon:'✨', title:'Clean & Readable Code',     desc:'Well-structured, documented code that is easy to maintain and scale over time.',   color:'#00ff87' },
  { num:'02', icon:'🎯', title:'Attention to Detail',       desc:'Pixel-perfect logic, consistent API design, and smooth UX in every project.',       color:'#ff6bd6' },
  { num:'03', icon:'🚀', title:'Full-Stack Capability',     desc:'From database design to UI — I handle the complete development cycle.',             color:'#ffd700' },
  { num:'04', icon:'🤝', title:'Reliable & Communicative',  desc:'I keep clients updated at every step and deliver on time, every time.',             color:'#00d4ff' },
]

const softSkills = [
  { label:'Problem Solving',    icon:'🧩', level:95 },
  { label:'Teamwork',           icon:'👥', level:90 },
  { label:'Communication',      icon:'💬', level:92 },
  { label:'Time Management',    icon:'⏱️', level:88 },
  { label:'Fast Learner',       icon:'📚', level:96 },
  { label:'Creative Thinking',  icon:'💡', level:89 },
  { label:'Attention to Detail',icon:'🔍', level:94 },
  { label:'Adaptability',       icon:'🌊', level:91 },
]

export default function WhyMe() {
  return (
    <>
      <section id="whyme" className="bg-[#0d0d0d]">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">06 — Why Me</p>
            <h2 className="section-title">Why Work With Me</h2>
            <p className="text-gray-600 font-mono text-sm mb-3">// What sets me apart</p>
            <div className="divider"/>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="group bg-[#111] rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.14] hover:scale-[1.02] transition-all duration-300 flex gap-4">
                  <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center text-xl border border-white/[0.06]"
                    style={{ background:`${r.color}18` }}>
                    {r.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold" style={{ color:r.color }}>{r.num}</span>
                      <h3 className="font-black text-white text-sm">{r.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 font-mono leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Banner */}
          <ScrollReveal delay={350}>
            <div className="rounded-xl p-10 text-center relative overflow-hidden border border-[#00ff87]/20"
              style={{ background:'linear-gradient(135deg,#0d1a0d,#0a1a14)', boxShadow:'0 0 60px -20px rgba(0,255,135,0.3)' }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage:'radial-gradient(circle at 20% 50%,rgba(0,255,135,0.08) 0%,transparent 50%),radial-gradient(circle at 80% 50%,rgba(0,212,255,0.06) 0%,transparent 50%)' }}/>
              <div className="relative z-10">
                <p className="font-mono text-[#00ff87]/60 text-xs tracking-widest uppercase mb-3">// Let&apos;s build something great</p>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Ready to turn your idea<br/>into <span className="text-gradient">reality?</span>
                </h3>
                <p className="text-gray-500 font-mono text-sm mb-8 max-w-md mx-auto">
                  I&apos;m just a message away. Let&apos;s collaborate and ship something amazing.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#contact" className="btn-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    Hire Me Now
                  </a>
                  <a href="https://wa.me/201008942847" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Soft Skills */}
      <section id="softskills" className="bg-[#0a0a0a]">
        <div className="section-wrap">
          <ScrollReveal>
            <p className="section-label">07 — Soft Skills</p>
            <h2 className="section-title">Soft Skills</h2>
            <div className="divider"/>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 50}>
                <div className="group bg-[#111] rounded-xl p-4 border border-white/[0.06] hover:border-[#00ff87]/30 hover:scale-105 transition-all duration-300 text-center cursor-default">
                  <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{s.icon}</span>
                  <p className="font-black text-white text-xs mb-1">{s.label}</p>
                  <p className="text-[#00ff87] text-xs font-mono font-bold">{s.level}%</p>
                  <div className="mt-2 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full rounded-full bg-[#00ff87]"
                      style={{ width:`${s.level}%`, boxShadow:'0 0 6px rgba(0,255,135,0.6)' }}/>
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
