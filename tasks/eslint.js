'use strict';

var utils = require('./_utils');

module.exports = function() {

  return utils.exec(
      './node_modules/.bin/eslint',
      [
        'tasks',
        'src',
        'test'
    ]);

};
