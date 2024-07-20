/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./Assets/Images/MainPageBackgroundImage.png')",
        "orange-gradient":
          "linear-gradient(to right, #FFB682F5, #F8A27AF5, #F28C83F5)",
        "blue-gradient": "linear-gradient(to right, #BBDAFFF5, #FF993CF5)",
        "brown-gradient":
          "linear-gradient(to right, #826D5D, #EF7221, #FC4D4C)",
        "nav-bar-gradient": "linear-gradient(to right, #c78d3f, #b85572)",
      },
      colors: {
        "primary-gray": "#E8E8E8",
      },
      fontSize: {
        lg: ["38px"],
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
