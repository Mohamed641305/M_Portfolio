import ScrollReveal from '../components/ScrollReveal'

const projects = [
  { n:'01', title:'Hospital Management System',
    desc:'Full-stack hospital system — patient records, doctor scheduling, appointments, departments, and complete admin dashboard.',
    tags:['Laravel','PHP','MySQL','REST API','Blade'], color:'#00d4ff',
    github:'https://github.com/Mohamed641305/Medical_Project_Pro',
    features:['Patient Records','Doctor Scheduling','Admin Dashboard'] },
  { n:'02', title:'Online Courses Platform',
    desc:'E-learning platform with course creation, lesson management, student enrollment, user roles, and progress tracking.',
    tags:['Laravel','PHP','MySQL','Eloquent ORM','Blade'], color:'#a78bfa',
    github:'https://github.com/Mohamed641305/PJ_2',
    features:['Course Management','Enrollment System','Progress Tracking'] },
  { n:'03', title:'User Management System',
    desc:'Complete user management with RBAC, permissions, authentication, profile management, and full-featured admin panel.',
    tags:['Laravel','PHP','MySQL','Sanctum','REST API'], color:'#00ff87',
    github:'https://github.com/Mohamed641305/PJ_3_New',
    features:['RBAC','Auth System','Admin Panel'] },
  { n:'04', title:'User Management + AI Automation',
    desc:'Elevated with Groq / Llama 3.3 AI — understands natural language, queries the database, and executes admin actions automatically.',
    tags:['Laravel','PHP','MySQL','Groq API','Llama 3.3','AI'], color:'#ff6bd6',
    github:'https://github.com/Mohamed641305/PJ_3_AI',
    features:['AI Chat Assistant','NLP → DB Actions','Auto Automation'], highlight:true },
  { n:'05', title:'Array Algorithms Dashboard',
    desc:'Full-stack dashboard for array-based data structures. Backend handles logic; frontend renders interactive visual results.',
    tags:['Laravel','PHP','MySQL','JavaScript','HTML5','CSS3'], color:'#ffd700',
    github:'https://github.com/Mohamed641305/Final_Array',
    features:['Backend Logic','Interactive UI','Data Visualization'] },
  { n:'06', title:'User Management System v1',
    desc:'Original version — solid Laravel backend with authentication, user CRUD, and role management. Foundation of the AI-powered version.',
    tags:['Laravel','PHP','MySQL','Blade','Bootstrap'], color:'#94a3b8',
    github:'https://github.com/Mohamed641305/PJ_3',
    features:['User CRUD','Role Management','Auth System'] },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">05 — Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-gray-600 font-mono text-sm mb-3">// Real-world full-stack systems</p>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 70}>
              <div className={`group bg-[#111] rounded-xl border border-white/[0.06] overflow-hidden h-full flex flex-col hover:border-white/[0.15] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${p.highlight ? 'gradient-border' : ''}`}>
                {/* top line */}
                <div className="h-[2px] w-full"
                  style={{ background:`linear-gradient(90deg,transparent,${p.color},transparent)`, opacity:0.5,
                    boxShadow:`0 0 8px ${p.color}40` }}/>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-xs font-bold" style={{ color:p.color }}>{p.n} — Full-Stack</span>
                    {p.highlight && (
                      <span className="text-[10px] font-black font-mono px-2 py-0.5 rounded border border-[#ff6bd6]/40 text-[#ff6bd6] flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#ff6bd6] animate-pulse"/>AI
                      </span>
                    )}
                  </div>

                  <h3 className="font-black text-white text-base mb-2 leading-snug"
                    onMouseEnter={e => e.currentTarget.style.color = p.color}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-mono leading-relaxed mb-4 flex-1">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.features.map(f => (
                      <span key={f} className="text-[10px] px-2 py-0.5 rounded font-mono bg-white/[0.03] text-gray-500 border border-white/[0.05]">✓ {f}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <div className="pt-3 border-t border-white/[0.05]">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 text-xs font-mono font-semibold text-gray-500 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <a href="https://github.com/Mohamed641305" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              All Projects on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
