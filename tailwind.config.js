/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'planusBg': '#45bb70',
        'planusText': '#406173',
      }
    },
  },
  plugins: [],
}