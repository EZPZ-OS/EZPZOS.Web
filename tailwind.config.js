/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./Assets/Images/MainPageBackgroundImage.png')",
      },
      fontSize: {
        lg: ["38px"],
      },
      fontFamily: {
        sans: ["Istok Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
