const prettierConfig = require('./prettier.config.js')

module.exports = {
  // icon: true,
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  svgProps: {
    width: '2em',
    height: '2em',
  },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
  prettierConfig,
}
