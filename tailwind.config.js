/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          light: '#e5c583',
          DEFAULT: '#c5a059',
          dark: '#a3803b',
        }
      }
    },
  },
  
  plugins: [],

  
}