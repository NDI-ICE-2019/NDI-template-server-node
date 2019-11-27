var path = require('path');
var nodeExternals = require('webpack-node-externals');

var config = {
  target: "node",
  externals: [nodeExternals()],
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.watch = true;
  }
  return config;
};
