/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:'12px',
        center:'true'
      },         
      fontFamily:{
        'rubik' : ["Rubik, sans-serif"],
        'poppins' : ["Poppins, sans-serif"],
        'outfit' : ["Outfit, sans-serif"]
      },
     animation: {
    progress: "progressBar 2s linear forwards",
  },
  keyframes: {
    progressBar: {
      "0%": { width: "0" },
      "100%": { width: "100%" },
    },
  },
    },
  },
  plugins: [],
}



