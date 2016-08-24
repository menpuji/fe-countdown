import timerMgr from "./timerMgr"


  var delayTime = 1000;
  var tm = new timerMgr();

  var msInterval;

  function countDown(config) {
    var defaultOptions = {
      fixNow: 3 * 1000,
      fixNowDate: false,
      now: new Date().valueOf(),
      template: '{{d}}:{{h}}:{{m}}:{{s}}',
      render: function(outstring) {
        console.log(outstring);
      },
      end: function() {
        console.log('the end!');
      },
      endTime: new Date().valueOf() + 5 * 1000 * 60,
      delayTime:1000
    };
    for (var i in defaultOptions) {
      if (defaultOptions.hasOwnProperty(i)) {
        this[i] = config[i] || defaultOptions[i];
      }
    }
    msInterval = tm.getTimer(this.delayTime)
    this.init();
  }

  countDown.prototype = {
    constructor: countDown,
    init: function() {
      var self = this;
      if (this.fixNowDate) {
        var fix = new timerMgr.timer(this.fixNow);
        fix.add(function() {
          self.getNowTime(function(now) {
            self.now = now;
          });
        });
      }
      var index = msInterval.add(function() {
        self.now += delayTime;
        if (self.now >= self.endTime) {
          msInterval.remove(index);
          self.end();
        } else {
          self.render(self.getOutString());
        }
      });
    },
    getBetween: function() {
      return _formatTime(this.endTime - this.now);
    },
    getOutString: function() {
      var between = this.getBetween();
      return this.template.replace(/{{(\w*)}}/g, function(m, key) {
        return between.hasOwnProperty(key) ? between[key] : "";
      });
    },
    getNowTime: function(cb) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', '/', true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 3) {
          var now = xhr.getResponseHeader('Date');
          cb(new Date(now).valueOf());
        }
      };
      xhr.send(null);
    }
  };

  function _cover(num) {
    var n = parseInt(num, 10);
    return n < 10 ? '0' + n : n;
  }

  function _formatTime(ms) {
    var s = ms / 1000,
      m = s / 60;
    return {
      d: _cover(m / 60 / 24),
      h: _cover(m / 60 % 24),
      m: _cover(m % 60),
      s: _cover(s % 60)
    };
  }




export default countDown