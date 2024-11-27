/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.{vue,ts}',
    './pages/**/*.{vue,ts}',
  ],
  theme: {
    fontFamily: {
      default: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      monospace: ["Fira Code", "monospace"],
    },
    extend: {},
  },
  plugins: [],
}
