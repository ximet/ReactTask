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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    https: true,
    hot: true,
    port: 9020,
    historyApiFallback: true,

    proxy: {
      '/api': {
        target: commonPaths.externalApiBaseUrl,
        secure: false
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
