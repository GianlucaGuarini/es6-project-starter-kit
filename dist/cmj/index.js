var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

var helpers = _interopRequire(require("./helpers/helpers"));

/**
 * @class
 * An awesome script
 */

var Greeter = (function () {
  function Greeter() {
    var name = arguments[0] === undefined ? "Dear Coder" : arguments[0];
    var text = arguments[1] === undefined ? "hi there" : arguments[1];

    _classCallCheck(this, Greeter);

    this.name = name;
    this.text = text;
  }

  _createClass(Greeter, {
    message: {
      get: function () {
        return "" + this.text + " " + this.name + "!";
      },
      set: function (text) {
        this.text = helpers.trim(text);
      }
    }
  });

  return Greeter;
})();

module.exports = Greeter;