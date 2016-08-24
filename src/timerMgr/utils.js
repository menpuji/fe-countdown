export default
const untils = {
  extend: function(...args) {
    var config = {}
    for (var varible in args[0]) {
      if (args[0].hasOwnProperty(varible)) {
        config[varible] = args[1][varible] || args[0][varible]
      }
    }
    return config;
  }
}
