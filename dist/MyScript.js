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
  var helpers_helpers, index;
helpers_helpers = function (exports) {
    /**
     * @module helpers
     */
    exports = {
        trim: function (string) {
            return string.replace(/^\s+|\s+$/gm, '');
        }
    };
    return exports;
}({});
index = function (exports) {
    var _helpers = helpers_helpers, _sayHi = function () {
            return 'hi there! ';
        };
    exports = {
        _VERSION: '@VERSION',
        greeting: _sayHi
    };
    return exports;
}({});  return index;
}));