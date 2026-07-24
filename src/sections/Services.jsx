import ScrollReveal from '../components/ScrollReveal'

const services = [
  { num:'01', icon:'🐘', title:'Laravel Backend Development',  desc:'Robust backend systems with Laravel & PHP. MVC architecture, service layers, middleware, authentication, authorization, and clean business logic.',  tags:['Laravel','PHP','MVC','Middleware'],            color:'#ff6b6b' },
  { num:'02', icon:'🔗', title:'REST API Development',          desc:'Secure, documented RESTful APIs with JWT/Sanctum auth, versioning, error handling, and JSON response formatting ready for any client.',                  tags:['REST API','Sanctum','JWT','JSON'],              color:'#00ff87' },
  { num:'03', icon:'🗄️', title:'Database Design & MySQL',       desc:'Optimized relational schemas, complex queries, migrations, seeders, Eloquent ORM relationships, and efficient data modeling for any scale.',              tags:['MySQL','Eloquent ORM','Migrations','Queries'],  color:'#00d4ff' },
  { num:'04', icon:'🔒', title:'Authentication & Security',     desc:'Secure login systems — registration, email verification, password reset, JWT tokens, Laravel Sanctum, RBAC, and middleware protection.',                   tags:['Sanctum','JWT','RBAC','Middleware'],            color:'#ff6bd6' },
  { num:'05', icon:'🚀', title:'Full-Stack Web Applications',   desc:'End-to-end development — solid Laravel backend with a clean, functional frontend. From database to UI, complete production-ready systems.',                tags:['Laravel','PHP','MySQL','JS','Bootstrap'],       color:'#ffd700' },
  { num:'06', icon:'🤖', title:'AI-Powered Integrations',       desc:'Integrating AI APIs (Groq, OpenAI) into backend systems — NLP-driven DB queries, automated admin actions, and intelligent system automation.',             tags:['Groq API','Llama 3.3','Laravel','Automation'],  color:'#a78bfa' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0d0d]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">02 — Services</p>
          <h2 className="section-title">What I Offer</h2>
          <p className="text-gray-600 font-mono text-sm mb-3">// Full-stack services — strong backend core</p>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 70}>
              <div className="group bg-[#111] rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.15] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* neon top line on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:`linear-gradient(90deg,transparent,${s.color},transparent)`, boxShadow:`0 0 10px ${s.color}` }}/>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-white/[0.06]"
                    style={{ background:`${s.color}18` }}>
                    {s.icon}
                  </div>
                  <span className="font-mono text-3xl font-black text-white/[0.04] select-none">{s.num}</span>
                </div>

                <h3 className="font-black text-white text-sm mb-2 leading-snug group-hover:transition-colors"
                  onMouseEnter={e => e.currentTarget.style.color = s.color}
                  onMouseLeave={e => e.currentTarget.style.color = ''}>
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed flex-1 mb-4 font-mono">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
