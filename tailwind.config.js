/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#568F87",
        secondary: "#FFF5F2",
        accent: "#F5BABB",
        darktext: "#064232",
      },
    },
  },
  plugins: [],
}
