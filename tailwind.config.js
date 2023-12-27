import plugin from 'tailwindcss/plugin.js'

export default {
  content: ['./src/**/*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        don: 'Bada, "Arial Black", Arial',
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
      boxShadow: {
        dope: '4px 4px 40px 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    // @ts-ignore
    function ({ addUtilities }) {
      const utilities = {}

      for (let px = 1; px < 30; px++) {
        Object.defineProperty(utilities, `.stroked-${px}px`, {
          value: {
            textShadow: `-${px}px -${px}px 0 #000, ${px}px -${px}px 0 #000, -${px}px ${px}px 0 #000, ${px}px ${px}px 0 #000`,
          },
          writable: true,
          enumerable: true,
          configurable: true,
        })
      }

      for (let px = 1; px < 30; px++) {
        Object.defineProperty(utilities, `.stroked-white-${px}px`, {
          value: {
            textShadow: `-${px}px -${px}px 0 #FFF, ${px}px -${px}px 0 #FFF, -${px}px ${px}px 0 #FFF, ${px}px ${px}px 0 #FFF`,
          },
          writable: true,
          enumerable: true,
          configurable: true,
        })
      }

      // eslint-disable-next-line
      addUtilities(utilities, ['responsive', 'hover'])
    },
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => ({
            'animation-delay': value,
          }),
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
  ],
}
