const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  important: true,
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: '#3B82F6',
        'primary-dark': '#2563EB',
      },
    },
  },
  plugins: [],
}
