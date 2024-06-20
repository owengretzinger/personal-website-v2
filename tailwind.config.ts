const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "rgb(var(--color-black) / <alpha-value>)",
      grey: "rgb(var(--color-grey) / <alpha-value>)",
      orange: "rgb(var(--color-orange) / <alpha-value>)",
      lightGrey: "rgb(var(--color-lightGrey) / <alpha-value>)",
      darkTeal: "rgb(var(--color-darkTeal) / <alpha-value>)",
      lightTeal: "rgb(var(--color-lightTeal) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
    },
    fontFamily: {
      serif: ["var(--font-crimson-pro)"],
      sans: ["var(--font-inter)"],
    },
    extend: {},
  },
  plugins: [],
};
