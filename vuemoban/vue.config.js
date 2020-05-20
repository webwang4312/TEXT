// 方便了查询路径  别名  导出配置
module.exports = {
  configureWebpack: {
    // resolve表示路径相关
    resolve: {
      // alias:别名
      alias: {
        'components': '@/components',
        // 'content': 'components/content',
        // 'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        // router一般不配别名，只会在main.js里面引用
      }
    }
  }
}
