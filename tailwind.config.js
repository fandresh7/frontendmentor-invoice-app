/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'system-ui']
      },
      colors: {
        "theme-primary": "#7C5DFA",
        "theme-primary-accent": "#9277FF",
        "theme-dark": "#1E2139",
        "theme-darker": "#252945",
        "theme-light": "#DEF3FA",
        "theme-slate": "#373B53",
        "theme-grey": "#888EB0",
        "theme-blue": "#7E88C3",
        "theme-black": "#0C0E16",
        "theme-red": "#EC5757",
        "theme-light-red": "#FF9797",
        "theme-background-light": "#F8F8FB",
        "theme-background-dark": "#141625"
      },

    },
  },
  plugins: [],
}
