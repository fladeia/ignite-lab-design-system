/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    fontSize: {
      sx: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'gray-100': '#E1E1E6',
      'gray-300': '#C4C4CC',
      'gray-400': '#7C7C8A',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'cyan-300': '#B3E5F7',
      'cyan-500': '#81D8F7',
    },
    extend: {},
  },
  plugins: [],
}
