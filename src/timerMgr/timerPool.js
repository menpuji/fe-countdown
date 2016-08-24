import Timer from "./timer";



export default class TimerPool {
  constructor() {
    this._pool = {};
  }

  getTimer(opts) {
    var t = this._pool[opts.key];
    return t ? t : (this._pool[opts.key] = new Timer(opts.delayTime));
  }

  removeTimer(key) {
    if (this._pool[delayTime]) {
      delete this._pool[delayTime];
    }
  }
}
