#!/usr/bin/env node

'use strict';

global.library = 'Greeter';

var command = process.argv[2],
    utils = require('./tasks/utils'),
    eslint = require('./tasks/eslint'),
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
      .then(function(){
        utils.print('Project successifully compiled!', 'confirm');
      });
    break;
  case 'watch':
    watch();
    break;
  case 'test':
    break;
  case 'saucelabs':
    break;
  default:
}