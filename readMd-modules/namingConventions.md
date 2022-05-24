# 命名规范

## 命名规则

- 确切的命名规则
- 同一场景下一致的命名
- 如何避免糟糕的命名

### 如何起名字

- 命名使用准确含义（通常是业务上）的单词

``` js
// bad
getInfo
handleChapter
flag

// good
getBooks
approveChapter
isNumber
```

- 最能表达业务含义的单词前置

```js
// bad
totalUser

// good
userTotal
```

- 禁止自己创造缩写，可以使用常见的缩写（行业或团队内广泛使用）
  注：太多人在创建缩写，不仅变量的缩写，还有很多产品名的缩写。如果你很了解这些缩写，那么不会对你造成困扰，但如今的工作情况是，公司人员流动频繁，跨团队合作很多，当你参加一个会议，其他人的话语中夹杂着各种缩写，“我们刚在bpm里加上了qx”，试用你能明白他们在聊什么吗？

  ```js

  ```

  - 禁止使用拼音，除非是项目或产品名

  - 不要拼错单词 (推荐 vsCode 插件 Code Spell  Checker)

  - 优先从业务词汇表中获取(对一个业务，维护一个公共的词汇表，这样一个业务就不会出现好几个名字了， 并且不仅限于前端，还有后端、数据等.如果采用领域驱动设计的方式，还能让产品也参与到词汇的维护中来)

  - 使用对仗词

  ```js
  add/remove
  increment/decrement
  open/close
  begin/end
  insert/delete

  show/hide
  create/destroy
  lock/unlock
  source/target
  first/last

  min/max
  start/stop
  get/set
  next/previous
  up/down
  old/new
  ```

### 命名方法

- 驼峰命名法 (大驼峰为首字母大写：EmployeeId 小驼峰为首字母小写：employeeId)

  ```js
   // bad
   EmployeeID
   UserAPI

   // good
   EmployeeId
   employeeId

   UserApi
   userApi
  ```

- 串行命名法 (单词之间通过连字符“-”连接)

```js
background-color
header-logo
```

- 蛇形命名法(单词之间通过下划线“_”连接，比如“)

  ```js
    MAX_LIMIT
    max_limit
  ```

### 规范

 1.类命名是名词，表示一个对象，采用大驼峰命名法：class Account
 2.方法命名是动词或动宾短语，表示一个动作，采用小驼峰命名法：function translateArticle()
 3.变量命名，采用小驼峰命名法：userName
 4.常量命名，采用大写蛇形命名法：MAX_NUM
 5.文件模块命名是名词，采用小驼峰命名法：exportExcel.js
 6.组件命名是名词，采用大驼峰命名法：UserHome.vue（index.vue除外）
 7.css类命名采用串行命名法：.header-logo
 8.图片命名采用串行命名法：add-plus.png
 9.目录命名采用串行命名法：user-list
 10.路由路径命名小驼峰命名法：/pay/payInfo
 11.项目命名采用串行命名法：flow-portal

## 命名规范二

### 1、变量命名 （JavaScript的变量名是区分大小写的。小写和大写字母是不同的）

   ```js
    let DogName = 'Scooby-Doo';
    let dogName = 'Droopy';
    let DOGNAME = 'Odie';
    console.log(DogName); // "Scooby-Doo"
    console.log(dogName); // "Droopy"
    console.log(DOGNAME); // "Odie"
   ```

  最值得推荐的声明JavaScript变量的方式是驼峰命名。可以对JavaScript中所有类型的变量使用驼峰命名，以确保不会出现多个同名的变量

  ```js
    // bad
    let dogname = 'Droopy';
    // bad
    let dog_name = 'Droopy';
    // bad
    let DOGNAME = ‘Droopy’;
    // bad
    let DOG_NAME = 'Droopy';
    // good
    let dogName = 'Droopy';
  ```

 变量语义化，变量的名字应该描述存储的值

  ```js
    // bad
    let d = 'Scooby-Doo';
    // bad
    let name = 'Scooby-Doo';
   // good
    let dogName = 'Scooby-Doo';
  ```

### 2、布尔值命名（当涉及到布尔变量时，应该使用 is 或 has 作为前缀）

  ```js
  // bad
  let bark = false;
  // good
  let isBark = false;
  // bad
  let ideal = true;
  // good
  let areIdeal = true;
  // bad
  let owner = true;
  // good
  let hasOwner = true;
  ```

### 3、函数命名 (JavaScript 函数名称也区分大小写。因此，与变量类似，推荐使用驼峰命名.除此之外，还应该使用描述性名词和动词作为前缀)

```js
  // bad
function name(dogName, ownerName) {
  return '${dogName} ${ownerName}';
}

// good
function getName(dogName, ownerName) {
  return '${dogName} ${ownerName}';
}
```

### 4、常量命名 （JavaScript 常量也区分大小写。但是，常量应该大写，因为它们是不变的变量）

  ```js
   const LEG = 4;
   const TAIL = 1;
   const MOVABLE = LEG + TAIL;
  ```

如果变量声明名称包含多个单词，使用下划线分隔

```js
 const DAYS_UNTIL_TOMORROW = 1;
```

### 5、类命名 (JavaScript类的命名规则与函数一样。必须使用描述性的标题来解释这个类的功能)

 ```js
class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }
}

const cartoon = new DogCartoon('Scooby-Doo', 'Shaggy');
 ```

### 6、组件命名 (JavaScript组件在React、Vue等前端框架中被广泛使用。建议使用Pascal命名法（大驼峰式命名法）)

```jsx
// bad
function dogCartoon(roles) {
  return (
    < div >
      < span > Dog Name: { roles.dogName } < /span>
      < span > Owner Name: { roles.ownerName } < /span>
    < /div>
  );
}

// good
function DogCartoon(roles) {
  return (
    < div >
      < span > Dog Name: { roles.dogName } < /span>
      < span > Owner Name: { roles.ownerName } < /span>
    < /div>
  );
}
```

由于首字母总是大写，因此组件在使用时会很容易被看到

```vue
<div>
  <DogCartoon
    roles={{ dogName: 'Scooby-Doo', ownerName: 'Shaggy' }}
  />
</div>
```

### 7、方法命名 (JavaScript 函数和方法的结构非常相似，命名约定规则也是相同的。推荐使用驼峰命名，并使用动词作为前缀)

```js
class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
  }

  getName() {
    return '${this.dogName} ${this.ownerName}';
  }
}

var cartoon= new DogCartoon('Scooby-Doo', 'Shaggy');

console.log(cartoon.getName());
// "Scooby-Doo Shaggy"
```

### 8、私有函数命名 (下划线 _在 MySQL 和 PHP 等语言中广泛用于定义变量、函数和方法。但在 JavaScript 中，下划线用于表示私有变量或函数)

```js
class DogCartoon {
  constructor(dogName, ownerName) {
    this.dogName = dogName;
    this.ownerName = ownerName;
    this.name = _toonName(dogName, ownerName);
  }
  _toonName(dogName, ownerName) {
    return `${dogName} ${ownerName}`;
  }
}

var cartoon = new DodCartoon('Scooby-Doo', 'Shaggy');

// good
var name = cartoon.name;
console.log(name);
// "Scooby-Doo Shaggy"

// bad
name =cartoon._toonName(cartoon.dogName, cartoon.ownerName);
console.log(name);
// "Scooby-Doo Shaggy"
```

### 9、全局变量的命名 (对于全局 JavaScript 变量，没有特定的命名标准。建议对可变全局变量使用驼峰式大小写，对不可变全局变量使用大写)

### 10、 注释规范

- 单行注释（//）
      1、单独一行：//(双斜线)与注释文字之间保留一个空格
      2、在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。
      3、注释代码：//(双斜线)与代码之间保留一个空格

```js
         // 调用了一个函数；1)单独在一行
         setTitle();
         var maxCount = 10; // 设置最大量；2)在代码后面注释
         // setName(); // 3)注释代码

```

- 多行注释（ / 注释说明 /）
   1、若开始(/*和结束*/ )都在一行，推荐采用单行注释
   2、若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

```js
     /*
      * 代码执行到这里后会调用setTitle()函数
      * setTitle()：设置title的值
      */
      setTitle();
```

- 函数（方法）注释 （函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求）

   ```js
    /**
     * 函数说明
     * @关键字
     *
    */
   ```

> 常用注释关键字
> 注释名 语法 含义 示例
>> @param  参数名 {参数类型} 描述信息
>>> @param name {String} 传入名称
>>> @return {返回类型} 描述信息 描述返回值的信息
>>> @return {Boolean} true:可执行;false:不可执行

```js
/**
 - 合并Grid的行
 - [@param](/user/param) grid {Ext.Grid.Panel} 需要合并的Grid
 - [@param](/user/param) cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 - [@param](/user/param) isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完全一样；false(默认)：不完全一样
 - [@return](/user/return) void
 - [@author](/user/author) polk6 2015/07/21
 - [@example](/user/example)
 - _________________                             _________________
 - |  年龄 |  姓名 |                             |  年龄 |  姓名 |
 - -----------------      mergeCells(grid,[0])   -----------------
 - |  18   |  张三 |              =>             |       |  张三 |
 - -----------------                             -  18   ---------
 - |  18   |  王五 |                             |       |  王五 |
 - -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```
