module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
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
