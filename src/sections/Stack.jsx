import ScrollReveal from '../components/ScrollReveal';

const groups = [
  { label:'Backend',  color:'#ff6b6b', items:['Laravel','PHP','REST API','Sanctum','JWT'] },
  { label:'Database', color:'#00d4ff', items:['MySQL','Eloquent ORM','Migrations','Query Builder'] },
  { label:'Frontend', color:'#00ff87', items:['JavaScript','Bootstrap','React','HTML5','CSS3','Tailwind CSS'] },
  { label:'Tools',    color:'#ffd700', items:['Git','GitHub','Postman','Responsive Design'] },
]

export default function Stack() {
  return (
    <section id="stack" className="bg-[#0d0d0d]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">04 — Stack</p>
          <h2 className="section-title">Core Technologies</h2>
          <p className="text-gray-600 font-mono text-sm mb-3">// Tools I use every day</p>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <ScrollReveal key={g.label} delay={i * 80}>
              <div className="bg-[#111] rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background:g.color, boxShadow:`0 0 6px ${g.color}` }}/>
                  <span className="font-black text-xs font-mono uppercase tracking-widest" style={{ color:g.color }}>
                    {g.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(item => (
                    <span key={item}
                      className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-white/[0.04] border border-white/[0.07] text-gray-400 cursor-default transition-all duration-200 hover:scale-105"
                      onMouseEnter={e => { e.target.style.borderColor=`${g.color}50`; e.target.style.color=g.color }}
                      onMouseLeave={e => { e.target.style.borderColor=''; e.target.style.color='' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
