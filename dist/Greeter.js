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
      "use strict";(function (global) {
  var polyfill = global.polyfill = {};
  polyfill.extends = function (child, parent) {
    child.prototype = Object.create(parent.prototype, {
      constructor: {
        value: child,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    child.__proto__ = parent;
  };

  polyfill.classProps = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  polyfill.applyConstructor = function (Constructor, args) {
    var instance = Object.create(Constructor.prototype);

    var result = Constructor.apply(instance, args);

    return result != null && (typeof result == "object" || typeof result == "function") ? result : instance;
  };

  polyfill.taggedTemplateLiteral = function (strings, raw) {
    return Object.defineProperties(strings, {
      raw: {
        value: raw
      }
    });
  };

  polyfill.interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  polyfill.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  polyfill.objectSpread = function (obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  polyfill.hasOwn = Object.prototype.hasOwnProperty;
  polyfill.slice = Array.prototype.slice;
})(typeof global === "undefined" ? self : global);var helpers_helpers, index;
helpers_helpers = function (exports) {
  'use strict';
  exports['default'] = {
    /**
     * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
     * @param  { String } string
     * @return { String }
     */
    trim: function (string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };
  return exports;
}({});
index = function (exports, _helpersHelpers) {
  'use strict';
  var helpers = _helpersHelpers['default'];
  /**
   * @class
   * An awesome script
   */
  var Greeter = function () {
    var Greeter = function Greeter(name, text) {
      if (name === undefined)
        name = 'Dear Coder';
      if (text === undefined)
        text = 'hi there';
      this.name = name;
      this.text = text;
    };
    polyfill.classProps(Greeter, null, {
      message: {
        get: function () {
          return '' + this.text + ' ' + this.name + '!';
        },
        set: function (text) {
          this.text = helpers.trim(text);
        }
      }
    });
    return Greeter;
  }();
  exports['default'] = Greeter;
  return exports;
}({}, helpers_helpers);  exports.Greeter = index['default'];
}));