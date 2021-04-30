## Commitlint 规范

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

## 参考资料
1. [commitlint官网](https://commitlint.js.org/#/)
2. [使用 commitlint 约束项目 Git 代码提交描述信息格式规范](https://lzw.me/a/git-commitlint.html)
