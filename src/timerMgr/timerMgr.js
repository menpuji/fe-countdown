import {
  Option
}
from "./option";
import TimerPool from "./timerPool";
import CustomerTimer from "./customerTimer"

class TimerMgr {
  constructor() {
    debugger
    this._timerPool = new TimerPool();
  }

  _getTimer(config) {
    return this._timerPool.getTimer(config)
  }

  generateTimer(opts) {
    const customerTimer = new CustomerTimer(opts);
    const timer = this._getTimer(customerTimer.config);
    customerTimer._timer = timer;
    return customerTimer;
  }
}


const timerMgr = new TimerMgr();

module.exports = timerMgr;
