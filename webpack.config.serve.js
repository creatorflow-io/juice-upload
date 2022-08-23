const path = require('path');

module.exports = {
  mode: 'production',
  entry: './public/site.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'site.bundle.js',
    library: "JUpload",
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  optimization: {
    // minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};