import avatar from '../assets/avatar.jpg'
import TypeWriter from '../components/TypeWriter'

const stats = [
  { value:'6+',   label:'Projects'    },
  { value:'2+',   label:'Exp. Years'  },
  { value:'100%', label:'Dedication'  },
]

const socials = [
  { href:'https://github.com/Mohamed641305/',                            label:'GitHub',
    hover:'hover:border-white/40 hover:text-white hover:bg-white/[0.08]',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
  { href:'https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328',   label:'LinkedIn',
    hover:'hover:border-blue-500/60 hover:text-blue-400 hover:bg-blue-500/[0.07]',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { href:'mailto:emo332990@gmail.com',                                  label:'Email',
    hover:'hover:border-red-500/60 hover:text-red-400 hover:bg-red-500/[0.07]',
    icon:<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { href:'https://wa.me/201008942847',                                  label:'WhatsApp',
    hover:'hover:border-[#00ff87]/60 hover:text-[#00ff87] hover:bg-[#00ff87]/[0.07]',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
]

function GridBg() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage:'linear-gradient(rgba(0,255,135,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,135,0.035) 1px,transparent 1px)',
      backgroundSize:'60px 60px',
    }}/>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-[#0a0a0a]">
      <GridBg />

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-48 -left-48 opacity-[0.07]"
        style={{ background:'radial-gradient(circle, #00ff87, transparent 70%)' }}/>
      <div className="orb w-[350px] h-[350px] -top-20 left-60 opacity-[0.05]"
        style={{ background:'radial-gradient(circle, #6366f1, transparent 70%)' }}/>
      <div className="orb w-[400px] h-[400px] bottom-0 right-0 translate-x-1/3 opacity-[0.05]"
        style={{ background:'radial-gradient(circle, #00d4ff, transparent 70%)' }}/>

      <div className="section-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-7 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded border border-[#00ff87]/30 bg-[#00ff87]/[0.05]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff87] opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff87]"/>
              </span>
              <span className="text-xs font-mono font-bold text-[#00ff87] tracking-widest uppercase">Available for work</span>
            </div>

            {/* Name */}
            <div>
              <p className="font-mono text-[#00ff87]/60 text-sm mb-3 tracking-widest">// Hello, I&apos;m</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-4">
                Mohamed<br/>
                <span className="text-gradient">Eldmerdash</span>
              </h1>
              <div className="text-xl sm:text-2xl font-bold text-gray-400 h-9 font-mono">
                <TypeWriter words={['Full-Stack Developer','Laravel & PHP Expert','REST API Developer','Backend Developer','Database Engineer']}/>
              </div>
            </div>

            {/* Terminal bio */}
            <div className="border-l-2 border-[#00ff87]/40 pl-4 font-mono text-sm text-gray-500 space-y-1">
              <p><span className="text-[#00ff87]">$</span> <span className="text-gray-300">whoami</span></p>
              <p className="text-gray-400 leading-relaxed pl-2">
                Full-Stack Dev — strong Backend focus.<br/>
                Laravel, PHP, MySQL, REST APIs.<br/>
                Building scalable systems end-to-end.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className={`w-9 h-9 rounded flex items-center justify-center bg-white/[0.04] text-gray-500 border border-white/[0.07] transition-all duration-200 hover:scale-110 ${s.hover}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float-slow">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#00ff87]/60"/>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#00ff87]/60"/>

              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/[0.08] relative"
                style={{ boxShadow:'0 0 60px -15px rgba(0,255,135,0.35)' }}>
                <img src={avatar} alt="Mohamed Eldmerdash" className="w-full h-full object-cover"
                  style={{ objectPosition:'50% 15%' }}/>
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.025) 2px,rgba(0,0,0,0.025) 4px)' }}/>
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-black text-sm">Mohamed Eldmerdash</p>
                  <p className="text-[#00ff87] text-xs font-mono">Full-Stack Developer</p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-[#111] rounded-lg px-3 py-2 border border-[#00ff87]/30 flex items-center gap-2"
                style={{ boxShadow:'0 0 20px rgba(0,255,135,0.15)' }}>
                <span className="text-sm">⚡</span>
                <div>
                  <p className="text-xs font-black text-white leading-tight">Full-Stack</p>
                  <p className="text-xs text-[#00ff87]/60 font-mono">Backend Focus</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-[#111] rounded-lg px-3 py-2 border border-[#00ff87]/30 flex items-center gap-2"
                style={{ boxShadow:'0 0 20px rgba(0,255,135,0.15)' }}>
                <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse"/>
                <p className="text-xs font-black text-white">Open to work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap gap-10 items-center border-t border-white/[0.05] pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && <div className="w-px h-10 bg-white/[0.07]"/>}
              <div>
                <p className="text-3xl font-black text-gradient">{s.value}</p>
                <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-soft">
        <span className="text-[10px] font-mono text-[#00ff87]/40 tracking-widest uppercase">scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00ff87]/40 to-transparent"/>
      </div>
    </section>
  )
}
