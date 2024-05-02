/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lineColor: '#EEEEEE',
        barColor: '#7C838F',
        hijau: '#20C462'
      }
    },
  },
  plugins: [],
}

