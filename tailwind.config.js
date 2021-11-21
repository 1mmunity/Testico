const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
        emerald: colors.emerald,
        coolgray: colors.coolGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
