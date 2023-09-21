/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["clash", "Helvetica", "Arial", "sans-serif"],
        mons: ["Montserrat", "sans-serif"],
        unica: ["Unica One", "cursive"],
      },
      colors: {
        primaryColor: "#d434fe",
        bgMain: "#150E28",
        borderColor: "rgba(255, 255, 255, 0.18)",
        buttonBg:
          "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
      },
      backgroundImage: {
        btnGradient: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
