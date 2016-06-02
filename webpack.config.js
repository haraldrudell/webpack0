var path = require('path')
var webpack = require('webpack')

/*
webpack expects a single object to be exported
*/
module.exports = {

  entry: [ // run these files on webpack dev server startup
    'babel-polyfill', // emulates a full ES2015 environment
    './src/main' // the program entry point
    // the last item of the array will be exported, ie. /main.js will be accessible in the browser
  ],

  output: {
      publicPath: '/', // public URL address when references in a browser
      filename: 'main.js'
  },

  devtool: 'source-map',

  module: {

    loaders: [{ // A loader transforms resources
      test: /\.js$/, // any file ending in .js
      include: path.join(__dirname, 'src'), // located in the project folder tree src
      loader: 'babel-loader', // transform using babel
      query: {
        presets: ['es2015'], // build qury string parameter arguments for the loader
      }
    }]
  },
  debug: true
}
