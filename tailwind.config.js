/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#1a545d',
        'palette-2': '#4e9a8d',
        'palette-3': '#153548',
        'palette-4': '#9ae8b7',
        'palette-5': '#605056',
        'palette-6': '#817063',
      },
    },
  },
  plugins: [],
}

