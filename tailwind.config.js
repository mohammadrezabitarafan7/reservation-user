const { heroui } = require("@heroui/react")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // myColor:"#FF4F00",
        // myColor:"#ec3d08",
        myColor:"#fc5830",
        textColor:"#ffffff",
        stepColor:"#fc5830",
        stepBack:"#363636",
        btnColor:'#626262',
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      }
    }
  },
  plugins: [heroui()]
}
