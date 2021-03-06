/*
© 2016 Harald Rudell <c@haraldrudell.com> (http://haraldrudell.com) ISC license.
*/
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'es2016'],
      }
    }]
  },
  debug: true
}
