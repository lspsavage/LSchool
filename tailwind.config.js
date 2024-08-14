/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // atau 'media' untuk mendeteksi preferensi sistem
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          overflowY: "scroll",
          "scrollbar-width": "none" /* Untuk Firefox */,
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none" /* Untuk Chrome, Safari, dan Edge */,
        },
      });
    },
  ],
};
