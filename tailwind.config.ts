import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        foreground: "var(--text-primary)",
        muted: "var(--text-muted)",
        card: "var(--bg-card)",
        border: "var(--border)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 3px 15px rgba(0, 0, 0, 0.3)",
        accent:
          "0 10px 15px -3px color-mix(in srgb, var(--accent) 35%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--accent) 20%, transparent)",
        "accent-lg":
          "0 20px 25px -5px color-mix(in srgb, var(--accent) 42%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--accent) 25%, transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
