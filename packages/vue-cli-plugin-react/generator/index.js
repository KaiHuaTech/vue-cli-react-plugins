// preinstalled in @vue/cli-service
// const { loadModule } = require('@vue/cli-shared-utils')
// const cleanVue = require('./clean-vue')
// const genEslint = require('./gen-eslint')
// const genBabel = require('./gen-babel')
module.exports = (...args) => {
  const [api, options] = args

  const {useIE8, useAntd} = options

  // 生成 react app file
  if (useIE8) {
    api.render('./gen-react-app/template-ie8')
  } else {
    api.render('./gen-react-app/template')
  }
  
  if (useIE8) {
    dependencies = {
      "history": "^1.17.0",
      "react": "^0.14.9",
      "react-dom": "^0.14.9",
      "react-loadable": "^5.5.0",
      "react-router": "^1.0.3",
    }

    if (useAntd) {
      dependencies.antd = "^1.x.x"
    }
  } else {
    dependencies = {
      "react": ">17",
      "react-dom": ">17",
    }
    if (useAntd) {
      dependencies.antd = ">4"
    }
  }

  api.extendPackage({
    dependencies
  })

  /* if (options.useEslint) {
    api.genEslint(...args)
  }
 */
  // genBabel(...args)
}