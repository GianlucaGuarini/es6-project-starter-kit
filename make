#!/usr/bin/env node

'use strict';

var command = process.argv[2],
    eslint = require('./tasks/eslint'),
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