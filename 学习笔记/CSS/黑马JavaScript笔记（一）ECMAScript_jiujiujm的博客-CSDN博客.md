## 第一天

### 1、简述JavaScript

![在这里插入图片描述](media/在这里插入图片描述-529.png)  
![在这里插入图片描述](media/在这里插入图片描述-572.png)  
1.5  
![在这里插入图片描述](media/在这里插入图片描述-574.png)  
![在这里插入图片描述](media/在这里插入图片描述-518.png)

DOM(文档对象模型)：**标准编程接口**  
BOM(浏览器对象模型)  
![在这里插入图片描述](media/在这里插入图片描述-571.png)  
![在这里插入图片描述](media/在这里插入图片描述-527.png)  
![在这里插入图片描述](media/在这里插入图片描述-558.png)  
建一个my.js,在文件内编写alert(‘滴滴滴’); **使用单引号**

### 2、JS注释

单行注释： ctrl+/  
多行注释：ctrl+shift+/

### 3、JS输入输出语句

![在这里插入图片描述](media/在这里插入图片描述-571.png)  
alert:弹出警示框 输出的 展示给用户的  
prompt：这是一个输入框  
console：控制台输出 给程序员测试用的

## 02变量

### 1、变量概述

![在这里插入图片描述](media/在这里插入图片描述-520.png)

### 2、变量的使用

1.声明变量  
var age； ![在这里插入图片描述](media/在这里插入图片描述-522.png)

2.赋值  
age=10；  
3.输出结果  
console.log(age);  
4.变量的初始化  
var age=10；

### 3、变量语法扩展

```javascript
        // 1. 更新变量
        var myname = 'pink老师';
        console.log(myname);
        myname = '迪丽热巴';
        console.log(myname);
        // 2. 声明多个变量
        var age = 18,
            address = '火影村',
            gz = 2000;
        // 3. 声明变量的特殊情况
        // 3.1 只声明不赋值 结果是？  程序也不知道里面存的是啥 所以结果是 undefined  未定义的
        var sex;
        console.log(sex); // undefined
        // 3.2  不声明 不赋值 直接使用某个变量会报错滴
        // console.log(tel);
        // 3.3 不声明直接赋值使用
        qq = 110;
        console.log(qq);
```

### 4、变量命名规范

![在这里插入图片描述](media/在这里插入图片描述-526.png)

### 5、小结

![在这里插入图片描述](media/在这里插入图片描述-587.png)

## 03数据类型

### 1、数据类型简介

_**1.变量的数据类型**_

```javascript
        // var num; // 这里的num 我们是不确定属于哪种数据类型的
        var num = 10; // num 属于数字型 
        // js 的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的
        var str = 'pink'; // str 字符串型
        // js是动态语言 变量的数据类型是可以变化的
        var x = 10; // x 是数字型 
        x = 'pink'; // x 字符串型
```

**js 的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的**  
js是动态语言 **变量的数据类型是可以变化的**

### 2、简单数据类型

![在这里插入图片描述](media/在这里插入图片描述-563.png)  
![在这里插入图片描述](media/在这里插入图片描述-526.png)  
![在这里插入图片描述](media/在这里插入图片描述-521.png)\*\*![在这里插入图片描述](media/在这里插入图片描述-523.png)

```javascript
        // 无穷大
        console.log(Number.MAX_VALUE * 2); // Infinity 无穷大  
        // 无穷小
        console.log(-Number.MAX_VALUE * 2); // -Infinity 无穷大
        // 非数字
        console.log('pink老师' - 100); // NaN
```

![在这里插入图片描述](media/在这里插入图片描述-524.png)  
_**3.字符串型String**_

语法推荐使用单引号  
![在这里插入图片描述](media/在这里插入图片描述-519.png)  
![在这里插入图片描述](media/在这里插入图片描述-525.png)

```javascript
        // 3. 检测获取字符串的长度 length 
        var str = 'my name is andy';
        console.log(str.length); // 15
        // 4. 字符串的拼接 +  只要有字符串和其他类型相拼接 最终的结果是字符串类型
        console.log('沙漠' + '骆驼'); // 字符串的 沙漠骆驼
        console.log('pink老师' + 18); // 'pink老师18'
        console.log('pink' + true); // pinktrue
        console.log(12 + 12); // 24
        console.log('12' + 12); // '1212'
```

![在这里插入图片描述](media/在这里插入图片描述-519.png)  
![在这里插入图片描述](media/在这里插入图片描述-571.png)  
![在这里插入图片描述](media/在这里插入图片描述-537.png)  
![在这里插入图片描述](media/在这里插入图片描述-576.png)

### 3、获取变量数据类型

![在这里插入图片描述](media/在这里插入图片描述-541.png)  
![在这里插入图片描述](media/在这里插入图片描述-530.png)

### 4、数据类型转换

![在这里插入图片描述](media/在这里插入图片描述-521.png)  
![在这里插入图片描述](media/在这里插入图片描述-528.png)

```javascript
        // 1. 把数字型转换为字符串型 变量.toString()
        var num = 10;
        var str = num.toString();
        console.log(str);
        console.log(typeof str);
        // 2. 我们利用 String(变量)   
        console.log(String(num));
        // 3. 利用 + 拼接字符串的方法实现转换效果 隐式转换
        console.log(num + '');
```

![在这里插入图片描述](media/在这里插入图片描述-565.png)

```javascript
        // var age = prompt('请输入您的年龄');
        // 1. parseInt(变量)  可以把 字符型的转换为数字型 得到是整数
        // console.log(parseInt(age));
        console.log(parseInt('3.14')); // 3 取整
        console.log(parseInt('3.94')); // 3 取整
        console.log(parseInt('120px')); // 120 会去到这个px单位
        console.log(parseInt('rem120px')); // NaN
        // 2. parseFloat(变量) 可以把 字符型的转换为数字型 得到是小数 浮点数
        console.log(parseFloat('3.14')); // 3.14
        console.log(parseFloat('120px')); // 120 会去掉这个px单位
        console.log(parseFloat('rem120px')); // NaN
        // 3. 利用 Number(变量) 
        var str = '123';
        console.log(Number(str));
        console.log(Number('12'));
        // 4. 利用了算数运算 -  *  /  隐式转换
        console.log('12' - 0); // 12
        console.log('123' - '120');//3
        console.log('123' * 1);//123
```

![在这里插入图片描述](media/在这里插入图片描述-535.png)

## 第二天

## 01JavaScript操作符

### 1、运算符

### 2、算数运算符

![在这里插入图片描述](media/在这里插入图片描述-531.png)  
![在这里插入图片描述](media/在这里插入图片描述-542.png)  
![在这里插入图片描述](media/在这里插入图片描述-534.png)  
![在这里插入图片描述](media/在这里插入图片描述-533.png)

### 3、递增和递减运算符

![在这里插入图片描述](media/在这里插入图片描述-567.png)  
![在这里插入图片描述](media/在这里插入图片描述-578.png)  
![在这里插入图片描述](media/在这里插入图片描述-536.png)  
![在这里插入图片描述](media/在这里插入图片描述-536.png)  
![在这里插入图片描述](media/在这里插入图片描述-543.png)

### 4、比较运算符

![在这里插入图片描述](media/在这里插入图片描述-535.png)  
![在这里插入图片描述](media/在这里插入图片描述-553.png)

### 5、逻辑运算符

![在这里插入图片描述](media/在这里插入图片描述-538.png)  
![在这里插入图片描述](media/在这里插入图片描述-557.png)  
![在这里插入图片描述](media/在这里插入图片描述-532.png)  
![在这里插入图片描述](media/在这里插入图片描述-543.png)  
![在这里插入图片描述](media/在这里插入图片描述-529.png)

### 6、赋值运算符

![在这里插入图片描述](media/在这里插入图片描述-543.png)

### 7、运算符优先级

![在这里插入图片描述](media/在这里插入图片描述-575.png)

## 02JavaScript流程控制-分支

### 1、流程控制

![在这里插入图片描述](media/在这里插入图片描述-578.png)

### 2、顺序流程控制

![在这里插入图片描述](media/在这里插入图片描述-537.png)

### 3、分支流程控制if语句

if语句

```javascript
        // 1. if 的语法结构   如果if
        // if (条件表达式) {
        //     // 执行语句
        // }

        // 2. 执行思路  如果 if 里面的条件表达式结果为真 true 则执行大括号里面的 执行语句 
        // 如果if 条件表达式结果为假 则不执行大括号里面的语句 则执行if 语句后面的代码
        // 3. 代码体验
        if (3 < 5) {
            alert('沙漠骆驼');
        }
```

if else语句

```javascript
        // 1. 语法结构  if 如果  else 否则
        // if (条件表达式) {
        //     // 执行语句1
        // } else {
        //     // 执行语句2 
        // }
        // 2. 执行思路 如果表达式结果为真 那么执行语句1  否则  执行语句2
        // 3. 代码验证
        var age = prompt('请输入您的年龄:');
        if (age >= 18) {
            alert('我想带你去网吧偷耳机');
        } else {
            alert('滚， 回家做作业去');
        }
        // 5. if里面的语句1 和 else 里面的语句2 最终只能有一个语句执行  2选1
        // 6.  else 后面直接跟大括号
```

if else if语句（多分支语句）

```javascript
        // 1. 多分支语句   就是利用多个条件来选择不同的语句执行 得到不同的结果  多选1 的过程
        // 2. if else if语句是多分支语句
        // 3. 语法规范
        if (条件表达式1) {
            // 语句1;
        } else if (条件表达式2) {
            // 语句2;
        } else if (条件表达式3) {
            // 语句3;
        } else {
            // 最后的语句;
        }
        // 4. 执行思路
        // 如果条件表达式1 满足就执行 语句1 执行完毕后，退出整个if 分支语句  
        // 如果条件表达式1 不满足，则判断条件表达式2  满足的话，执行语句2 以此类推
        // 如果上面的所有条件表达式都不成立，则执行else 里面的语句
        // 5. 注意点
        // (1) 多分支语句还是多选1 最后只能有一个语句执行
        // (2) else if 里面的条件理论上是可以任意多个的
        // (3) else if 中间有个空格了
```

### 4、三元表达式

```javascript
        // 1. 有三元运算符组成的式子我们称为三元表达式
        // 2. ++num     3 + 5     ? :
        // 3. 语法结构 
        // 条件表达式 ？ 表达式1 ： 表达式2
        // 4. 执行思路
        // 如果条件表达式结果为真 则 返回 表达式1 的值 如果条件表达式结果为假 则返回 表达式2 的值
        // 5. 代码体验
        var num = 10;
        var result = num > 5 ? '是的' : '不是的'; // 我们知道表达式是有返回值的
        console.log(result);
        // if (num > 5) {
        //     result = '是的';
        // } else {
        //     result = '不是的';
        // }
```

### 5、分支流程控制switch语句

```javascript
        // 1. switch 语句也是多分支语句 也可以实现多选1
        // 2. 语法结构 switch 转换、开关  case 小例子或者选项的意思
        // switch (表达式) {
        //     case value1:
        //         执行语句1;
        //         break;
        //     case value2:
        //         执行语句2;
        //         break;
        //         ...
        //         default:
        //             执行最后的语句;
        // }
        // 3. 执行思路  利用我们的表达式的值 和 case 后面的选项值相匹配 如果匹配上，就执行该case 里面的语句  如果都没有匹配上，那么执行 default里面的语句
        // 4. 代码验证
        switch (8) {
            case 1:
                console.log('这是1');
                break;
            case 2:
                console.log('这是2');
                break;
            case 3:
                console.log('这是3');
                break;
            default:
                console.log('没有匹配结果');

        }
```

![在这里插入图片描述](media/在这里插入图片描述-549.png)

```javascript
        // switch注意事项
        var num = 1;
        switch (num) {
            case 1:
                console.log(1);

            case 2:
                console.log(2);

            case 3:
                console.log(3);
                break;


        }
        // 1. 我们开发里面 表达式我们经常写成变量
        // 2. 我们num 的值 和 case 里面的值相匹配的时候是 全等   必须是值和数据类型一致才可以 num === 1
        // 3. break 如果当前的case里面没有break 则不会退出switch 是继续执行下一个case
```

![在这里插入图片描述](media/在这里插入图片描述-543.png)

## 第三天

## 01JavaScript流程控制-循环

### 1、循环

![在这里插入图片描述](media/在这里插入图片描述-538.png)

### 2、for循环

for循环语法

```javascript
        // 1. for 重复执行某些代码， 通常跟计数有关系
        // 2. for 语法结构
        // for (初始化变量; 条件表达式; 操作表达式) {
        //     // 循环体
        // }
        // 3. 初始化变量 就是用var 声明的一个普通变量， 通常用于作为计数器使用 
        // 4. 条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件
        // 5. 操作表达式 是每次循环最后执行的代码 经常用于我们计数器变量进行更新（递增或者递减）
        // 6. 代码体验 我们重复打印100局 你好
        for (var i = 1; i <= 100; i++) {
            console.log('你好吗');
        }
```

for循环执行过程

```javascript
        // for 循环的执行过程
        for (var i = 1; i <= 100; i++) {
            console.log('你好吗');
        }
        // 1. 首先执行里面的计数器变量  var i = 1 .但是这句话在for 里面只执行一次  index
        // 2. 去 i <= 100 来判断是否满足条件， 如果满足条件  就去执行 循环体  不满足条件退出循环 
        // 3. 最后去执行 i++   i++是单独写的代码 递增  第一轮结束 
        // 4. 接着去执行 i <= 100 如果满足条件  就去执行 循环体  不满足条件退出循环   第二轮
 
```

![在这里插入图片描述](media/在这里插入图片描述-566.png)  
案例1

```javascript
        // 弹出输入框输入总的班级人数(num)
        // 依次输入学生的成绩（ 保存起来 score）， 此时我们需要用到
        // for 循环， 弹出的次数跟班级总人数有关系 条件表达式 i <= num
        // 进行业务处理: 计算成绩。 先求总成绩（ sum）， 之后求平均成绩（ average）
        // 弹出结果
        var num = prompt('请输入班级的总人数:'); // num 总的班级人数
        var sum = 0; // 求和的变量
        var average = 0; // 求平均值的变量
        for (var i = 1; i <= num; i++) {
            var score = prompt('请您输入第' + i + '个学生成绩');
            // ***因为从prompt取过来的数据是 字符串型的需要转换为数字型***
            sum = sum + parseFloat(score);
        }
        average = sum / num;
        alert('班级总的成绩是' + sum);
        alert('班级平均分是：' + average);
```

### 3、双重for循环

语法结果

```javascript
        // 1. 双重for循环 语法结构
        // for (外层的初始化变量; 外层的条件表达式; 外层的操作表达式) {
        //     for (里层的初始化变量; 里层的条件表达式; 里层的操作表达式) {
        //         // 执行语句;
        //     }
        // }
        // 2. 我们可以把里面的循环看做是外层循环的语句
        // 3. 外层循环循环一次， 里面的循环执行全部
        // 4. 代码验证
        for (var i = 1; i <= 3; i++) {
            console.log('这是外层循环第' + i + '次');
            for (var j = 1; j <= 3; j++) {
                console.log('这是里层的循环第' + j + '次');

            }
        }
```

案例1：九九乘法表

```javascript
        var a = '';
        for (var i = 1; i <= 10; i++) {
            for (var j = 1; j <= i; j++) {
                a += j + 'x' + i + '=' + j*i + '\t';
            }
            a += '\n';
        }
        console.log(a);
```

![在这里插入图片描述](media/在这里插入图片描述-551.png)

### 4、while循环

while循环语法结构

```javascript
        // 1. while 循环语法结构  while 当...的时候
        // while (条件表达式) {
        //     // 循环体
        // }
        // 2. 执行思路  当条件表达式结果为true 则执行循环体 否则 退出循环
        // 3. 代码验证
        var num = 1;
        while (num <= 100) {
            console.log('好啊有');
            num++;
        }
        // 4. 里面应该也有计数器 初始化变量
        // 5. 里面应该也有操作表达式  完成计数器的更新 防止死循环
```

### 5、do while循环

do while语法结构

```javascript
        // 1.do while 循环 语法结构
        do {
            // 循环体
        } while (条件表达式)
        // 2.  执行思路 跟while不同的地方在于 do while 先执行一次循环体 在判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环
        // 3. 代码验证
        var i = 1;
        do {
            console.log('how are you?');
            i++;
        } while (i <= 100)
        // 4. 我们的do while 循环体至少执行一次
```

![在这里插入图片描述](media/在这里插入图片描述-578.png)

### 6、continue，break

continue关键字

```javascript
        // continue 关键字   退出本次（当前次的循环）  继续执行剩余次数循环
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // 只要遇见 continue就退出本次循环 直接跳到 i++
            }
            console.log('我正在吃第' + i + '个包子');

        }
```

break关键字

```javascript
        // break 退出整个循环
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                break;
            }
            console.log('我正在吃第' + i + '个包子');

        }
```

## 02JavaScript命名规范

![在这里插入图片描述](media/在这里插入图片描述-536.png)  
![在这里插入图片描述](media/在这里插入图片描述-560.png)  
![在这里插入图片描述](media/在这里插入图片描述-536.png)  
![在这里插入图片描述](media/在这里插入图片描述-538.png)

## 第四天

## 01JavaScript数组

### 1、数组的概念

### 2、创建数组

```javascript
        // 1.数组(Array) ：就是一组数据的集合 存储在单个变量下的优雅方式 
        // 2. 利用new 创建数组
        var arr = new Array(); // 创建了一个空的数组
        // 3. 利用数组字面量创建数组 []
        var arr = []; // 创建了一个空的数组
        var arr1 = [1, 2, 'pink老师', true];
        // 4. 我们数组里面的数据一定用逗号分隔
       // 5. 数组里面的数据 比如1,2， 我们称为数组元素
```

![在这里插入图片描述](media/在这里插入图片描述-538.png)

### 3、获取数组中的元素

```javascript

        // 6. 获取数组元素  格式 数组名[索引号]  索引号从 0开始 
        console.log(arr1);
        console.log(arr1[2]); // pink老师
        console.log(arr1[3]); // true
        var arr2 = ['迪丽热巴', '古丽扎娜', '佟丽丫丫'];
        console.log(arr2[0]);
        console.log(arr2[1]);
        console.log(arr2[2]);
        console.log(arr2[3]); // 因为没有这个数组元素 所以输出的结果是 undefined

```

### 4、遍历数组

```javascript
        // 遍历数组：就是把数组的元素从头到尾访问一次
        var arr = ['red', 'green', 'blue'];
        for (var i = 0; i < 3; i++) {
            console.log(arr[i]);
        }
        // 1. 因为我们的数组索引号从0开始 ，所以 i 必须从 0开始  i < 3
        // 2. 输出的时候 arr[i]  i 计数器当索引号来用
```

![在这里插入图片描述](media/在这里插入图片描述-542.png)

### 5、数组中新增元素

![在这里插入图片描述](media/在这里插入图片描述-553.png)  
![在这里插入图片描述](media/在这里插入图片描述-561.png)

### 6、数组案例

## 02JavaScript函数

### 1、函数的概念

![在这里插入图片描述](media/在这里插入图片描述-541.png)

### 2、函数的使用

![在这里插入图片描述](media/在这里插入图片描述-544.png)  
![在这里插入图片描述](media/在这里插入图片描述-577.png)

### 3、函数的参数

![在这里插入图片描述](media/在这里插入图片描述-585.png)  
![在这里插入图片描述](media/在这里插入图片描述-544.png)

```javascript
        // 1. 函数可以重复相同的代码
        // function cook() {
        //     console.log('酸辣土豆丝');

        // }
        // cook();
        // cook();
        // 2. 我们可以利用函数的参数实现函数重复不同的代码
        // function 函数名(形参1,形参2...) { // 在声明函数的小括号里面是 形参 （形式上的参数）

        // }
        // 函数名(实参1,实参2...); // 在函数调用的小括号里面是实参（实际的参数）
        // 3. 形参和实参的执行过程
        function cook(aru) { // 形参是接受实参的  aru = '酸辣土豆丝' 形参类似于一个变量
            console.log(aru);

        }
        cook('酸辣土豆丝');
        cook('大肘子');
        // 4. 函数的参数可以有，也可以没有个数不限
```

![在这里插入图片描述](media/在这里插入图片描述-554.png)  
![在这里插入图片描述](media/在这里插入图片描述-553.png)

### 4、函数的返回值

![在这里插入图片描述](media/在这里插入图片描述-540.png)  
![在这里插入图片描述](media/在这里插入图片描述-551.png)  
![在这里插入图片描述](media/在这里插入图片描述-578.png)  
![在这里插入图片描述](media/在这里插入图片描述-542.png)  
函数返回值注意事项

```javascript
        // 函数返回值注意事项
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
        // 4. 我们的函数如果有return 则返回的是 return 后面的值，如果函数么有 return 则返回undefined
        function fun1() {
            return 666;
        }
        console.log(fun1()); // 返回 666
        function fun2() {

        }
        console.log(fun2()); // 函数返回的结果是 undefined
```

![在这里插入图片描述](media/在这里插入图片描述-539.png)  
![在这里插入图片描述](media/在这里插入图片描述-542.png)

### 5、arguments的使用

![在这里插入图片描述](media/在这里插入图片描述-582.png)

```javascript
        // arguments 的使用  只有函数才有 arguments对象  而且是每个函数都内置好了这个arguments
        function fn() {
            // console.log(arguments); // 里面存储了所有传递过来的实参  arguments = [1,2,3]
            // console.log(arguments.length);
            // console.log(arguments[2]);
            // 我们可以按照数组的方式遍历arguments
            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);

            }
        }
        fn(1, 2, 3);
        fn(1, 2, 3, 4, 5);
        // 伪数组 并不是真正意义上的数组
        // 1. 具有数组的 length 属性
        // 2. 按照索引的方式进行存储的
        // 3. 它没有真正数组的一些方法 pop()  push() 等等
```

### 6、函数案例

案例：冒泡排序

```javascript
        function sort(arr){
            for(var i=0;i<arr.length-1;i++){
                for(var j=0;j<arr.length-i-1;j++){
                    if(arr[j]>arr[j+1]){
                        var a=arr[j];
                        arr[j]=arr[j+1];
                        arr[j]=a;
                    }
                }
            }
            return arr;
        }
        console.log(sort([5,4,3,2,1]));
```

函数可以调用另外一个函数

### 7、函数的两种声明方式

![在这里插入图片描述](media/在这里插入图片描述-548.png)  
![在这里插入图片描述](media/在这里插入图片描述-553.png)

## 第五天

## 01JavaScript作用域

### 1、作用域

```javascript
        // 1.JavaScript作用域 ： 就是代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突
        // 2. js的作用域（es6）之前 ： 全局作用域   局部作用域 
        // 3. 全局作用域： 整个script标签 或者是一个单独的js文件
        var num = 10;
        var num = 30;
        console.log(num);

        // 4. 局部作用域（函数作用域） 在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用
        function fn() {
            // 局部作用域
            var num = 20;
            console.log(num);

        }
        fn();
```

### 2、变量的作用域

![在这里插入图片描述](media/在这里插入图片描述-547.png)  
![在这里插入图片描述](media/在这里插入图片描述-545.png)

```javascript
       // 变量的作用域： 根据作用域的不同我们变量分为全局变量和局部变量
        // 1. 全局变量： 在全局作用域下的变量 在全局下都可以使用
        // 注意 如果在函数内部 没有声明直接赋值的变量也属于全局变量
        var num = 10; // num就是一个全局变量
        console.log(num);

        function fn() {
            console.log(num);

        }
        fn();
        // console.log(aru);

        // 2. 局部变量   在局部作用域下的变量   后者在函数内部的变量就是 局部变量
        // 注意： 函数的形参也可以看做是局部变量
        function fun(aru) {
            var num1 = 10; // num1就是局部变量 只能在函数内部使用
            num2 = 20;
        }
        fun();
        // console.log(num1);
        // console.log(num2);
        // 3. 从执行效率来看全局变量和局部变量
        // (1) 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
        // (2) 局部变量 当我们程序执行完毕就会销毁， 比较节约内存资源

```

![在这里插入图片描述](media/在这里插入图片描述-552.png)

### 3、作用链域

```javascript
        作用域链  ： 内部函数访问外部函数的变量，
        采取的是链式查找的方式来决定取那个值 这种结构我们称为作用域链   
        就近原则
        var num = 10;

        function fn() { // 外部函数
            var num = 20;

            function fun() { // 内部函数
                console.log(num);

            }
            fun();
        }
        fn();//20
```

## 02JavaScript预解析

### 1、预解析

![在这里插入图片描述](media/在这里插入图片描述-581.png)

### 2、变量预解析和函数预解析

![在这里插入图片描述](media/在这里插入图片描述-579.png)  
![在这里插入图片描述](media/在这里插入图片描述-580.png)

### 3、预解析案例

```javascript
        // 1问  
        console.log(num);

        // 2问
        console.log(num); // undefined  坑 1
        var num = 10;
        // 相当于执行了以下代码
        // var num;
        // console.log(num);
        // num = 10;

        // 3问  
        function fn() {
            console.log(11);
        }
        fn();

        // 4问
        fun(); // 报错  坑2 
        var fun = function() {
                console.log(22);

            }
            // 函数表达式 调用必须写在函数表达式的下面
            // 相当于执行了以下代码
            // var fun;
            // fun();
            // fun = function() {
            //         console.log(22);

        //     }

         1. 我们js引擎运行js 分为两步：  预解析  代码执行
         (1). 预解析 js引擎会把js 里面所有的 var  还有 function 
            提升到当前作用域的最前面
         (2). 代码执行  按照代码书写的顺序从上往下执行
        2. 预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
         (1) 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
         (2) 函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数

```

案例4

```javascript
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
        // function f1() {
        //     var a;
        //     a = b = c = 9;
        //     // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
        //     // 集体声明  var a = 9, b = 9, c = 9;
        //     console.log(a);
        //     console.log(b);
        //     console.log(c);
        // }
        // f1();
        // console.log(c);
        // console.log(b);
        // console.log(a);
```

## 03JavaScript对象

### 1、对象

![在这里插入图片描述](media/在这里插入图片描述-583.png)  
![在这里插入图片描述](media/在这里插入图片描述-581.png)

### 2、创建对象的三种方式

![在这里插入图片描述](media/在这里插入图片描述-550.png)  
![在这里插入图片描述](media/在这里插入图片描述-554.png)

```javascript
        // 1.利用对象字面量创建对象 {}
        // var obj = {};  // 创建了一个空的对象 
        var obj = {
                uname: '张三疯',
                age: 18,
                sex: '男',
                sayHi: function() {
                    console.log('hi~');

                }
            }
            // (1) 里面的属性或者方法我们采取键值对的形式  键 属性名 ： 值  属性值 
            // (2) 多个属性或者方法中间用逗号隔开的
            // (3) 方法冒号后面跟的是一个匿名函数
            // 2. 使用对象
            // (1). 调用对象的属性 我们采取 对象名.属性名 . 我们理解为 的
        console.log(obj.uname);
        // (2). 调用属性还有一种方法 对象名['属性名']
        console.log(obj['age']);
        // (3) 调用对象的方法 sayHi   对象名.方法名() 千万别忘记添加小括号
        obj.sayHi();
```

![在这里插入图片描述](media/在这里插入图片描述-582.png)

```javascript
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

```

![在这里插入图片描述](media/在这里插入图片描述-546.png)

```javascript
        // 利用 new Object 创建对象
        var obj = new Object(); // 创建了一个空的对象
        obj.uname = '张三疯';
        obj.age = 18;
        obj.sex = '男';
        obj.sayHi = function() {
                console.log('hi~');

            }
            /(1) 我们是利用 等号 = 赋值的方法 添加对象的属性和方法
            /(2) 每个属性和方法之间用 分号结束
        console.log(obj.uname);
        console.log(obj['sex']);
        obj.sayHi();
```

![在这里插入图片描述](media/在这里插入图片描述-553.png)// 我们为什么需要使用构造函数  
// 就是因我们前面两种创建对象的方式一次只能创建一个对象  
// 因为我们一次创建一个对象，里面很多的属性和方法是大量相同的 我们只能复制  
// 因此我们可以利用函数的方法 重复这些相同的代码 我们就把这个函数称为 构造函数  
// 又因为这个函数不一样，里面封装的不是普通代码，而是 对象  
// 构造函数 就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面

```javascript
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

![在这里插入图片描述](media/在这里插入图片描述-546.png)

```javascript
        // 利用构造函数创建对象
        // 我们需要创建四大天王的对象  相同的属性： 名字 年龄 性别  相同的方法： 唱歌
        // 构造函数的语法格式
        // function 构造函数名() {
        //     this.属性 = 值;
        //     this.方法 = function() {}
        // }
        // new 构造函数名();
        function Star(uname, age, sex) {
            this.name = uname;
            this.age = age;
            this.sex = sex;
            this.sing = function(sang) {
                console.log(sang);

            }
        }
        var ldh = new Star('刘德华', 18, '男'); // 调用函数返回的是一个对象
        // console.log(typeof ldh);
        console.log(ldh.name);
        console.log(ldh['sex']);
        ldh.sing('冰雨');
        var zxy = new Star('张学友', 19, '男');
        console.log(zxy.name);
        console.log(zxy.age);
        zxy.sing('李香兰')



        // 1. 构造函数名字首字母要大写
        // 2. 我们构造函数不需要return 就可以返回结果
        // 3. 我们调用构造函数 必须使用 new
        // 4. 我们只要new Star() 调用函数就创建一个对象 ldh  {}
        // 5. 我们的属性和方法前面必须添加 this

```

![在这里插入图片描述](media/在这里插入图片描述-573.png)

### 3、new对象

![在这里插入图片描述](media/在这里插入图片描述-553.png)

### 4、遍历对象属性

![在这里插入图片描述](media/在这里插入图片描述-550.png)  
![在这里插入图片描述](media/在这里插入图片描述-567.png)

## 第六天

## 01JavaScript内置对象

### 1、内置对象

![在这里插入图片描述](media/在这里插入图片描述-581.png)

### 2、查文档

MDN

### 3、Math对象

![在这里插入图片描述](media/在这里插入图片描述-547.png)

```javascript
        / Math数学对象 不是一个构造函数 ，所以我们不需要new 来调用 
          而是直接使用里面的属性和方法即可
        console.log(Math.PI); // 一个属性 圆周率
        console.log(Math.max(1, 99, 3)); // 99
        console.log(Math.max(-1, -10)); // -1
        console.log(Math.max(1, 99, 'pink老师')); // NaN
        console.log(Math.max()); // -Infinity
```

```javascript
        // 1.绝对值方法
        console.log(Math.abs(1)); // 1
        console.log(Math.abs(-1)); // 1
        console.log(Math.abs('-1')); // 隐式转换 会把字符串型 -1 转换为数字型
        console.log(Math.abs('pink')); // NaN 

        // 2.三个取整方法
        / (1) Math.floor()   地板 向下取整  往最小了取值
        console.log(Math.floor(1.1)); // 1
        console.log(Math.floor(1.9)); // 1
        / (2) Math.ceil()   ceil 天花板 向上取整  往最大了取值
        console.log(Math.ceil(1.1)); // 2
        console.log(Math.ceil(1.9)); // 2
        / (3) Math.round()   四舍五入  其他数字都是四舍五入，
           但是 .5 特殊 它往大了取  
        console.log(Math.round(1.1)); // 1
        console.log(Math.round(1.5)); // 2
        console.log(Math.round(1.9)); // 2
        console.log(Math.round(-1.1)); // -1
        console.log(Math.round(-1.5)); // 这个结果是 -1
```

![在这里插入图片描述](media/在这里插入图片描述-553.png)

```javascript
        // 1.Math对象随机数方法   random() 返回一个随机的小数  0 =< x < 1
        // 2. 这个方法里面不跟参数
        // 3. 代码验证 
        console.log(Math.random());
        // 4. 我们想要得到两个数之间的随机整数 并且 包含这2个整数
        // Math.floor(Math.random() * (max - min + 1)) + min;
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        console.log(getRandom(1, 10));
        // 5. 随机点名  
        var arr = ['张三', '张三丰', '张三疯子', '李四', '李思思', 'pink老师'];
        // console.log(arr[0]);
        console.log(arr[getRandom(0, arr.length - 1)]);
```

### 4、日期对象

![在这里插入图片描述](media/在这里插入图片描述-550.png)  
![在这里插入图片描述](media/在这里插入图片描述-585.png)

```javascript
        /Date() 日期对象  是一个构造函数 必须使用new 来调用创建我们的日期对象
        var arr = new Array(); // 创建一个数组对象
        var obj = new Object(); // 创建了一个对象实例
        / 1. 使用Date  如果没有参数 返回当前系统的当前时间
        var date = new Date();
        console.log(date);
        // 2. 参数常用的写法  数字型  2019, 10, 01  或者是 字符串型 '2019-10-1 8:8:8'
        var date1 = new Date(2019, 10, 1);
        console.log(date1); // 返回的是 11月 不是 10月 
        var date2 = new Date('2019-10-1 8:8:8');
        console.log(date2);
```

![在这里插入图片描述](media/在这里插入图片描述-568.png)

```javascript
        // 格式化日期 年月日 
        var date = new Date();
        console.log(date.getFullYear()); // 返回当前日期的年  2019
        console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   记得月份+1 呦
        console.log(date.getDate()); // 返回的是 几号
        console.log(date.getDay()); // 3  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0
        // 我们写一个 2019年 5月 1日 星期三
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dates = date.getDate();
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var day = date.getDay();
        console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
```

```javascript
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
```

![在这里插入图片描述](media/在这里插入图片描述-559.png)

### 5、数组对象

![在这里插入图片描述](media/在这里插入图片描述-572.png)  
![在这里插入图片描述](media/在这里插入图片描述-558.png)  
![在这里插入图片描述](media/在这里插入图片描述-573.png)

```javascript
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
```

![在这里插入图片描述](media/在这里插入图片描述-556.png)

```javascript
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
```

![在这里插入图片描述](media/在这里插入图片描述-553.png)

```javascript
        // 返回数组元素索引号方法  indexOf(数组元素)  作用就是返回该数组元素的索引号 从前面开始查找
        // 它只返回第一个满足条件的索引号 
        // 它如果在该数组里面找不到元素，则返回的是 -1  
        // var arr = ['red', 'green', 'blue', 'pink', 'blue'];
        var arr = ['red', 'green', 'pink'];
        console.log(arr.indexOf('blue'));
        // 返回数组元素索引号方法  lastIndexOf(数组元素)  作用就是返回该数组元素的索引号 从后面开始查找
        var arr = ['red', 'green', 'blue', 'pink', 'blue'];

        console.log(arr.lastIndexOf('blue')); // 4
```

![在这里插入图片描述](media/在这里插入图片描述-582.png)

```javascript
        // 数组转换为字符串 
        // 1. toString() 将我们的数组转换为字符串
        var arr = [1, 2, 3];
        console.log(arr.toString()); // 1,2,3
        // 2. join(分隔符) 
        var arr1 = ['green', 'blue', 'pink'];
        console.log(arr1.join()); // green,blue,pink
        console.log(arr1.join('-')); // green-blue-pink
        console.log(arr1.join('&')); // green&blue&pink
```

![在这里插入图片描述](media/在这里插入图片描述-551.png)

### 6、字符串对象

![在这里插入图片描述](media/在这里插入图片描述-569.png)  
![在这里插入图片描述](media/在这里插入图片描述-562.png)  
![在这里插入图片描述](media/在这里插入图片描述-571.png)  
![在这里插入图片描述](media/在这里插入图片描述-564.png)

```javascript
        // 根据位置返回字符
        // 1. charAt(index) 根据位置返回字符
        var str = 'andy'; 
        console.log(str.charAt(3)); //y
        // 遍历所有的字符
        for (var i = 0; i < str.length; i++) {
            console.log(str.charAt(i));
        }
        // 2. charCodeAt(index)  返回相应索引号的字符ASCII值 目的： 判断用户按下了那个键 
        console.log(str.charCodeAt(0)); // 97
        // 3. str[index] H5 新增的
        console.log(str[0]); // a
```

![在这里插入图片描述](media/在这里插入图片描述-586.png)  
![在这里插入图片描述](media/在这里插入图片描述-580.png)  
![在这里插入图片描述](media/在这里插入图片描述-585.png)  
字符串案例

```javascript
        //给定一个字符串，如：“abaasdffggghhjjkkgfddsssss3444343”，问题如下： 
        // 1、 字符串的长度 
        var str='abaasdffggghhjjkkgfddsssss3444343';
        console.log(str.length);
        // 2、 取出指定位置的字符，如：0,3,5,9等 
        console.log(str.charAt(0));
        console.log(str.charAt(3));
        console.log(str.charAt(5));
        console.log(str.charAt(9));
        // 3、 查找指定字符是否在以上字符串中存在，如：i，c ，b等 
        console.log(str.indexOf('i'));
        console.log(str.indexOf('c'));
        console.log(str.indexOf('b'));
        // 4、 替换指定的字符，如：g替换为22,ss替换为b等操作方法 
        while(str.indexOf('g') !== -1){
            str=str.replace('g','22');
        }
        while(str.indexOf('ss') !== -1){
            str=str.replace('ss','b');
        }
        console.log(str);
        // 5、 截取指定开始位置到结束位置的字符串，如：取得1-5的字符串
        console.log(str.slice(1,5));
        // 6、 找出以上字符串中出现次数最多的字符和出现的次数 
        var str1='abaasdffggghhjjkkgfddsssss3444343';
        var o={};
        for(var i=0;i<str1.length;i++){
            var q=str1.charAt(i);
            if(o[q]){
                o[q] ++;
            }else{
                o[q]=1;
            }
        }
        console.log(o);
        //遍历对象
        var max=0;
        var ch=0;
        for(var k in o){
            if(o[k]>max){
                max=o[k];
                ch=k;
            }
            
        }
        console.log('出现次数最多的字符是：' + ch + '出现了' + max + '次');

        // 7、 遍历字符串，并将遍历出的字符两头添加符号“@”

        var newStr='@';
        for(var j=0;j< str1.length; j++){
            newStr += str1.charAt(j);
        }
        newStr += '@';
        console.log(newStr);
```

## 02JavaScript简单类型和复杂类型

### 1、简单类型和复杂类型

![在这里插入图片描述](media/在这里插入图片描述-555.png)  
简单数据类型 null 返回的是一个空的对象 object

```javascript
        // 简单数据类型 null  返回的是一个空的对象  object 
        var timer = null;
        console.log(typeof timer);
        / 如果有个变量我们以后打算存储为对象，
        暂时没想好放啥， 这个时候就给 null 
        // 1. 简单数据类型 是存放在栈里面 里面直接开辟一个空间存放的是值
        // 2. 复杂数据类型 首先在栈里面存放地址 十六进制表示  然后这个地址指向堆里面的数据
```

### 2、堆和栈

![在这里插入图片描述](media/在这里插入图片描述-570.png)

### 3、简单类型的内存分配

![在这里插入图片描述](media/在这里插入图片描述-584.png)

### 4、复杂类型的内存分配

![在这里插入图片描述](media/在这里插入图片描述-563.png)

### 5、简单类型传参

![在这里插入图片描述](media/在这里插入图片描述-561.png)

### 6、复杂类型传参

![在这里插入图片描述](media/在这里插入图片描述-556.png)