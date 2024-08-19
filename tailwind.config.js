/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'public/index.html',
    'src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gradblue: '#2577fa',  // Example blue color
        gradgreen: '#10b981',  // Example green color
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

