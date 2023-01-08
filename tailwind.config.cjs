const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        maison:['Maison Neue',...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
     
  ],
}