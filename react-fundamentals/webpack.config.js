const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { 
    entry: path.resolve(__dirname, 'build', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: true,
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new CleanWebpackPlugin()
    ]
};