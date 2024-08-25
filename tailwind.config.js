/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'public/index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      maxHeight: {
        "70v": "70vh",
        "80v": "80vh",
        "85v": "85vh",
      },
      colors: {
        gradblue: '#2577fa',  
        gradgreen: '#10b981',  
      },
      translate: {
        "0.75": "3px",
        "1.25": "5px",
        "2.25": "0.52rem"
      },
      transitionProperty: {
        'w': 'width'
      },
      scrollMargin: {
        '22': "88px"
      },
      scale: {
        "102": "1.02"
      }
    },

  },
  plugins: [],
}

