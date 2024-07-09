/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
        gold: '#FFD700',
        goldenrod: '#daa520'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
