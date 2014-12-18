var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

"use strict";

var helpers = require('./helpers/helpers')["default"];


/**
 * @class
 * An awesome script
 */
var Greeter = (function () {
  var Greeter = function Greeter(name, text) {
    if (name === undefined) name = "Dear Coder";
    if (text === undefined) text = "hi there";
    this.name = name;
    this.text = text;
  };

  _classProps(Greeter, null, {
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

exports["default"] = Greeter;