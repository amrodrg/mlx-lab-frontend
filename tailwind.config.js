module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#0079C1',
        'primary-purple': '#9c27b0',
        'secondary-blue': '#4CA1D3',
        'secondary-purple': '#4f50b7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
