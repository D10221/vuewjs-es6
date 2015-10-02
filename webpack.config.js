module.exports = {
  entry: './src/main.js',
  output: {
    path: './built',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        //\.es7?
      { test: /\.js$/, loader: 'babel?stage=0' }
    ]
  },
  devtool: 'source-map'
}
