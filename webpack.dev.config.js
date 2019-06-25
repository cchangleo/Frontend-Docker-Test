const { resolve } = require('path')
const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config')

const config = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', resolve('src', 'app', 'app.tsx')],
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports =  smart(base, config)
