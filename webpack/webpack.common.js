const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx?$)/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            // load svg modules to be displayed as icons/images
            loader: 'svg-react-loader'
          },
          {
            // load svg files normally (eg. fonts, etc)
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath
    },
    open: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      favicon: './src/utils/icons/weather.png'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ]
};
