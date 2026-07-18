/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"], // Adjust this to match your project files
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],        /* Overrides default sans-serif with Inter */
        tech: ['Space Grotesk', 'sans-serif'], /* Adds a custom class 'font-tech' */
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}