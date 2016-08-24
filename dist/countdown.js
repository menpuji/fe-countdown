(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["countdown"] = factory();
	else
		root["countdown"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _feCountdown = __webpack_require__(1);
	
	var _feCountdown2 = _interopRequireDefault(_feCountdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _feCountdown2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _timerMgr = __webpack_require__(2);
	
	var _timerMgr2 = _interopRequireDefault(_timerMgr);
	
	var _utils = __webpack_require__(6);
	
	var _defaultOptions = __webpack_require__(7);
	
	var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var delayTime = 1000;
	var tm = new _timerMgr2.default();
	
	var countDown = function () {
	  function countDown(config) {
	    _classCallCheck(this, countDown);
	
	    for (var i in _defaultOptions2.default) {
	      if (_defaultOptions2.default.hasOwnProperty(i)) {
	        this[i] = config[i] || _defaultOptions2.default[i];
	      }
	    }
	
	    this.msInterval = tm.getTimer(this.delayTime);
	    this.init();
	  }
	
	  _createClass(countDown, [{
	    key: "init",
	    value: function init() {
	      var self = this;
	      if (this.fixNowDate) {
	        var fix = new _timerMgr2.default.timer(this.fixNow);
	        fix.add(function () {
	          getNowTime(function (now) {
	            self.now = now;
	          });
	        });
	      }
	      var index = this.msInterval.add(function () {
	        self.now += delayTime;
	        if (self.now >= self.endTime) {
	          this.msInterval.remove(index);
	          self.end();
	        } else {
	          self.render(self.getOutString());
	        }
	      });
	    }
	  }, {
	    key: "getBetween",
	    value: function getBetween() {
	      return (0, _utils.formatTime)(this.endTime - this.now);
	    }
	  }, {
	    key: "getOutString",
	    value: function getOutString() {
	      var between = this.getBetween();
	      return (0, _utils.formatTemplete)(this.template, between);
	    }
	  }]);
	
	  return countDown;
	}();
	
	exports.default = countDown;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var timerMgr = function timerMgr() {
	  this._timePool = new TimePool();
	};
	timerMgr.prototype.getTimer = function (delay) {
	  return this._timePool.getTimer(delay);
	};
	timerMgr.prototype.createTimer = function (opts) {
	  var defaultOptions = {
	    delayTime: 1000,
	    end: function end() {
	      console.log("end this.opts");
	    },
	    start: function start() {
	      console.log("start this.opts");
	    },
	    timerFn: function timerFn() {
	      console.log("timerFn");
	    },
	    fixNowDate: false,
	    startTime: new Date().getTime(),
	    endTime: new Date().getTime()
	  };
	
	  var config = untils.extend(defaultOptions, opts);
	  console.log(config);
	  return this._timePool.getTimer(config.delayTime);
	};
	
	timerMgr.timer = timer;
	
	exports.default = timerMgr;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	function cover(num) {
	  var n = parseInt(num, 10);
	  return n < 10 ? '0' + n : n;
	}
	
	function formatTime(ms) {
	  var s = ms / 1000,
	      m = s / 60;
	  return {
	    d: cover(m / 60 / 24),
	    h: cover(m / 60 % 24),
	    m: cover(m % 60),
	    s: cover(s % 60)
	  };
	}
	
	function formatTemplete(template, data) {
	  return template.replace(/{{(\w*)}}/g, function (m, key) {
	    return data.hasOwnProperty(key) ? data[key] : "";
	  });
	}
	
	function getNowTime(cb) {
	  var xhr = new XMLHttpRequest();
	  xhr.open('get', '/', true);
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === 3) {
	      var now = xhr.getResponseHeader('Date');
	      cb(new Date(now).valueOf());
	    }
	  };
	  xhr.send(null);
	}
	
	function extend() {
	  var config = {};
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  for (var varible in args[0]) {
	    if (args[0].hasOwnProperty(varible)) {
	      config[varible] = args[1][varible] || args[0][varible];
	    }
	  }
	  return config;
	}
	
	var utils = {
	  cover: cover, formatTime: formatTime, formatTemplete: formatTemplete, getNowTime: getNowTime, extend: extend
	};
	
	module.exports = utils;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  fixNow: 3 * 1000,
	  fixNowDate: false,
	  now: new Date().valueOf(),
	  template: '{{d}}:{{h}}:{{m}}:{{s}}',
	  render: function render(outstring) {
	    console.log(outstring);
	  },
	  end: function end() {
	    console.log('the end!');
	  },
	  endTime: new Date().valueOf() + 5 * 1000 * 60,
	  delayTime: 1000
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=countdown.js.map