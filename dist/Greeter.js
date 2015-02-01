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
  var to5Runtime = global.to5Runtime = {};
  to5Runtime.inherits = function (subClass, superClass) {
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

  to5Runtime.defaults = function (obj, defaults) {
    for (var key in defaults) {
      if (obj[key] === undefined) {
        obj[key] = defaults[key];
      }
    }

    return obj;
  };

  to5Runtime.prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  to5Runtime.applyConstructor = function (Constructor, args) {
    var instance = Object.create(Constructor.prototype);

    var result = Constructor.apply(instance, args);

    return result != null && (typeof result == "object" || typeof result == "function") ? result : instance;
  };

  to5Runtime.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  to5Runtime.taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  to5Runtime.interopRequire = function (obj) {
    return obj && obj.__esModule ? obj.default : obj;
  };

  to5Runtime.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  to5Runtime.slicedToArray = function (arr, i) {
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

  to5Runtime.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  to5Runtime.hasOwn = Object.prototype.hasOwnProperty;
  to5Runtime.slice = Array.prototype.slice;
  to5Runtime.bind = Function.prototype.bind;
  to5Runtime.defineProperty = function (obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  };

  to5Runtime.asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);

      return new Promise(function (resolve, reject) {
        var callNext = step.bind(null, "next");

        var callThrow = step.bind(null, "throw");

        function step(key, arg) {
          try {
            var info = gen[key](arg);

            var value = info.value;
          } catch (error) {
            reject(error);

            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(callNext, callThrow);
          }
        }

        callNext();
      });
    };
  };

  to5Runtime.interopRequireWildcard = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  to5Runtime._typeof = function (obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  to5Runtime._extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  to5Runtime.get = function get(object, property, receiver) {
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

  to5Runtime.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return;
      } else {
        return set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
      return;
    } else {
      var setter = desc.set;
      if (setter === undefined) {
        return;
      }
      return setter.call(receiver, value);
    }
  };
})(typeof global === "undefined" ? self : global);
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
    trim: function (string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };
  return exports;
}({});
index = function (exports, _helpersHelpers) {
  var helpers = to5Runtime.interopRequire(_helpersHelpers);
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
    to5Runtime.prototypeProperties(Greeter, null, {
      message: {
        get: function () {
          return '' + this.text + ' ' + this.name + '!';
        },
        set: function (text) {
          this.text = helpers.trim(text);
        },
        configurable: true
      }
    });
    return Greeter;
  }();
  exports = Greeter;
  return exports;
}({}, helpers_helpers);  exports.Greeter = index;
}));