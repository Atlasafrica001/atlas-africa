import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'atlas-navy': '#0A2E5C',
        'atlas-gold': '#D4AF37',
        'atlas-cream': '#F5F1E8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        verticalCenterSlide: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-528px)" },
          "40%": { transform: "translateY(-1056px)" },
          "60%": { transform: "translateY(-1584px)" },
          "80%": { transform: "translateY(-2112px)" },
          "100%": { transform: "translateY(-2640px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite linear",
        "vertical-center-slide": "verticalCenterSlide 30s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
