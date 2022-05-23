# husky + commitlint

1、 安装 husky
> pnpm install husky  @commitlint/cli  @commitlint/config-conventional -D

2、 添加前置钩子
  // pre-commit：git hooks的钩子，在代码提交前检查代码是否符合规范，不符合规范将不可被提交
  // commit-msg：git hooks的钩子，在代码提交前检查commit信息是否符合规范
  // commitizen：git的规范化提交工具，帮助你填写commit信息，符合约定式提交要求
  // commitlint：用于检测提交的信息
> npm husky add .husky/commit-msg 'npx  --no-install commitlint --edit $1'
> npx husky add .husky/pre-commit "npx lint-staged"   // 执行git commit前先执行 pre-commit

3、在package.json中添加husky配置（原因为，husky 4版本及以下需要是在package.json中如此配置即可，4版本以上，不需要在此配置，需要执行 husky install ，来生成对应的 husky 配置文件）

```json
"husky":{
 "hooks":{
   "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
 }
}
```

4、在使用commitzen 时

- package.json的scripts中增加

```json
"commit": "npx git-cz"
```

- 则可以通过执行 git-cz 命令来进行 commit-msg 格式化选择和提交

备注: 如果一些特殊情况，需要跳过以上两步校验，可使用命令：

```js
git commit --no-verify -m "xxx"
```
