/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#000000",
        second: "#b0b0b0",
        "second-light": "#d6d6d6",
        third: "#36311f",
      },
    },
  },
  plugins: [],
};
