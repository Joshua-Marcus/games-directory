/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
