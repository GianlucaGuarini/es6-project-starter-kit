define(function(require, exports, module) {
  /**
   *
   * PRIVATE Stuff
   *
   */

  var
  // includes
  _helpers = require('helpers/helpers'),
  _sayHi = function () {
    return 'hi there! ';
  };

  /**
   *
   * PUBLIC Stuff
   *
   * Just return a value to define the module export.
   * This example returns an object,
   * but the module can return a function as the exported value.
   */
  return {
    _VERSION: '@VERSION',
    greeting: _sayHi
  };
});






