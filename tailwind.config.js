/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        helvetica: ['"Helvetica Neue"', "sans-serif"],
      },
      colors: {
        customPurple: "#7248ff",
      },
    },
  },
  plugins: [],
};
