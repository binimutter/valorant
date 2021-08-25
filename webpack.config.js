const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  output: {
    path:path.join(__dirname, "/client/dist"),
    filename: 'index.bundle.js',
  },
  // externals: {
  //   "react-native": true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("client", "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("client", "src", "index.html"),
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    }
  },
}