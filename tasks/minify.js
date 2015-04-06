'use strict';

var utils = require('./_utils'),
    fs = require('fs'),
    uglify = require('uglify-js');

module.exports = function() {
  var base = 'dist/',
      sourcePath = base + global.library + '.js',
      outputPath = base + global.library + '.min.js',
      output = uglify.minify(sourcePath);

  return new Promise(function(resolve, reject) {

    fs.writeFile(outputPath, output.code, function(err){
      if (err) {
        utils.print(err, 'error');
        reject(err);
      } else {
        utils.print('Library minified', 'confirm');
        utils.print('Created file: ' + outputPath, 'cool');
        resolve();
      }
    });
  });

};
