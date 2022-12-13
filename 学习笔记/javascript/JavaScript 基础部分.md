> 前言: 本文章主要来自pink老师的的JavaScript的视频内容，发布至CSDN上，希望加深自己对知识点的理解，也给后面学习前端的同学节省做笔记的时间。我将不定期更新后续内容，求关注收藏，找笔记不迷路。

## 🥔初始JavaScript

## 1.1JavaScript历史

-   布兰登艾奇发明
-   10天完成JavaScript设计
-   网景公司最初命名位liveScript，后来于Sun合作之后将其改为JavaScript

## 1.2JavaScript是什么

-   JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）
-   脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行
-   现在也可以基于Node.js技术进行服务器端编程

## 1.3JavaScript的作用

-   表单动态校验（密码强度检测）（JS产生最初的目的）
-   网页特效
-   服务端开发（Node.js）
-   桌面程序（Electron）
-   APP（Cordova）
-   控制硬件-物联网（Ruff）
-   游戏开发（cocos2d-js）

## 1.4浏览器执行JS简介

浏览器分成两部分：渲染引擎和js引擎

-   渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome浏览器的bink，老版本的webkit
-   JS引擎：也成为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8

浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码。JS引擎执行代码时逐行解释每一句[源码](https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&spm=1001.2101.3001.7020)（转换为机器语言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行执行

## 1.5JS的组成

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-15.png)

### 1.5.1ECMAScript

> [ECMAScript](https://so.csdn.net/so/search?q=ECMAScript&spm=1001.2101.3001.7020)是由ECMA国际（原欧洲计算机制造商协会）进行标准化一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript，但实际上后两者是ECMAScript语言的实现和扩展。

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-7.png)

ECMAScript:ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。

### 1.5.2DOM——文档对象模型

文档对象模型，是W3C组织推荐的处理可扩展标记语言的标准编程接口，通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。

### 1.5.3BOM——浏览器对象模型

BOM，是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转，获取分辨率等

## 1.6JS初体验

js的书写方式

### 1.6.1行内式，直接在元素里面写就可以

```
<input type="text" onclick="alert('弹出')">
```

-   可以讲单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性）
-   注意单双引号的使用：在HTML中我们推荐使用双引号，js中我们推荐使用单引号>
-   可读性差，在HTML中编写JS大量代码时，不方便阅读
-   引号易错，引号多层嵌套匹配时，非常容易混淆
-   特殊情况下使用

### 1.6.2内嵌式

```
<script>
 
</script>
```

-   最常用的方法

### 1.6.3外部

```
 <script src=""></script>
```

-   利于HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
-   引用外部JS文件的script标签中间不可以写代码
-   适用于js代码量比较大的情况

## 1.7js注释

1.  单行注释用//
2.  多行注释用/\*\*/

## 1.8js输入输出语句

为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下：

| **方法** | **说明** | **归属** |
| --- | --- | --- |
| alert(msg) | 浏览器弹出警示框 | 浏览器 |
| console.log(msg) | 浏览器控制台打印输出信息 | 浏览器 |
| prompt(info) | 浏览器弹出输入框，用户可以输入 | 浏览器 |

## 🍅变量

## 2.1什么是变量

白话：变量就是一个装东西的盒子  
通俗：变量用于存放数据的容器。我们通过变量名获取数据，甚至数据可以修改

## 2.2变量在内存中存储

本质：变量是程序在内存中申请的一块用来存放数据的空间

## 2.3变量的使用

1.  声明变量
    
    -   var是一个js关键字，用来声明变量。使用该关键字声明变量后，计算机会自动会变量分配内存空间，不需要程序员管
    -   age是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间
2.  赋值
    

```
<script>
    var age;
    age=1;
</script>
```

```
<script>
  //1. 用户输入姓名 存储到一个 myname的变量里面
  var myname = prompt(" 请输入您的名字");
  //2. 输出这个用户名
  alert(myname);
</script>
```

## 2.4变量语法拓展声明变量特殊情况

### 2.4.1更新变量

一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

```
var age = 18;

age = 81;   // 最后的结果就是81因为18 被覆盖掉了
```

### 2.4.2同时声明多个变量

同时声明多个变量时，只需要写一个 var， 多个变量名之间使用英文逗号隔开。

```
var age = 10,  name = 'zs', sex = 2;       
```

### 2.4.3声明变量特殊情况

| **情况** | **说明** | **结果** |
| --- | --- | --- |
| var age ; console.log (age); | 只声明 不赋值 | undefined |
| console.log(age) | 不声明 不赋值 直接使用 | 报错 |
| age = 10; console.log (age); | 不声明 只赋值 | 10 |

## 2.5变量命名规范

1.  由字母（A-Za-z）、数字（0-9）、下划线、美元符号组成，如usrAge,numo1,name
2.  严格区分大小写，varapp和varApp是两个变量
3.  不能以数字开头，18age是错误的
4.  不能是关键字、保留字，例如：var、for、while
5.  变量名必须有意义，nlbbd不行
6.  遵守驼峰命名法，首字母小写，后面单词的首字母要大写

## 2.6案例：变量的两个值交换

```
<script>
  var temp;
  var appl1 = '青苹果', appl2 = '红苹果';

  temp = appl1;
  appl1 = appl2;
  appl2 = temp;
  
  console.log(appl1);
  console.log(appl2);
</script>
```

## 小结

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-16.png)

## 🧀数据类型

> 变量是用来存储值的所在处，它们有名字和数据类型。变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中。JavaScript是一种弱类型或者说动态语言。这意味着不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。

```
var age=10; // 这是一个数字型
var areYouOk = "是的"; //这是一个字符串
```

## 3.1数据类型

在js中，运行代码时，变量的数据类型是由JS引擎根据=号右边变量值的数据类型来判断的，运行完毕之后变量就确定了数据类型

**js是动态语言变量的数据类型是可以变化的**

```
<script>
  var x = 10;
  x = 'pink';
</script>
```

## 3.2数据类型分类

js把数据类型分为两类：

1.  简单数据类型
2.  复杂数据类型（object）

## 3.3简单数据类型

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-15.png)

### 3.3.1数字型Number

#### 数字型进制

-   八进制：0-7以0打头
-   十六进制：0-9，a-f以0x打头

```
var number1 = 010;
var number2 = 0xa;
```

#### 范围

-   数字型的最大值:Number.MAX\_VALUE
-   数字型的最小值:Number.MIN\_VALUE

```
var number3 = Number.MAX_VALUE;
var number4 = Number.MIN_VALUE;
```

#### 数字型特殊值

-   Infinity ，代表无穷大，大于任何数值
-   \-Infinity ，代表无穷小，小于任何数值
-   NaN ，Not a number，代表一个非数值

```
alert(Infinity);  // Infinity
alert(-Infinity); // -Infinity
alert(NaN);       // NaN
```

```
var number3 = Number.MAX_VALUE * 2;
var number4 = -Number.MAX_VALUE * 2;
```

#### 判断一个变量是否为数字型

isNaN()用来判断一个变量是否为非数字的类型，返回 true 或者 false  
![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-5.png)

### 3.3.2字符串型String

字符串型可以是引号中的任意文本，其语法为 双引号 “” 和 单引号’’

```
var strMsg = "我爱北京天安门~";  // 使用双引号表示字符串
var strMsg2 = '我爱吃猪蹄~';    // 使用单引号表示字符串
// 常见错误
var strMsg3 = 我爱大肘子;       // 报错，没使用引号，会被认为是js代码，但js没有这些语法
```

**因为 HTML 标签里面的属性使用的是双引号，JS 这里我们更推荐使用单引号。**

#### 字符串引号嵌套

**JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双)**

```
var strMsg = '我是"高帅富"程序猿';   // 可以用''包含""
var strMsg2 = "我是'高帅富'程序猿";  // 也可以用"" 包含''
//  常见错误
var badQuotes = 'What on earth?"; // 报错，不能 单双引号搭配
```

#### 字符串转义符

类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。转义符都是 \\ 开头的，常用的转义符及其说明如下：

| **转义符** | **解释说明** |
| --- | --- |
| \\n | 换行符，n 是 newline 的意思 |
| \\ \\ | 斜杠 \\ |
| \\’ | ’ 单引号 |
| \\" | ”双引号 |
| \\t | tab 缩进 |
| \\b | 空格 ，b 是 blank 的意思 |

**转义符使用的时候一定要用引号包裹起来转义符**

```
var str1 = "我是一个’高富帅’的\n程序员";
```

#### 字符串长度

字符串是由若干字符组成的，这些字符的数量就是字符串的长度。通过字符串的 length 属性可以获取整个字符串的长度。

```
Var strMsg = "我是帅气多金的程序猿！”;
alert (strMsg.length); //显示 11
```

#### 字符串拼接+

-   多个字符串之间可以使用 + 进行拼接，其拼接方式为 \*\*字符串 + 任何类型 = 拼接之后的新字符串 \*\*
-   拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串

```
<script>
  console.log('沙漠' + '骆驼');

  console.log('pink老师' + 18);

  console.log('pink老师' + true);

  console.log('12' + 12);

  console.log('pink老师' + 18 + '岁');
</script>
```

**\+ 号总结口诀：数值相加 ，字符相连**

-   我们经常会将字符串和变量来拼接，因为变量可以很方便地修改里面的值
-   变量是不能添加引号的，因为加引号的变量会变成字符串
-   如果变量两侧都有字符串拼接，口诀“引引加加 ”，删掉数字，变量写加中间

```
//加强
var age = 28;
console.log('pink老师' + age + '岁');

//console.log('pink老师' + age);
```

### 3.3.3布尔型boole

布尔型只有两个值：true、false  
布尔型参与运算，true是1，false是0

```
console.log(true + 1);  // 2
console.log(false + 1); // 1
```

### 3.3.4undefined、null

一个声明后没有被赋值的变量会有一个默认值 undefined ( 如果进行相连或者相加时，注意结果）

一个声明变量给 null 值，里面存的值为空（学习对象时，我们继续研究null)

```
<script>
  var str1 = undefined;
  console.log(str1 + 'pink');// undefinedpink
  console.log(str1+1);  //NaN

  var space = null;
  console.log(str1 + 'pink'); //nullpink
  console.log(str1+1); //1

</script>
```

## 3.4获取变量数据类型typeof

```
<script>
  var num = 10;
  console.log(typeof num);
  var str = 'pink';
  console.log(typeof str);
</script>
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-13.png)

## 3.5数据类型转换

> 使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。通俗来说，就是把一种数据类型的变量转换成另外一种数据类型。

常见的数据类型转换：

-   转换为字符串类型
-   转换为数字型
-   转换为布尔型

### 3.5.1转换为字符串

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-11.png)

最重要的是：加号拼接字符串第三种也成为隐式转换

```
<script>
  var num = 10;
  var str = num.toString();
  console.log(str);
  
  console.log(String(num));
  
  console.log('' + num);
</script>
```

### 3.5.2转换为数字型

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-12.png)

前两种最为常用、重点

```
<script>
  var age = '18';
  console.log(parseInt(age)); //18
  console.log(parseInt('3.9')); //3 取整
  console.log(parseInt('120px')); //120 自动去掉px
  console.log(parseInt('rem120px')); //NaN
  
  console.log(parseFloat('3.14')); //3.14
  console.log(parseFloat('120px')); //120
  console.log(parseFloat('rem120px')); //NaN
  
  console.log(Number('123'));//123
  
  console.log('12'-0); //数字12
</script>
```

#### 案例：计算年龄

```
<!-- 在页面中弹出一个输入框，我们输入出生年月份后，能计算出我们的年龄 -->
<script>
  var year = prompt('请输入出生年份');
  var age = 2018 - year;
  //year过来是字符串型 ，但是我们用的是减号，有隐式转换
  alert('您今年' + age + '岁啦');
</script>
```

#### 案例：简单加法计算器

```
<script>
  var num1 = prompt('请输入第一个数值');
  var num2 = prompt('请输入第二个数值');
  alert('最终结果为:' + (parseFloat(num1) + parseFloat(num2)));
</script>
```

### 3.5.3转化为布尔型

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-1.png)

-   代表空、否定的值会被转换为 false ，如 ‘’、0、NaN、null、undefined
-   其余值都会被转换为 true

```
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('小白')); // true
console.log(Boolean(12)); // true
```

## 🥞标识符、关键字、保留字

## 4.1标识符

定义：就是指开发人员为变量、属性、函数、参数取的名字  
标识符不能是关键字或保留字。

## 4.2关键字

关键字：是指 JS本身已经使用了的字，不能再用它们充当变量名、方法名。  
**包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with 等。**

## 4.3保留字

保留字：实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名。  
包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile 等。  
**注意：如果将保留字用作变量名或函数名，那么除非将来的浏览器实现了该保留字，否则很可能收不到任何错误消息。当浏览器将其实现后，该单词将被看做关键字，如此将出现关键字错误。**

## 🍞JavaScript运算符

## 5.1运算符

运算符也被称为操作符，是用于实现赋值、比较和执行算数运算等功能的符号。

JavaScript常见的运算符有：

-   算数运算符
-   递增和递减运算符
-   比较运算符
-   逻辑运算符
-   赋值运算符

### 5.1.1算术运算符

定义：算术运算使用的符号，用于执行两个变量或值的算术运算。  
![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-14.png)

浮点数进行算数运算会有问题的

```
var result = 0.1 + 0.2;    // 结果不是 0.3，而是：0.30000000000000004
console.log(0.07 * 100);   // 结果不是 7，  而是：7.000000000000001
```

### 5.1.2递增递减运算符++ii++

在js中，递增和递减既可以放在变量前面，也可以放在变量后面。  
放在变量前面时，我们可以称为前置递增（递减）运算符；  
放在变量后面时，我们可以称为后置递增（递减）运算符

注意：递增和递减运算符必须和变量配合使用

小结：  
1、前置自增和后置自增如果单独使用效果是一样的  
2、后置递增：先表达式返回原值后面变量再+1  
3、前置递增：先变量+1，后表达式返回原值  
4、与其他代码连用时，执行结果会不同

```
<script>
  var age = 10;
  ++age;
  var p = 10;
  console.log(++p + 10);
  
  
  var age = 10;
  console.log(age++ + 10);
  
  var a = 10;
  ++a;
  var b = ++a + 2;
  console.log(b);
  
  var c = 10;
  c++;
  var d = c++ + 2;
  console.log(d);
  
  var e = 10;
  var f = e++ + ++e;
  console.log(f);
</script>
```

### 5.1.2比较运算符

> 定义：比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，比较运算后，会返回一个布尔值（true/false）作为比较运算的结果

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-18.png)

等号有隐式转换。全等要求两侧的值、数据类型必须一样。双等只要求数值相等

### 5.1.3逻辑运算符

> 定义：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。

-   与&&

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-16.png)

-   或||

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-16.png)

-   非！

逻辑非（！）也叫作取反符，用来取一个布尔值相反的值，如true的相反值是false

> 短路运算原理：当有多个表达式（值）时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值

```
<script>
  /* 
     短路运算
        逻辑与短路运算特点
        语法：表达式1&&表达式2
        如果第一个表达式为真，则返回表达式2
        如果第一个表达式为假，则返回表达式1

        逻辑或运算特点
        语法：表达式1||表达式2
        如果第一个表达式为真，则返回表达式1
        如果第一个表达式为假，则返回表达式2 
    */
  console.log(123 && 456);//  456
  console.log(0 && 456);//  0
  console.log(0 && 1 + 2 && 456);//  0
  
  console.log(123 || 456);//  123
  console.log(0 || 456);//  456

</script>
```

### 5.1.4赋值运算符

> 定义：用来把数据赋值给变量的运算符

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-2.png)

### 5.1.5运算符优先级

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-10.png)

-   **一元运算符里面的逻辑非优先级很高**
-   **逻辑与比逻辑或优先级高**

### 5.2表达式和返回值

表达式：是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合  
简单理解：是由数字、运算符、变量等组成的式子

## 🌭JavaScript流程控制

## 6.1流程控制

在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。  
简单理解： 流程控制就是来控制我们的代码按照什么结构顺序来执行  
流程控制主要有三种结构，分别是**顺序结构、分支结构和循环结构**，这三种结构代表三种代码执行的顺序。

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-15.png)

## 6.2顺序结构

> 顺序结构：是程序中最简单、最基本的流程控制，他没有特定的语法结构，程序会按照代码的先后顺序、依次执行，程序中大多数的代码都是这样执行的

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-14.png)

## 6.3分支结构

### 6.3.1分支结构—if语句

由上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一的过程），从而得到不同的结果  
![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-6.png)

```
//  结构
if(条件表达式){
  //  执行语句
}
```

条件表达式为真，则继续执行大括号里面代码，为假则不执行

```
if(3<5) {
  alert('123');
}
```

### 6.3.2分支结构—ifelse语句（双分支语句）

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-15.png)

```
结构
if(条件表达式){

}
else{

}
```

### 6.3.3分支结构—ifelseif语句

就是利用多个条件来选择不同的语句执行得到不同的结果多选1的过程

```
//结构
if(条件表达式1){
  //语句1
}
else if(条件表达式2){
  //语句2
}
else if(条件表达式3){
  //语句3
}
else{
  //最后的语句
}
```

-   执行思路
    -   如果条件表达式1满足就执行 语句1执行完毕后，退出整个if 分支语句
    -   如果条件表达式1不满足，则判断条件表达式2 满足的话，执行语句2 以此类推
    -   如果上面的所有条件表达式都不成立，则执行else 里面的语句
-   注意点
    -   多分支语句还是多选1 最后只能有一个语句执行
    -   else if 里面的条件理论上是可以任意多个的
    -   else if 中间有个空格了

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-14.png)

### 6.3.4三元表达式

三元表达式结构

```
 条件表达式 ？ 表达式 1 ： 表达式 2
```

如果条件表达式结果为真，则返回表达式1的值；如果结果为假，则返回表达式2的值。

### 6.3.5switch语句

> 定义：switch语句也是多分支语句，它用于基于不同的条件来执行不同的代码。当要针对变量设置一系列的特点之的选项时，就可以使用switch

```
switch(表达式){
  case value1:执行语句1;break;
  case value2:执行语句1;break;
  case value3:执行语句1;break;
  case value4:执行语句1;break;
  default:执行最后的语句;
}
```

**注意**

1.  如果case都没有匹配上，switch中如果有default语句，则执行这个，如果没有则不执行
2.  switch后面的括号和case后面的value的值是全等的形式
3.  **switch后面的括号必须是整数型常量，包括char，short，int，long等，不能是浮点数**

### 6.3.6小结

**switch 语句和 if else if 语句的区别**

1.  一般情况下，它们两个语句可以相互替换’
2.  switch…case 语句通常处理 case为比较确定值的情况， 而 if…else…语句更加灵活，常用于范围判断(大于、等于某个范围)
3.  switch 语句进行条件判断后直接执行到程序的条件语句，效率更高。而if…else 语句有几种条件，就得判断多少次。
4.  当分支比较少时，if… else语句的执行效率比 switch语句高。
5.  当分支比较多时，switch语句的执行效率比较高，而且结构更清晰。

## 6.4循环结构

在实际问题中，有许多具有规律性的重复操作，因此在程序中要完成这类操作就需要重复执行某些语句

循环的主要语句

1.  for循环
2.  while循环
3.  do…while循环

### 6.4.1for循环

在程序中，一组被重复执行的语句被称之为循环体，能否继续重复执行，取决于循环的终止条件。由循环体及循环的终止条件组成的语句，被称之为循环语句

```
// for循环结构
for(初始化变量;条件表达式;操作表达式){
  循环体
}
```

#### 断点调试

断点调试是指自己在程序的某一行设置一个断点，调试时，程序运行到这一行就会停住，然后你可以一步一步往下调试，调试过程中可以看各个变量当前的值，出错的话，调试到出错的代码行即显示错误，停下。  
断点调试可以帮我们观察程序的运行过程

-   浏览器中按 F12–> sources -->找到需要调试的文件–>在程序的某一行设置断点
-   Watch: 监视，通过watch可以监视变量的值的变化，非常的常用。
-   F11: 程序单步执行，让程序一行一行的执行，这个时候，观察watch中变量的值的变化。
-   代码调试的能力非常重要，只有学会了代码调试，才能学会自己解决bug的能力。初学者不要觉得调试代码麻烦就不去调试，知识点花点功夫肯定学的会，但是代码调试这个东西，自己不去练，永远都学不会。
-   今天学的代码调试非常的简单，只要求同学们记住代码调试的这几个按钮的作用即可，后面还会学到很多的代码调试技巧。

#### for循环重复执行相同代码

```
//  基本写法
for(var i = 1; i <= 10; i++){
    console.log('媳妇我错了~');
}
// 用户输入次数
var num = prompt('请输入次数:')；
for ( var i = 1 ; i <= num; i++) {
    console.log('媳妇我错了~');
} 
```

#### for循环重复执行不相同代码

```
//  基本写法
for (var i = 1; i <= 100; i++) {
      console.log('这个人今年' + i + '岁了');
}
```

#### for循环重复某些相同操作

```
// for 里面是可以添加其他语句的 
for (var i = 1; i <= 100; i++) {
 if (i == 1) {
    console.log('这个人今年1岁了， 它出生了');
 } else if (i == 100) {
    console.log('这个人今年100岁了，它死了');
  } else {
       console.log('这个人今年' + i + '岁了');
  }
}
```

### 6.4.2for循环的案例

```
//课堂案例 1： 求1-100之间所有整数的累加和
<script>
  var sum = 0;
  for(var i = 1;i <= 100; i++){
    sumNum += i;
  }
  console.log('1-100之间整数的和 = ' + sum);
</script>
```

```
<script>

  // 1. 求1-100之间所有数的平均值   需要一个 sum 和的变量 还需要一个平均值 average 变量
  var sum = 0;
  var average = 0;
  for (var i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  average = sum / 100;
  console.log(average);
  
  // 2. 求1-100之间所有偶数和奇数的和   我们需要一个偶数的和变量 even  还需要一个奇数 odd
  var even = 0;
  var odd = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      even = even + i;
    } else {
      odd = odd + i;
    }
  }
  console.log('1~100 之间所有的偶数和是' + even);
  console.log('1~100 之间所有的奇数和是' + odd);
  
  // 3. 求1-100之间所有能被3整除的数字的和   
  var result = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      // result = result + i;
      result += i;
    }
  }
  console.log('1~100之间能够被3整数的数字的和是：' + result);

</script>
```

#### 弹出输入框，求平均值

```
<script>
  //弹出输入框 输入总的班级人数（num）
  //依次输入学生成绩  保存起来 score
  //求平均值
  var num = prompt('请输入总的班级人数');
  var sum = 0;
  var average = 0;
  for (var i = 1; i <= num; i++) {
    var score = prompt('请输入第' + i + '个学生的成绩');
    sum = sum + parseFloat(score);
    //prompt取过来的数据是字符串型的需要转换
  }
  average = sum / num;
  alert('班级总的成绩是' + sum);
  alert('班级总的平均分成绩是' + average);
</script>
```

#### 打印星星

```
<script>
//打印星星  一行五个
  var str = '';
  for (var i = 1; i <= 5; i++) {
    str = str + '★';
  }
  console.log(str);
  //如果直接输出星星，他会不在一行显示，所以用字符串加号链接的形式
</script>


<script>
  //打印 5×5  阵列星星
  var str = '';
  //用于链接星星
  for (var j = 1; j <= 5; j++) {
    //控制行数
    for (var k = 1; k <= 5; k++) {
      str = str + '★';
    }
    str = str + '\n';
  }
  console.log(str);
</script>


<script>
  //打印  从上往下 逐行递减的星星阵列
  var str = '';
  //用于链接星星
  for (var j = 1; j <= 10; j++) {
    //控制行数
    for (var k = j; k <= 10; k++) {
      str = str + '★';
    }
    str = str + '\n';
  }
  console.log(str);
</script>


<script>
  //用户输入几行几列
  var row = prompt('请您输入行数');
  var col = prompt('请您输入列数');
  var str = '';
  for (var i = 1; i <= row; i++) {
    //控制行数
    for (var k = 1; k <= col; k++) {
      str = str + '★';
    }
    str = str + '\n';
  }
  console.log(str);
</script>


<script>
  //用户输入几行,第一行的个数，每一行的个数逐行递减
  var row = prompt('请您输入行数');
var s = prompt('请您输入第一行的星星个数');
var str = '';
console.log('行数是' + row);
console.log('每一行的个数是' + s);

for (var i = row; i > 0; i--) {
  //控制行数
  for (var k = 1; k <= i; k++) {
    str = str + '★';
  }
  str = str + '\n';
}
console.log(str);
</script>
```

#### 九九乘法口诀表

```
<script>
  //打印 九九乘法口诀表
  var str = '';
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
      //1×2=2
      //str=str;
      str = str + j + '×' + i + '=' + i * j + '\t';
      //'\t'  表示此公式运行完以后，在一个tab空格
    }
    str = str + '\n';
  }
  console.log(str);

</script>
```

### 6.4.3for循环小结

-   for 循环可以重复执行某些相同代码
-   for 循环可以重复执行些许不同的代码，因为我们有计数器
-   for 循环可以重复执行某些操作，比如算术运算符加法操作随着需求增加，双重
-   for循环可以做更多、更好看的效果双重
-   for 循环，外层循环一次，内层 for 循环全部执行
-   for 循环是循环条件和数字直接相关的循环分析要比写代码更重要一些核心算法想不到，但是要学会，分析它执行过程举一反三，自己经常总结，做一些相似的案例

### 6.4.4while循环

```
//while结构
//初始化变量
while(条件表达式){
  //循环体
  //操作表达式
}
```

```
<script>
  // while循环案例
  // 1. 打印人的一生，从1岁到100岁
  var i = 1;
  while (i <= 100) {
    console.log('这个人今年' + i + '岁了');
    i++;
  }

  // 2. 计算 1 ~ 100 之间所有整数的和
  var sum = 0;
  var j = 1;
  while (j <= 100) {
    sum += j;
    j++
  }
  console.log(sum);
  
  // 3. 弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
  var message = prompt('你爱我吗?');
  while (message !== '我爱你') {
    message = prompt('你爱我吗?');
  }
  alert('我也爱你啊！');
</script>
```

### 6.4.5do…while循环

```
do{

}while(条件表达式);
```

```
<script>
        // while循环案例

        // 1. 打印人的一生，从1岁到100岁
        var i = 1;
        do {
            console.log('这个人今年' + i + '岁了');
            i++;
        } while (i <= 100)
          
          
        // 2. 计算 1 ~ 100 之间所有整数的和
        var sum = 0;
        var j = 1;
        do {
            sum += j;
            j++;
        } while (j <= 100)
        console.log(sum);


        // 3. 弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
        do {
            var message = prompt('你爱我吗?');
        } while (message !== '我爱你')
        alert('我也爱你啊');
</script>
```

## 6.5循环小结

-   JS 中循环有 for 、while 、 do while
-   三个循环很多情况下都可以相互替代使用
-   如果是用来计次数，跟数字相关的，三者使用基本相同，但是我们更喜欢用 for
-   while 和 do…while 可以做更复杂的判断条件，比 for 循环灵活一些
-   while 和 do…while 执行顺序不一样，while 先判断后执行，do…while 先执行一次，再判断执行
-   while 和 do…while 执行次数不一样，do…while 至少会执行一次循环体， 而 while 可能一次也不执行
-   实际工作中，我们更常用for 循环语句，它写法更简洁直观， 所以这个要重点学习

## 6.6continue关键字

> 定义：用于立即跳出本次循环，继续下一次循环（本次循环体中continue之后的代码就会减少执行一次）

```
<script>
        // continue 关键字   退出本次（当前次的循环）  继续执行剩余次数循环
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // 只要遇见 continue就退出本次循环 直接跳到 i++
            }
            console.log('我正在吃第' + i + '个包子');

        }
        // 1. 求1~100 之间， 除了能被7整除之外的整数和 
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                continue;
            }
            sum += i;
        }
        console.log(sum);
</script>
```

## 6.7break关键字

> 定义：用于立即跳出整个循环（循环结束）

```
for (var i = 1; i <= 5; i++) {
      if (i == 3) {
        break;
      }
      console.log('我正在吃第' + i + '个包子');
}
```

## 6.8 JavaScript 命名规范以及语法格式

### 标识符命名规范

1.  变量、函数的命名必须要有意义
2.  变量的名称一般用名词
3.  函数的名称一般用动词

### 操作符规范

```
// 操作符的左右两侧各保留一个空格
for (var i = 1; i <= 5; i++) {
   if (i == 3) {
       break; // 直接退出整个 for 循环，跳到整个for循环下面的语句
   }
   console.log('我正在吃第' + i + '个包子呢');
}
```

### 单行注释规范

```
for (var i = 1; i <= 5; i++) {
   if (i == 3) {
       break; // 单行注释前面注意有个空格
   }
   console.log('我正在吃第' + i + '个包子呢');
}
```

### 其他规范

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述.png)

## 🍟数组

## 7.1数组的概念

> 定义：数组是指一组数据的集合，其中每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。

## 7.2数组的创建方式

1.  利用数组字面量创建数组
2.  利用new创建数组

```
//创建数组 两种方式
//1、利用数组字面量
var arr = [1, 2, 3];
console.log(arr[0]);

//2 利用new Array()
var arr1 = new Array();
var arr2 = new Array(2);//表示数组长度为2 里面有两个空的数组元素
var arr3 = new Array(3, 3);//等价于 [3，3]  表示里面有两个数组元素，一个是3一个是3
console.log(arr3);
```

## 7.3遍历数组

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-8.png)

数组可以通过索引来访问、设置、修改对应的数组元素，我们可以通过“数组名\[索引\]”的形式来获取数组中的元素。

```
// 定义数组
var arrStus = [1,2,3];
// 获取数组中的第2个元素
alert(arrStus[1]);    
```

```
<script>
      var s = [2, 6, 1, 77, 52, 25, 7]
      var max = s[0];
      //因为我们的数组索引号从0开始 ，通常 i 从 0开始  i < 3
      for (var i = i; i <= s.length; i++) {  //s.length  就是数组的长度
        if (max < s[i]) {
          max = s[i];
        }
      }
      console.log(max);
</script>
```

## 7.4新增数组元素

```
<script>
    // 1. 新增数组元素 修改length长度 
    var arr = ['red', 'green', 'blue'];
    console.log(arr.length);
    arr.length = 5; // 把我们数组的长度修改为了 5  里面应该有5个元素 
    console.log(arr);
    console.log(arr[3]); // undefined
    console.log(arr[4]); // undefined
  
    // 2. 新增数组元素 修改索引号 追加数组元素
    var arr1 = ['red', 'green', 'blue'];
    arr1[3] = 'pink';
    console.log(arr1);
    arr1[4] = 'hotpink';
    console.log(arr1);
    arr1[0] = 'yellow'; // 这里是替换原来的数组元素
    console.log(arr1);
    arr1 = '有点意思';
    console.log(arr1); // 不要直接给 数组名赋值 否则里面的数组元素都没有了
</script>
```

## 7.5数组案例

### 7.5.1案例：筛选数组

```
<script>
        
    //方法1
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newarr = [];
        var j = 0; //新数组索引
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] >= 10) {
                newarr[j] = arr[i];
                j++; 
            }
        }
        console.log(newarr);
</script>


//方法2
<script>
        var arr = [1, 2, 3, 4, 5];
        var newArr = [];
        for (var i = 0; i <= arr.length; i++) {
            newarr[newarr.length] = arr[i]; //妙啊
        }
        console.log(newarr);

</script>
```

### 7.5.2案例：冒泡排序（重点）

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-17.png)

```
<script>
    // 冒泡排序
    var arr = [4, 1, 2, 3, 5];

    for (var i = 0; i <= arr.length-1; i++) { // 外层循环管趟数 
      for (var j = 0; j <= arr.length-i-1; j++) { // 里面的循环管 每一趟的交换次数
        // 内部交换2个变量的值 前一个和后面一个数组元素相比较
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
  
      }
    }
    console.log(arr);
</script>
```

### 7.5.3案例：翻转数组

```
<script>
    // 将数组 ['red', 'green', 'blue', 'pink', 'purple'] 的内容反过来存放
    // 1、声明一个新数组 newArr
    // 2、把旧数组索引号第4个取过来（arr.length - 1)，给新数组索引号第0个元素 (newArr.length)
    // 3、我们采取 递减的方式  i--
    var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink'];
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr[newArr.length] = arr[i]
    }
    console.log(newArr);
</script>
```

## 🍯函数

## 8.1函数的概念

> 定义：在JS里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。虽然for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的函数

函数：就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用。

## 8.2函数的使用

声明函数和调用函数

```
<script>
  function 函数名(形参1，形参2) {
    return 需要返回的结果;
  }
  
  函数名(实参1，实参2);
  
     
</script>

 function cook(aru) {
   console.log(aru);
 }

cook('酸辣土豆丝');
```

调用函数：函数名（）；一定要加小括号

1.  函数名常常采用名词
2.  函数不调用，函数不执行
3.  函数调用一定要写小括号
4.  声明函数用function关键字

```
<script>
    // 利用函数计算1-100之间的累加和 
    // 1. 声明函数
    function getSum() {
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
          sum += i;
        }
        console.log(sum);
    }
    // 2. 调用函数
    getSum();
    getSum();
</script>
```

## 8.3形参和实参

> 在声明函数时，可以在函数名称后面的小括号中添加一些参数，这些参数被称为形参，而在调用该函数时，同样也需要传递相应的参数，这些参数被称为实参

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-4.png)

**参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去**

1.  如果实参的个数和形参的个数一致，则正常输出结果
2.  如果实参的个数多余形参的个数会取到形参的个数
3.  如果实实参的个数小于形参的个数，假设形参（num1,num2）给了num1值没有给num2，但是函数的形参是一个局部变量，并且是一个没有接收值的underfined所以结果是：定义了，未赋值，结果为NaN
4.  在函数内部，未声明直接赋值的变量也是全局变量

```
// 1. 利用函数求任意两个数的和
  function getSum(num1, num2) {
      console.log(num1 + num2);
  }
  getSum(1, 3); 
  getSum(3, 8);


// 2. 利用函数求任意两个数之间的和
  function getSums(start, end) {
      var sum = 0;
      for (var i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
  
  }
  getSums(1, 100);
  getSums(1, 10);
// 3. 注意点
// (1) 多个参数之间用逗号隔开
// (2) 形参可以看做是不用声明的变量
```

## 8.4return

1.  我们函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名（）通过return实现的
2.  **只要函数遇到return就把后面的结果返回给函数的调用者** 后面的代码不会执行。 返回函数名（）=return后面的结果
3.  只能返回一个值，如果需要返回多个值，则用数组return\[num1.num2……\]，或者用对象
4.  如果函数里面有return则返回的是return后面的值，如果函数没有return，则返回的是underfined
5.  return不仅能退出循环，还能返回return语句后面的值

-   在使用 return 语句时，函数会停止执行，并返回指定的值
-   如果函数没有 return ，返回的值是 undefined

**注意事项：**

```
// 1. return 终止函数
function getSum(num1, num2) {
  return num1 + num2; // return 后面的代码不会被执行
  alert('我是不会被执行的哦！')
}
console.log(getSum(1, 2));


// 2. return 只能返回一个值
function fn(num1, num2) {
  return num1, num2; // 返回的结果是最后一个值
}
console.log(fn(1, 2));


// 3.  我们求任意两个数的 加减乘数结果
function getResult(num1, num2) {
  return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}
var re = getResult(1, 2); // 返回的是一个数组
console.log(re);


// 4. 我们的函数如果有return 则返回的是 return 后面的值，如果函数没有 return 则返回undefined
function fun1() {
  return 666;
}
console.log(fun1()); // 返回 666
function fun2() {

}
console.log(fun2()); // 函数返回的结果是 undefined
```

### break ,continue ,return 的区别

-   break ：结束当前的循环体（如 for、while）
-   continue ：跳出本次循环，继续执行下次循环（如 for、while）
-   return ：不仅可以退出循环，还能够返回 return 语句中的值，同时还可以结束当前的函数体内的代码

## 8.5函数案例

### 8.5.1案例：求最大值

```
<script>
        //利用函数求数组 【5，2，99，101，67，77】中的最大值
        function getMax(s) {
            var max = s[0];
            for (var i = 1; i <= s.length; i++) {
                if (s[i] > max) {
                    max = s[i];
                }
            }
            return max;
        }

        var re = getMax([5, 2, 99, 101, 67, 77]);
        console.log(re);

    </script>
```

### 8.5.2案例：反转数组

```
<script>
        //；利用函数翻转  任意数组  reverse翻转
        function reverse(arr) {
            var newArr = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                newArr[newArr.length] = arr[i];
            }
            return newArr;
        }
        var arr1 = reverse([1, 3, 4, 6, 9]);
        console.log(arr1);
        var arr2 = reverse(['red', 'pink', 'blue']);
        console.log(arr2);
        /* 结果为：
        9 6 4 3 1
        blue pink red */

    </script>
```

### 8.5.3案例：冒泡排序

```
<script>
        //  函数封装  冒泡排序  sort  排序
        function sort(arr) {
            for (var i = 0; i <= arr.length - 1; i++) {
                //外层循环 负责躺数 5个值 是4躺
                for (var j = 0; j <= arr.length - i - 1; j++) {
                    // 里面循环的次数
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;

                    }
                }
            }
            return arr;
        }
        var arr1=sort([9,4,7]);
        console.log(arr1);
        
</script>
```

## 8.6用榨汁机模拟函数

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-14.png)

## 8.7arguments

> 当我们不确定有多少个参数传递的时候，我们可以用arguments来获取，在JS中，arguments实际上它是当前函数的一个内置对象。所有的函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参

只有函数才有，并且每个函数都有一个arguments对象

arguments是一个伪数组，特点：

1.  具有数组的length属性
2.  按照索引的方式进行存储的
3.  他没有真正数组的一些方法pop()push()等等

```
<script>
      // arguments 的使用  只有函数才有 arguments对象  而且是每个函数都内置好了这个arguments
      function fn() {
          console.log(arguments); // 里面存储了所有传递过来的实参  arguments = [1,2,3]
          console.log(arguments.length);
          console.log(arguments[2]);
  
          // 我们可以按照数组的方式遍历arguments
          for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
  
          }
      }

      fn(1, 2, 3);
      fn(1, 2, 3, 4, 5);
</script>
```

```
<script>
      // 利用函数求任意个数的最大值
      function getMax() { // arguments = [1,2,3]
          var max = arguments[0];
          for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > max) {
              max = arguments[i];
            }
          }
          return max;
      }
      console.log(getMax(1, 2, 3));
      console.log(getMax(1, 2, 3, 4, 5));
      console.log(getMax(11, 2, 34, 444, 5, 100));
</script>


<script>
        // 利用函数翻转任意数组 reverse 翻转
        function reverse(arr) {
            var newArr = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                newArr[newArr.length] = arr[i];
            }
            return newArr;
        }
        var arr1 = reverse([1, 3, 4, 6, 9]);
        console.log(arr1);

        var arr2 = reverse(['red', 'pink', 'blue']);
        console.log(arr2);
</script>
```

### 其他例子

```
<script>
        // 利用函数冒泡排序 sort 排序
        function sort(arr) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var arr1 = sort([1, 4, 2, 9]);
        console.log(arr1);
        var arr2 = sort([11, 7, 22, 999]);
        console.log(arr2);
</script>


<script>
        // 利用函数判断闰年
        function isRunYear(year) {
            // 如果是闰年我们返回 true  否则 返回 false 
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                flag = true;
            }
            return flag;
        }
        console.log(isRunYear(2000));
        console.log(isRunYear(1999));
</script>
```

```
<script>
        // 用户输入年份，输出当前年份2月份的天数
        function backDay() {
            var year = prompt('请您输入年份:');
            if (isRunYear(year)) { // 调用函数需要加小括号
                alert('当前年份是闰年2月份有29天');
            } else {
                alert('当前年份是平年2月份有28天');
            }
        }
        backDay();


        // 判断是否为闰年的函数
        function isRunYear(year) {
            // 如果是闰年我们返回 true  否则 返回 false 
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                flag = true;
            }
            return flag;
        }
</script>
```

## 8.8函数的声明方式

1.  利用function创建函数也成为命名函数
2.  匿名函数只不过是这个变量里面存储的是一个函数，调用的时候是变量名+（）也可以传递参数

```
// 函数的2中声明方式
// 1. 利用函数关键字自定义函数(命名函数)
function fn() {

}
fn();


// 2. 函数表达式(匿名函数) 
var 变量名 = function() {};
```

```
var fun = function(aru) {
  console.log('我是函数表达式');
  console.log(aru);
}
// fun('pink老师');
// (1) fun是变量名 不是函数名  
// (2) 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值 而 函数表达式里面存的是函数
// (3) 函数表达式也可以进行传递参数
```

## 8.9Javascript作用域

### 作用域

> 通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。作用 域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突

JavaScript（es6前）中的作用域有两种：：局部作用域和全局作用域

全局作用域：作用于所有代码执行的环境(整个 script 标签内部)或者一个独立的 js 文件。  
局部作用域（函数作用域)：在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用

### 变量的作用域

变量的作用域：根据作用域的不同我们变量分为全局变量和局部变量

1.  全局变量：在全局作用域下声明的变量（在函数外部定义的变量）。
    -   全局变量在代码的任何位置都可以使用
    -   在全局作用域下 var 声明的变量 是全局变量
    -   特殊情况下，在函数内不使用 var 声明的变量也是全局变量（不建议使用）

注意： 如果在函数内部 没有声明直接赋值的变量也属于全局变量

```
var num = 10; // num就是一个全局变量
console.log(num);

function fn() {
  console.log(num);

}
fn();
// console.log(aru);
```

2.  局部变量：在局部作用域下声明的变量（在函数内部定义的变量）
    
    -   局部变量只能在该函数内部使用
    -   在函数内部 var 声明的变量是局部变量
    -   函数的形参实际上就是局部变量
    
    注意： 函数的形参也可以看做是局部变量
    

```
function fun(aru) {
    var num1 = 10; // num1就是局部变量 只能在函数内部使用
    num2 = 20;
}
fun();
```

3.  全局变量和局部变量的区别  
    (1) 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源；在任何一个地方都可以使用。  
    (2) 局部变量 当我们程序执行完毕就会销毁， 比较节约内存资源；只在函数内部使用，当其所在的代码块被执行时，会被初始化。

```
<script>
    // 作用域链  ： 内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值 这种结构我们称为作用域链   就近原则
    var num = 10;  // 全局变量
  
    function fn() { // 外部函数
      var num = 20;  // 局部变量
  
      function fun() { // 内部函数
        console.log(num);
      }
      fun();
    }
    fn();
</script>jj
```

### JS 没有块级作用域

-   块作用域由 { } 包括。
-   js中没有块级作用域 js的作用域： 全局作用域 局部作用域 现阶段我们js 没有 块级作用域
-   我们js 也是在 es6 的时候新增的块级作用域
-   块级作用域 {} if {} for {}

## 8.10作用域链

1.  只要是代码，就至少有一个作用域
2.  写在函数内部的局部作用域
3.  如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域
4.  根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链

```
function f1(){
  var num=123;
  
  function f2(){
    console.log(num);

  }
  f2();
}
var num=456;
f1();
//  最后输出的是123；采取就近原则，一层一层的往上找
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-9.png)

**作用域链：采取就近原则的方式来查找变量最终的值。**

练习：

```
var a = 1;
function fn1() {
    var a = 2;
    var b = '22';
    fn2();
    function fn2() {
        var a = 3;
        fn3();
        function fn3() {
            var a = 4;
            console.log(a); //a的值 4
            console.log(b); //b的值 22
        }
    }
}
fn1();
```

## 8.11JavaScript 预解析

### 8.11.1 预解析

JavaScript代码是由浏览器中的JavaScript解析器来执行的，JavaScript解析器在运行JavaScript代码的时候分为两步，第一步预解析，第二步代码执行

### 8.11.2 变量预解析和函数预解析

1.  预解析：在当前作用域下, JS 代码执行之前，浏览器会默认把带有 var 和 function 声明的变量在内存中进行提前声明或者定义。
    1.  预解析分为：**变量预解析（变量提升）**和**函数预解析（函数提升）**
2.  第二步：代码执行： 从上到下执行JS语句。

#### 变量预解析（变量提升）

> 变量提升：就是把所有的变量声明提升到当前的作用域最前面，注意不提升赋值操作

```
console.log(num);  // 结果是多少？
var num = 10;      // 10
```

#### 函数预解析（函数提升）

> 函数提升：就是把所有的函数声明提升到当前作用域的最前面，但是不调用函数

```
fn();
function fn() {
    console.log('打印');
}
```

### 8.11.3 案例：预解析

```
<script>
       //预解析案例
       //案例1
        var num = 10; //
        fun();

        function fun() {
             console.log(num);
             var num = 20; //
        }

        // 相当于执行了以下操作
        var num;
        function fun() {
             var num;
             console.log(num);
             num = 20;
        }
        num = 10;
        fun();
</script>
```

```
<script>
        //案例2
        var num = 10;

        function fn() {
             console.log(num);
             var num = 20;
             console.log(num);
        }
        fn();
        
        // 相当于以下代码
        var num;

        function fn() {
             var num;
             console.log(num);
             num = 20;
             console.log(num);
        }
        num = 10;
        fn();
</script>       
```

```
<script>
        // 案例3
        var a = 18;
        f1();

        function f1() {
             var b = 9;
             console.log(a);
             console.log(b);
             var a = '123';
        }

        // 相当于以下代码
        var a;

        function f1() {
             var b;
             var a;
             b = 9;
             console.log(a);
             console.log(b);
             a = '123';
        }
        a = 18;
        f1();
</script>
```

```
<script>
        // 案例4
        f1();
        console.log(c);
        console.log(b);
        console.log(a);

        function f1() {
            var a = b = c = 9;
            console.log(a);
            console.log(b);
            console.log(c);
        }

        // 以下代码
        function f1() {
             var a;
             a = b = c = 9;
             // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
             // 集体声明  var a = 9, b = 9, c = 9;
             console.log(a);//9
             console.log(b);//9
             console.log(c);//9
        }
        f1();
        console.log(c);//9
        console.log(b);//9
        console.log(a);//报错
</script>
```

## 🥖JavaScript对象

## 9.1对象定义

> 定义：万物皆对象，对象是一个具体的事物，看得见摸得着的实物。例如：一本书、一辆汽车、一个人。可以是“对象”，一个数据库、一张网页、一个与远程服务器的连接也可以是“对象”。

## 9.2对象的组成

> 对象是由**属性**和**方法**组成的。所有的事物都是对象，例如字符串、数值、数组、函数等。

对象是由属性和方法组成的：

-   属性：事物的特征，在对象中用属性来表示（常用名词）
-   方法：事物的行为，在对象中用方法来表示（常用动词）

## 9.3创建对象使用对象

在 JavaScript 中，现阶段我们可以采用三种方式创建对象（object）：

1.  利用字面量创建对象
2.  利用newObject创建对象
3.  利用构造函数创建对象

### 9.3.1字面量创建对象

> 对象字面量：就是花括号 { } 里面包含了表达这个具体事物（对象）的属性和方法。{ } 里面采取键值对的形式表示

-   键：相当于属性名
-   值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）

```
var star = {
    name : 'pink',
    age : 18,
    sex : '男',
    sayHi : function(){
        alert('大家好啊~');
    }
};

```

#### 对象的调用

-   对象里面的属性调用 : 对象.属性名 ，这个小点 . 就理解为“ 的 ”
-   对象里面属性的另一种调用方式 : 对象\[‘属性名’\]，注意方括号里面的属性必须加引号，我们后面会用
-   对象里面的方法调用：对象.方法名() ，注意这个方法名字后面一定加括号

```
console.log(star.name)     // 调用名字属性
console.log(star['name'])  // 调用名字属性
star.sayHi();              // 调用 sayHi 方法,注意，一定不要忘记带后面的括号
```

#### 变量、属性、函数、方法总结

-   变量：单独声明赋值，单独存在
-   属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征
-   函数：单独存在的，通过“函数名()”的方式就可以调用
-   方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名()”的方式就可以调用，方法用来描述该对象的行为和功能。

```
<script>
        // 变量、属性、函数、方法的区别
        // 1.变量和属性的相同点 他们都是用来存储数据的 
        var num = 10;
        var obj = {
            age: 18,
            fn: function() {

            }
        }

        function fn() {

        }
        console.log(obj.age);
        // console.log(age);

        // 变量 单独声明并赋值  使用的时候直接写变量名 单独存在
        // 属性 在对象里面的不需要声明的 使用的时候必须是 对象.属性
        // 2. 函数和方法的相同点 都是实现某种功能  做某件事
        // 函数是单独声明 并且调用的 函数名() 单独存在的
        // 方法 在对象里面 调用的时候 对象.方法()
</script>
```

### 9.3.2利用newObject创建对象

```
var andy = new Obect();
andy.name = 'pink';
andy.age = 18;
andy.sex = '男';
andy.sayHi = function(){
    alert('大家好啊~');
}


```

-   Object() ：第一个字母大写
-   new Object() ：需要 new 关键字
-   使用的格式：对象.属性 = 值;

注意

1.  我们是利用等号赋值的方法，添加对象的属性和方法
2.  每个属性和方法之间用分号结尾

### 9.3.3利用构造函数创建对象

> 构造函数定义：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用，我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面

在 js 中，使用构造函数要时要注意以下两点：

-   构造函数用于创建某一类对象，其首字母要大写
-   构造函数要和 new 一起使用才有意义

我们为什么需要使用构造函数? 就是因我们前面两种创建对象的方式一次只能创建一个对象。

实例

```
function Person(name, age, sex) {
     this.name = name;
     this.age = age;
     this.sex = sex;
     this.sayHi = function() {
        alert('我的名字叫：' + this.name + '，年龄：' + this.age + '，性别：' + this.sex);
     }
}

var bigbai = new Person('大白', 100, '男');
var smallbai = new Person('小白', 21, '男');
console.log(bigbai.name);
console.log(smallbai.name);
```

注意：

1.  构造函数约定首字母大写。
2.  函数内的属性和方法前面需要添加 this ，表示当前对象的属性和方法。
3.  构造函数中不需要 return 返回结果。
4.  当我们创建对象的时候，必须用 new 来调用构造函数。

## 9.4构造函数和对象

> 构造函数，如Stars（），抽象了对象的公共部分，封装到了函数里面，它泛指某一大类（class）

> 创建对象，如newStars()，特指某一个，通过new关键字创建对象的过程我们也成为对象实例化

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-19.png)

## 9.5new关键字执行过程

new在执行时会做四件事情：

1.  在内存中创建一个新的空对象
2.  让this指向这个新的对象
3.  执行构造函数里面的代码，给这个新对象添加属性和方法
4.  返回这个新对象（所以构造函数不需要return）

## 9.6遍历对象 for(变量in对象)

> for…in 语句用于对数组或者对象的属性进行循环操作。

```
for (变量 in 对象名字) {
    // 在此执行代码
}
```

```
for (var k in obj) {
    console.log(k);      // 这里的 k 是属性名
    console.log(obj[k]); // 这里的 obj[k] 是属性值
}
```

语法中的变量是自定义的，它需要符合命名规范，通常我们会将这个变量写为 k 或者 key。

实例：

```
<script>
        function Perpos(name, age, sex, height, width) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.height = height;
            this.width = width;
            this.worker = function (worker) {
                this.worker = worker;
            }
        }

        var daidaigou = new Perpos('呆呆狗', 20, '女', 180, '50KG');
        daidaigou.worker('全栈开发工程师');
        for (var k in daidaigou) {
            console.log(k);
            console.log(daidaigou[k]);
        }
    </script>
```

## 9.7对象小结

1.  对象可以让代码结构更清晰
2.  对象复杂数据类型object
3.  本质：对象就是一组无序的相关属性和方法的集合
4.  构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，都统称为苹果
5.  对象实例特指一个事物，比如这个苹果、正在给你们讲课的pink老师等
6.  for……in语句用于对对象的属性进行循环操作

## 🍮JavaScript内置对象

## 10.1JavaScript中的对象分类

1.  JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象
2.  前面两种对象是JS 基础 内容，属于 ECMAScript； 第三个浏览器对象属于我们JS 独有的， 我们JS API 讲解
3.  内置对象就是指 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）
4.  内置对象最大的优点就是帮助我们快速开发
5.  JavaScript 提供了多个内置对象：Math、 Date 、Array、String等

## 10.2Math对象

### 10.2.1 Math概述

> Math 对象不是构造函数，它具有数学常数和函数的属性和方法。跟数学相关的运算（求绝对值，取整、最大值等）可以使用 Math 中的成员。

```
Math.PI // 圆周率
Math.floor()  // 向下取整
Math.ceil()    // 向上取整
Math.round()   // 四舍五入版 就近取整   注意 -3.5   结果是  -3 
Math.abs() // 绝对值
Math.max()/Math.min() // 求最大和最小值 
```

```
<script>
        // math 数学对象  不是一个构造函数，所以我们不需要new来调用，而是直接使用里面的数学和方法即可
        console.log(Math.PI);// 一个属性 圆周率
        console.log(Math.max(1, 99, 3));//99
        console.log(Math.max(-1, -10)); // -1
        console.log(Math.max(1, 99, 'pink老师')); // NaN
        console.log(Math.max()); // -Infinity
        //max如果没有参数 则返回负无穷大
</script>
```

#### 案例：封装自己的数学对象

```
 <script>
        // 利用对象封装自己的数学对象  里面有 PI 最大值和最小值
        var myMath = {
            PI: 3.141592653,
            max: function() {
                var max = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] > max) {
                        max = arguments[i];
                    }
                }
                return max;
            },
            min: function() {
                var min = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] < min) {
                        min = arguments[i];
                    }
                }
                return min;
            }
        }
        console.log(myMath.PI);
        console.log(myMath.max(1, 5, 9));
        console.log(myMath.min(1, 5, 9));
</script>
```

#### 其他案例

```
<script>
        // 1.绝对值方法
        console.log(Math.abs(1)); // 1
        console.log(Math.abs(-1)); // 1
        console.log(Math.abs('-1')); // 隐式转换 会把字符串型 -1 转换为数字型
        console.log(Math.abs('pink')); // NaN 

        // 2.三个取整方法
        // (1) Math.floor()   地板 向下取整  往最小了取值
        console.log(Math.floor(1.1)); // 1
        console.log(Math.floor(1.9)); // 1
        // (2) Math.ceil()   ceil 天花板 向上取整  往最大了取值
        console.log(Math.ceil(1.1)); // 2
        console.log(Math.ceil(1.9)); // 2
        // (3) Math.round()   四舍五入  其他数字都是四舍五入，但是 .5 特殊 它往大了取  
        console.log(Math.round(1.1)); // 1
        console.log(Math.round(1.5)); // 2
        console.log(Math.round(1.9)); // 2
        console.log(Math.round(-1.1)); // -1
        console.log(Math.round(-1.5)); // 这个结果是 -1

</script>
```

### 10.2.2 随机数方法 random()

随机数方法 random() ： 返回的是一个浮点数 取值是\[0,1) 0 =< x < 1 ，这个方法不跟参数

```
<script>        
        //  

        //  得到一个两数之间的随机整数 不包括两个数在内
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
        }
        console.log(getRandomInt(10, 20));

        //  得到一个两数之间的随机整数 包括两个数在内
        function getRandomIntInclusive(min, max) {
            // min = Math.ceil(min);
            // max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        }
        console.log(getRandomIntInclusive(20, 30));

</script>
```

#### 案例：猜数字游戏1231

```
<script>
        // 猜数字游戏
        // 1.随机生成一个1~10 的整数  我们需要用到 Math.random() 方法。
        // 2.需要一直猜到正确为止，所以需要一直循环。
        // 3.while 循环更简单
        // 4.核心算法：使用 if  else if 多分支语句来判断大于、小于、等于。
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var random = getRandom(1, 10);
        while (true) { // 死循环
            var num = prompt('你来猜？ 输入1~10之间的一个数字');
            if (num > random) {
                alert('你猜大了');
            } else if (num < random) {
                alert('你猜小了');
            } else {
                alert('你好帅哦，猜对了');
                break; // 退出整个循环结束程序
            }

        }
        // 要求用户猜 1~50之间的一个数字 但是只有 10次猜的机会
    </script>
```

## 10.3日期对象

### 10.3.1Date 概述

-   Date 对象和 Math 对象不一样，他是一个构造函数，所以我们需要实例化后才能使用
-   Date 实例用来处理日期和时间

### 10.3.2Date()方法的使用

第一步：获取当前时间必须实例化

```
var now = new Date();
console.log(now);
```

第二步：Date() 构造函数的参数  
如果括号里面有时间，就返回参数里面的时间。例如日期格式字符串为‘2019-5-1’，可以写成new Date(‘2019-5-1’) 或者 new Date(‘2019/5/1’)。

-   如果Date()不写参数，就返回当前时间
-   如果Date()里面写参数，就返回括号里面输入的时间

实例：

```
<script>
        // Date() 日期对象  是一个构造函数 必须使用new 来调用创建我们的日期对象
        var arr = new Array(); // 创建一个数组对象
        var obj = new Object(); // 创建了一个对象实例
        // 1. 使用Date  如果没有参数 返回当前系统的当前时间
        var date = new Date();
        console.log(date);
        // 2. 参数常用的写法  数字型  2019, 10, 01  或者是 字符串型 '2019-10-1 8:8:8'
        var date1 = new Date(2019, 10, 1);
        console.log(date1); // 返回的是 11月 不是 10月 
        var date2 = new Date('2019-10-1 8:8:8');
        console.log(date2);
</script>
```

### 10.3.3日期格式化

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-11.png)

案例：格式化日期 年月日

```
<script>
        // 格式化日期 年月日 
        var date = new Date();
        console.log(date.getFullYear()); // 返回当前日期的年  2019
        console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   记得月份+1 呦
        console.log(date.getDate()); // 返回的是 几号
        console.log(date.getDay()); // 3  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0
        // 我们写一个 2019年 5月 1日 星期三
        var year = date.getFullYear();
        var month = date.getMonth() + 1;//补回上面的坑
        var dates = date.getDate();
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var day = date.getDay();
        console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
</script>
```

案例： 格式化日期 时分秒

```
<script>
        // 格式化日期 时分秒
        var date = new Date();
        console.log(date.getHours()); // 时
        console.log(date.getMinutes()); // 分
        console.log(date.getSeconds()); // 秒
        // 要求封装一个函数返回当前的时分秒 格式 08:08:08
        function getTimer() {
            var time = new Date();
            var h = time.getHours();
            h = h < 10 ? '0' + h : h;
            var m = time.getMinutes();
            m = m < 10 ? '0' + m : m;
            var s = time.getSeconds();
            s = s < 10 ? '0' + s : s;
            return h + ':' + m + ':' + s;
        }
        console.log(getTimer());
</script>
```

### 10.3.4获取日期的总的毫秒形式（时间戳）

> Date 对象是基于1970年1月1日（世界标准时间）起的毫秒数

#### 如何获取毫秒

```
// 实例化Date对象
var now = new Date();
// 1. 用于获取对象的原始值
console.log(date.valueOf())
console.log(date.getTime())
// 2. 简单写可以这么做
var now = + new Date();
// 3. HTML5中提供的方法，有兼容性问题
var now = Date.now();
```

#### 案例：倒计时效果

```
<script>
        // 倒计时效果
        // 1.核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时 ，但是不能拿着时分秒相减，比如 05 分减去25分，结果会是负数的。
        // 2.用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
        // 3.把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）
        // 转换公式如下： 
        //  d = parseInt(总秒数/ 60/60 /24);    //  计算天数
        //  h = parseInt(总秒数/ 60/60 %24)   //   计算小时
        //  m = parseInt(总秒数 /60 %60 );     //   计算分数
        //  s = parseInt(总秒数%60);            //   计算当前秒数
        function countDown(time) {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var inputTime = +new Date(time); // 返回的是用户输入时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
            var d = parseInt(times / 60 / 60 / 24); // 天
            d = d < 10 ? '0' + d : d;
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            var m = parseInt(times / 60 % 60); // 分
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60); // 当前的秒
            s = s < 10 ? '0' + s : s;
            return d + '天' + h + '时' + m + '分' + s + '秒';
        }
        console.log(countDown('2019-5-1 18:00:00'));
        var date = new Date();
        console.log(date);
</script>
```

## 10.4数组对象

### 10.4.1 数组对象的创建

创建数组对象的两种方式

-   字面量方式
-   new Array()

```
 <script>
        // 创建数组的两种方式
        // 1. 利用数组字面量
        var arr = [1, 2, 3];
        console.log(arr[0]);

        // 2. 利用new Array()
        // var arr1 = new Array();  // 创建了一个空的数组
        // var arr1 = new Array(2);  // 这个2 表示 数组的长度为 2  里面有2个空的数组元素 
        var arr1 = new Array(2, 3); // 等价于 [2,3]  这样写表示 里面有2个数组元素 是 2和3
        console.log(arr1);
</script>
```

### 10.4.2检测是否为数组instanceof

1.  instanceof 运算符，可以判断一个对象是否属于某种类型

```
var arr = [1, 23];
var obj = {};
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false
console.log(Array.isArray(arr));   // true
console.log(Array.isArray(obj));   // false
```

2.  Array.isArray()用于判断一个对象是否为数组，**isArray() 是 HTML5 中提供的方法**

**实例**

```
    <script>
        // 翻转数组
        function reverse(arr) {
            // if (arr instanceof Array) {
            if (Array.isArray(arr)) {  //
                var newArr = [];
                for (var i = arr.length - 1; i >= 0; i--) {
                    newArr[newArr.length] = arr[i];
                }
                return newArr;
            } else {
                return 'error 这个参数要求必须是数组格式 [1,2,3]'
            }
        }
        console.log(reverse([1, 2, 3]));
        console.log(reverse(1, 2, 3));


        // 检测是否为数组
        // (1) instanceof  运算符 它可以用来检测是否为数组
        var arr = [];
        var obj = {};
        console.log(arr instanceof Array);
        console.log(obj instanceof Array);
        // (2) Array.isArray(参数);  H5新增的方法  ie9以上版本支持
        console.log(Array.isArray(arr));
        console.log(Array.isArray(obj));
</script>
```

### 10.4.3添加删除数组元素的方法

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-9.png)

```
 <script>
        // 添加删除数组元素方法
        // 1. push() 在我们数组的末尾 添加一个或者多个数组元素   push  推
        var arr = [1, 2, 3];
        // arr.push(4, 'pink');
        console.log(arr.push(4, 'pink'));

        console.log(arr);
        // (1) push 是可以给数组追加新的元素
        // (2) push() 参数直接写 数组元素就可以了
        // (3) push完毕之后，返回的结果是 新数组的长度 
        // (4) 原数组也会发生变化


        // 2. unshift 在我们数组的开头 添加一个或者多个数组元素
        console.log(arr.unshift('red', 'purple'));

        console.log(arr);
        // (1) unshift是可以给数组前面追加新的元素
        // (2) unshift() 参数直接写 数组元素就可以了
        // (3) unshift完毕之后，返回的结果是 新数组的长度 
        // (4) 原数组也会发生变化
</script>
```

```
<script>
        // 3. pop() 它可以删除数组的最后一个元素  
        console.log(arr.pop());
        console.log(arr);
        // (1) pop是可以删除数组的最后一个元素 记住一次只能删除一个元素
        // (2) pop() 没有参数
        // (3) pop完毕之后，返回的结果是 删除的那个元素 
        // (4) 原数组也会发生变化


        // 4. shift() 它可以删除数组的第一个元素  
        console.log(arr.shift());
        console.log(arr);
        // (1) shift是可以删除数组的第一个元素 记住一次只能删除一个元素
        // (2) shift() 没有参数
        // (3) shift完毕之后，返回的结果是 删除的那个元素 
        // (4) 原数组也会发生变化
</script>
```

#### 案例： 筛选数组

```
<script>
        // 有一个包含工资的数组[1500, 1200, 2000, 2100, 1800]，要求把数组中工资超过2000的删除，剩余的放到新数组里面
        var arr = [1500, 1200, 2000, 2100, 1800];
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < 2000) {
                // newArr[newArr.length] = arr[i];
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
</script>
```

### 10.4.4数组排序

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-3.png)

```
 <script>
        // 数组排序
        // 1. 翻转数组
        var arr = ['pink', 'red', 'blue'];
        arr.reverse();
        console.log(arr);

        // 2. 数组排序（冒泡排序）
        var arr1 = [13, 4, 77, 1, 7];
        arr1.sort(function(a, b) {
            //  return a - b; 升序的顺序排列
            return b - a; // 降序的顺序排列
        });
        console.log(arr1);
</script>
```

### 10.4.5数组索引方法

![image.png](/学习笔记/网络图片下载/image-6.png)

```
<script>
        // 返回数组元素索引号方法  indexOf(数组元素)  作用就是返回该数组元素的索引号 从前面开始查找
        // 它只返回第一个满足条件的索引号 
        // 它如果在该数组里面找不到元素，则返回的是 -1  
        // var arr = ['red', 'green', 'blue', 'pink', 'blue'];
        var arr = ['red', 'green', 'pink'];
        console.log(arr.indexOf('blue'));
        // 返回数组元素索引号方法  lastIndexOf(数组元素)  作用就是返回该数组元素的索引号 从后面开始查找
        var arr = ['red', 'green', 'blue', 'pink', 'blue'];

        console.log(arr.lastIndexOf('blue')); // 4
</script>
```

#### 案例： 数组去重（重点案例）

```
<script>
        // 数组去重 ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'] 要求去除数组中重复的元素。
        // 1.目标： 把旧数组里面不重复的元素选取出来放到新数组中， 重复的元素只保留一个， 放到新数组中去重。
        // 2.核心算法： 我们遍历旧数组， 然后拿着旧数组元素去查询新数组， 如果该元素在新数组里面没有出现过， 我们就添加， 否则不添加。
        // 3.我们怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回时 - 1 就说明 新数组里面没有改元素
        // 封装一个 去重的函数 unique 独一无二的 
        function unique(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (newArr.indexOf(arr[i]) === -1) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
        // var demo = unique(['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'])
        var demo = unique(['blue', 'green', 'blue'])
        console.log(demo);
</script>
```

### 10.4.6数组转换为字符串

![image.png](/学习笔记/网络图片下载/image-4.png)

```
<script>
        // 数组转换为字符串 
        // 1. toString() 将我们的数组转换为字符串
        var arr = [1, 2, 3];
        console.log(arr.toString()); // 1,2,3

        // 2. join(分隔符) 
        var arr1 = ['green', 'blue', 'pink'];
        console.log(arr1.join()); // green,blue,pink
        console.log(arr1.join('-')); // green-blue-pink
        console.log(arr1.join('&')); // green&blue&pink
</script>
```

### 10.4.7 课下查询

![image.png](/学习笔记/网络图片下载/image-8.png)  
slice() 和 splice() 目的基本相同，建议同学们重点看下 splice()

## 10.5字符串对象

### 10.5.1基本包装类型

为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：String、Number和 Boolean。基本包装类型就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。

```
// 下面代码有什么问题？
var str = 'andy';
console.log(str.length);
```

按道理基本数据类型是没有属性和方法的，而对象才有属性和方法，但上面代码却可以执行，这是因为 js 会把基本数据类型包装为复杂数据类型，其执行过程如下 ：

```
// 1. 生成临时变量，把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2. 赋值给我们声明的字符变量
str = temp;
// 3. 销毁临时变量
temp = null;
```

### 10.5.2字符串的不可变

指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。  
![image.png](/学习笔记/网络图片下载/image-5.png)

```
var str = 'abc';
str = 'hello';
// 当重新给 str 赋值的时候，常量'abc'不会被修改，依然在内存中
// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
var str = '';
for (var i = 0; i < 100000; i++) {
    str += i;
}
console.log(str); // 这个结果需要花费大量时间来显示，因为需要不断的开辟新的空间
```

### 10.5.3根据字符返回位置

**字符串所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串**  
![image.png](/学习笔记/网络图片下载/image-2.png)

```
//字符串对象  根据字符串返回位置
// indexOf(想要查找的字符,起始位置)
var str = '改革春风吹满面，春天来了';
console.log(str.indexOf('春'));
console.log(str.indexOf('春', 3)); // 从索引号是 3的位置开始往后查找
```

#### 案例：返回字符串所有o出现的位置以及次数

```
        //案例 o出现的位置及次数
        var str = 'abcoefoxyozzopp';
        var index = str.indexOf('o');
        var num = 0;
        while (index !== -1) {
            console.log(index);
            num++;
            index = str.indexOf('o', index + 1);
        }
        console.log(num);
```

### 10.5.4根据位置返回字符（重点）

![image.png](/学习笔记/网络图片下载/image-9.png)

```
<script>
        // 根据位置返回字符
        // 1. charAt(index) 根据位置返回字符
        var str = 'andy';
        console.log(str.charAt(3));
        // 遍历所有的字符
        for (var i = 0; i < str.length; i++) {
            console.log(str.charAt(i));
        }
        // 2. charCodeAt(index)  返回相应索引号的字符ASCII值 目的： 判断用户按下了那个键 
        console.log(str.charCodeAt(0)); // 97
        // 3. str[index] H5 新增的
        console.log(str[0]); // a
</script>
```

![image.png](/学习笔记/网络图片下载/image-11.png)

#### 案例：出现次数最多的字符，并统计其次数

```
        //  判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
        // o.a = 1
        // o.b = 1
        // o.c = 1
        // o.o = 4
        // 核心算法：利用 charAt(） 遍历这个字符串
        // 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1
        // 遍历对象，得到最大值和该字符
        var str = 'abcoefoxyozzopp';
        var o = {};
        for (var i = 0; i < str.length; i++) {
            var chars = str.charAt(i); // chars 是 字符串的每一个字符
            if (o[chars]) { // o[chars] 得到的是属性值
                o[chars]++;
            } else {
                o[chars] = 1;
            }
        }
        console.log(o);


        // 2. 遍历对象
        var max = 0;
        var ch = '';
        for (var k in o) {
            // k 得到是 属性名
            // o[k] 得到的是属性值
            if (o[k] > max) {
                max = o[k];
                ch = k;
            }
        }
        console.log(max);
        console.log('最多的字符是' + ch);
```

### 10.6.5字符串的操作方法

![image.png](/学习笔记/网络图片下载/image-9.png)

```
//字符串拼接
//  1.  concat('字符串1','字符串2')
var str = 'andy'
console.log(str.concat('red'));// andyred

//  2   substr('截取的起始位置','截取几个字符')
var str1 = '改革春风吹满地'
console.log(str1.substr(2, 3));//春风吹
```

### 10.6.6replace()方法

replace() 方法用于在字符串中用一些字符替换另一些字符。其使用格式如下：

```
replace(被替换的字符串， 要替换为的字符串)；
```

```
var str = 'andy';
// replace('被替换的字符','替换为的字符') 只能替换被第一次匹配到的字符
console.log(str.replace('a', 'b'));//bndy
```

```
<script>
        // 1. 替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符
        var str = 'andyandy';
        console.log(str.replace('a', 'b'));
        // 有一个字符串 'abcoefoxyozzopp'  要求把里面所有的 o 替换为 *
        var str1 = 'abcoefoxyozzopp';
        while (str1.indexOf('o') !== -1) {
            str1 = str1.replace('o', '*');
        }
        console.log(str1);
</script>
```

### 10.6.7split()方法

split()方法用于切分字符串，它可以将字符串切分为数组。在切分完毕之后，返回的是一个新数组。例如下面代码：

```
var str = 'a,b,c,d';
console.log(str.split(','));   // 返回的是一个数组 [a, b, c, d]
```

### 10.6.8课下查阅

-   toUpperCase() 转换大写
-   toLowerCase() 转换小写

## 🍱JavaScript简单类型和复杂类型

## 11.1简单类型与复杂类型

简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。

-   值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型string ，number，boolean，undefined，null
-   引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型 通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等

## 11.2堆和栈

堆栈空间分配区别：　　  
1、栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；简单数据类型存放到栈里面　　  
2、堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型存放到堆里面  
![image.png](/学习笔记/网络图片下载/image.png)

注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其他语言。  
![image.png](/学习笔记/网络图片下载/image-10.png)

## 11.3简单类型的内存分配

-   值类型（简单数据类型）： string ，number，boolean，undefined，null
-   值类型变量的数据直接存放在变量（栈空间）中

![image.png](/学习笔记/网络图片下载/image-3.png)

## 11.4复杂类型的内存分配

-   引用类型（复杂数据类型）：通过 new 关键字创建的对象（系统对象、自定义对象），如 Object、Array、Date等
-   引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中

![image.png](/学习笔记/网络图片下载/image-1.png)

## 11.5简单类型传参

函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。

```
function fn(a) {
    a++;
    console.log(a); 
}
var x = 10;
fn(x);
console.log(x)；

```

![image.png](/学习笔记/网络图片下载/image-7.png)

## 11.6复杂类型传参

函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

```
function Person(name) {
    this.name = name;
}
function f1(x) { // x = p
    console.log(x.name); // 2. 这个输出什么 ?    
    x.name = "张学友";
    console.log(x.name); // 3. 这个输出什么 ?    
}
var p = new Person("刘德华");
console.log(p.name);    // 1. 这个输出什么 ?    刘德华
f1(p);
console.log(p.name);    // 4. 这个输出什么 ?  
```

![image.png](/学习笔记/网络图片下载/image-10.png)