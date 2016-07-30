module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    path: './dist',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
};