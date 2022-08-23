const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/JUpload.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jupload.js',
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