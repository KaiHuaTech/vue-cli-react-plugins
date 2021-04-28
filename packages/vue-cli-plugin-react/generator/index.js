// preinstalled in @vue/cli-service
// const { loadModule } = require('@vue/cli-shared-utils')
// const cleanVue = require('./clean-vue')
// const genEslint = require('./gen-eslint')
// const genBabel = require('./gen-babel')
module.exports = (...args) => {
  const [api, options] = args

  const {useIE8, useAntd} = options

  let devDependencies = {
    "@babel/core": "^7.13.15",
    "babel-loader": "^8.1.0",
    "@babel/preset-env": "^7.13.15",
    "@babel/preset-react": "^7.13.13",
    "@babel/plugin-transform-runtime": "^7.13.15",
  }

  // 生成 react app file
  if (useIE8) {
    api.render('./gen-react-app/template-ie8', {
      useIE8, useAntd
    })
  } else {
    api.render('./gen-react-app/template', {
      useIE8, useAntd
    })
  }
  
  if (useIE8) {
    dependencies = {
      "history": "^1.17.0",
      "react": "^0.14.9",
      "react-dom": "^0.14.9",
      "react-loadable": "^5.5.0",
      "react-router": "^2.3.0",
      "core-js": "^3.9.1",
      "@babel/runtime": "^7.13.15",
    }

    devDependencies = {
      ...devDependencies,
      "es3ify-loader": "^0.2.0",
      "uglifyjs-webpack-plugin": "^2.2.0",
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
  
  if (useAntd) {
    devDependencies = {
      ...devDependencies,
      "babel-plugin-import": "^1.13.3",
    }
  }

  api.extendPackage({
    browserslist: null,
    dependencies,
    devDependencies
  }, {prune: true})

  /* if (options.useEslint) {
    api.genEslint(...args)
  }
 */
  // genBabel(...args)
}