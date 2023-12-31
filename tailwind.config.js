/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pic": "url('/DVGk1RgA.png')",
      },
      colors: {
        background: "#1a1919",
        foreground: "#fff",
        "hover-green": "#61892F",
        "span-blue": "#ffffff",
        "main-orange": "#260d26",
        "off-gray": "#474B4F",
        "main-gray": "#6B6E70",
        border: "#413e3e",
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
