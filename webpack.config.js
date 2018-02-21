var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'); // this is where all the path are redirected
var SRC_DIR = path.resolve(__dirname, 'src'); // this is where the source of information/code lies

var config = {
  entry: SRC_DIR + '/app/index.js', //this is where transpiring of files should start. Entry point
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/, //lookout for all .js files
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;
