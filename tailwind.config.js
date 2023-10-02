/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
});

