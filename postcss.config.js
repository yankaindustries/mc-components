const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const inlineSVG = require('postcss-inline-svg')

module.exports = {
  plugins: [
    autoprefixer({ grid: true }),
    cssnano({ preset: 'default' }),
    inlineSVG({ path: './src/assets' })
  ],
}
