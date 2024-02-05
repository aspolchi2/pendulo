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
        "hero-bg": "url('./images/heroimage.png')",
        lograr: "url('./images/acomplishpick.png')",
        "gradient-accomplish":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.60) -0.21%, rgba(0, 0, 0, 0.00) 145.63%)",
        offering: "url('./images/offering.png')",
        mundi: "url('./images/mundi.png')",
        asesoriadeimagen: "url('./images/asesoriadeimagen.png')",
        fotis: "url('./images/fotis.png')",
        interioresBg: "url('./images/interioresbg.png')",
        historiaHero: "url('./images/historiaHero.png')",
        historiaSep: "url('./images/historiaSep.png')",
      },
      colors: {
        accent: "#E05FE0",
        primary: "#5959F7",
        primaryWash: '#A3A3FB',
        violet: "#9D00B1",
        gray: "#D9D9DD",
        pink: "#E05FE0",
        yellow: "#F4E962",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
