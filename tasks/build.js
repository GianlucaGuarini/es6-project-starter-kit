'use strict';

var utils = require('./_utils'),
    webpack = require('webpack');

module.exports = function(options) {

  options = utils.extend({
    config: 'tasks/build/webpack.config.js'
  }, options);

  // delete the old ./dist folder
  utils.clean('./dist');

  /**
   * Create a promise based on the result of the webpack compiling script
   */

  return new Promise(function(resolve, reject){
    // check https://github.com/webpack/webpack to see the available options
    webpack({
      entry: './src/index.js',
      target: 'web',
      output: {
        libraryTarget: 'umd',
        library: global.library,
        path: './dist',
        filename: global.library + '.js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          // remove the ?externalHelpers=true if you want to include
          // the babel helpers directly in your library
          loader: 'babel-loader?externalHelpers=true'
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
