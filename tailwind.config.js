module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Space Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
