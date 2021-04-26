const cleanVue = require('./clean-vue')

module.exports = (...args) => {
  // 删除项目文件
  cleanVue(api, options)

  // 删除项目初始文件 https://github.com/vuejs/vue-cli/blob/7f56846a2e54ee5b748232e8b5ae2411a147416d/packages/@vue/cli/lib/Generator.js#L173
  /* Object.keys(api.generator.files).forEach(p => {
    const _path = p.replace(/\\/g, '/')
    if (_path.endsWith('.vue') || _path.endsWith('src/assets/logo.png')) {
      Reflect.deleteProperty(api.generator.files, _path)
    }
  }) */
}