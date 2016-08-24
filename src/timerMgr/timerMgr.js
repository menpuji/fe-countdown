var timerMgr = function() {
  this._timePool = new TimePool();
}
timerMgr.prototype.getTimer = function(delay) {
  return this._timePool.getTimer(delay)
}
timerMgr.prototype.createTimer = function(opts) {
  var defaultOptions = {
    delayTime: 1000,
    end: function() {
      console.log("end this.opts")
    },
    start: function() {
      console.log("start this.opts")
    },
    timerFn: function() {
      console.log("timerFn")
    },
    fixNowDate: false,
    startTime: new Date().getTime(),
    endTime: new Date().getTime()
  }

  var config = untils.extend(defaultOptions, opts)
  console.log(config);
  return this._timePool.getTimer(config.delayTime)
}

timerMgr.timer = timer;

export default timerMgr
