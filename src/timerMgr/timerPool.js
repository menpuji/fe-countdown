function TimePool() {
  this._pool = {};
}

TimePool.prototype = {
  constructor: TimePool,
  getTimer: function(delayTime) {
    var t = this._pool[delayTime];
    return t ? t : (this._pool[delayTime] = new timer(delayTime));
  },
  removeTimer: function(delayTime) {
    if (this._pool[delayTime]) {
      delete this._pool[delayTime];
    }
  }
};
