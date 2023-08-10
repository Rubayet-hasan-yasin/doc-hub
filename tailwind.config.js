/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/assets/banner-bg.png')",
        'work-top-left': "url('/src/assets/work/doctor-shape-img1.png')",
        'work-bottom-right': "url('/src/assets/work/doctor-shape-img2.png')",
       
        
      }
    },
  },
  plugins: [],
}

