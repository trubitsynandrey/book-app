/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'palewhite': '#EEEEEE',
      'darkblue': '#002538',
      'white': '#FFFFFF',
      'green': '#62A420',
      'modalBackDrop': '#313131',
    },
    borderRadius: {
      DEFAULT: '3px',
    },
    extend: {},
  },
  plugins: [],
}
