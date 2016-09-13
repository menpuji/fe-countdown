import {
  extend
}
from "./utils"

export const defaultOption = {
  fixNow: 3 * 1000,
  fixNowDate: false,
  now: new Date().valueOf(),
  action: function(time) {
    console.log(time);
  },
  end: function(time) {
    console.log('the end!', time);
  },
  endTime: new Date().valueOf() + 5 * 1000 * 60,
  delayTime: 1000,
  clear: true, //自动清除 调用deatory
  autoStart: true //自动开始
};


export class Option {
  constructor(config) {
    for (var i in defaultOption) {
      if (defaultOption.hasOwnProperty(i)) {
        this[i] = config[i] || defaultOption[i];
      }
    }
  }

  get key() {
    return "delayTime:" + this.delayTime;
  }

};
