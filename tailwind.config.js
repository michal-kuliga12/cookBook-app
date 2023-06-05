/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      lobster: ["Lobster Two"],
      nunito: ["Nunito Sans"],
    },
    extend: {
      gridTemplateColumns: {
        layout: "256px, 1fr",
      },
    },
  },
  plugins: [],
};
