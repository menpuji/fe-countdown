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
    this._init();
  }

  _init() {
    const self = this;
    if (this.fixNowDate) {
      var fix = new timerMgr.timer(this.fixNow);
      fix.add(function() {
        getNowTime(function(now) {
          self.now = now;
        });
      });
    }
    var index = this.msInterval._timer.add(function() {
      self.config.now += delayTime;
      if (self.config.now >= self.config.endTime) {
        self.config.end();
        timerMgr.remove(self.msInterval); 
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

  stop(){
  }

  destory(){
    debugger
    timerMgr.remove(this.msInterval);
  }

}
