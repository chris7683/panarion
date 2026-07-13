import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#F8F3E6",
          dark:    "#EDE6CF",
          light:   "#FDFAF3",
        },
        ink: "#1A1208",
        byzantine: {
          50:  "#eef2f9",
          100: "#d4dff0",
          200: "#adc2e3",
          300: "#7a9bd0",
          400: "#4e75bb",
          500: "#2e57a3",
          600: "#1B3A6B",
          700: "#163260",
          800: "#102548",
          900: "#0b1a33",
        },
        gold: {
          50:  "#fdf9ee",
          100: "#f8eed0",
          200: "#f0d99d",
          300: "#e6c164",
          400: "#C9A84C",
          500: "#b8923a",
          600: "#9a762e",
          700: "#7a5b23",
          800: "#5e441b",
          900: "#422f12",
        },
      },
      fontFamily: {
        sans:    ["var(--font-garamond)",  "Georgia", "serif"],
        serif:   ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)",  "Georgia", "serif"],
        cinzel:  ["var(--font-cinzel)",    "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"     },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
