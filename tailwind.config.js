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
        bgLight: "rgba(255, 255, 255, 0.03)",
        textBg: "linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%)",
        buttonBg:
          "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
      },
      backgroundImage: {
        btnGradient: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      boxShadow: {
        contactFormShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {},
  plugins: [],
};
