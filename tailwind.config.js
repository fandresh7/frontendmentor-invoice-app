/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'system-ui']
      },
      colors: {
        primary: '#7C5DFA',
        secondary: '#9277FF',
        dark1: '#1E2139',
        dark2: '#252945',
        light1: '#DFE3FA',
        light2: '#888EB0',
        light3: '#7E88C3',
        dark3: '#0C0E16',
        accent: '#EC5757',
        accent2: '#9277FF',
        lightBg: '#F8F8FB',
        darkBg: '#141625',
      },

    },
  },
  plugins: [],
}

