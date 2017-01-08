(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('Greeter', ['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Greeter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var helpers = {
    trim: function trim(string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };

  var index = function () {
    function index() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Dear Coder';
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hi there';

      _classCallCheck(this, index);

      this.name = name;
      this.text = text;
    }

    _createClass(index, [{
      key: 'message',
      get: function get() {
        return this.text + ' ' + this.name + '!';
      },
      set: function set(text) {
        this.text = helpers.trim(text);
      }
    }]);

    return index;
  }();

  module.exports = index;
});