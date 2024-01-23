/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ds-yellow": "#FDE725",
        "ds-green-1": "#7AD151",
        "ds-green-2": "#22A884",
        "ds-blue": "#2A788E",
        "ds-purple": "#414487",
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "cursive"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      listStyleImage: {
        checkmark: 'url("/src/favicon.svg")',
      },
    },
  },
  plugins: [],
};
