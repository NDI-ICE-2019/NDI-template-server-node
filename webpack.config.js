var path = require('path');

var config = {
  target: "node",
  entry: './server.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js',
  },
  module: {
      rules: [{
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: [
                  [
                      "@babel/preset-env",
                      {
                          targets: {
                              node: "10"
                          }
                      }
                  ]
              ]
          }
      }]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    watchContentBase: true,
    port: 3000
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.watch = true;
  }
  return config;
};
