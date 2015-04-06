'use strict';

var utils = require('../_utils');

module.exports = function(options) {

  options = utils.extend({
    // flag used to trigger only the local tests without using saucelabs
    saucelabs: false
  }, options);
  // run karma
  return utils.exec(
      './node_modules/karma/bin/karma',
      [
        'start',
        'tasks/test/karma.conf.js'
      ],
      // add some environment variables also used in karma.conf.js
      {
        LIBRARY_NAME: global.library,
        TRAVIS_JOB_ID: process.env.TRAVIS_JOB_ID,
        // Remember to change these using your project opensauce credentials
        SAUCE_USERNAME: 'es6projectstarterkit',
        SAUCE_ACCESS_KEY: 'bedf1991-5777-472f-8e14-3cde10fbd01f',
        SAUCELABS: options.saucelabs
      }
    );

};
