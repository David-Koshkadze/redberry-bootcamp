/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoBold: ["Nunito Bold", "sans-serif"],
        nunitoExtraBold: ["Nunito Extra Bold", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
