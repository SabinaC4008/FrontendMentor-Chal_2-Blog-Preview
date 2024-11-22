/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./blog-preview-card-main/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Figtree:['Figtree', "sans-serif"],
      },
      colors: {
        'custom-yellow': '#F4D04E',
      },
      width: {
        '89': '89%',
        '90': '365px',
      },
      boxShadow: {
        'solid-shad':'8px 7px black',
      },
      fontSize:{
        '15':'15px',
      }
    },
  },
  plugins: [],
}

