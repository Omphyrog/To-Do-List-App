/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}", "./src/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "1fr 3fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
