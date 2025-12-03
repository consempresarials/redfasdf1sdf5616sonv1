/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
      },
      colors: {
        brand: {
          primary: '#CC5500', // Burnt Orange (Action)
          secondary: '#4A0404', // Burgundy (Deep, Mature)
          accent: '#C5A059', // Aged Gold (Premium)
          light: '#FAF5E4', // Cream/Paper (Nostalgia Background)
          surface: '#FFFDF9', // Warm White
          green: '#10B981',
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(74, 4, 4, 0.15)',
        'gold': '0 4px 14px 0 rgba(197, 160, 89, 0.3)',
      }
    }
  },
  plugins: [],
}
