'use strict';

var utils = require('./_utils');

module.exports = function(options) {

  options = options || {};
  options.port = options.port || 6666;

  return utils.exec('./node_modules/.bin/serve', utils.optionsToArray(options));

};
