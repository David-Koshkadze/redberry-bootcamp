/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoItalic: ["Nunito Italic", "sans-serif"],
        nunitoBold: ["Nunito Bold", "sans-serif"],
        nunitoExtraBold: ["Nunito Extra Bold", "sans-serif"],
        nunitoExtraBoldItalic: ["Nunito Extra Bold Italic", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        openSansSemiBold: ["Open Sans Semi Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}
