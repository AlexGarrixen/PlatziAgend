const { resolve } = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const root = process.cwd();

module.exports = {
  entry: resolve(root, 'src/index.js'),
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    hot: true,
    contentBase: resolve(root, 'dist'),
    historyApiFallback: true,
    publicPath: '/',
    stats: 'errors-only',
    overlay: {
      errors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', { loader: 'sass-loader' }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: resolve(root, 'static/index.html'),
      filename: 'index.html',
    }),
  ],
};
