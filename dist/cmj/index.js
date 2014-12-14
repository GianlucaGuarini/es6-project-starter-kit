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
var Greeting = (function () {
  var Greeting = function Greeting(name, text) {
    if (name === undefined) name = "Dear Coder";
    if (text === undefined) text = "hi there";
    this.name = name;
    this.text = text;
  };

  _classProps(Greeting, null, {
    message: {
      get: function () {
        return "" + this.text + " " + this.name + "!";
      },
      set: function (text) {
        this.text = helpers.trim(text);
      }
    }
  });

  return Greeting;
})();

exports["default"] = {
  helpers: helpers,
  Greeting: Greeting
};