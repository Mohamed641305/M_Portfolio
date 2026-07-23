import avatar from '../assets/avatar.jpg'
import TypeWriter from '../components/TypeWriter'

const techs = ['React', 'Laravel', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* BG orbs */}
      <div className="pointer-events-none fixed w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/8 blur-3xl -top-20 -left-20" />
      <div className="pointer-events-none fixed w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/8 blur-3xl bottom-10 right-0" />

      <div className="section-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left ── */}
          <div className="animate-fade-in">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Available for work</span>
            </div>

            <p className="font-mono text-indigo-500 dark:text-indigo-400 text-lg font-medium mb-3">Hello 👋</p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.05] mb-5">
              Mohamed<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Eldmerdash
              </span>
            </h1>

            <div className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-6 h-9">
              <TypeWriter
                words={[
                  'Full-Stack Developer',
                  'React Developer',
                  'Laravel & PHP Expert',
                  'Backend Developer',
                ]}
              />
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg mb-9">
              Full-Stack Developer specializing in{' '}
              <strong className="text-gray-800 dark:text-gray-200">React</strong> &{' '}
              <strong className="text-gray-800 dark:text-gray-200">Laravel</strong>. I build modern,
              scalable web applications with clean code and great user experience.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Let&apos;s Talk
              </a>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/Mohamed641305/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-eldmerdash-5369a8328" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:emo332990@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <a href="https://wa.me/201008942847" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-200 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right — Avatar ── */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Photo frame */}
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/30 border-4 border-white dark:border-gray-800 relative">
                <img
                  src={avatar}
                  alt="Mohamed Eldmerdash"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%' }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-indigo-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-sm">Mohamed Eldmerdash</div>
                  <div className="text-indigo-200 text-xs">Full-Stack Developer</div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Full-Stack</div>
                  <div className="text-xs text-gray-400">React & Laravel</div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Open to work</div>
                  <div className="text-xs text-gray-400">Hire me now</div>
                </div>
              </div>

              {/* Ring decoration */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-indigo-300/40 dark:border-indigo-500/20 -z-10" />
            </div>
          </div>
        </div>

        {/* Tech pills */}
        <div className="mt-16 flex flex-wrap gap-3 justify-center">
          {techs.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-gray-300 dark:text-gray-700">
        <span className="text-xs font-medium">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
