const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          light: colors.gray[100],
          dark: colors.black
        },
        card:{
          light:colors.white,
          dark:colors.gray[900]
        },
        text:{
          primary:{
            light:colors.black,
            dark:colors.white
          },
          secondary:{
            light:colors.gray[500],
            dark:colors.gray[400]
          }
        }
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
