/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    colors: {
      black: '#0D0D0D',
      white: '#FFFFFF',
      grey:{
        150: '#F6F6F6',
        250: '#D0D2D2',
        350: '#969FA8',
        450: '#787F86',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    container:{
      center: true,
      screens: {
        sm: '1258px',
        md: '1258px',
        lg: '1258px',
        xl: '1258px'
      },
    },
    fontSize: {
      12: ['12px', '16px'],
      14: ['14px', '20px'],
      15: ['15px', '24px'],
      16: ['16px', '24px'],
      18: ['18px', '24px'],
      24: ['24px', '32px'],
    },
    extend: {},
  },
  plugins: [],
}

