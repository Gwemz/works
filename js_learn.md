## JS常用方法整理

工作总应用JS时才发现掌握基础知识的重要性，可以让项目开发更加的快捷

So，总结一些常用方法，方便查找，便于记忆

#### 1. 设置对象变量键值的语法
```
let myKey = 'variableKey';
let obj = {
    key1: 'One',
    key2: 'Two',
    [myKey]: 'Three' /* yay! */
};
obj[myKey]

"Three"
```

#### 2. 箭头函数
```
let calculateTotal = total => total * 1.1;
calculateTotal(10)

11
```

```
let brickEvent = e => e.preventDefault();
document.querySelector('div').addEventListener('click', brickEvent);
```

#### 3. find/findIndex
```
let ages = [12, 19, 6, 4];
let firstAdult = ages.find(age => age >= 18); // 19
let firstAdultIndex = ages.findIndex(age => age >= 18); // 1
```
#### 4. 扩展运算符

```
let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1
let divsArray = [...document.querySelectorAll('div')];
let argsArray = [...arguments];
```

#### 5. 模板字符串
```
let myString = `Hello
I'm a new line`;
let obj = { x: 1, y: 2 };
console.log(`Your total is: ${obj.x + obj.y}`); // Your total is: 3
```

#### 6. 默认参数值
```
function greet(name = 'Anon') {
  console.log(`Hello ${name}!`);
}
greet(); // Hello Anon!
function greet(name = 'Anon', callback = function(){}) {
  console.log(`Hello ${name}!`);
  // No more "callback && callback()" (no conditional)
  callback();
}
function greet(name, callback = function(){}) {}
```

#### 7.js闭包
什么是闭包？
```
function a(){
  var n = 0;
  function inc() {
    n++;
    console.log(n);
  }
  inc(); 
  inc(); 
}
a(); //控制台输出1，再输出2
```

另一串代码：
```
function a(){
  var n = 0;
  this.inc = function () {
    n++; 
    console.log(n);
  };
}
var c = new a();
c.inc();  //控制台输出1
c.inc();  //控制台输出2
```
有权访问另一个函数作用域内变量的函数都是闭包。这里inc函数访问了构造函数a里面的变量n，所以形成了一个闭包。

#### each()和forEach()的区别

forEach()为js方法，而each()为jquery方法(简单的东西往往被我们忽略)

```
var arr = ['aa','bb','cc','dd'];
arr.forEach(function(i,v){
    console.log(i,v);
})

aa 0
bb 1
cc 2
dd 3
```

```
var arr = ['aa','bb','cc','dd'];
$.each(arr,function(i,v){
    console.log(i,v);
})

0 "aa"
1 "bb"
2 "cc"
3 "dd"
```

#### 阻止键盘抬起

```
$("#item").focus(function(){
    document.activeElement.blur();
})
```