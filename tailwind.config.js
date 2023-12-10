module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#C00",
          850: "#b80202",
          750: "#a60202",
          650: "#910101",
          600: "#f4f4f4",
          550: "#ed4747",
          500: "#fff",
          450: "#630000",
          400: "#d1ecf1",
          350: "#bee5eb",
          250: "#28a745"
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}