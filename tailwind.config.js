/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1284px',
      
    },
    extend: {
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
    },
  },
  plugins: [],
}
