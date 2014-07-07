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
var Greeging = (function () {
  var Greeging = function Greeging() {};

  Greeging.prototype.constrictor = function () {
    this.message = "hi there!";
  };

  _classProps(Greeging, null, {
    message: {
      get: function () {
        return this.message;
      },
      set: function (message) {
        this.message = message;
      }
    }
  });

  return Greeging;
})();

exports["default"] = {
  helpers: helpers,
  /**
   * Returns a welcome string
   * @return { String }
   */
  Greeging: Greeging
};