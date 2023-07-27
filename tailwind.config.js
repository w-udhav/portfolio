/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#0F0F0F",
        "black-fade": "#1E1B1E",
      },
      fontFamily: {
        pop: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
