/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.06)',
        'card': '0 2px 12px rgba(15, 23, 42, 0.08)',
        'lift': '0 20px 50px -12px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
};