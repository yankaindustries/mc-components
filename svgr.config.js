const template = require('./src/utils/template-svgr.js')
const prettierConfig = require('./prettier.config.js')

module.exports = {
  icon: true,
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  prettierConfig,
  template,
}
