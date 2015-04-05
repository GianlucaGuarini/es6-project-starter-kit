(function(root, factory) {
    if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["exports"], function(exports) {
        factory((root.Greeter = exports));
      });
    } else if (typeof exports === "object") {
      // CommonJS
      factory(exports);
    } else {
      // Browser globals
      factory(root);
    }
  }(this, function(exports) {
      "use strict";
var helpers_helpers, index;
helpers_helpers = function (exports) {
  /**
   * @module hepers
   * All the helper functions needed in this project
   */
  exports = {
    /**
     * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
     * @param  { String } string
     * @return { String }
     */
    trim: function trim(string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };
  return exports;
}({});
index = function (exports, _helpersHelpers) {
  var _helpers = babelHelpers.interopRequire(_helpersHelpers);
  /**
   * @class
   * An awesome script
   */
  var Greeter = function () {
    function Greeter() {
      var name = arguments[0] === undefined ? 'Dear Coder' : arguments[0];
      var text = arguments[1] === undefined ? 'hi there' : arguments[1];
      babelHelpers.classCallCheck(this, Greeter);
      this.name = name;
      this.text = text;
    }
    babelHelpers.createClass(Greeter, [{
        key: 'message',
        get: function () {
          return '' + this.text + ' ' + this.name + '!';
        },
        set: function (text) {
          this.text = _helpers.trim(text);
        }
      }]);
    return Greeter;
  }();
  exports = Greeter;
  return exports;
}({}, helpers_helpers);  exports.Greeter = index;
}));