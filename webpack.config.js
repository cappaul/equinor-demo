const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
module.exports = {
  mode: 'development',
  entry: {
    'singleSPA.config': './singleSPA.config.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
};
