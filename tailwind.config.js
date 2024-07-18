/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./Assets/Images/MainPageBackgroundImage.png')",
        'gradient-border': 'linear-gradient(to right, #ED897F 40%, #FF9900 100%)',
      },
      fontSize: {
        lg: ["38px"],
      },
      fontFamily: {
        sans: ["Istok Web", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
