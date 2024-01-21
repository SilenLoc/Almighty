/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        me: {
          pink: "#ffb4ad",
          darkb: "#36311f",
        },
      },
    },
  },
  plugins: [],
};
