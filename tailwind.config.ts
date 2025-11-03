import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Burgundy Red - Main accent color
        primary: {
          darkest: '#8C0923',
          dark: '#9A0A27',
          main: '#A90B2B',
          light: '#BA0C2F',
        },
        // Navy & Slate background palette
        dark: {
          navy: '#00205B',
          slate1: '#17346A',
          slate2: '#2C4678',
          slate3: '#3F5784',
          bg: '#000814',
        },
        // Legacy colors (kept for backward compatibility)
        norway: {
          red: '#EF2B2D',
          white: '#FFFFFF',
          blue: '#002868',
        },
        accent: {
          DEFAULT: '#A90B2B',
          dark: '#8C0923',
          light: '#BA0C2F',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 107, 0, 0.3)',
        'glow-hover': '0 0 20px rgba(255, 107, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.1' },
        },
      },
      transitionDelay: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
