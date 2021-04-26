module.exports = async (...args) => {
  const [api, options] = args

  // 删除 @vue/cli-serveice 的模板
  api.generator.fileMiddlewares = []

  /* for (const k of ['vue-template-compiler', 'vue']) {
    if (api.generator.pkg.devDependencies[k] || api.generator.pkg.dependencies[k]) {
      await api.generator.pm.remove(k)
    }
  } */

  api.extendPackage({
    dependencies: {
      "vue": null
    },
    devDependencies: {
      "vue-template-compiler": null
    }
  }, {prune: true})
}