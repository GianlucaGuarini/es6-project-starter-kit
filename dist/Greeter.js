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
(function (global) {
  var polyfill = global.polyfill = {};
  polyfill.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) subClass.__proto__ = superClass;
  };

  polyfill.defaults = function (obj, defaults) {
    for (var key in defaults) {
      if (obj[key] === undefined) {
        obj[key] = defaults[key];
      }
    }

    return obj;
  };

  polyfill.prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  polyfill.applyConstructor = function (Constructor, args) {
    var instance = Object.create(Constructor.prototype);

    var result = Constructor.apply(instance, args);

    return result != null && (typeof result == "object" || typeof result == "function") ? result : instance;
  };

  polyfill.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  polyfill.interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  polyfill.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  polyfill.slicedToArray = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    }
  };

  polyfill.objectWithoutProperties = function (obj, keys) {
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
  polyfill.bind = Function.prototype.bind;
  polyfill.defineProperty = function (obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  };

  polyfill.interopRequireWildcard = function (obj) {
    return obj && obj.constructor === Object ? obj : {
      default: obj
    };
  };

  polyfill._extends = function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }

    return target;
  };

  polyfill.get = function get(object, property, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };
})(typeof global === "undefined" ? self : global);
var helpers_helpers, index;
helpers_helpers = function (exports) {
  'use strict';
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
    trim: function (string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };
  return exports;
}({});
index = function (exports, _helpersHelpers) {
  'use strict';
  var helpers = polyfill.interopRequire(_helpersHelpers);
  /**
   * @class
   * An awesome script
   */
  var Greeter = function () {
    function Greeter() {
      var name = arguments[0] === undefined ? 'Dear Coder' : arguments[0];
      var text = arguments[1] === undefined ? 'hi there' : arguments[1];
      this.name = name;
      this.text = text;
    }
    polyfill.prototypeProperties(Greeter, null, {
      message: {
        get: function () {
          return '' + this.text + ' ' + this.name + '!';
        },
        set: function (text) {
          this.text = helpers.trim(text);
        },
        enumerable: true,
        configurable: true
      }
    });
    return Greeter;
  }();
  exports = Greeter;
  return exports;
}({}, helpers_helpers);  exports.Greeter = index;
}));