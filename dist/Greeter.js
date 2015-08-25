(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Greeter"] = factory();
	else
		root["Greeter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _helpersHelpers = __webpack_require__(1);

	var _helpersHelpers2 = babelHelpers.interopRequireDefault(_helpersHelpers);

	/**
	 * @class
	 * An awesome script
	 */

	var Greeter = (function () {
	  function Greeter() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? 'Dear Coder' : arguments[0];
	    var text = arguments.length <= 1 || arguments[1] === undefined ? 'hi there' : arguments[1];
	    babelHelpers.classCallCheck(this, Greeter);

	    this.name = name;
	    this.text = text;
	  }

	  babelHelpers.createClass(Greeter, [{
	    key: 'message',
	    get: function get() {
	      return this.text + ' ' + this.name + '!';
	    },
	    set: function set(text) {
	      this.text = _helpersHelpers2['default'].trim(text);
	    }
	  }]);
	  return Greeter;
	})();

	exports['default'] = Greeter;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @module hepers
	 * All the helper functions needed in this project
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
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
/******/ ])
});
;