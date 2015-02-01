var _to5Helpers = require("6to5-runtime/helpers");

var helpers = _to5Helpers.interopRequire(require("./helpers/helpers"));

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

  _to5Helpers.prototypeProperties(Greeter, null, {
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