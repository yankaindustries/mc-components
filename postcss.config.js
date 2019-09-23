const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const inlineSVG = require('postcss-inline-svg')

module.exports = ctx => ({
  syntax: 'postcss-scss',
  plugins: ctx.env === 'development'
    ? [
      autoprefixer({ grid: true }),
      inlineSVG({ paths: ['./src/assets'] }),
    ]
    : [
      autoprefixer({ grid: true }),
      cssnano({ preset: 'default' }),
      inlineSVG({ paths: ['./src/assets'] }),
    ],
})
