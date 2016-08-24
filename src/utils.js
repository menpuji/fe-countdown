function cover(num) {
  var n = parseInt(num, 10);
  return n < 10 ? '0' + n : n;
}

function formatTime(ms) {
  var s = ms / 1000,
    m = s / 60;
  return {
    d: cover(m / 60 / 24),
    h: cover(m / 60 % 24),
    m: cover(m % 60),
    s: cover(s % 60)
  };
}

function formatTemplete(template, data) {
  return template.replace(/{{(\w*)}}/g, function(m, key) {
    return data.hasOwnProperty(key) ? data[key] : "";
  })
}

function getNowTime(cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 3) {
      var now = xhr.getResponseHeader('Date');
      cb(new Date(now).valueOf());
    }
  };
  xhr.send(null);
}

function extend(...args) {
  var config = {}
  for (var varible in args[0]) {
    if (args[0].hasOwnProperty(varible)) {
      config[varible] = args[1][varible] || args[0][varible]
    }
  }
  return config;
}

const utils = {
  cover, formatTime, formatTemplete, getNowTime, extend
}

module.exports = utils
