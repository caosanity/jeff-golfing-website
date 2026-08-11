import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F3EFE6",
        "cream-green": "#EAF3EA",
        green: {
          DEFAULT: "#2F9E5A",
          dark: "#24824A",
        },
        sage: "#BFE3C7",
        mint: "#BFE3DE",
        ink: "#111111",
        muted: "#6B6B6B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
