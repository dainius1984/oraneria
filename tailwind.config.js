/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C86B46',
          soft: '#E08D6D',
        },
        slate: {
          green: '#2F4F4F',
        },
        alabaster: {
          DEFAULT: '#FFFAF5',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

