import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        powerblue: {
          dark: "#253166",
          light: "#ffd744",
          white: "#F0F0FA",
          bronze: "#a04708",
          prata:"#808080",
          ouro:"#ffd700",
          diamante:"#004aff",

        },

        primary: {
          DEFAULT: "#e50046",
          foreground: "#000000",
        },
        focus: "#BEF264",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
