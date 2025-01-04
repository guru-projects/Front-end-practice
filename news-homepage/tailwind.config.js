/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter"
      },
      colors: {
        primary : '#f15d51',
        secondary: '#f2a64c',
        black: '#00001b'
      }
    },
  },
  plugins: [],
}