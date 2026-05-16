/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:        '#7b2ff7',
        'primary-dark': '#5a1fd8',
        dark:           '#2c1654',
        darker:         '#1a0d33',
      },
    },
  },
  plugins: [],
}
