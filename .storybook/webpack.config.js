const path = require("path");

module.exports = {
  module: {
    rules: [
      {
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
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
    ]
  }
};
