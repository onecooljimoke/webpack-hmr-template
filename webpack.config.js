var path = require('path');
var SRC = path.join(__dirname, 'src/');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  resolve: {
    root: [SRC],
    alias: {
      app: "components/app",
      example: "components/example"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname
    }]
  },
  devServer: {
    contentBase: SRC
  }
}
