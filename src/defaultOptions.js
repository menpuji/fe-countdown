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



// export class Option {
//   constructor() {
//     this.fixNow: 3 * 1000;
//     this.fixNowDate: false;
//     this.now: new Date().valueOf();
//     this.template: '{{d}}:{{h}}:{{m}}:{{s}}';
//     this.render: function(outstring) {
//       console.log(outstring);
//     };
//     this.end: function() {
//       console.log('the end!');
//     };
//     this.endTime: new Date().valueOf() + 5 * 1000 * 60;
//     this.delayTime: 1000
//   }
// };
