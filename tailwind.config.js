/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans']
      },
      screens: {
        'mi': '370px'
      }
    },
  },
  plugins: [],
}
