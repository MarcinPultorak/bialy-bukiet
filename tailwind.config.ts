import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      yellow: colors.yellow,
      white: colors.white,
      transparent: colors.transparent,
      red: colors.red,
      slate: colors.slate,
      black: colors.black,
      emerald: colors.emerald,
      beige: {
        DEFAULT: "#F8F3EF",
      },
      beige2: {
        DEFAULT: "#ECE5D3",
      },
      beige3: {
        DEFAULT: "#EADBD4",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-crimsonPro)"],
        mono: ["var(--font-dynalight)"],
        serif: ["var(--font-playfair)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
