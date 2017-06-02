const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './demo/entry.js',

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  node: {
    fs: 'empty'
  },

  resolve: {
    alias: {
      'react-covfefe': path.join(__dirname, 'src/covfefe')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devServer: {
    contentBase: 'demo/',
    historyApiFallback: true
  }
}
