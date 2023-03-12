module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      tight: "-0.015em",
    },

    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Space Mono"],
      },
      borderWidth: {
        3: "3px",
      },
      transitionProperty: ["hover"],
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
