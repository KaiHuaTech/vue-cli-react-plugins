const cleanVue = require('./clean-vue')

module.exports = (...args) => {
  const [api, options] = args
  // 删除项目文件
  cleanVue(api, options)
}