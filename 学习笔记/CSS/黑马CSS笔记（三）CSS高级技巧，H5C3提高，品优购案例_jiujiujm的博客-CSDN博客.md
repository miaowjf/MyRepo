## CSS高级技巧

## 01 精灵图

### 1.1 为什么需要精灵图

![在这里插入图片描述](media/在这里插入图片描述-333.png)  
![在这里插入图片描述](media/在这里插入图片描述-308.png)

### 1.2 精灵图的使用

![在这里插入图片描述](media/在这里插入图片描述-343.png)  
![在这里插入图片描述](media/在这里插入图片描述-323.png)

## 02 字体图标

### 2.1 字体图标的产生

![在这里插入图片描述](media/在这里插入图片描述-324.png)

### 1.2 字体图标的优点

![在这里插入图片描述](media/在这里插入图片描述-343.png)  
![在这里插入图片描述](media/在这里插入图片描述-321.png)

### 2.3 字体图标的下载

![在这里插入图片描述](media/在这里插入图片描述-335.png)

### 2.4 字体图标的引入

![在这里插入图片描述](media/在这里插入图片描述-350.png)  
![在这里插入图片描述](media/在这里插入图片描述-347.png)  
![在这里插入图片描述](media/在这里插入图片描述-330.png)

```css
@font-face {
 font-family: 'icomoon';
 src: url('fonts/icomoon.eot?7kkyc2');
 src: url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
 url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
 url('fonts/icomoon.woff?7kkyc2') format('woff'),
 url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
 font-weight: normal;
 font-style: normal;
}
```

![在这里插入图片描述](media/在这里插入图片描述-327.png)  
![在这里插入图片描述](media/在这里插入图片描述-331.png)

### 2.5 字体图标的追加

![在这里插入图片描述](media/在这里插入图片描述-342.png)

## 03 CSS三角

![在这里插入图片描述](media/在这里插入图片描述-319.png)

```css
div {
 width: 0;
 height: 0;
 line-height: 0;
 font-size: 0;
 border: 50px solid transparent;
 border-left-color: pink;
}
```

案例：京东三角

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .jd {
            position: relative;
            width: 120px;
            height: 249px;
            background-color: pink;
        }
        .jd span {
            position: absolute;
            right: 15px;
            top: -10px;
            width: 0;
            height: 0;
            line-height: 0;
            font-size: 0;
            border :5px solid transparent;
            border-bottom-color: pink;
        }
    </style>
</head>
<body>
    <div class="jd">
        <span></span>
    </div>
</body>
</html>
```

## 04 CSS用户界面样式

### 4.1 什么是界面样式

![在这里插入图片描述](media/在这里插入图片描述-300.png)

### 4.1 鼠标样式cursor

![在这里插入图片描述](media/在这里插入图片描述-324.png)

### 4.2 轮廓线outline

![在这里插入图片描述](media/在这里插入图片描述-302.png)

### 4.3 防止拖拽文本域resize

![在这里插入图片描述](media/在这里插入图片描述-301.png)

## 05 vertical-aligh属性应用

![在这里插入图片描述](media/在这里插入图片描述-340.png)  
![在这里插入图片描述](media/在这里插入图片描述-328.png)

### 5.1 图片、表单和文字对齐

![在这里插入图片描述](media/在这里插入图片描述-329.png)

### 5.2 解决图片底部默认空白缝隙问题

![在这里插入图片描述](media/在这里插入图片描述-342.png)

## 06 溢出的文字省略号显示

### 6.1 单行文本溢出

![在这里插入图片描述](media/在这里插入图片描述-322.png)

### 6.2 多行文本溢出

![在这里插入图片描述](media/在这里插入图片描述-338.png)

## 07 常见布局技巧

### 7.1 margin负值运用

![在这里插入图片描述](media/在这里插入图片描述-309.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>margin负值的巧妙运用</title>
    <style>
        ul li {
            position: relative;
            float: left;
            list-style: none;
            width: 150px;
            height: 200px;
            border: 1px solid red;
            margin-left: -1px;
        }

        /* ul li:hover {
           1. 如果盒子没有定位，则鼠标经过添加相对定位即可
        position: relative;
        border: 1px solid blue;

       } */
        ul li:hover {
            /* 2.如果li都有定位，则利用 z-index提高层级 */
            z-index: 1;
            border: 1px solid blue;
        }
    </style>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>

</html>
```

### 7.2 文字围绕浮动元素

![在这里插入图片描述](media/在这里插入图片描述-347.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文字围绕浮动元素的妙用</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            width: 300px;
            height: 70px;
            background-color: pink;
            margin: 0 auto;
            padding: 5px;
        }
        .pic {
            float: left;
            width: 120px;
            height: 60px;
            margin-right: 5px;
        }
        .pic img {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="pic">
            <img src="images/img.png" alt="">
        </div>
        <p>【集锦】热身赛-巴西0-1秘鲁 内马尔替补两人血染赛场</p>
    </div>
</body>
</html>
```

### 7.3 行内块巧妙运用

![在这里插入图片描述](media/在这里插入图片描述-330.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>行内块的巧妙运用</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            text-align: center;
        }
        .box a {
            display: inline-block;
            width: 36px;
            height: 36px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            color: #333;
            font-size: 14px;
        }
       .box .prev,
        .box .next {
            width: 85px;
        }
        .box .current,
        .box .elp {
            background-color: #fff;
            border: none;
        }
        .box input {
            height: 36px;
            width: 45px;
            border: 1px solid #ccc;
            outline: none;
        }
        .box button {
           width: 60px;
           height: 36px;
           background-color: #f7f7f7;
            border: 1px solid #ccc;
            
        }
    </style>
</head>
<body>
    <div class="box">
        <a href="#" class="prev">&lt;&lt;上一页</a>
        <a href="#" class="current">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#" class="elp">...</a>
        <a href="#" class="next">&gt;&gt;下一页</a>
        到第 
        <input type="text">
        页
        <button>确定</button>
    </div>
</body>
</html>
```

### 7.4 CSS三角强化

![在这里插入图片描述](media/在这里插入图片描述-299.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS三角强化的巧妙运用</title>
    <style>
         .box1 {
            width: 0;
            height: 0;
            /* 把上边框宽度调大 */
            /* border-top: 100px solid transparent;
            border-right: 50px solid skyblue; */
            /* 左边和下边的边框宽度设置为0 */
            /* border-bottom: 0 solid blue;
            border-left: 0 solid green; */
           /* 1.只保留右边的边框有颜色 */
           border-color: transparent red transparent transparent;
            /* 2. 样式都是solid */
            border-style: solid;
            /* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */
            border-width: 100px 50px 0 0 ;

        }
        .price {
            width: 160px;
            height: 24px;
            line-height: 24px;
            border: 1px solid red;
            margin: 0 auto;
        }
        .miaosha {
            position: relative;
            float: left;
            width: 90px;
            height: 100%;
            background-color:red;
            text-align: center;
            color: #fff;
            font-weight: 700;
            margin-right: 8px;

        }
        .miaosha i {
            position: absolute;
            right: 0;
            top: 0;
            width: 0;
            height: 0;
            border-color: transparent #fff transparent transparent;
            border-style: solid;
            border-width: 24px 10px 0 0;
        }
        .origin {
            font-size: 12px;
            color: gray;
            text-decoration: line-through;
        }
    </style>
</head>
<body>
        <div class="box1"></div>
        <div class="price">
            <span class="miaosha">
                ¥1650
                <i></i>
            </span>
            <span class="origin">¥5650</span>
        </div>
</body>
</html>
```

## 08 CSS初始化

![在这里插入图片描述](media/在这里插入图片描述-338.png)

```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0
}
/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}
/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

## HTML5和CSS3的新特性

## 01 HTML5的新特性

![在这里插入图片描述](media/在这里插入图片描述-337.png)

### 1.1 HTML5新增的语义化标签

![在这里插入图片描述](media/在这里插入图片描述-347.png)

### 1.2 HTML5新增的多媒体标签

1、视频![在这里插入图片描述](media/在这里插入图片描述-345.png)  
![在这里插入图片描述](media/在这里插入图片描述-312.png)  
![在这里插入图片描述](media/在这里插入图片描述-339.png)

2、音频  
![在这里插入图片描述](media/在这里插入图片描述-341.png)  
![在这里插入图片描述](media/在这里插入图片描述-356.png)  
![在这里插入图片描述](media/在这里插入图片描述-320.png)  
![在这里插入图片描述](media/在这里插入图片描述-345.png)

### 1.3 HTML5 新增的 input 类型

![在这里插入图片描述](media/在这里插入图片描述-334.png)

### 1.4 HTML5 新增的表单属性

![在这里插入图片描述](media/在这里插入图片描述-348.png)

## 02 CSS3的新特性

### 2.1 CSS3的现状

![在这里插入图片描述](media/在这里插入图片描述-311.png)

### 2.2 属性选择器

![在这里插入图片描述](media/在这里插入图片描述-353.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增属性选择器</title>
    <style>
        /* 必须是input 但是同时具有 value这个属性 选择这个元素  [] */
        /* input[value] {
            color:pink;
        } */
        /* 只选择 type =text 文本框的input 选取出来 */
        input[type=text] {
            color: pink;
        }
        /* 选择首先是div 然后 具有class属性 并且属性值 必须是 icon开头的这些元素 */
        div[class^=icon] {
            color: red;
        }
        section[class$=data] {
            color: blue;
        }
        div.icon1 {
            color: skyblue;
        }
        /* 类选择器和属性选择器 伪类选择器 权重都是 10 */
    </style>
</head>
<body>
    <!-- 1. 利用属性选择器就可以不用借助于类或者id选择器 -->
    <!-- <input type="text" value="请输入用户名">
    <input type="text"> -->
    <!-- 2. 属性选择器还可以选择属性=值的某些元素 重点务必掌握的 -->
    <input type="text" name="" id="">
    <input type="password" name="" id="">
    <!-- 3. 属性选择器可以选择属性值开头的某些元素 -->
    <div class="icon1">小图标1</div>
    <div class="icon2">小图标2</div>
    <div class="icon3">小图标3</div>
    <div class="icon4">小图标4</div>
    <div>我是打酱油的</div>
    <!-- 4. 属性选择器可以选择属性值结尾的某些元素 -->
    <section class="icon1-data">我是安其拉</section>
    <section class="icon2-data">我是哥斯拉</section>
    <section class="icon3-ico">哪我是谁</section>

</body>
</html>
```

### 2.3 结构伪类选择器

![在这里插入图片描述](media/在这里插入图片描述-316.png)  
![在这里插入图片描述](media/在这里插入图片描述-338.png)

```css
<style>
        /* 1. 选择ul里面的第一个孩子 小li */
        ul li:first-child {
            background-color: pink;
        }
        /* 2. 选择ul里面的最后一个孩子 小li */
        ul li:last-child {
            background-color: pink;
        }
         /* 3. 选择ul里面的第2个孩子 小li */
         ul li:nth-child(2) {
            background-color: skyblue;
        }
        ul li:nth-child(6) {
            background-color: skyblue;
        }
    </style>
```

![在这里插入图片描述](media/在这里插入图片描述-298.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增选择器nth-type-of</title>
    <style>
        /* nth-child 会把所有的盒子都排列序号 */
        /* 执行的时候首先看  :nth-child(1) 之后回去看 前面 div */

        section div:nth-child(1) {
            background-color: red;
        }
         /* nth-of-type 会把指定元素的盒子排列序号 */
        /* 执行的时候首先看  div指定的元素  之后回去看 :nth-of-type(1) 第几个孩子 */
        section div:nth-of-type(1) {
            background-color: blue;
        }
    </style>
</head>

<body>
    <ul>
        <li>我是第1个孩子</li>
        <li>我是第2个孩子</li>
        <li>我是第3个孩子</li>
        <li>我是第4个孩子</li>
        <li>我是第5个孩子</li>
        <li>我是第6个孩子</li>
        <li>我是第7个孩子</li>
        <li>我是第8个孩子</li>
    </ul>
    <!-- 区别 -->
    <section>
        <p>光头强</p>
        <div>熊大</div>
        <div>熊二</div>
    </section>
</body>

</html>
```

![在这里插入图片描述](media/在这里插入图片描述-347.png)

### 2.4 伪元素选择器

![在这里插入图片描述](media/在这里插入图片描述-354.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>伪元素选择器before和after</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        /* div::before 权重是2 */
        div::before {
            /* 这个content是必须要写的 */
            /* display: inline-block; */
            content: '我';
            /* width: 30px;
            height: 40px;
            background-color: purple; */
        }
        div::after {
            content: '小猪佩奇';
        }
    </style>
</head>
<body>
    <div>
        是
    </div>
</body>
</html>
```

### 2.5 CSS3盒子模型

![在这里插入图片描述](media/在这里插入图片描述-341.png)

### 2.6 CSS3 其他特性（了解）

![在这里插入图片描述](media/在这里插入图片描述-332.png)

![在这里插入图片描述](media/在这里插入图片描述-344.png)

### 2.7 CSS3 过渡（重点）

![在这里插入图片描述](media/在这里插入图片描述-346.png)

![在这里插入图片描述](media/在这里插入图片描述-345.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3 过渡效果</title>
    <style>
        div {
            width: 200px;
            height: 100px;
            background-color: pink;
            /* transition: 变化的属性 花费时间 运动曲线 何时开始; */
            /* transition: width .5s ease 0s, height .5s ease 1s; */
            /* 如果想要写多个属性，利用逗号进行分割 */
            /* transition: width .5s, height .5s; */
            /* 如果想要多个属性都变化，属性写all就可以了 */
            /* transition: height .5s ease 1s; */
            /* 谁做过渡，给谁加 */
            transition: all 0.5s;
        }
        div:hover {
            width: 400px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

## 03 狭义的HTML5 CSS3

![在这里插入图片描述](media/在这里插入图片描述-345.png)

## 04 广义的HTML5

![在这里插入图片描述](media/在这里插入图片描述-344.png)

## PC端品优购项目

## 01 品优购项目规划

### 1.1 网站制作流程

![在这里插入图片描述](media/在这里插入图片描述-352.png)

### 1.2 品优购项目整体介绍

 项目名称：品优购  
 项目描述：品优购是一个电商网站，我们要完成 PC 端首页、列表页、  
注册页面的制作

### 1.3 品优购项目的学习目的

1、电商类网站比较综合，里面需要大量的布局技术，包括布局方式、常见效果以及周边技术。  
2、品优购项目能复习、总结、提高基础班所学布局技术。  
3、写完品优购项目，能对实际开发中制作 PC 端页面流程有一个整体的感知。  
4、为后期学习移动端项目做铺垫。

### 1.4 开发工具以及技术栈

1.  开发工具  
    VScode 、Photoshop（fw）、主流浏览器（以Chrome浏览器为主）
2.  技术栈  
     利用 HTML5 + CSS3 手动布局，可以大量使用 H5 新增标签和样式  
     采取结构与样式相分离，模块化开发  
     良好的代码规范有利于团队更好的开发协作，提高代码质量，因此品优购项目里面，请同学们遵循以下代码规范。（详情见素材文件夹— 品优购代码规范.md）

**总结：**

1.  品优购项目整体介绍 （制作首页、列表页、注册页三个页面）
2.  品优购项目学习目的 （里面包含技术较多，能极大锻炼我们布局技术）
3.  开发工具以及技术栈 （切图用ps， 代码用Vscode，测试用chrome， 大量使用HTML5+CSS3）

### 1.5 品优购项目搭建工作

3.  模块化开发  
    所谓的模块化：将一个项目按照功能划分， 一个功能一个模块，互不影响  
    模块化开发具有重复使用、更换方便等优点  
     有些样式和结构在很多页面都会出现，比如页面头部和底部，大部分页面都有。此时，可以把这些结构和样式单独作为一个模块，然后重复使用  
     这里最典型的应用就是 common.css 公共样式。写好一个样式，其余的页面用到这些相同的样式  
     模块化开发具有重复使用、修改方便等优点  
    common.css 公共样式里面包含版心宽度、清除浮动、页面文字颜色等公共样式。

### 1.6 网站 favicon 图标

favicon.ico 一般用于作为缩略的网站标志，它显示在浏览器的地址栏或者标签上。  
目前主要的浏览器都支持 favicon.ico 图标。  
![在这里插入图片描述](media/在这里插入图片描述-356.png)  
一、制作favicon图标

1.  把品优购图标切成 png 图片。
2.  把 png 图片转换为 ico 图标，这需要借助于第三方转换网站，例如比特虫：http://www.bitbug.net/  
    二、favicon图标放到网站根目录下  
    三、 HTML页面引入favicon图标  
    在html 页面里面的 `<head> </head>`元素之间引入代码。  
    `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>`

## 1.7 网站TDK三大标签SEO优化

SEO（Search Engine Optimization）汉译为搜索引擎优化，是一种利用搜索引擎的规则提高网站在有关搜索引擎内自然排名的方式。  
SEO 的目的是对网站进行深度的优化，从而帮助网站获取免费的流量，进而在搜索引擎上提升网站的排名，提高网站的知名度。  
页面必须有三个标签用来符合 SEO 优化。  
**1\. title 网站标题**  
title 具有不可替代性，是我们内页的第一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。  
建议：网站名（产品名）- 网站的介绍 （尽量不要超过30个汉字）  
例如：  
 京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！  
 小米商城 - 小米5s、红米Note 4、小米MIX、小米笔记本官方网站  
**2\. description 网站说明**  
简要说明我们网站主要是做什么的。  
我们提倡，description 作为网站的总体业务和主题概括，多采用“我们是…”、“我们提供…”、“×××网作为…”、“电话：010…”之类语句。  
例如：

```
<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、
家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物
体验!" />
```

**3\. keywords 关键字**  
keywords 是页面关键词，是搜索引擎的关注点之一。  
keywords 最好限制为 6～8 个关键词，关键词之间用英文逗号隔开，采用 关键词1,关键词2 的形式。  
例如：

```
<meta name= " keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配 件,手表,存储卡,京东" />
```

对于我们前端人员来说，我们只需要准备好这三个标签，具体里面的内容，有专门的 SEO 人员准备。

## 02 品优购首页制作

### 2.1 常用模块类名命名

以下是我们约定的命名模块，同学们可以直接使用以下类名即可  
![在这里插入图片描述](media/在这里插入图片描述-333.png)

### 2.2 快捷导航 shortcut 制作

![在这里插入图片描述](media/在这里插入图片描述-314.png)

 通栏的盒子命名为 shortcut ，是快捷导航的意思。 注意这里的行高，可以继承给里面的子盒子  
 里面包含版心的盒子  
 版心盒子里面包含 1 号左侧盒子左浮动  
 版心盒子里面包含 2 号右侧盒子右浮动  
 需要用到字体图标

### 2.3 LOGO SEO 优化

1.  logo 里面首先放一个 h1 标签，目的是为了提权，告诉搜索引擎，这个地方很重要。
2.  h1 里面再放一个链接，可以返回首页的，把 logo 的背景图片给链接即可。
3.  为了搜索引擎收录我们，我们链接里面要放文字（网站名称），但是文字不要显示出来。  
     方法1：text-indent 移到盒子外面（text-indent: -9999px) ，然后 overflow:hidden ，淘宝的做法。  
     方法2：直接给 font-size: 0; 就看不到文字了，京东的做法。
4.  最后给链接一个 title 属性，这样鼠标放到 logo 上就可以看到提示文字了。

## 03 web服务器

## CSS3提高

## 01 CSS3 属性选择器

## 02 CSS3 结构伪类选择器

## 03 CSS3 伪元素选择器

01、02、03 见笔记（三）

## 04 CSS3 2D转换

![在这里插入图片描述](media/在这里插入图片描述-336.png)

### 4.1 二维坐标系

![在这里插入图片描述](media/在这里插入图片描述-315.png)

### 4.2 2D转换之移动translate

![在这里插入图片描述](media/在这里插入图片描述-306.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 移动盒子的位置： 定位   盒子的外边距  2d转换移动 */
        
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* x就是x轴上移动位置 y 就是y轴上移动位置 中间用逗号分隔*/
            /* transform: translate(x, y); */
            /* transform: translate(100px, 100px); */
            /* 1. 我们如果只移动x坐标 */
            /* transform: translate(100px, 0); */
            /* transform: translateX(100px); */
            /* 2. 我们如果只移动y坐标 */
            /* transform: translate(0, 100px); */
            /* transform: translateY(100px); */
        }
        
        div:first-child {
            transform: translate(30px, 30px);
        }
        
        div:last-child {
            background-color: purple;
        }
    </style>
</head>

<body>
    <div></div>
    <div></div>
</body>

</html>
```

让盒子垂直水平居中

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: relative;
            width: 500px;
            height: 500px;
            background-color: pink;
            /* 1. 我们tranlate里面的参数是可以用 % */
            /* 2. 如果里面的参数是 % 移动的距离是 盒子自身的宽度或者高度来对比的 */
            /* 这里的 50% 就是 50px 因为盒子的宽度是 100px */
            /* transform: translateX(50%); */
        }
        
        p {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            background-color: purple;
            /* margin-top: -100px;
            margin-left: -100px; */
            /* translate(-50%, -50%)  盒子往上走自己高度的一半   */
            transform: translate(-50%, -50%);
        }
        
        span {
            /* translate 对于行内元素是无效的 */
            transform: translate(300px, 300px);
        }
    </style>
</head>

<body>
    <div>
        <p></p>
    </div>
    <span>123</span>
</body>

</html>
```

### 4.3 2D转换之旋转rotate

![在这里插入图片描述](media/在这里插入图片描述-326.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            width: 150px;
            /* 顺时针旋转45度 */
            /* transform: rotate(45deg); */
            border-radius: 50%;
            border: 5px solid pink;
            /* 过渡写到本身上，谁做动画给谁加 */
            transition: all 0.3s;
        }
        
        img:hover {
            transform: rotate(360deg);
        }
    </style>
</head>

<body>
    <img src="media/pic.jpg" alt="">
</body>

</html>
```

CSS书写小三角案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            position: relative;
            width: 249px;
            height: 35px;
            border: 1px solid #000;
        }
        
        div::after {
            content: "";
            position: absolute;
            top: 8px;
            right: 15px;
            width: 10px;
            height: 10px;
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(45deg);
            transition: all 0.2s;
        }
        /* 鼠标经过div  里面的三角旋转 */
        
        div:hover::after {
            transform: rotate(225deg);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

### 4.4 2D转换中心点 transform-origin

![在这里插入图片描述](media/在这里插入图片描述-349.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
            transition: all 1s;
            /* 1.可以跟方位名词 */
            /* transform-origin: left bottom; */
            /* 2. 默认的是 50%  50%  等价于 center  center */
            /* 3. 可以是px 像素 */
            transform-origin: 50px 50px;
        }
        
        div:hover {
            transform: rotate(360deg);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

旋转中心点案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            overflow: hidden;
            width: 200px;
            height: 200px;
            border: 1px solid pink;
            margin: 10px;
            float: left;
        }
        
        div::before {
            content: "黑马";
            display: block;
            width: 100%;
            height: 100%;
            background-color: hotpink;
            transform: rotate(180deg);
            transform-origin: left bottom;
            transition: all 0.4s;
        }
        /* 鼠标经过div 里面的before 复原 */
        
        div:hover::before {
            transform: rotate(0deg);
        }
    </style>
</head>

<body>
    <div></div>
    <div></div>
    <div></div>
</body>

</html>
```

### 4.5 2D转换之缩放scale

![在这里插入图片描述](media/在这里插入图片描述-355.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
            /* transform-origin: left bottom; */
        }
        
        div:hover {
            /* 1. 里面写的数字不跟单位 就是倍数的意思 1 就是1倍  2就是 2倍 */
            /* transform: scale(x, y); */
            /* transform: scale(2, 2); */
            /* 2. 修改了宽度为原来的2倍  高度 不变 */
            /* transform: scale(2, 1); */
            /* 3. 等比例缩放 同时修改宽度和高度，我们有简单的写法  以下是 宽度修改了2倍，高度默认和第一个参数一样*/
            /* transform: scale(2); */
            /* 4. 我们可以进行缩小  小于1 就是缩放 */
            /* transform: scale(0.5, 0.5); */
            /* transform: scale(0.5); */
            /* 5. scale 的优势之处： 不会影响其他的盒子 而且可以设置缩放的中心点*/
            /* width: 300px;
            height: 300px; */
            transform: scale(2);
        }
    </style>
</head>

<body>
    <div></div>
    123123
</body>

</html>
```

图片放大案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            overflow: hidden;
            float: left;
            margin: 10px;
        }
        
        div img {
            transition: all .4s;
        }
        
        div img:hover {
            transform: scale(1.1);
        }
    </style>
</head>

<body>
    <div>
        <a href="#"><img src="media/scale.jpg" alt=""></a>
    </div>
    <div>
        <a href="#"><img src="media/scale.jpg" alt=""></a>
    </div>
    <div>
        <a href="#"><img src="media/scale.jpg" alt=""></a>
    </div>
</body>

</html>
```

分页盒子案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        li {
            float: left;
            width: 30px;
            height: 30px;
            border: 1px solid pink;
            margin: 10px;
            text-align: center;
            line-height: 30px;
            list-style: none;
            border-radius: 50%;
            cursor: pointer;
            transition: all .4s;
        }
        
        li:hover {
            transform: scale(1.2);
        }
    </style>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
    </ul>
</body>

</html>
```

### 4.6 2D转换综合写法

![在这里插入图片描述](media/在这里插入图片描述-351.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            transition: all .5s;
        }
        
        div:hover {
            /* transform: rotate(180deg) translate(150px, 50px); */
            /* 我们同时有位移和其他属性，我们需要把位移放到最前面 */
            transform: translate(150px, 50px) rotate(180deg) scale(1.2);
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

### 4.7 2D转换总结

![在这里插入图片描述](media/在这里插入图片描述-339.png)

## 05 CSS3 动画

![在这里插入图片描述](media/在这里插入图片描述-317.png)

### 5.1 动画的基本使用

![在这里插入图片描述](media/在这里插入图片描述-325.png)  
![在这里插入图片描述](media/在这里插入图片描述-307.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 我们想页面一打开，一个盒子就从左边走到右边 */
        /* 1. 定义动画 */
        
        @keyframes move {
            /* 开始状态 */
            0% {
                transform: translateX(0px);
            }
            /* 结束状态 */
            100% {
                transform: translateX(1000px);
            }
        }
        
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* 2. 调用动画 */
            /* 动画名称 */
            animation-name: move;
            /* 持续时间 */
            animation-duration: 2s;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

动画序列

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* from to 等价于  0% 和  100% */
        /* @keyframes move {
            from {
                transform: translate(0, 0);
            }
            to {
                transform: translate(1000px, 0);
            }
        } */
        /* 动画序列 */
        /* 1. 可以做多个状态的变化 keyframe 关键帧 */
        /* 2. 里面的百分比要是整数 */
        /* 3. 里面的百分比就是 总的时间（我们这个案例10s）的划分 25% * 10  =  2.5s */
        
        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(1000px, 0)
            }
            50% {
                transform: translate(1000px, 500px);
            }
            75% {
                transform: translate(0, 500px);
            }
            100% {
                transform: translate(0, 0);
            }
        }
        
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            animation-name: move;
            animation-duration: 10s;
        }
    </style>
</head>

<body>
    <div>

    </div>
</body>

</html>
```

### 5.2 动画常用属性

![在这里插入图片描述](media/在这里插入图片描述-343.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(1000px, 0);
            }
        }
        
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            /* 动画名称 */
            animation-name: move;
            /* 持续时间 */
            /* animation-duration: 2s; */
            /* 运动曲线 */
            /* animation-timing-function: ease; */
            /* 何时开始 */
            animation-delay: 1s;
            /* 重复次数  iteration 重复的 conut 次数  infinite  无限 */
            /* animation-iteration-count: infinite; */
            /* 是否反方向播放 默认的是 normal  如果想要反方向 就写 alternate */
            /* animation-direction: alternate; */
            /* 动画结束后的状态 默认的是 backwards  回到起始状态 我们可以让他停留在结束状态 forwards */
            /* animation-fill-mode: forwards; */
            /* animation: name duration timing-function delay iteration-count direction fill-mode; */
            /* animation: move 2s linear 0s 1 alternate forwards; */
            /* 前面2个属性 name  duration 一定要写 */
            /* animation: move 2s linear  alternate forwards; */
        }
        
        div:hover {
            /* 鼠标经过div 让这个div 停止动画，鼠标离开就继续动画 */
            animation-play-state: paused;
        }
    </style>
</head>

<body>
    <div>

    </div>
</body>

</html>
```

### 5.3 动画简写形式

![在这里插入图片描述](media/在这里插入图片描述-335.png)  
大数据热点图案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: #333;
        }
        .map {
            position: relative;
            width: 747px;
            height: 616px;
            background: url(media/map.png) no-repeat;
            margin: 0 auto;
        }
        .city {
            position: absolute;
            top: 227px;
            right: 193px;
            color: #fff;
        }
        .tb {
            top: 500px;
            right: 80px;
        }
        .gz {
            top: 542px;
            right: 195px;
        }
        .dotted {
            width: 8px;
            height: 8px;
            background-color: #09f;
            border-radius: 50%
        }
        .city div[class^="pulse"] {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 8px;
            height: 8px;
            box-shadow: 0 0 12px #009dfd;
            border-radius: 50%;
            animation: pulse 1.2s linear infinite;
        }
        .city div.pulse2 {
            animation-delay: 0.4s;
        }
        .city div.pulse3 {
            animation-delay: 0.8s;
        }

        @keyframes pulse {
            0% {

            }
            70% {
                width: 40px;
                height: 40px;
                opacity: 1;
            }
            100% {
                width: 70px;
                height: 70px;
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="map">
        <div class="city">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>
        </div>
        <div class="city tb">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>
        </div>
        <div class="city gz">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>
        </div>
    </div>
</body>
</html>
```

### 5.4 速度曲线细节

![在这里插入图片描述](media/在这里插入图片描述-313.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            overflow: hidden;
            font-size: 20px;
            width: 0;
            height: 30px;
            background-color: pink;
            /* 让我们的文字强制一行内显示 */
            white-space: nowrap;
            /* steps 就是分几步来完成我们的动画 有了steps 就不要在写 ease 或者linear 了 */
            animation: w 4s steps(10) forwards;
        }
        
        @keyframes w {
            0% {
                width: 0;
            }
            100% {
                width: 200px;
            }
        }
    </style>
</head>

<body>
    <div>世纪佳缘我在这里等你</div>
</body>

</html>
```

奔跑的 北极熊案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            background-color: #ccc;
        }
        
        div {
            position: absolute;
            width: 200px;
            height: 100px;
            background: url(media/bear.png) no-repeat;
            /* 我们元素可以添加多个动画， 用逗号分隔 */
            animation: bear .4s steps(8) infinite, move 3s forwards;
        }
        
        @keyframes bear {
            0% {
                background-position: 0 0;
            }
            100% {
                background-position: -1600px 0;
            }
        }
        
        @keyframes move {
            0% {
                left: 0;
            }
            100% {
                left: 50%;
                /* margin-left: -100px; */
                transform: translateX(-50%);
            }
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

## 06 CSS3 3D转换

![在这里插入图片描述](media/在这里插入图片描述-305.png)

### 6.1 三维坐标系

![在这里插入图片描述](media/在这里插入图片描述-308.png)

### 6.2 3D移动translate3d

![在这里插入图片描述](media/在这里插入图片描述-339.png)

```css
<style>
        body {
            /* 透视写到被观察元素的父盒子上面 */
            perspective: 200px;
        }
        
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* transform: translateX(100px);
            transform: translateY(100px); */
            /* transform: translateX(100px) translateY(100px) translateZ(100px); */
            /* 1. translateZ 沿着Z轴移动 */
            /* 2. translateZ 后面的单位我们一般跟px */
            /* 3. translateZ(100px) 向外移动100px （向我们的眼睛来移动的） */
            /* 4. 3D移动有简写的方法 */
            /* transform: translate3d(x,y,z); */
            /* transform: translate3d(100px, 100px, 100px); */
            /* 5. xyz是不能省略的，如果没有就写0 */
            transform: translate3d(400px, 100px, 100px);
        }
    </style>
```

### 6.3 透视perspective

![在这里插入图片描述](media/在这里插入图片描述-353.png)

### 6.4 translateZ

![在这里插入图片描述](media/在这里插入图片描述-310.png)

### 6.5 3D旋转rotate3d

![在这里插入图片描述](media/在这里插入图片描述-338.png)  
左手法则  
![在这里插入图片描述](media/在这里插入图片描述-304.png)

### 6.6 3D呈现transform-style

![在这里插入图片描述](media/在这里插入图片描述-303.png)  
两面翻转的盒子案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            perspective: 400px;
        }
        
        .box {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 100px auto;
            transition: all .4s;
            /* 让背面的紫色盒子保留立体空间 给父级添加的 */
            transform-style: preserve-3d;
        }
        
        .box:hover {
            transform: rotateY(180deg);
        }
        
        .front,
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            font-size: 30px;
            color: #fff;
            text-align: center;
            line-height: 300px;
        }
        
        .front {
            background-color: pink;
            z-index: 1;
        }
        
        .back {
            background-color: purple;
            /* 像手机一样 背靠背 旋转 */
            transform: rotateY(180deg);
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="front">西安工程大学</div>
        <div class="back">王赛在这里等你</div>
    </div>
</body>

</html>
```

3D导航栏案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        ul {
            margin: 100px;
        }
        
        ul li {
            float: left;
            margin: 0 5px;
            width: 120px;
            height: 35px;
            list-style: none;
            /* 一会我们需要给box 旋转 也需要透视 干脆给li加 里面的子盒子都有透视效果 */
            perspective: 500px;
        }
        
        .box {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: all .4s;
        }
        
        .box:hover {
            transform: rotateX(90deg);
        }
        
        .front,
        .bottom {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        
        .front {
            background-color: pink;
            z-index: 1;
            transform: translateZ(17.5px);
        }
        
        .bottom {
            background-color: purple;
            /* 这个x轴一定是负值 */
            /* 我们如果有移动 或者其他样式，必须先写我们的移动 */
            transform: translateY(17.5px) rotateX(-90deg);
        }
    </style>
</head>

<body>
    <ul>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">黑马程序员</div>
                <div class="bottom">pink老师等你</div>
            </div>
        </li>
    </ul>
</body>

</html>
```

旋转木马案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            perspective: 1000px;
        }
        
        section {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 150px auto;
            transform-style: preserve-3d;
            /* 添加动画效果 */
            animation: rotate 10s linear infinite;
            background: url(media/pig.jpg) no-repeat;
        }
        
        section:hover {
            /* 鼠标放入section 停止动画 */
            animation-play-state: paused;
        }
        
        @keyframes rotate {
            0% {
                transform: rotateY(0);
            }
            100% {
                transform: rotateY(360deg);
            }
        }
        
        section div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(media/dog.jpg) no-repeat;
        }
        
        section div:nth-child(1) {
            transform: rotateY(0) translateZ(300px);
        }
        
        section div:nth-child(2) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(60deg) translateZ(300px);
        }
        
        section div:nth-child(3) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(120deg) translateZ(300px);
        }
        
        section div:nth-child(4) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(180deg) translateZ(300px);
        }
        
        section div:nth-child(5) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(240deg) translateZ(300px);
        }
        
        section div:nth-child(6) {
            /* 先旋转好了再 移动距离 */
            transform: rotateY(300deg) translateZ(300px);
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
</body>

</html>
```

## 07 浏览器私有前缀

![在这里插入图片描述](media/在这里插入图片描述-349.png)

## 总结

![在这里插入图片描述](media/在这里插入图片描述-318.png)