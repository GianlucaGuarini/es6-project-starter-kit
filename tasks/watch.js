'use strict';

var watchEvents = [
      'change',
      'add',
      'unlink',
      'unlinkDir',
      'addDir'
    ],
    eslint = require('./eslint'),
    chokidar = require('chokidar');

module.exports = function(options) {

  options = options || {};

  var runTaskOnEvent = function(event, fn) {
    if (~watchEvents.indexOf(event)) {
      fn();
    }
  };

  chokidar.watch('src/**/**/*.js', {
    ignoreInitial: true
  }).on('all', function(event) {
    runTaskOnEvent(event, eslint);
  });

};
