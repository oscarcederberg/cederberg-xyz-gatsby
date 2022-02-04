module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Arial','Helvetica','sans-serif'],
      'lyrics': ['"Times New Roman"','Times','serif']
    },
    extend: {
      keyframes: {
        scroll_lp: {
          from: { transform: 'translateX(0%)'},
          to: { transform: 'translateX(-255%)'}
        },
        scroll_rp: {
          from: { transform: 'translateX(255%)'},
          to: { transform: 'translateX(0%)'}
        },
      },
      animation: {
        scroll_lp: 'scroll_lp 48s linear infinite',
        scroll_rp: 'scroll_rp 48s linear infinite',
      },
    },
  },
  plugins: [],
}
