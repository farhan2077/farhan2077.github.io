module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'custom-screen': '850px',
      },
      colors: {
        'custom-gray': '#E5E0DA',
        'custom-black': '#232323',
        'custom-blue': '#1644DA',
        'custom-yellow': '#FFFF00'
      },
      fontFamily: {
        primary: ['Heebo'],
        secondary: ['Space Mono']
      }
    },
  },
  variants: {},
  plugins: [],
}
