const path = require('path')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // 源码调试模式
  devServer: {
    port: 3001, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true,
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001', // 动态可更换，其他不可
        changOrigin: true, // 允许开启代理，创建虚拟服务端
        pathRewrite: {
          // "^/dev-api":""
        }
      }
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin() // 添加热更新插件
  ]
})
