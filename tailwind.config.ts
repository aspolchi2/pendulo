import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('./images/heroimage.png')",
        lograr: "url('./images/lograr.png')",
        "gradient-accomplish":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.60) -0.21%, rgba(0, 0, 0, 0.00) 145.63%)",
          offering: "url('./images/offering.png')",
      },
      colors: {
        accent: "#E05FE0",
        primary: "#5959F7",
        violet: "#9D00B1",
        gray: "#D9D9DD",
        pink: "#E05FE0"
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
