/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
  ],
  theme: {
      container: {
          center: true,
          padding: "2rem",
      },
      extend: {
          colors: {
              main: "#BBA664", // Adding your custom gray color
          },
      },
  },
  plugins: [],
};