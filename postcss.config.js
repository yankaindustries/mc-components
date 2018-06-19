const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer({ grid: true }),
    cssnano({ preset: 'default' }),
  ],
}
