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
        gray: colors.gray,
      },
      shadow: {
        "mobile-navbar": "0px 4px 16px 0px #BABABA14",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-auth.svg')",
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
          accent: "#37cdbe",
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
