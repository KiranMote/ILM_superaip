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
          DEFAULT: '#3B3FE4', // Deep royal blue/indigo
          dark: '#2A2DAB',
          light: '#5B5EED',
        },
        accent: {
          DEFAULT: '#FF6B2B', // Vibrant orange
          hover: '#E55815',
        },
        background: {
          DEFAULT: '#F4F6FB', // Soft light gray-white
          dark: '#0A0F2C', // Navy/dark indigo for dark sections
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(59,63,228,0.1)',
        'glow': '0 0 20px rgba(255,107,43,0.4)',
      }
    },
  },
  plugins: [],
}
