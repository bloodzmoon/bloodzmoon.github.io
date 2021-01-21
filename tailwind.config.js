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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
