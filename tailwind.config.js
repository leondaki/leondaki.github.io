/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'public/index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      maxHeight: {
        "90v": "90vh",
      },
      colors: {
        gradblue: '#2577fa',  
        gradgreen: '#10b981',  
      },
      translate: {
        "2.25": "0.52rem"
      },
      transitionProperty: {
        'w': 'width'
      },
    },
  },
  plugins: [],
}

