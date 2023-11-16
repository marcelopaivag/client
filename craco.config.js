// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
        base: 'https://github.com/marcelopaivag/client.git'
      },
    },
  }