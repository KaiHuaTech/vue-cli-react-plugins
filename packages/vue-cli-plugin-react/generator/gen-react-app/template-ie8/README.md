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
项目当前没有代码规范的配置，推荐使用 [F2ELint](https://github.com/alibaba/f2e-spec/blob/main/packages/f2elint/README.md)

[F2ELint](https://github.com/alibaba/f2e-spec/blob/main/packages/f2elint/README.md) 可以自动生成 Eslint、styleLint、commitLint、markdownLint。 

> F2ELint 收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。

F2ELint 使用：
1. `npm install f2elint -g`
2. `f2elint init`

### 技术栈
| 名称 | 版本 | xxx |
| ---- | ---- | ---- |
| react | [^0.14.9](https://github.com/facebook/react/tree/0.14-stable) |  |
| antd | [^1.x ](https://1x.ant.design/)|  |
| react-router  | [^3.2.6](https://github.com/ReactTraining/react-router/blob/v3.2.6) |  |
| redux  | [^4.1.0](https://github.com/reduxjs/redux/blob/v4.1.0) |  |
| react-redux  | [^5.1.2](https://github.com/reduxjs/react-redux/blob/5.x) |  |
| webpack4 | https://v4.webpack.js.org/ |  |