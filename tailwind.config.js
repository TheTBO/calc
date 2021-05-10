module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lcd': '#7a8870',
      },
      fontFamily: {
        'lcd': ['VT323', 'monospace'],
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
