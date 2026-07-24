import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const FORMSPREE_URL = 'https://formspree.io/f/xykrnzdj'

const contactLinks = [
  { label:'Email',    value:'emo332990@gmail.com',              href:'mailto:emo332990@gmail.com',                                      color:'#ff6b6b',
    icon:<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> },
  { label:'WhatsApp', value:'+20 100 894 2847',                  href:'https://wa.me/201008942847',                                      color:'#00ff87',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { label:'LinkedIn', value:'Mohamed Eldmerdash',                href:'https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328',         color:'#00d4ff',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label:'GitHub',   value:'Mohamed641305',                     href:'https://github.com/Mohamed641305/',                               color:'#a78bfa',
    icon:<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
]

export default function Contact() {
  const [form,   setForm]   = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm(p => ({ ...p, [e.target.name]:e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name:'', email:'', subject:'', message:'' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="bg-[#0d0d0d]">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">08 — Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 font-mono text-sm mb-3">// Have a project? Let&apos;s talk</p>
          <div className="divider"/>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <ScrollReveal delay={100}>
            <div className="space-y-3">
              <div className="bg-[#111] rounded-xl p-5 border border-[#00ff87]/20 mb-6"
                style={{ boxShadow:'0 0 30px -10px rgba(0,255,135,0.15)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded bg-[#00ff87] flex items-center justify-center font-black text-[#0a0a0a] text-xs">ME</div>
                  <div>
                    <p className="font-black text-white text-sm">Mohamed Eldmerdash</p>
                    <p className="text-[10px] text-gray-500 font-mono">Full-Stack Developer</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-[#00ff87]/10 border border-[#00ff87]/30 px-2.5 py-1 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse"/>
                    <span className="text-[10px] font-black text-[#00ff87] font-mono">Available</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-mono leading-relaxed">
                  // I respond within 24 hours.<br/>
                  // Reach out via any platform below.
                </p>
              </div>

              {contactLinks.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#111] rounded-xl p-4 border border-white/[0.06] hover:border-white/[0.15] hover:scale-[1.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/[0.06] flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background:`${c.color}18`, color:c.color }}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">{c.label}</p>
                    <p className="font-bold text-white text-sm truncate"
                      onMouseEnter={e => e.currentTarget.style.color = c.color}
                      onMouseLeave={e => e.currentTarget.style.color = ''}>
                      {c.value}
                    </p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-gray-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={200}>
            <form onSubmit={onSubmit} className="bg-[#111] rounded-xl p-6 border border-white/[0.06] space-y-4">
              <p className="font-black text-white text-base mb-2">Send a Message</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[{id:'name',label:'Name',type:'text',placeholder:'John Doe'},
                  {id:'email',label:'Email',type:'email',placeholder:'john@example.com'}].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[10px] font-mono font-bold text-gray-600 uppercase tracking-wider mb-1.5">{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} required value={form[f.id]} onChange={onChange} placeholder={f.placeholder} className="input-field"/>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-mono font-bold text-gray-600 uppercase tracking-wider mb-1.5">Subject</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={onChange} placeholder="Project Inquiry" className="input-field"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-bold text-gray-600 uppercase tracking-wider mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="// Tell me about your project..." className="input-field resize-none"/>
              </div>

              {status === 'sent' && (
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87] text-xs font-mono">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  // Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  // Something went wrong. Try again or email directly.
                </div>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full btn-primary justify-center py-3.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none">
                {status === 'sending'
                  ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  : <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>Send Message</>
                }
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <footer className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#00ff87] flex items-center justify-center font-black text-[#0a0a0a] text-[10px]">ME</div>
            <span className="text-xs text-gray-600 font-mono">© {new Date().getFullYear()} Mohamed Eldmerdash</span>
          </div>
          <span className="text-xs text-gray-700 font-mono">// Built with React + Tailwind CSS</span>
        </div>
      </footer>
    </section>
  )
}
