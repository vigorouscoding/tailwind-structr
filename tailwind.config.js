module.exports = {
  purge: {
    enabled: (process.env.NODE_ENV === 'production'),
    content: ['./src/webapp/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
} 