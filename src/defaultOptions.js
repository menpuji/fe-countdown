module.exports = {
  fixNow: 3 * 1000,
  fixNowDate: false,
  now: new Date().valueOf(),
  template: '{{d}}:{{h}}:{{m}}:{{s}}',
  render: function(outstring) {
    console.log(outstring);
  },
  end: function() {
    console.log('the end!');
  },
  endTime: new Date().valueOf() + 5 * 1000 * 60,
  delayTime: 1000
};
