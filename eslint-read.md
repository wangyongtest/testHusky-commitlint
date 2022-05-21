# eslint 配置项

  "for-direction":"error", // 强制 for循环中更新子句的计数器朝着正向方向移动  for(let i=0;i<100;i++){}  
    "getter-return": "error", // 强制 getter 函数中出现 return 语句
    "no-compare-neg-zero": "error", //  禁止与 -0比较
    "no-cond-assign":"error", // 禁止条件表达式中出现赋值操作
    "no-constant-condition": "error", // 禁止在条件表达式中使用常量表达式
    "complexity": ["error", 2], // 限制 if……else…… 圈复杂度
    "consistent-return": "error", // 要求 return 语句要么总是指定返回的值，要么不指定
    "curly": ["error", "multi"], // 强制所有控制语句使用一致的括号风格
    "default-case": "error", // 要求awitch 语句中由default分支
    "eqeqeq": "error", // 要求使用 === 和 !==
    "no-alert": "error",
    "no-empty-function":"error",
    "no-eq-null": "error", // 该规则旨在通过确保与 null 比较时只等于 null，而不同时等于 undefined， 来减少潜在的 bug 和 意外行为。因此，它也将标记使用 == 和 != 与 null比较的情况
    "no-extend-native":"error", // 禁止直接修改内建对象的属性,禁止修改 Object.prototype.xxx
    "no-lone-blocks": "error", // 禁用不必要的嵌套块
    "no-loop-func": "error", // 禁止在循环语句中出现包含不安全引用的函数声明
    "no-magic-numbers": ["error", { "ignore": [1] }] , // 禁用魔术数字
    "no-param-reassign": "error", // 禁止对 function 的参数进行重新赋值
    "no-self-compare": "error", // 禁止自身比较
    "no-sequences":"error", // 禁言都好操作符
    "prefer-promise-reject-errors": "error", // 要求使用 Error 对象作为Promise拒绝的原因
    "init-declarations": "error", // 要求或禁止使用 var 声明中的初始化
    "no-label-var":"error", // 禁止标签和变量同名
    "no-shadow": "error", // 禁止变量声明与外层作用域的变量同名
    "no-use-before-define":"error", // 禁止在变量定义之前使用他们
    "max-depth": ["error", 5 ], // 强制可嵌套的块的最大深度
    "max-params": ["error", 3 ], // 强制函数中最大参数
    "new-cap": "error", // 要求构造函数首字母大写
    "prefer-rest-params": "error" // 要求使用剩余参数非 arguments

## eslint-plugin-vue
