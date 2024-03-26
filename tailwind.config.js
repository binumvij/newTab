/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'poiret-one': ['"Poiret One"', 'sans-serif'],
      'ubuntu-medium': ['Ubuntu', 'sans-serif', 'font-weight: 500', 'font-style: normal'], 
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
}

