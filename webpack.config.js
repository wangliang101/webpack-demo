const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BaseWebpackPlugin = require('./plugins/base-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {
          loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
          options: {
            name: 'webpack options loader'
          }
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BaseWebpackPlugin({
      name: 'webpack options plugin'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ]
};