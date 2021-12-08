const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        cyan: colors.cyan,
        orange: colors.orange,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        teal: colors.teal
      },
      zIndex: {
        '-1': -1
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
