/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      lobster: ["Lobster Two"],
      nunito: ["Nunito Sans"],
      poetsen: ["Poetsen One"],
    },
    extend: {
      screens: {
        xs: "480px",
      },
      gridTemplateColumns: {
        layout: "256px, 1fr",
      },
      borderRadius: {
        xxl: "5rem",
      },
    },
  },
  plugins: [],
};
