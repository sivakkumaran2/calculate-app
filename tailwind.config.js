module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-500': '#FFC107',
        'gray-500': '#A0AEC0',
        'gray-800': '#2D3748',
      },
    },
  },
  plugins: [],
};
