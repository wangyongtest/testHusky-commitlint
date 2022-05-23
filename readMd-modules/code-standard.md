# 代码规范优化条例

01 重复代码
例子

```
```

02 长函数(函数行数达到几百行)
例子

```
```

03 函数参数过长(限制函数参数 最多 3到5)
例子

```
```

04 发散式变化(修改一个组件时影响多个方法需要修改，建议拆分单独函数处理单一功能)
例子

```
```

05 过大的类(一个class 做太多事情维护了太多功能，可读性变差，性能下降)
例子

```
```

06 Feature Envy (依恋情节) 某个函数为了计算某个值，从另一个对象那里调用几乎半打的取值函数。通俗点讲，就是一个函数使用了大量其他类的成员
例子

```
```

07 数据泥团(如果一些数据总是一起出现，并且一起出现更有意义的，可以考虑按数据的业务含义来封装成数据对象)
例子

```
```

08 switch语句 (不仅包括 switch 相关语句， 也包括多层 if……else语句，if^else前台哦超过五层性能不及 switch)
例子

```
```

09 平行继承体系（平行继承体系 其实算是Shotgun Surgery的特殊情况啦。当你为A类的一个子类Ax，也必须为另一个类B相应的增加一个子类Bx）
例子

```
```

010 冗余 (把这些不再重要的类里面的逻辑，合并到相关类，删掉旧的)
例子

```
```

011 两个类彼此使用对方的私有的东西，就是一种坏代码味道
例子

```
```

012 异曲同工的类（A类的接口a，和B类的接口b，做的的是相同一件事，或者类似的事情。我们就把A和B叫做异曲同工的类）
例子

```
```

013 不完美的类库 (大多数对象只要够用就好，如果类库构造得不够好，我们不可能修改其中的类使它完成我们希望完成的工作。可以酱紫：包一层函数或包成新的类)
例子

```
```

014 纯数据类(他们拥有一些字段，以及用于访问、读写、更新这些字段的函数)
例子

```
```

015 过多的注释 (建议大家避免用注释解释代码，避免过多的注释, 优化建议：方法函数、变量的命名要规范、浅显易懂、避免用注释解释代码， 关键、复杂的业务使用清晰简明注释)
例子

```
```

016 神奇命名 (方法函数、变量、类名、模块等，都需要简单明了，浅显易懂。避免靠自己主观意识瞎起名字)
例子

```
```

017  神奇魔法数 (代码中的这个1和2都表示什么意思呢？再比如setStatus(1)中的1又表示什么意思呢？看到类似坏代码, 优化建议：1、新建个常量类，把一些常量放进去，统一管理，并且写好注释，2、建一个枚举类，把相关的魔法数字放到一起管理)

例子

```
```