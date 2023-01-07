const prodConfig = require('./webpack.prod.js')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin() // 实例化分析插件
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = smp.wrap(
  merge(prodConfig, {
    plugins: [new BundleAnalyzerPlugin()]
  })
)
