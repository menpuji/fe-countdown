class timer {
  constructor(delay) {
    this._queue = [];
    this.stop = false;
    this._createTimer(delay);
  }

  _createTimer(delay) {
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
        delay = first ? delay : ((cost > delay) ? cost - delay :
          delay);
        timeCounter = setTimeout(countDownStart, delay);
      } else {
        clearTimeout(timeCounter);
      }
    }
    countDownStart();
    first = false;
  }

  add(cb) {
    this._queue.push(cb);
    this.stop = false;
    return this._queue.length - 1;
  }


  remove(index) {
    this._queue.splice(index, 1);
    if (!this._queue.length) {
      this.stop = true;
    }
  }

}
