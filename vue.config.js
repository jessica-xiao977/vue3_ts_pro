// const path = require('path')

module.exports = {
  outputDir: './dist',
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alis
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
