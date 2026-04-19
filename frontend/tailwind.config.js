/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        surface: '#ffffff',
        primary: '#2563eb', // blue-600
        'primary-hover': '#1d4ed8', // blue-700
        text: '#0f172a', // slate-900
        'text-muted': '#64748b', // slate-500
        border: '#e2e8f0', // slate-200
        accent: '#0284c7', // light blue-600
        success: '#10b981', // emerald-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
