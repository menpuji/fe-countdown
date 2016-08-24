import timerMgr from "./timerMgr/timerMgr";
import {
  formatTime, formatTemplete, extend
}
from "./utils"

import defaultOptions from "./defaultOptions"



var delayTime = 1000;



export default class CountDown {
  constructor(config) {
    this.config = {}
    for (var i in defaultOptions) {
      if (defaultOptions.hasOwnProperty(i)) {
        this.config[i] = config[i] || defaultOptions[i];
      }
    }
    this.msInterval = timerMgr.generateTimer(this.config)
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
    var index = this.msInterval._timer.add(function() {
      self.now += delayTime;
      if (self.now >= self.endTime) {
        this.msInterval.remove(index);
        self.end();
      } else {
        self.config.render(self.getOutString());
      }
    });
  }

  getBetween() {
    return formatTime(this.config.endTime - this.config.now);
  }

  getOutString() {
    var between = this.getBetween();
    return formatTemplete(this.config.template, between);
  }


}
