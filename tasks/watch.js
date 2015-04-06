'use strict';


var utils = require('./_utils'),
    eslint = require('./eslint'),
    build = require('./build'),
    chokidar = require('chokidar');

module.exports = function(options) {

  options = utils.extend({
    // chokidar events we are going to watch
    // generally you should not touch them
    watchEvents: [
      'change',
      'add',
      'unlink',
      'unlinkDir',
      'addDir'
    ]
  }, options);

  // return a promise based on a certain task triggered
  var runOnlyOn = function(event) {
    if (~options.watchEvents.indexOf(event)) {
      // go to the next task
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  };

  // run eslint when a source file gets updated
  utils.print('Watching the src/**/**/*.js path to trigger the eslint check', 'cool');
  chokidar.watch('src/**/**/*.js', {
    ignoreInitial: true
  }).on('all', function(event) {
    // this tasks will run only if the current event matches the ones in the watchEvents array
    runOnlyOn(event)
      .then(eslint)
      .then(build);
  });

};
