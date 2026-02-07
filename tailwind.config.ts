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
        primary: "var(--e-global-color-primary)",
        secondary: "var(--e-global-color-secondary)",
        text: "var(--e-global-color-text)",
        accent: "var(--e-global-color-accent)",
        "brand-light-blue": "var(--e-global-color-438b777c)",
        "brand-dark-grey": "var(--e-global-color-38c73efc)",
        "brand-medium-grey": "var(--e-global-color-307bc494)",
        "brand-green": "var(--e-global-color-7574cebe)",
        "brand-blue": "var(--e-global-color-6d227ac4)",
        "brand-green-2": "var(--e-global-color-5ff37000)",
        black: "var(--e-global-color-15dc529a)",
        white: "var(--e-global-color-15d6a64c)",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
