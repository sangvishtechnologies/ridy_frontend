const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  prefix: '',
  content: [
    'apps/admin-panel/**/*.{html,ts,css}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange,
        neutral: colors.gray,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')],
};
