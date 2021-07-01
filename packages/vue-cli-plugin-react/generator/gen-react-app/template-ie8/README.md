### 快速开始
```
npm run serve
```

### 打包
```
npm run build
```


### 配置
1. 工程配置 [vue-cli 配置](https://cli.vuejs.org/config/).
2. 自定义主题: 项目内置了 `antd 1.x`, 如果要自定义主题，可在 `vue.config.js` 的 less 配置项 `modifyVars` 修改[相关变量](https://ant.design/docs/react/customize-theme-cn)
3. antd 的 iconfont 已经做过本地化处理

### 代码规范
项目内置了基于 [F2ELint](https://github.com/alibaba/f2e-spec/blob/main/packages/f2elint/README.md) Eslint(prettier) 和 StyleLint 配置。

可以执行 `npm run f2elint-scan` 来检查项目的语法，也可以执行 `npm run f2elint-fix` 尝试自动修复。


相关预设
1. [Eslint 预设](https://github.com/alibaba/f2e-spec/blob/main/packages/eslint-config-ali/react.js)
2. [StyleLint 预设](https://github.com/alibaba/f2e-spec/blob/main/packages/stylelint-config-ali/index.js)

如果觉得规范不合理，[欢迎提出 issue](http://gd-gitlab.dc.servyou-it.com/chase/vue-cli-react-plugins/-/issues)   


### GIT 代码提交
项目内置了两个 GIT 钩子：
```js
"husky": {
  "hooks": {
    "pre-commit": "f2elint commit-file-scan",
    "commit-msg": "f2elint commit-msg-scan"
  }
}
```
1. 在 commit 前会自动根据[代码规范](#代码规范)扫描项目代码
2. 校验 git commit message 信息, [点击这里了解细节](./Lint.md)