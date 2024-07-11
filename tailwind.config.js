/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'login-bg-color': 'rgba(0,0,0, .5)'
      }
    },
  },
  plugins: [],
};
