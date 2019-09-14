const path = require("path")

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.svg$/,
    oneOf: [
      {
        include: path.resolve(__dirname, '../src/assets/icons'),
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              replaceAttrValues: {
                '#000': 'currentColor',
              }
            },
          },
        ],
      },
      {
        exclude: path.resolve(__dirname, '../src/assets/icons'),
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              replaceAttrValues: {
                '#000': 'currentColor',
              }
            },
          },
        ],
      },
    ],
  })

  config.module.rules.push({
    test: /\.(jpe?g|png|gif)$/i,
    loader: 'file-loader?name=[name].[ext]'
  })

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.eot(\?v=\d+.\d+.\d+)?$/,
    loader: 'file-loader'
  })

  config.module.rules.push({
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  })

  config.module.rules.push({
    test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  })

  return config
}
