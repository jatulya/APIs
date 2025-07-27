// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#c8b6ff',
        'secondary': '#ffd6ff',
        'ash': '#eae4e9',
        'black': '#000000',
        'white': '#ffffff',

        // Color palette with shades
        'pastel-blue': {
          100: '#c0fdff',
          200: '#c8e7ff',
          300: '#d0d1ff',
          400: '#bbd0ff',
          500: '#9381ff'
        },
        'pastel-red': {
          100: '#ffc2d1',
          200: '#ffb3c6',
          300: '#ff8fab',
          400: '#fb6f92'
        },
        'pastel-violet': {
          100: '#f3c4fb',
          200: '#ecbcfd',
          300: '#e5b3fe',
          400: '#e2afff',
          500: '#deaaff'
        }
      }
    }
  },
  plugins: [],
}
