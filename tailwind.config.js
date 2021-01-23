const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.{tsx,module.css}',
    './components/**/*.{tsx,module.css}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        'widest-x': '.6rem',
      },
      colors: {
        gray: colors.trueGray,
      },
      height: {
        18: '4.5rem',
        'screen-18': 'calc(100vh - 4.5rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
