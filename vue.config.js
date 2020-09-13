const path = require('path')
const config = require('./src/config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? config.productionPublicPath : '/',
  outputDir: 'dist',

  configureWebpack: {
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  },

  productionSourceMap: false,

  css: {
    extract: isProd,
    sourceMap: false,
    requireModuleExtension: true
  },

  parallel: true,

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    historyApiFallback: config.routerHistoryMode
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
