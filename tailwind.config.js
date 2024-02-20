/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        1: "#1E1E1E",
        2: "#252529",
        3: "#AFABB6",
      },
      // backgroundImage: {
      //   header: "url('./header.png",
      // },
    },
  },
  plugins: [],
};
