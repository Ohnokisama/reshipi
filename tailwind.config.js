/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'accent': '#a8ca22',
        'main': '#2d2d2d',
        'mainLight': '#141414'
      }
    },
  },
  plugins: [],
}

