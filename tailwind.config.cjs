/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,jsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            Ysabeau: ['Ysabeau', 'sans-serif'],
            Slabo: ['Slabo\\ 27px', 'serif'],
            Montserrat: ['Montserrat', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
