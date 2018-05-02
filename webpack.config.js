const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  entry: {
    js: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        },
      }
    ]
  }
};
