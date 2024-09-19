/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",  // This includes files in the 'src' directory
    "./index.html",                     // If you have an index.html in the root
    "./*.{html,js,ts,jsx,tsx}",         // Includes any HTML/JS/TS/JSX/TSX files in the root directory
    "./Documents/FoodDeliveryApp/**/*.{html,js,css}" // Path to your CSS and related files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
