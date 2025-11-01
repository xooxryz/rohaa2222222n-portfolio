/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: "#0078ff"
      }
    },
  },
  plugins: [],
}
