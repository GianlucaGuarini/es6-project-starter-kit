'use strict';
module.exports = function(options) {
  options = options || {};
  return {
    entry: './assets/js/app.js',
    target: 'web',
    output: {
      path: './src/dist/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].bundle.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules|bower/,
        loader: 'babel-loader'
      }]
    }
  };
};
