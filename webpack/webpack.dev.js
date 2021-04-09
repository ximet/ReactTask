const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    publicPath: '/',
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
    historyApiFallback: {
      disableDotRule: true
    },
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    port: 9020,
    proxy: {
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
