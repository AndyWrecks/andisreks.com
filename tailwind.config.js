const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/index.html",
    "./public/404.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xl": "2160px",
      paper: "8.5in",
      print: {
        raw: "print",
      },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#345054",
        secondary: "#7D8BA5",
        background: "#F7FAF9",
      },
      fontFamily: {
        serif: [
          "Bitter",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "7xl": "5rem",
      },
      scale: {
        120: "1.2",
        140: "1.4",
        160: "1.6",
      },
    },
  },
  variants: ["responsive", "hover", "focus", "active", "visited"],
  plugins: [],
};
