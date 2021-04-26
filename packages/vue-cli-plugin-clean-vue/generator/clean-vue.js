const { loadModule } = require('@vue/cli-shared-utils')
module.exports = async (api, options) => {

  const fs = loadModule('fs-extra', api.generator.context)
  fs.emptyDirSync(api.resolve('./src'))
  fs.emptyDirSync(api.resolve('./public'))

  // 删除项目初始文件 https://github.com/vuejs/vue-cli/blob/7f56846a2e54ee5b748232e8b5ae2411a147416d/packages/@vue/cli/lib/Generator.js#L173
  Object.keys(api.generator.files).forEach(p => {
    const _path = p.replace(/\\/g, '/')
    if (_path.startsWith('src') || _path.endsWith('public')) {
      Reflect.deleteProperty(api.generator.files, _path)
    }
  })

  // 2. 删除 package.json vue 项目依赖
  for (const k of ['vue-template-compiler', 'vue']) {
    if (api.generator.pkg.devDependencies[k]) {
      await api.generator.pm.remove(k)
    }
  }
}