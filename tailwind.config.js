/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'poiret-one': ['"Poiret One"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
}

