var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

exports.__esModule = true;

var _helpers = require('./helpers/helpers');

var _helpers2 = _interopRequireWildcard(_helpers);

/**
 * @class
 * An awesome script
 */

var Greeter = (function () {
  function Greeter() {
    var name = arguments[0] === undefined ? 'Dear Coder' : arguments[0];
    var text = arguments[1] === undefined ? 'hi there' : arguments[1];

    _classCallCheck(this, Greeter);

    this.name = name;
    this.text = text;
  }

  _createClass(Greeter, [{
    key: 'message',
    get: function () {
      return '' + this.text + ' ' + this.name + '!';
    },
    set: function (text) {
      this.text = _helpers2['default'].trim(text);
    }
  }]);

  return Greeter;
})();

exports['default'] = Greeter;
module.exports = exports['default'];