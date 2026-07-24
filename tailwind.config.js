/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans','Inter','system-ui','sans-serif'],
        mono: ['Fira Code','ui-monospace','monospace'],
      },
      colors: {
        neon: '#00ff87',
        'neon-blue': '#00d4ff',
      },
      animation: {
        'blink':       'blink 1s step-end infinite',
        'fade-in':     'fadeIn 0.8s ease-out forwards',
        'float-slow':  'floatSlow 6s ease-in-out infinite',
        'spin-slow':   'spinSlow 10s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'neon-pulse':  'neonPulse 2s ease-in-out infinite',
        'marquee':     'marquee 30s linear infinite',
        'float':       'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink:      {'0%,100%':{opacity:'1'},'50%':{opacity:'0'}},
        fadeIn:     {from:{opacity:'0',transform:'translateY(24px)'},to:{opacity:'1',transform:'translateY(0)'}},
        floatSlow:  {'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-14px)'}},
        spinSlow:   {to:{transform:'rotate(360deg)'}},
        bounceSoft: {'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-6px)'}},
        neonPulse:  {'0%,100%':{boxShadow:'0 0 20px rgba(0,255,135,0.3)'},'50%':{boxShadow:'0 0 40px rgba(0,255,135,0.6)'}},
        marquee:    {from:{transform:'translateX(0)'},to:{transform:'translateX(-50%)'}},
        float:      {'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'}},
      },
    },
  },
  plugins: [],
}
