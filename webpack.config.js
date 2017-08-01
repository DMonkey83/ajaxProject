const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    './src/index.js',
    './scss/main.scss',
  ],
  output: {
    path: resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false
              },
            },
          ],
        }),
      },
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: resolve(__dirname, 'build')
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true}),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
