var path = require('path')
var webpack = require('webpack')

/*
webpack expects a single object to be exported
*/
module.exports = {

  entry: [ // build a bundle by gathering dependencies from these entry points
    'babel-polyfill', // emulates a full ES2015 environment
    './src/main' // the JavaScript to be executed by index.html
    // the last item is exported, ie. accessible by other bundles or web resources
  ],

  // context: an absolute path for resolving entry items, default process.cwd()

  output: {
    publicPath: '/', // public URI folder where the bundle filename is available to a browser
    filename: 'main.js' // the filename of the bundle in the browser
  },

  devtool: 'source-map', // this displays the source code when publicPath/filename is accessed in the browser
  // the source map for /main.js is /main.js.map

  module: {

    loaders: [{ // A loader transforms resources
      test: /\.js$/, // any file ending in .js
      include: path.join(__dirname, 'src'), // located in the project folder tree src
      loader: 'babel-loader', // transform using babel
      query: {
        presets: ['es2015'], // build qury string parameter arguments for the loader
        // this is overriden if there is a .babelrc
      }
    }]
  },

  debug: true // Switch loaders to debug mode. (?)

}
