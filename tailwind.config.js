/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./blog-preview-card-main/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Figtree:['Figtree', "sans-serif"],
        FigtreeExtraBold: ['FigtreeExtraBold', "sans-serif"],
      },
      colors: {
        'custom-yellow': '#F4D04E',
      },
      width: {
        '89': '89%',
        '90': '365px',
        '82': '82px',
        '129px': '129px',
      },
      height:{
        '522': '522px',
        '29':'29px',
      },
      boxShadow: {
        'solid-shad':'8px 7px black',
      },
      fontSize:{
        '15':'15px',
      }, 
      borderRadius: {
        '10': '10px',
      }
    },
  },
  plugins: [],
}

