/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#79CAF9",
        grass: {
          DEFAULT: "#7fAC71",
          100: "#B7E973",
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
        maharlika: ["Maharlika-Regular", "sans-serif"],
        lthin: ["Lexend-Thin", "sans-serif"],
        lextralight: ["Lexend-ExtraLight", "sans-serif"],
        llight: ["Lexend-Light", "sans-serif"],
        lregular: ["Lexend-Regular", "sans-serif"],
        lmedium: ["Lexend-Medium", "sans-serif"],
        lsemibold: ["Lexend-SemiBold", "sans-serif"],
        lbold: ["Lexend-Bold", "sans-serif"],
        lextrabold: ["Lexend-ExtraBold", "sans-serif"],
        lblack: ["Lexend-Black", "sans-serif"],
        pokehollow: ["Pokemon-Hollow", "sans-serif"],
        pokesolid: ["Pokemon-Solid", "sans-serif"],
      },
    },
  },
  plugins: [],
};