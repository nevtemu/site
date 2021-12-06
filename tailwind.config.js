module.exports = {
  // Load all styles
  // purge: [], 
  
  // To only load used styles from Tailwind
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      gridTemplateColumns: {
        equal: 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    })
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
}
