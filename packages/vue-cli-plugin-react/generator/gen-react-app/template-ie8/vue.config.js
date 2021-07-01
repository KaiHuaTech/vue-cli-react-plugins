// 配置参考 https://cli.vuejs.org/zh/config/
module.exports = {
  publicPath: './',
  configureWebpack: {
    // devtool: 'source-map',
    resolve: {
      alias: {
      }
    },
    externals: {
      jquery: 'jQuery'
    }
  },
css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            // 自定义颜色主题
            // 当前 less 主题变量 https://github.com/ant-design/ant-design/blob/1.x-stable/components/style/themes/default.less
            // "primary-color": 'green'
          },
        },
      },
    },
  },
};