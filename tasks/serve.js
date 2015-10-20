var utils = require('./_utils')

module.exports = function(options) {

  options = utils.extend({
    port: 6666
  }, options)
  // serve the contents of this folder
  return utils.exec('./node_modules/.bin/serve', utils.optionsToArray(options))

}
