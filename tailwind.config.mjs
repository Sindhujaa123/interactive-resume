/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#08090d',
        panel: '#101116',
        line: 'rgba(255,255,255,0.09)',
        muted: '#92939f',
        accent: '#b4a0ff',
        mint: '#b7f5d8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(160,132,255,0.13)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 72% 45%, rgba(117,83,220,.19), transparent 42%), radial-gradient(ellipse at 25% 72%, rgba(58,163,135,.09), transparent 35%)',
      },
    },
  },
  plugins: [],
};
