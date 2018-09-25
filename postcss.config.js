const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const inlineSVG = require('postcss-inline-svg')

module.exports = ctx => ({
  syntax: ctx.env === 'development' ? 'postcss-scss' : undefined,
  plugins: ctx.env === 'development'
    ? [
      autoprefixer({ grid: true }),
      inlineSVG({ path: './src/assets' }),
    ]
    : [
      autoprefixer({ grid: true }),
      cssnano({ preset: 'default' }),
      inlineSVG({ path: './src/assets' }),
    ],
})
