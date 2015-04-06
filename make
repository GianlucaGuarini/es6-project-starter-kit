#!/usr/bin/env node

'use strict';

global.library = 'Greeter';

var command = process.argv[2],
    utils = require('./tasks/_utils'),
    eslint = require('./tasks/eslint'),
    test = require('./tasks/test'),
    minify = require('./tasks/minify'),
    build = require('./tasks/build'),
    watch = require('./tasks/watch'),
    serve = require('./tasks/serve');

switch(command) {
  case 'serve':
    serve();
    break;
  case 'eslint':
    eslint();
    break;
  case 'build':
    eslint()
      .then(build)
      .then(minify)
      .then(test)
      .then(function(){
        utils.print('Project successifully compiled!', 'confirm');
      });
    break;
  case 'watch':
    watch();
    break;
  case 'minify':
  	minify();
  	break;
  case 'test':
    test();
    break;
  case 'saucelabs':
    test({
      saucelabs: true
    });
    break;
  default:
}