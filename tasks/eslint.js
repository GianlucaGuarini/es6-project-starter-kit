'use strict';

var utils = require('./utils');

module.exports = function() {
  var promise = utils.exec(
      './node_modules/.bin/eslint',
      [
        'tasks',
        'src',
        'test'
    ]);
  return promise;
};
