const webpack = require('webpack');
const merge = require('webpack-merge');

// const helpers = require('./helpers');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  // mode: 'production',

  // output: {
  //   filename: 'js/[name].[hash].js',
  //   chunkFilename: '[id].[hash].chunk.js'
  // },

  // optimization: {
  //   minimize: false //Update this to true or false
  // }

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false,
  //       screw_ie8: true
  //     },
  //     output: {
  //       comments: false
  //     }
  //   })
  // ]

  devtool: 'eval-source-map',

  mode: 'development',

  entry: {
    'app': [
      'webpack-hot-middleware/client?reload=true'
    ]
  },

  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    contentBase: './client/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  }
});
