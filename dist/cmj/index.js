var _babelHelpers = require("babel-runtime/helpers")["default"];
var helpers = _babelHelpers.interopRequire(require("./helpers/helpers"));

/**
 * @class
 * An awesome script
 */
var Greeter = (function () {
  function Greeter() {
    var name = arguments[0] === undefined ? "Dear Coder" : arguments[0];
    var text = arguments[1] === undefined ? "hi there" : arguments[1];
    _babelHelpers.classCallCheck(this, Greeter);

    this.name = name;
    this.text = text;
  }

  _babelHelpers.prototypeProperties(Greeter, null, {
    message: {
      get: function () {
        return "" + this.text + " " + this.name + "!";
      },
      set: function (text) {
        this.text = helpers.trim(text);
      },
      configurable: true
    }
  });

  return Greeter;
})();

module.exports = Greeter;