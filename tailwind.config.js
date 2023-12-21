/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pic": "url('/DVGk1RgA.png')",
      },
      colors: {
        "hover-green": "#61892F",
        "span-blue": "#6699CC",
        "main-orange": "#CC6633",
        "off-gray": "#474B4F",
        "main-gray": "#6B6E70",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
