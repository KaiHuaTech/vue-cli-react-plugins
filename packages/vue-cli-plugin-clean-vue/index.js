const setBabelLoader = require('./setBabelLoader')
module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    
    /* 
    * 删除 vue 相关的配置
    * https://github.com/vuejs/vue-cli/blob/b1772cadd2efca7fdd218f58d788d12e4132d62f/packages/@vue/cli-service/lib/config/base.js
    */
   webpackConfig.resolve.alias.delete('vue$')
   webpackConfig.module.rules.delete('vue')
   webpackConfig.plugins.delete('vue-loader')
   webpackConfig.plugins.delete('feature-flags')
  })

  setBabelLoader(api, options)
}