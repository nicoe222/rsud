/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        judul:'#0B4D8C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
          "konsul":"url('../public/assets/konsul.jpg')",
           hijau:"url('../public/assets/hero4.jpg')",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    
  ],
}
