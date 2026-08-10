import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // PRD brand palette — derived from logo
        brand: {
          DEFAULT: "#13A6E8",     // Cyan Blue — CTA, accents
          dark: "#0B7FB8",
          light: "#38BDD8",
          soft: "#E8F6FE",
          muted: "#B8E4F5",
        },
        teal: {
          DEFAULT: "#16E0B3",     // Emerald/Teal — gradient start
          dark: "#0FB890",
          light: "#5BEDD0",
          soft: "#E0FBF5",
        },
        ink: {
          DEFAULT: "#16142E",     // Deep Navy — body text, dark sections
          muted: "#4A4769",
          light: "#8B88A3",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8F9FC",
          soft: "#F1F2F8",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 20px 60px -15px rgba(22, 20, 46, 0.12)",
        soft: "0 4px 24px -4px rgba(22, 20, 46, 0.06)",
        glow: "0 0 40px -8px rgba(19, 166, 232, 0.35)",
        "glow-teal": "0 0 40px -8px rgba(22, 224, 179, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #16E0B3 0%, #13A6E8 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(22,224,179,0.08) 0%, rgba(19,166,232,0.08) 100%)',
        'gradient-navy': 'linear-gradient(135deg, #16142E 0%, #1E1B3A 100%)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
