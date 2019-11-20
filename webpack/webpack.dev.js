const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [{
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    port: 9000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};