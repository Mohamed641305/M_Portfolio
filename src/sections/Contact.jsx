import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const contactLinks = [
  {
    icon: '📧', label: 'Email', value: 'emo332990@gmail.com',
    href: 'mailto:emo332990@gmail.com', grad: 'from-red-400 to-rose-600',
  },
  {
    icon: '💬', label: 'WhatsApp', value: '+20 100 894 2847',
    href: 'https://wa.me/201008942847', grad: 'from-green-400 to-emerald-600',
  },
  {
    icon: '🔗', label: 'LinkedIn', value: 'Mohamed Eldmerdash',
    href: 'https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328', grad: 'from-blue-500 to-blue-700',
  },
  {
    icon: '🐙', label: 'GitHub', value: 'Mohamed641305',
    href: 'https://github.com/Mohamed641305/', grad: 'from-gray-700 to-gray-900',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact">
      <div className="section-wrap">
        <ScrollReveal>
          <p className="section-label">08 — Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mb-3">
            Have a project in mind? Let&apos;s talk and build something amazing together.
          </p>
          <div className="divider" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact links */}
          <ScrollReveal delay={100}>
            <div className="space-y-4">
              {contactLinks.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="card flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {c.value}
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={200}>
            <form onSubmit={onSubmit} className="card space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor={f.id}>{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} required value={form[f.id]} onChange={onChange} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"/>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={onChange} placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"/>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"/>
              </div>

              {status === 'sent' && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full btn-primary justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {status === 'sending' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
              ME
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Mohamed Eldmerdash. All rights reserved.
            </span>
          </div>
          <span className="text-sm text-gray-400 dark:text-gray-600">Built with ❤ using React + Tailwind CSS</span>
        </div>
      </footer>
    </section>
  )
}
