/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#79C9fA",
        grass: {
          DEFAULT: "#7fAC71",
          100: "#A4E75A",
        },
        pokered: "#F42C1C",
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#58585A",
        },
      },
      fontFamily: {
        pokemon: ["pokemon", "sans-serif"]
      },
    },
  },
  plugins: [],
};