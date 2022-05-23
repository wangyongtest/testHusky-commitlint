# code review 要求

## 说明 comment 等级。reviewer 对相应代码段提出评价时，需要指明对应等级，如

    - fix: xxxxxxx  此处需强制修改，提供修改建议
    - advise: xxxxxxx 此处主观上建议修改，不强制，可提供修改建议
    - question: xxxxxx 此处存在疑虑，需要 author 作出解释
  注意：友好 comment。评价注意措辞，可以说“我们可以如何去调整修改，可能会更合适。。。”，对于比较好的代码，也应该给与足够的赞美。享受 review。避免以挑毛病的心态 review，好的 reviewer 并不是以提的问题多来衡量的。跳出自己的编码风格，主动理解 author 的思路，也是一个很好的学习过程

## CR

    - 提测时发起 cr，需求任务关联 reviewer。提供合并请求，借助 gitlab/sourcetree/vscode gitlens 等工具。reviewer 结束后给与反馈
    - 针对 reviewer 提出的建议修改之后，commit message 注明类似'review fix'相关信息，便于 reviewer 复检。
    - 紧急需求，特事特办，跳过 cr 环节，事后 review

## CR标准

    - 不纠结编码风格。编码风格交给 eslint/tslint/stylelint
    - 代码性能。大数据处理、重复渲染等
    - 代码注释。字段注释、文档注释等
    - 代码可读性。过多嵌套、低效冗余代码、功能独立、可读性变量方法命名等
    -  代码可扩展性。功能方法设计是否合理、模块拆分等
    - 控制 review 时间成本。reviewer 尽量由项目责任人组成，关注代码逻辑，无需逐字逐句理解。
