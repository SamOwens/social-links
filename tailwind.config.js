/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-grey': {
          700: '#141414',
          800: '#1F1F1F',
          900: '#333333',
        },
        'green-1': '#C4F82A',
      },
      width: {
        'card-lg': '24rem',
        'card-md': '28.5rem',
        'card-sm': '20.4375rem',
        avatar: '5.5rem',
      },
      height: {
        avatar: '5.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
