/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _helpers = __webpack_require__(1);

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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * @module hepers
	 * All the helper functions needed in this project
	 */
	exports['default'] = {
	  /**
	   * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
	   * @param  { String } string
	   * @return { String }
	   */
	  trim: function trim(string) {
	    return string.replace(/^\s+|\s+$/gm, '');
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ]);