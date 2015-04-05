'use strict';

var utils = require('./utils'),
    webpack = require('webpack');

module.exports = function(options) {

  options = options || {};
  options.config = 'tasks/build/webpack.config.js';

  utils.delete('./dist');

  return new Promise(function(resolve, reject){
    webpack({
      entry: './src/index.js',
      target: 'web',
      output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      }
    }, function(err, stats) {
      if(err) {
        utils.print(err, 'error');
        reject();
      } else {
        utils.print(stats);
        resolve();
      }
    });
  });

};
