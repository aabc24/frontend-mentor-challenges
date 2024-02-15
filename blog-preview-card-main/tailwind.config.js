/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['"Figtree"', "sans-serif"],
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      boxShadow: {
        "box-card": "8px 8px 1px 2px hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
