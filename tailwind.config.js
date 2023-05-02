/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-label": "#283D3B",
        "primary-placeholder": "#A0A3BD",
        "primary-title": "#14142B",
        "primary-line": "#DEDEDE",
        body: "#4E4B66",
        gray: colors.gray,
      },
      boxShadow: {
        "mobile-navbar": "0px 4px 16px 0px #BABABA14",
        "movie-landing-hero": "8px 16px 30px 0px #0000004D",
        "list-movie": "0px 8px 30px 0px #BABABA40",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-auth.svg')",
      },
      screens: {
        md: "768px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#197278",
          secondary: "#EDDDD4",
          accent: "#F5F6F8",
          neutral: "#3d4451",
          info: "#C44536",
          error: "#772E25",
          success: "#283D3B",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
