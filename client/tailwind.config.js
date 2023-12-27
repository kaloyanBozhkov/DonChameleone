import tailwindConfig from '../tailwind.config.js'

export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      backgroundImage: {
        'linear-gray': 'linear-gradient(143deg, #FFF 38.22%, #606060 156.54%)',
        'linear-light-blue': 'linear-gradient(65deg, #FFF 6.56%, #98E6E8 100.02%)',
        'linear-light-hot': 'linear-gradient(331deg, #FFF 3.95%, #CD81AA 103.73%)',
        'linear-light-purple': 'linear-gradient(273deg, #FFF 0.09%, #C88BEB 99.91%)',
        // animate this one
        // linear-gradient(180deg, #BF8FE5 38.02%, #94F9FF 70.83%);
        'main-1': 'url("-/client/public/assets/img/bg-car-bw.png")',
        'main-2': 'url("-/client/public/assets/img/bg-car-colored.png")',
        'dots-full': 'url("-/client/public/assets/img/bg-dots-full.png")',
        'dots-radial': 'url("-/client/public/assets/img/bg-dots-radial.png")',
        'dots-cool': 'url("-/client/public/assets/img/bg-dots-cool.png")',
        'spiral-effect': 'url("-/client/public/assets/img/bg-spiral-effect.png")',
        'linear-bg-overlay':
          'linear-gradient(270deg, rgba(90, 0, 133, 0.30) 13.37%, rgba(1, 157, 167, 0.30) 41.84%, rgba(1, 157, 167, 0.30) 59.44%, rgba(1, 18, 167, 0.30) 88.98%)',
        'linear-diagonal-purple-green':
          'linear-gradient(149deg, rgba(200, 139, 235, 0.40) 30.01%, rgba(148, 249, 255, 0.40) 65.31%)',
      },
      keyframes: {
        'slide-top': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-opacity': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0)' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'in-top': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'in-bottom': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'in-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'in-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'out-top': {
          '100%': { transform: 'translateY(100%)' },
          '0%': { transform: 'translateY(0)' },
        },
        'out-bottom': {
          '100%': { transform: 'translateY(-100%)' },
          '0%': { transform: 'translateY(0)' },
        },
        'out-right': {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(0)' },
        },
        'out-left': {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        'move-right-24px': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(24px)' },
        },
      },
      animation: {
        'slide-top': 'slide-top 1000ms ease-in-out forwards',
        'sexy-pops': 'scale 10000ms ease-in-out infinite alternate',
      },
    },
  },
}
