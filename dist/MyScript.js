// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([],factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.MyScript = factory();
  }
}(this, function () {
  
var helpers_helpers, main;
helpers_helpers = {
    trim: function (string) {
        return string.replace(/^\s+|\s+$/gm, '');
    }
};
main = function (exports) {
    /**
     *
     * PRIVATE Stuff
     *
     */
    var
        // includes
        _helpers = helpers_helpers, _sayHi = function () {
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
        _VERSION: '0.0.1',
        greeting: _sayHi
    };
}({});	return main;
}));