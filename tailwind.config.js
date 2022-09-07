/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cool: ["Source Sans Pro", "sans-serif"],
        title: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
