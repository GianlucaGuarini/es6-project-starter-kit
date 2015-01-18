var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var helpers = _interopRequire(require("./helpers/helpers"));

/**
 * @class
 * An awesome script
 */
var Greeter = (function () {
  function Greeter() {
    var name = arguments[0] === undefined ? "Dear Coder" : arguments[0];
    var text = arguments[1] === undefined ? "hi there" : arguments[1];
    this.name = name;
    this.text = text;
  }

  _prototypeProperties(Greeter, null, {
    message: {
      get: function () {
        return "" + this.text + " " + this.name + "!";
      },
      set: function (text) {
        this.text = helpers.trim(text);
      },
      enumerable: true,
      configurable: true
    }
  });

  return Greeter;
})();

module.exports = Greeter;