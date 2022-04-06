# javascript 基础

## 一、基本输入和输出语句
<font color=red>document.write()</font>在网页的< body></ body>中输出内容
<font color=red>alert()</font>在网页弹出框中输出内容
<font color=red>console.log</font>在控制台输出内容
1. javascript的位置
  - 可以在<font color=red>标签的onclick属性中</font>,在点击时会执行
  - 可以中<font color=red>超链接的href中</font>,点击时执行,为空时什么都不执行
```javascript
    //javascript的位置
    <button onclick="alert('hello world')">点我</button>
    <a href="javascript:alert('Hello World');">点一下</a>
    <a href="javascript:;">点一下</a>
```
  - 可以在HTML文件的<font color=red>< head> </ head></font>,中使用。
  - 可以在外部文件中定义然后调用
  - 
```javascript
  <head>
      <script type="text/javascript">
        alert('我是script标签中的代码')
      </script>
      <!--引入外部文件-->
      <script type="text/script" src="文件名"></script>
  </head>
```
  
## 二、基本语法

### 1. 注释、变量声明
```javascript
/*
j这里是多行注释
JS注释
*/

//单行注释
```
JavaScript<font color=red>严格区分大小写</font>,并以分号结尾（可以不写分号(应该写上分号)，浏览器会自动添加,容易出问题）,会自动忽略多个空格和换行

标识符<font color=red>第一个字符</font>必须是<font color=yellow>字母、$、下划线、</font>，剩下的可以是字符、数字、下划线。

ECMAScript标识使用<font color=red>驼峰大小写形式</font>，即第一个单词小写，后面每个单词首字母大写。


在脚本开头使用<font color=red>"use strict</font>开启对整个文件的严格模式。

<font color=red>let和var的区别</font>:
- let声明的范围是<font color=yellow>块作用域</font>，而var的作用域是<font color=yellow>函数作用域</font>,let声明的变量不会在作用域中提升（必须先声明后使用）。
- var声明的变量会成为windows对象的属性（windows.变量名,可以使用），let声明的不会。
- let声明的变量在块执行完后成为未定义(在for语句中使用明显)，var声明的还能使用

const 声明的是常量
实际工作中<font color=red>const使用优先，let次之，不使用var</font>，避免意外同仁导致的非预期行为。
### 2. 数据类型
  - undefined未定义、boolean、string、number、object、function、symbol表示符号
  - typeof 变量，查看变量类型

使用let、var声明了变量，但没有赋值的时候，相当于给变量赋予了undefined值
**增加<font color=red>undefined</font>的作用是为了与空对象指针null和<font color=red>未初始化变量</font>的区别。** undefined是从null派生来的（null==undefined）。null是这指针，undefined是未赋值。

isNaN(变量)判断一个参数是否“不是数值”。

### 3.语句

- if (条件） statement1 else statement2
- do {statement}while(条件)
- while(条件) {statement}
- for(initialization;express;post-loop-express){语句}(与C一样)
- for (property in expression) {statement}
```javascript
  for(const propName in window) {
    //打印window所有的属性名称
    document.write(propName)
  }
```
- for (property of expression) {statement}
  是一种严格的迭代语句，用于遍历可迭代对象的元素。
```javascript
for(const el in [1,3,7,2,9]){
  document.write(el)
}
```
- 标签语句
  label:statemes
```javascript
outmost:
for(let i=1;i<=10;i++){
  ...
  //或continue outmost;相应于是跳转操作。
  break outmost;
}
```
- with语句
```javascript
with(location){
  let gs=search.substring(1)
  let hostName=hostname
  let url=hrer
}
```
- switch语句
```javascript
switch(express){
  case value1:
    statement1
    break;
  case value2:
    statement2
    break;
  default:
    statement3
}
```
### 4. 函数
function 函数名(参数){
  return ...
}

## 三、变量、作用域与内存

### 1. 原始值与引用值
**原始值**就是最简单的数据，**引用值**就是多个值构成的对象。
<font color=red>动态属性</font>:引用值可以随时添加、修改和删除其属性和方法。
>let person=new Object()
person.name='Nicholas'
console.log(person.name)

- 原始值和引用值在通过变量复制时也是不同的，在通过变量把一个<font color=red>原始值赋值到另一个变量时</font>，原始值会被复制到新变量的位置。两个变量完全独立，相互没有关系。

- 引用值从一个变量赋给另一个变量时，复制的是一个指针，它指向存储在堆内存中的对象，<font color=red>两个变量实际指向同一个对象</font>，<font color=green>对其中一个变量修改都会在对象上反映。</font>

- typeof 变量，来确定原始值变量类型, (变量 instanceof 类名)来是否是一个类的实例。
  
### 2. 执行上下文与作用域
- <font color=red>全局上下文是外层的上下文</font>，在浏览器中全局上下文就是<font color=red>windows对象</font>。<font color=green>var定义的</font><font color=red>全局变量和函数</font>都会成为window对象的属性和方法。使用let和const定义的顶级声明不会在全局上下文中，但在<font color=red>作用域解析上效果是一致的。</font>
- 每个函数调用都有自己的上下文，上下文中的代码在执行时，会创建一个作用域链，这个作用域链决定<font color=red>各级上下文中的代码在访问</font>变量和函数时的顺序。<font color=red>运行时先在作用域内查找变量</font>，没有找到的情况下找上一个上下文环境中查找，最后找到全局上下文，全局上下文的变量对象始终是作用域链的最后一个变量对象。
- <font color=red>内部上下文可以通过作用域链访问外部上下文中的一切，但外部上下文无法访问内容上下文中的任何内容。</font> 上下文的连接是纯属的、有序的。

- 作用域链增强 with、try/catch语句的catch块

- 如果变量未经声明就被初始化了，那么它就会被自动添加到<font color=red>全局上下文中</font>

### 3.垃圾回收

  把变量值高以null实际上会切断变量与其之前引用值之间的关系，当下次垃圾回收程序运行时，这些值就会被删除，内存也会被回收。

## 四、基本引用类型（p103)