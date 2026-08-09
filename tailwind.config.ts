import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Stitch "Business To Berkah" — clean cyan agency
        brand: {
          DEFAULT: "#0BA5C8",
          dark: "#0889A8",
          soft: "#E6F7FB",
          muted: "#B8E8F2",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#64748B",
          light: "#94A3B8",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          soft: "#F1F5F9",
        },
        // Keep legacy aliases so older classnames don't break mid-migrate
        indigo: {
          DEFAULT: "#0F172A",
          light: "#334155",
        },
        parchment: "#FFFFFF",
        gold: {
          DEFAULT: "#0BA5C8",
          light: "#38BDD8",
        },
        teal: {
          DEFAULT: "#0BA5C8",
          light: "#38BDD8",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(15, 23, 42, 0.08)",
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
