/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1128",
        secondary: "#FD5F00", 
        third: "#191919",
        fourth: "#4C4C4C",
        fifth: "#5d50c6",
        foot: "#232323",
        gray: "#666666"
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        contactBg: "url('./src/assets/contact/bg_1.jpg.webp')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}