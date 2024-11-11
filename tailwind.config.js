/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'false',
  theme: {
    extend: {
      colors:{
        skylerBlue: '#146ef5',
        skylerBlack: '#0a0b0c',
      }
    },
  },
  plugins: [],
}