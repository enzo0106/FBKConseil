/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};