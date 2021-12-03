module.exports = {
  // Load all styles
  // purge: [], 
  
  // To only load used styles from Tailwind
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        equal: 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
