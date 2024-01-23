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
        DEFAULT: 'rgb(204, 33, 49)'
      },
      'transparent': 'rgba(0, 0, 0, 0)',
      'border-color': {
        DEFAULT: 'rgb(210, 210, 210)'
      },
    }
  }
}

