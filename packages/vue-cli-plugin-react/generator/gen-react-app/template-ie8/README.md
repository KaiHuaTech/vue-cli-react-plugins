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
2. 校验 git commit message 信息 (项目使用 [commitlint](https://commitlint.js.org/#/guides-local-setup?id=install-husky) 校验)


#### commitlint 规范

当前的 [信息规范格式](https://github.com/alibaba/f2e-spec/blob/main/packages/commitlint-config-ali/index.js) 说明如下：
基本格式：
```
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```

**Header**   
第一行,被称为 `Header`，基本的格式： `<type>(<scope>): <subject>`，一个基础的使用案例`feat(index): 增加了一个新功能`   
type 可选值：
1. 'feat'：新特性
1. 'fix'：修复
1. 'docs'：文档更新
1. 'style'：样式
1. 'test'：新增或修订单元测试
1. 'refactor'：重构
1. 'chore'：构建过程或辅助工具变更
1. 'revert'：代码回退

**Scope**   
用于标识 commit 影响的范围，可以省略。

**Subject**   
本次修改的简短描述, 基本要求(不强制)为：
1. 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
1. 第一个字母小写
1. 结尾不加句号（.）

**Body**   
可省略。详细描述本次提交，比如此次变更的动机、变更后与之前的差异等。

**Footer**   
可省略。可以为 Breaking Changes 内容或关闭 issues 的关联语句。Breaking Changes 应当以 BREAKING CHANGE: 开头，然后在空格或两个空行后描述其详情。

小技巧：可以执行 `echo '用来测试的提交信息' | ./node_modules/.bin/commitlint` 来提前校验

### 技术栈
| 名称 | 版本 | xxx |
| ---- | ---- | ---- |
| react | [^0.14.9](https://github.com/facebook/react/tree/0.14-stable) |  |
| antd | [^1.x ](https://1x.ant.design/)|  |
| react-router  | [^3.2.6](https://github.com/ReactTraining/react-router/blob/v3.2.6) |  |
| redux  | [^4.1.0](https://github.com/reduxjs/redux/blob/v4.1.0) |  |
| react-redux  | [^5.1.2](https://github.com/reduxjs/react-redux/blob/5.x) |  |
| webpack4 | https://v4.webpack.js.org/ |  |
