/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        product: ["product","sans-serif"], 
          
      },
      colors:{

      }
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}

