var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'countdown.js',
    library: 'CountDown',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: 'source-map'
}
