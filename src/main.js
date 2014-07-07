/**
 * @module main
 * An awesome script
 */
// PRIVATE Stuff
var
  /**
   * @private
   */
  _helpers = require('./helpers/helpers'),
  /**
   * @private
   */
  _sayHi = function() {
    return 'hi there!';
  };
/*
 * Just return a value to define the module export.
 * This example returns an object,
 * but the module can return a function as the exported value.
 * @api
 */
module.exports = {
  /**
   * Returns a welcome string
   * @return { String }
   */
  greeting: _sayHi
};