/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fd: {
          ground: '#080809',
          panel: '#0c0c0e',
          gold: '#ba75ff',
          'gold-dim': '#5a3a7a',
          'gold-hover': '#c994ff',
          ink: '#080809',
          cream: '#e8dcc4',
          muted: '#9a8f78',
          success: '#6db86d',
          error: '#c41e3a',
          quiet: '#16121f',
        },
        primary: {
          50: '#f6edff',
          100: '#ead6ff',
          200: '#d4adff',
          300: '#c994ff',
          400: '#c994ff',
          500: '#ba75ff',
          600: '#9b5ad9',
          700: '#5a3a7a',
          800: '#3d2854',
          900: '#16121f',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#0c0c0e',
          900: '#080809',
          950: '#080809',
        },
      },
      fontFamily: {
        mono: [
          'Cascadia Mono',
          'Consolas',
          'IBM Plex Mono',
          'ui-monospace',
          'monospace',
        ],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
}
