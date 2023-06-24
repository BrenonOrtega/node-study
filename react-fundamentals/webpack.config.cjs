const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main[contenthash].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    port: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
