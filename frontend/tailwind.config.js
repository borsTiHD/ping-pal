/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'], // '[data-mode="dark"]'],
  safelist: ['dark'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  plugins: [require('tailwindcss-primeui')],
}
