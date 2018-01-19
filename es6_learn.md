## ECMAScript 6

ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

### ES6与ECMAScript 2015的关系
媒体里面经常可以看到”ECMAScript 2015“这个词，它与ES6是什么关系呢？

2011年，ECMAScript 5.1版发布后，就开始制定6.0版了。因此，”ES6”这个词的原意，就是指JavaScript语言的下一个版本。

标准委员会最终决定，标准在每年的6月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的6月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6的第一个版本，就这样在2015年6月发布了，正式名称就是《ECMAScript 2015标准》（简称ES2015）。2016年6月，小幅修订的《ECMAScript 2016标准》（简称ES2016）如期发布，这个版本可以看作是ES6.1版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。根据计划，2017年6月将发布ES2017标准。

因此，ES6既是一个历史名词，也是一个泛指，含义是5.1版以后的JavaScript的下一代标准，涵盖了ES2015、ES2016、ES2017等等，而ES2015则是正式名称，特指该年发布的正式版本的语言标准。本书中提到“ES6”的地方，一般是指ES2015标准，但有时也是泛指“下一代JavaScript语言”。

### ES6 let和const命令

ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

```
{
    let a = 10;
    var b = 1;
}
a // ReferenceError: a is not defined.
b // 1
```

#### 不存在变量提升
let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
```
console.log(foo); // 输出undefined
console.log(bar); // 报错ReferenceError

var foo = 2;
let bar = 2;
```
#### 暂时性死区
只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
#### 不允许重复声明
不允许重复声明
```
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}
```
因此，不能在函数内部重新声明参数。
```
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
#### 块级作用域
ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。
ES6的块级作用域
```
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
### const命令
const声明一个只读的常量。一旦声明，常量的值就不能改变
```
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```
const的作用域与let命令相同：只在声明所在的块级作用域内有效。

### ES6 变量的解构赋值
#### 基本用法
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
```
var a = 1;
var b = 2;
var c = 3;
```
ES6允许写成下面这样。
```
var [a, b, c] = [1, 2, 3];
```

#### 默认值
解构赋值允许指定默认值。
```
var [foo = true] = [];
foo // true

[x, y = 'b'] = ['a']; // x='a', y='b'
[x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
#### 对象的解构赋值
解构不仅可以用于数组，还可以用于对象。
```
var { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```
#### 字符串的解构赋值
字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```
#### 数值和布尔值的解构赋值
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```
#### 函数参数的解构赋值
函数的参数也可以使用解构赋值。
```
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```
### 圆括号问题
#### 不能使用圆括号的情况

* 变量声明语句中，不能带有圆括号。
```
// 全部报错
var [(a)] = [1];

var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};

var { o: ({ p: p }) } = { o: { p: 2 } };
```
* 函数参数中，模式不能带有圆括号。
```
// 报错
function f([(z)]) { return z; }
```
* 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。
```
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
```
#### 可以使用圆括号的情况
可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
```
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确 
``` 
### 用途
* 交换变量的值
```
[x, y] = [y, x];
``` 
上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

* 从函数返回多个值
函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
```
// 返回一个数组

function example() {
  return [1, 2, 3];
}
var [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = example();
```
* 函数参数的定义
解构赋值可以方便地将一组参数与变量名对应起来。
```
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```
* 提取JSON数据
解构赋值对提取JSON对象中的数据，尤其有用。
```
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
```
* 函数参数的默认值
```
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};
```
* 遍历Map结构
任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。
```
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```
如果只想获取键名，或者只想获取键值，可以写成下面这样。
```
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```
* 输入模块的指定方法
加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
```
const { SourceMapConsumer, SourceNode } = require("source-map");
```

## ES6 字符串的扩展
ES6加强了对Unicode的支持，并且扩展了字符串对象。

#### 字符的Unicode表示法
JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。
```
"\u0061"
// "a"
```
但是，这种表示法只限于\u0000——\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表达。
```
"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"
```

```
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```
#### codePointAt()
ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
#### String.fromCodePoint()
ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。

#### 字符串的遍历器接口
ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
```
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"
```
除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
#### charAt()
ES5对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。
```
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"
```
#### normalize()
ES6提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。
```
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```
#### includes(), startsWith(), endsWith()
传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
* includes()：返回布尔值，表示是否找到了参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
* endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
#### repeat()
repeat方法返回一个新字符串，表示将原字符串重复n次。
```
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
参数如果是小数，会被取整。
```
'na'.repeat(2.9) // "nana"
```
如果repeat的参数是负数或者Infinity，会报错。
#### padStart()，padEnd()
ES7推出了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart用于头部补全，padEnd用于尾部补全。
```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```
#### 模板字符串
传统的JavaScript语言，输出模板通常是这样写的。
```
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```

```
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

#### 标签模板
模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。
```
alert`123`
// 等同于
alert(123)
```
#### String.raw()

## 函数的扩展
#### 基本用法
在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
默认写法：
```
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
```

这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。

```
function log(x,y = 'world'){
  console.log(x,y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```
可以看到es6要比es5简洁的多

```
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

var p = new Point();
p // { x: 0, y: 0 }
```

#### 与解构赋值默认值结合使用
```
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined, 5
foo({x: 1}) // 1, 5
foo({x: 1, y: 2}) // 1, 2
foo() // TypeError: Cannot read property 'x' of undefined

```
上面代码使用了对象的解构赋值默认值，而没有使用函数参数的默认值。只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值而生成。如果函数foo调用时参数不是对象，变量x和y就不会生成，从而报错。如果参数对象没有y属性，y的默认值5才会生效。

另一个栗子：
```
function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}

fetch('http://example.com', {})
// "GET"

fetch('http://example.com')
// 报错
```

双重复默认值：
```
function fetch(url, { method = 'GET' } = {}) {
  console.log(method);
}

fetch('http://example.com')
// "GET"
```

上面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET。

下边两种写法的区别：
```
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
```
上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。

```
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]
```

#### 参数默认值的位置
通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

```
// 例一
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]

// 例二
function f(x, y = 5, z) {
  return [x, y, z];
}

f() // [undefined, 5, undefined]
f(1) // [1, 5, undefined]
f(1, ,2) // 报错
f(1, undefined, 2) // [1, 5, 2]
```

#### 函数的length属性
指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

```
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```
如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

```
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1
```
#### 作用域
一个需要注意的地方是，如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。

```
var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2
```
如果调用时，函数作用域内部的变量x没有生成，结果就会不一样。

```
let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1
```
如果参数的默认值是一个函数，该函数的作用域是其声明时所在的作用域。请看下面的例子。
```
let foo = 'outer';

function bar(func = x => foo) {
  let foo = 'inner';
  console.log(func()); // outer
}

bar();
```
下面是一个更复杂的例子。
```
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
```
#### 应用

利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

` throw new Error('Missing parameter');`

#### rest参数
ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```
rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量。下面是一个利用rest参数改写数组push方法的例子。

```
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)
```
函数的length属性，不包括rest参数。
```
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
```

## 扩展运算符
#### 含义
扩展运算符（spread）是三个点（...）。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```
该运算符主要用于函数调用
```
function add(x, y) {
  return x + y;
}

var numbers = [4, 38];
add(...numbers) // 42
```
#### 替代数组的apply方法
由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。

```
// ES5的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f(...args);
```

应用Math.max方法，简化求出一个数组最大元素的写法。
```
// ES5的写法
Math.max.apply(null, [14, 3, 77])

// ES6的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```
另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。

```
// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
```
push方法的参数不能是数组，所以只好通过apply方法变通使用push方法。有了扩展运算符，就可以直接将数组传入push方法。

```
// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);
```

#### 扩展运算符的应用
> 合并数组
扩展运算符提供了数组合并的新写法。
```
// ES5
[1, 2].concat(more)
// ES6
[1, 2, ...more]

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

> 与解构赋值结合
扩展运算符可以与解构赋值结合起来，用于生成数组。

```
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []:

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
```
如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```
> 函数的返回值
JavaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的一种变通方法。

```
var dateFields = readDateFields(database);
var d = new Date(...dateFields);
```
> 字符串
扩展运算符还可以将字符串转为真正的数组。
```
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```
> 实现了Iterator接口的对象

任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
```
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
```
querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了Iterator接口。

对于那些没有部署Iterator接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。
```
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];
```
arrayLike是一个类似数组的对象，但是没有部署Iterator接口，扩展运算符就会报错

> Map和Set结构，Generator函数

扩展运算符内部调用的是数据结构的Iterator接口，因此只要具有Iterator接口的对象，都可以使用扩展运算符，比如Map结构。
```
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
```
#### 严格模式
从ES5开始，函数内部可以设定为严格模式。
```
function doSomething(a, b) {
  'use strict';
  // code
}
```
《ECMAScript 2016标准》做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

```
// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
```

#### name属性
函数的name属性，返回该函数的函数名。
```
function foo() {}
foo.name // "foo"
```
需要注意的是，ES6对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5的name属性，会返回空字符串，而ES6的name属性会返回实际的函数名。

```
var func1 = function () {};

// ES5
func1.name // ""

// ES6
func1.name // "func1"
```
如果将一个具名函数赋值给一个变量，则ES5和ES6的name属性都返回这个具名函数原本的名字。
```
const bar = function baz() {};

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"
```
Function构造函数返回的函数实例，name属性的值为“anonymous”。
```
(new Function).name // "anonymous"
```
bind返回的函数，name属性值会加上“bound ”前缀。
```
function foo() {};
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```
## 箭头函数
#### 基本用法
ES6允许使用“箭头”（=>）定义函数。
```
var f = v => v;
```
上面的箭头函数等同于：
```
var f = function(v) {
  return v;
};
```
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
```
var sum = (num1, num2) => { return num1 + num2; }
```
由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
```
var getTempItem = id => ({ id: id, name: "Temp" });
```
箭头函数可以与变量解构结合使用。
```
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}
```
箭头函数使得表达更加简洁。

```
const isEven = n => n % 2 == 0;  isEven(2) //true   isEven(3) //false
const square = n => n * n;
```

箭头函数的一个用处是简化回调函数。

```
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);
```
下面是rest参数与箭头函数结合的例子。
```
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]
```
#### 使用注意点
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

this对象的指向是可变的，但是在箭头函数中，它是固定的。
```
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```
#### 嵌套的箭头函数

