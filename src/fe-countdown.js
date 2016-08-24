import timerMgr from "./timerMgr/timerMgr";
import {
  formatTime, formatTemplete, self
}
from "./utils"

import defaultOptions from "./defaultOptions"



var delayTime = 1000;
var tm = new timerMgr();



export default class countDown {
  constructor(config) {
    for (var i in defaultOptions) {
      if (defaultOptions.hasOwnProperty(i)) {
        this[i] = config[i] || defaultOptions[i];
      }
    }

    this.msInterval = tm.getTimer(this.delayTime)
    this.init();
  }

  init() {
    var self = this;
    if (this.fixNowDate) {
      var fix = new timerMgr.timer(this.fixNow);
      fix.add(function() {
        getNowTime(function(now) {
          self.now = now;
        });
      });
    }
    var index = this.msInterval.add(function() {
      self.now += delayTime;
      if (self.now >= self.endTime) {
        this.msInterval.remove(index);
        self.end();
      } else {
        self.render(self.getOutString());
      }
    });
  }

  getBetween() {
    return formatTime(this.endTime - this.now);
  }

  getOutString() {
    var between = this.getBetween();
    return formatTemplete(this.template, between);
  }


}
