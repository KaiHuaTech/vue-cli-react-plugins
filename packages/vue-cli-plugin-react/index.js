module.exports = (api, options) => {
  api.chainWebpack(config => {
    
    config.optimization.runtimeChunk("single");
    config.optimization.minimizers.delete("terser");

    config.optimization
      .minimizer("uglifyJs")
      .use(require.resolve("uglifyjs-webpack-plugin"), [
        {
          uglifyOptions: {
            warnings: false,
            parse: {},
            compress: false,
            mangle: true,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: true,
            keep_fnames: false,
          },
        },
      ]);
  })

  config.module.rules.delete('js')
  // todo: add thread cache-loader
  const jsRule = config.module.rule('jsx')
    .test(/jsx?$/)

  if (process.env.NODE_ENV === 'production') {
    jsRule.use('es3-loader')
      .loader(require.resolve('es3ify-loader'))
  }

  jsRule
    .use('babel-loader')
      .loader(require.resolve('babel-loader'))
}