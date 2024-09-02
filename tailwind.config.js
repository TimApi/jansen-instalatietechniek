/** @type {import('tailwindcss').Config} */
export default {
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
      padding: "20px",
    },
    extend: {
      fontFamily: {
        helvetica: ["helvetica", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(70,97,95)",
        },
        secondary: {
          DEFAULT: "rgb(187,176,2)",
        },
      },
    },
  },
  plugins: [],
};
