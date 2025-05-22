export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          grayBtn: '#D9D9D9', 
        },
        primary: {
          blue: '#090EDB',
          purple: '#8D1EA2'
        }
      }
    }
  },
  plugins: [],
}