/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Kanit', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      'black': {
        DEFAULT: 'rgb(29, 29, 29)'
      },
      'white': {
        DEFAULT: 'rgb(255, 255, 255)',
        muted: 'rgb(153, 153, 153)'
      },
      'red': {
        DEFAULT: 'rgb(227, 0, 0)'
      }
    }
  }
}

