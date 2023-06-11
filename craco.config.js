const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    // 路径别名
    alias: {
      '@': resolve('src')
    }
  }
}
