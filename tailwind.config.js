const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      strokeWidth: {
        1: "1px",
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#58E6D9", // 240,86,199
        primaryDark: "#B63E96", // 80,230,217
        lighHover: "#fcfcfc",
        darkHover: "#2a004a",
        darkTheme: '#11001F',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      
      animation : {
        'spin-slow': 'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
};
