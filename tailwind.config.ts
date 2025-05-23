import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "smaller": { "max": "320px" },
      "small": { "max": "599px" },
      // @media screen (max-width: 599px) { @content }
  
      "mm": "600px",
      // @media screen (min-width: 600px) { @content }
  
      "pt": "900px",
      // @media screen (min-width: 900px) { @content }
  
      "dt": "1200px",
      // @media screen (min-width: 1200px) { @content }
  
      "lr": "1800px",
      // @media screen (min-width: 1800px) { @content }
      },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
