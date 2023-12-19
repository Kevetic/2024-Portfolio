/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "hover-green": "#61892F",
        "span-green": "#86C232",
        "bg-gray": "#222629",
        "off-gray": "#474B4F",
        "main-gray": "#6B6E70",
      },
    },
  },
  plugins: [],
};
