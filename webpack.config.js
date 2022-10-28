'use strict';
const path = require('path');

const serveConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  target: 'node',
  entry: './src/index.node.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.node.js',
    library: 'OikosJs',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};

const clientConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'OikosJs',
    libraryTarget: 'umd',
  },
};

module.exports = [clientConfig, serveConfig];
module.exports = {
  resolve: {
      fallback: {
          assert: require.resolve('assert'),
          crypto: require.resolve('crypto-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          os: require.resolve('os-browserify/browser'),
          stream: require.resolve('stream-browserify'),
      },
  },
};
