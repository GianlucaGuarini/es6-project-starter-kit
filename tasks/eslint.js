var utils = require('./_utils')

module.exports = function(options) {

  options = utils.extend({
    // Folders containing the files we need to check
    folders: [
      'tasks',
      'src',
      'test'
    ]
  }, options)

  // Run eslint
  return utils.exec('node', ['./node_modules/.bin/eslint'].concat(options.folders))

}
