const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const commonPaths = require('./paths');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /(\.ts$|\.tsx?$)/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
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
    extensions: ['*', '.ts', 'tsx', '.jsx', '.js', '.css', '.scss'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
  ]
};
