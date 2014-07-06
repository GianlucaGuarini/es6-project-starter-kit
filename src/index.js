/** @module main */
// PRIVATE Stuff
var
// includes
_helpers = require('helpers/helpers'),
_sayHi = function () {
  return 'hi there! ';
};

// PUBLIC API
/*
 * Just return a value to define the module export.
 * This example returns an object,
 * but the module can return a function as the exported value.
 */
module.exports = {
  _VERSION: '@VERSION',
  greeting: _sayHi
};







