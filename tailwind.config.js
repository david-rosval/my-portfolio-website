/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#001A6E',
        'palette-2': '#074799',
        'palette-3': '#009990',
        'palette-4': '#E1FFBB',
      },
    },
  },
  plugins: [],
}

