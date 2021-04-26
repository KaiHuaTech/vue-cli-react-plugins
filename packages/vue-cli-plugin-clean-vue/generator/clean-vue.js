const { loadModule } = require('@vue/cli-shared-utils')
module.exports = (api, options) => {
  // 1. 删除原项目 vue 项目 src、public 目录文件
  const fs = loadModule('fs-extra', api.generator.context)
  fs.emptyDirSync(api.resolve('./src'))
  fs.emptyDirSync(api.resolve('./public'))

  // 2. 删除 package.json vue 项目依赖
  api.generator.pm.remove('vue')
}