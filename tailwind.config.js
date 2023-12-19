/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/client/**/*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        don: "Bada, 'Arial Black', Arial",
      },
      colors: {
        blue: {
          DEFAULT: '#6DBBF2',
          200: '#94F9FF',
          400: '#6DBBF2',
        },
        yellow: {
          DEFAULT: '#F9DE51',
          400: '#F9DE51',
          600: '#F2BE42',
        },
        green: {
          DEFAULT: '#9DDF61',
          300: '#51F99E',
          400: '#9DDF61',
        },
        pink: {
          DEFAULT: '#F951B6',
          400: '#F951B6',
        },
        purple: {
          DEFAULT: '#BF8FE5',
          300: '#C88BEB',
          400: '#BF8FE5',
        },
        hot: {
          DEFAULT: '#FF8159',
          200: '#FFB29A',
          400: '#FF8159',
          500: '#F37474',
          600: '#DF7A7A',
          700: '#F95151',
          900: '#F83838',
        },
      },
      backgroundImage: {
        'linear-gray': 'linear-gradient(143deg, #FFF 38.22%, #606060 156.54%)',
        'linear-light-blue': 'linear-gradient(65deg, #FFF 6.56%, #98E6E8 100.02%)',
        'linear-light-hot': 'linear-gradient(331deg, #FFF 3.95%, #CD81AA 103.73%)',
        'linear-light-purple': 'linear-gradient(273deg, #FFF 0.09%, #C88BEB 99.91%)',
        // animate this one
        // linear-gradient(180deg, #BF8FE5 38.02%, #94F9FF 70.83%);
        'main-1': 'url("/public/assets/img/bg-car-visual.png")',
        'linear-bg-overlay':
          'linear-gradient(270deg, rgba(90, 0, 133, 0.30) 13.37%, rgba(1, 157, 167, 0.30) 41.84%, rgba(1, 157, 167, 0.30) 59.44%, rgba(1, 18, 167, 0.30) 88.98%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {}

      for (let px = 1; px < 30; px++) {
        utilities[`.stroked-${px}px`] = {
          textShadow: `-${px}px -${px}px 0 #000, ${px}px -${px}px 0 #000, -${px}px ${px}px 0 #000, ${px}px ${px}px 0 #000`,
        }
      }

      addUtilities(utilities, ['responsive', 'hover'])
    },
  ],
}
