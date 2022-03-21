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
P73页



