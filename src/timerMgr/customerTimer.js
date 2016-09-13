import {
  Option
}
from "./option"

class CustomerTimer {
  constructor(opts) {
    this.config = new Option(opts);
  }

  reset() {}

  restart() {}

  stop() {}

  start() {}

  getTimeLeft() {}

  getRemainingTime() {}

  reduceDelay() {}

  toggle() {}

  change() {}
}

export default CustomerTimer
