module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gavel': "url('/assets/img/backgroundcontacts.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
