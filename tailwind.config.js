/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#213363',
        'palette-2': '#17594A',
        'palette-3': '#8EAC50',
        'palette-4': '#D3D04F',
      },
    },
  },
  plugins: [],
}

