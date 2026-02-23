import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#54595F",
        text: "#707070",
        accent: "#FF0000",
        "brand-light-blue": "#FF0000",
        "brand-dark-grey": "#54595F",
        "brand-medium-grey": "#7A7A7A",
        "brand-green": "#FF0000",
        "brand-blue": "#FF0000",
        "brand-green-2": "#FF0000",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        primary: ["var(--font-quicksand)", "sans-serif"],
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
