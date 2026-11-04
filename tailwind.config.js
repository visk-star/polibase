/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        civic: {
          ink: '#192033',
          muted: '#5f6b7a',
          paper: '#fbfcff',
          blue: '#3566d6',
          red: '#c84d5b',
          purple: '#7b61d1'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 16px 40px rgba(26, 37, 68, 0.08)'
      }
    }
  },
  plugins: []
}
