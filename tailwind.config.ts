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
        primary: {
          DEFAULT: '#FF6B00',
          dark: '#CC5500',
          light: '#FF8533',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          lighter: '#2D2D2D',
        },
        accent: {
          DEFAULT: '#FF4D00',
          dark: '#CC3D00',
          light: '#FF704D',
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
