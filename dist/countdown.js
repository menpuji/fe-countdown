(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CountDown"] = factory();
	else
		root["CountDown"] = factory();
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
	
	var _utils = __webpack_require__(8);
	
	var _defaultOptions = __webpack_require__(9);
	
	var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var delayTime = 1000;
	
	var CountDown = function () {
	  function CountDown(config) {
	    _classCallCheck(this, CountDown);
	
	    this.config = {};
	    for (var i in _defaultOptions2.default) {
	      if (_defaultOptions2.default.hasOwnProperty(i)) {
	        this.config[i] = config[i] || _defaultOptions2.default[i];
	      }
	    }
	    this.msInterval = _timerMgr2.default.generateTimer(this.config);
	    this._init();
	  }
	
	  _createClass(CountDown, [{
	    key: "_init",
	    value: function _init() {
	      var self = this;
	      if (this.fixNowDate) {
	        var fix = new _timerMgr2.default.timer(this.fixNow);
	        fix.add(function () {
	          getNowTime(function (now) {
	            self.now = now;
	          });
	        });
	      }
	      var index = this.msInterval._timer.add(function () {
	        self.config.now += delayTime;
	        if (self.config.now >= self.config.endTime) {
	          self.config.end();
	          _timerMgr2.default.remove(self.msInterval);
	        } else {
	          self.config.render(self.getOutString());
	        }
	      });
	    }
	  }, {
	    key: "getBetween",
	    value: function getBetween() {
	      return (0, _utils.formatTime)(this.config.endTime - this.config.now);
	    }
	  }, {
	    key: "getOutString",
	    value: function getOutString() {
	      var between = this.getBetween();
	      return (0, _utils.formatTemplete)(this.config.template, between);
	    }
	  }, {
	    key: "stop",
	    value: function stop() {}
	  }, {
	    key: "destory",
	    value: function destory() {
	      debugger;
	      _timerMgr2.default.remove(this.msInterval);
	    }
	  }]);
	
	  return CountDown;
	}();
	
	exports.default = CountDown;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _option = __webpack_require__(3);
	
	var _timerPool = __webpack_require__(5);
	
	var _timerPool2 = _interopRequireDefault(_timerPool);
	
	var _customerTimer = __webpack_require__(7);
	
	var _customerTimer2 = _interopRequireDefault(_customerTimer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimerMgr = function () {
	  function TimerMgr() {
	    _classCallCheck(this, TimerMgr);
	
	    this._timerPool = new _timerPool2.default();
	  }
	
	  _createClass(TimerMgr, [{
	    key: "_getTimer",
	    value: function _getTimer(config) {
	      return this._timerPool.getTimer(config);
	    }
	  }, {
	    key: "generateTimer",
	    value: function generateTimer(opts) {
	      var customerTimer = new _customerTimer2.default(opts);
	      var timer = this._getTimer(customerTimer.config);
	      customerTimer._timer = timer;
	      return customerTimer;
	    }
	  }, {
	    key: "remove",
	    value: function remove(msInterval) {
	      this._timerPool._pool[msInterval.config.key]._queue.length = 0;
	    }
	  }]);
	
	  return TimerMgr;
	}();
	
	var timerMgr = new TimerMgr();
	
	module.exports = timerMgr;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Option = exports.defaultOption = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultOption = exports.defaultOption = {
	  fixNow: 3 * 1000,
	  fixNowDate: false,
	  now: new Date().valueOf(),
	  action: function action(time) {
	    console.log(time);
	  },
	  end: function end(time) {
	    console.log('the end!', time);
	  },
	  endTime: new Date().valueOf() + 5 * 1000 * 60,
	  delayTime: 1000,
	  clear: true, //自动清除 调用deatory
	  autoStart: true //自动开始
	};
	
	var Option = exports.Option = function () {
	  function Option(config) {
	    _classCallCheck(this, Option);
	
	    for (var i in defaultOption) {
	      if (defaultOption.hasOwnProperty(i)) {
	        this[i] = config[i] || defaultOption[i];
	      }
	    }
	  }
	
	  _createClass(Option, [{
	    key: "key",
	    get: function get() {
	      return "delayTime:" + this.delayTime;
	    }
	  }]);
	
	  return Option;
	}();
	
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extend = extend;
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _timer = __webpack_require__(6);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimerPool = function () {
	  function TimerPool() {
	    _classCallCheck(this, TimerPool);
	
	    this._pool = {};
	  }
	
	  _createClass(TimerPool, [{
	    key: "getTimer",
	    value: function getTimer(opts) {
	      var t = this._pool[opts.key];
	      return t ? t : this._pool[opts.key] = new _timer2.default(opts.delayTime);
	    }
	  }, {
	    key: "removeTimer",
	    value: function removeTimer(key) {
	      if (this._pool[delayTime]) {
	        delete this._pool[delayTime];
	      }
	    }
	  }]);
	
	  return TimerPool;
	}();
	
	exports.default = TimerPool;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Timer = function () {
	  function Timer(delay) {
	    _classCallCheck(this, Timer);
	
	    this._queue = [];
	    this.stop = false;
	    this._createTimer(delay);
	  }
	
	  _createClass(Timer, [{
	    key: "_createTimer",
	    value: function _createTimer(delay) {
	      var self = this;
	      var first = true;
	
	      var timeCounter;
	
	      function countDownStart() {
	        var s = new Date();
	        for (var i = 0; i < self._queue.length; i++) {
	          self._queue[i]();
	        }
	        if (!self.stop) {
	          var cost = new Date() - s;
	          delay = first ? delay : cost > delay ? cost - delay : delay;
	          timeCounter = setTimeout(countDownStart, delay);
	        } else {
	          clearTimeout(timeCounter);
	        }
	      }
	      countDownStart();
	      first = false;
	    }
	  }, {
	    key: "add",
	    value: function add(cb) {
	      this._queue.push(cb);
	      this.stop = false;
	      return this._queue.length - 1;
	    }
	  }, {
	    key: "remove",
	    value: function remove(index) {
	      this._queue.splice(index, 1);
	      if (!this._queue.length) {
	        this.stop = true;
	      }
	    }
	  }]);
	
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _option = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CustomerTimer = function () {
	  function CustomerTimer(opts) {
	    _classCallCheck(this, CustomerTimer);
	
	    this.config = new _option.Option(opts);
	  }
	
	  _createClass(CustomerTimer, [{
	    key: "reset",
	    value: function reset() {}
	  }, {
	    key: "restart",
	    value: function restart() {}
	  }, {
	    key: "stop",
	    value: function stop() {}
	  }, {
	    key: "start",
	    value: function start() {}
	  }, {
	    key: "getTimeLeft",
	    value: function getTimeLeft() {}
	  }, {
	    key: "getRemainingTime",
	    value: function getRemainingTime() {}
	  }, {
	    key: "reduceDelay",
	    value: function reduceDelay() {}
	  }, {
	    key: "toggle",
	    value: function toggle() {}
	  }, {
	    key: "change",
	    value: function change() {}
	  }]);
	
	  return CustomerTimer;
	}();
	
	exports.default = CustomerTimer;

/***/ },
/* 8 */
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
	
	function mixin(source, target) {
	  for (var i in target) {
	    if (target.hasOwnProperty(i)) {
	      source[i] = target[i];
	    }
	  }
	  return source;
	};
	
	var utils = {
	  cover: cover, formatTime: formatTime, formatTemplete: formatTemplete, getNowTime: getNowTime, extend: extend, mixin: mixin
	};
	
	module.exports = utils;

/***/ },
/* 9 */
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
	
	// export class Option {
	//   constructor() {
	//     this.fixNow: 3 * 1000;
	//     this.fixNowDate: false;
	//     this.now: new Date().valueOf();
	//     this.template: '{{d}}:{{h}}:{{m}}:{{s}}';
	//     this.render: function(outstring) {
	//       console.log(outstring);
	//     };
	//     this.end: function() {
	//       console.log('the end!');
	//     };
	//     this.endTime: new Date().valueOf() + 5 * 1000 * 60;
	//     this.delayTime: 1000
	//   }
	// };

/***/ }
/******/ ])
});
;
//# sourceMappingURL=countdown.js.map