module.exports = {
  purge: {
    enabled: true,
    content: ["index.html"],
  },
  theme: {
    extend: {
      margin: {
        22: "5.5rem",
        46: "11.5rem",
        "-14": "-3.5rem",
      },
      colors: {
        "custom-gray": "#E5E0DA",
        "custom-black": "#232323",
        "custom-blue": "#1644DA",
        "custom-yellow": "#FFFF00",
      },
      fontFamily: {
        primary: ["Heebo"],
        secondary: ["Space Mono"],
      },
    },
  },
  variants: {},
  plugins: [],
};
