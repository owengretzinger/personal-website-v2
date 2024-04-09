/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        letter: "72rem",
      },
      borderRadius: {
        theme: "20px",
      },
      height: {
        letter: "86.9375rem",
        // "letter-col": "71.625rem",
        // "letter-col-full": "77.9375rem",
      },
      colors: {
        white: "rgb(var(--color-bg) / <alpha-value>)",
        blue: "rgb(var(--color-wave) / <alpha-value>)",
        black: "rgb(var(--color-text) / <alpha-value>)",
        grey: "rgb(var(--color-text-light) / <alpha-value>)",
        orange: "rgb(var(--color-link) / <alpha-value>)",
      },
      fontFamily: {
        noto: ["var(--font-inter)"],
      },
    },
  },
};
