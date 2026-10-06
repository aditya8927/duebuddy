/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
        },
        critical: '#dc2626',
        high: '#f59e0b',
        medium: '#3b82f6',
        low: '#10b981',
        pending: '#f59e0b',
        submitted: '#10b981',
        missed: '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'base': '0.5rem',
      },
    },
  },
  plugins: [],
}
