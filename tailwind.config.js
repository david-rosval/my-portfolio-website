/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#001F3F',
        'palette-2': '#083358',
        'palette-3': '#0D63A5',
        'palette-4': '#FFD717',
      },
    },
  },
  plugins: [],
}

