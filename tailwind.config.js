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
      },
      gridTemplateRows: {
        mainPage: 'auto auto 1fr auto',
      },
      gridTemplateColumns: {
        map: 'auto 1fr',
      },
      colors: {
        darkBack: '#242424',
        darkMain: '#f5f5f4',
        darkBorder: '#a8a29e',
        darkHover:'#ffffff',
        lightBack: '#f9f9f9',
        lightMain: '#44403c',
        lightHover: '#1c1917',
        lightBorder: '#78716c',

      }
    },
    fill: theme => ({
      lightFill: '#737373',
      darkFill: '#999',
      darkHover:'#ffffff',
      lightHover: '#1c1917',
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    })
  },
  variants: {
    extend: {
      fill: ['hover', 'dark'],
    },
  },
  plugins: [],
}
