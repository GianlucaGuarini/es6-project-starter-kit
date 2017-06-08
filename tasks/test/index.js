var utils = require('../_utils')

module.exports = function(options) {
  // run karma
  return utils.exec(
    './node_modules/.bin/karma',
    [
      'start',
      'tasks/test/karma.conf.js'
    ],
    // add some environment variables also used in karma.conf.js
    {
      LIBRARY_NAME: global.library,
      TRAVIS_JOB_ID: process.env.TRAVIS_JOB_ID
    }
  )
}
