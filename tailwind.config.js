module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ['"Plus Jakarta Sans"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("flowbite/plugin"),
  ],
};
