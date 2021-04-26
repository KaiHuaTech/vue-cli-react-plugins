const cleanVue = require('./clean-vue')

module.exports = async (...args) => {
  const [api, options] = args
  // 删除项目文件
  await cleanVue(api, options)
}