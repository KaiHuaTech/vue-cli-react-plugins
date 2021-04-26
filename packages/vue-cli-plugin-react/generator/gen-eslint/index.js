const { loadModule } = require('@vue/cli-shared-utils')
module.exports = async (api, config, rootOptions) => {
  const eslintConfig = require('./eslintOptions').config(api, config.config_eslint, rootOptions)


}