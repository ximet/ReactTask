const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 9020
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
