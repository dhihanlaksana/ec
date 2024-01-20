/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bluegray: {
          400: '#818EA1',
          900: '#282E38'
        },
        surfaceground: '#EFF3F8',
        secondary: '#6C757D'
      }
    },
  },
  plugins: [],
}
