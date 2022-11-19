## [盒子模型](https://so.csdn.net/so/search?q=%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B&spm=1001.2101.3001.7020)

## 01 盒子模型

![在这里插入图片描述](media/在这里插入图片描述-291.png)

## 02 PS基本操作

![在这里插入图片描述](media/在这里插入图片描述-279.png)  
![在这里插入图片描述](media/在这里插入图片描述-260.png)

## 03 综合案例

产品模块案例

```css
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        body {
            background-color: #f5f5f5;
        }
        a {
            color: black;
            text-decoration: none;
        }
        .box {
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;
        }
        .box img {
            width: 100%;
        }
        .review {
            height: 70px;
            font-size: 14px;
            padding: 0 28px;
            margin-top: 30px;
        }
        .ping {
            font-size: 12px;
            padding: 0 28px;
            margin-top: 20px;
            color: #b0b0b0;

        }
        .info {
            font-size: 14px;
            padding: 0 28px;
            margin-top: 15px;
        }
        .info h4 {
            font-weight: 400;
            display: inline-block;
        }
        .info span {
            color: #ff6700;
        }
        .info em {
            color: #ebe4e0;
            font-style: normal;
            margin: 0 6px 0 15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="D:\黑马HTML\html_css_material\第五天\images\img.jpg" alt="">
        <div class="review">快递牛，整体不错蓝牙可以说秒连。红米给力</div>
        <div class="ping">来自于 117384232 的评价</div>
        <div class="info">
            <h4><a href="#">Redmi AirDots真无线蓝...</a></h4>
            <em>|</em>
            <span>99.9元</span>
        </div>
    </div>
</body>
```

![在这里插入图片描述](media/在这里插入图片描述-273.png)  
快报模块列表制作模块案例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>新闻快报模块</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            /* 去掉li前面的小圆点 */
            list-style: none;
        }

        .box {
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }

        .box h3 {
            height: 32px;
            border-bottom: 1px dotted #ccc;
            font-size: 14px;
            font-weight: 400;
            /* line-height = height表示行内文字垂直居中 */
            line-height: 32px;
            padding-left: 15px;
        }

        .box ul li a {
            font-size: 12px;
            color: #666;
            text-decoration: none;
        }

        .box ul li a:hover {
            text-decoration: underline;
        }

        .box ul li {
            height: 23px;
            line-height: 23px;
            padding-left: 20px;
        }

        .box ul {
            margin-top: 7px;
        }
    </style>
</head>

<body>
    <div class="box">
        <h3>品优购快报</h3>
        <ul>
            <li><a href="#">【特惠】爆款耳机5折秒！</a></li>
            <li><a href="#">【特惠】母亲节，健康好礼低至5折！</a></li>
            <li><a href="#">【特惠】爆款耳机5折秒！</a></li>
            <li><a href="#">【特惠】9.9元洗100张照片！</a></li>
            <li><a href="#">【特惠】长虹智能空调立省1000</a></li>
        </ul>

    </div>
</body>

</html>
```

## 04 圆角边框

![在这里插入图片描述](media/在这里插入图片描述-289.png)

```html
    <title>圆角边框常用写法</title>
    <style>
        .yuanxing {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* border-radius: 100px; */
            /* 50% 就是宽度和高度的一半  等价于 100px */
            border-radius: 50%;
        }

        .juxing {
            width: 300px;
            height: 100px;
            background-color: pink;
            /* 圆角矩形设置为高度的一半 */
            border-radius: 50px;
        }

        .radius {
            width: 200px;
            height: 200px;
            /* border-radius: 10px 20px 30px 40px; */
            /* border-radius: 10px 40px; */
            border-top-left-radius: 20px;
            background-color: pink;
        }
    </style>
```

## 05 盒子阴影

![在这里插入图片描述](media/在这里插入图片描述-293.png)

```html
    <title>盒子阴影</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;

            /* box-shadow: 10px 10px; */
        }

        div:hover {
            box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);
        }

        /* 原先盒子没有影子,当我们鼠标经过盒子就添加阴影效果 */
    </style>
```

## 06 文字阴影

![在这里插入图片描述](media/在这里插入图片描述-267.png)

## 浮动

## 01 浮动

### 1.1 传统网页布局的三种方式

![在这里插入图片描述](media/在这里插入图片描述-261.png)

### 1.2 标准流

![在这里插入图片描述](media/在这里插入图片描述-276.png)

### 1.3 为什么需要浮动

![在这里插入图片描述](media/在这里插入图片描述-271.png)  
![在这里插入图片描述](media/在这里插入图片描述-257.png)  
总结：有很多的布局效果，标准流没有办法完成，此时就可以利用浮动完成布局。 因为浮动可以改变元素标签默认的排列方式.  
浮动最典型的应用：可以让多个块级元素一行内排列显示。  
网页布局第一准则：\***多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动。** \*

### 1.4 什么是浮动

![在这里插入图片描述](media/在这里插入图片描述-282.png)

### 1.5 浮动特性（重难点）

![在这里插入图片描述](media/在这里插入图片描述-280.png)  
![在这里插入图片描述](media/在这里插入图片描述-253.png)  
![在这里插入图片描述](media/在这里插入图片描述-252.png)  
![在这里插入图片描述](media/在这里插入图片描述-295.png)  
![在这里插入图片描述](media/在这里插入图片描述-284.png)

```html
    <title>浮动的元素具有行内块元素特点</title>
    <style>
         任何元素都可以浮动。不管原先是什么模式的元素，
         添加浮动之后具有行内块元素相似的特性。 */
        span,
        div {
            float: left;
            width: 200px;
            height: 100px;
            background-color: pink;
        }

        /如果行内元素有了浮动,则不需要转换块级\行内块元素就可以直接给高度和宽度 */
        p {
            float: right;
            height: 200px;
            background-color: purple;
        }
    </style>
```

### 1.6 浮动元素经常和标准流父级搭配使用

![在这里插入图片描述](media/在这里插入图片描述-258.png)  
![在这里插入图片描述](media/在这里插入图片描述-269.png)

```html
    <title>浮动元素搭配标准流父盒子1</title>
    <style>
        .box {
            width: 1200px;
            height: 460px;
            background-color: pink;
            margin: 0 auto;
        }

        .left {
            float: left;
            width: 230px;
            height: 460px;
            background-color: purple;
        }

        .right {
            float: left;
            width: 970px;
            height: 460px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">左侧</div>
        <div class="right">右侧</div>
    </div>
</body>
```

![在这里插入图片描述](media/在这里插入图片描述-259.png)

```html
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        li {
            list-style: none;
        }
        .box {
            background-color: purple;
            width: 1226px;
            height: 285px;
            margin: 100px auto;
        }
        .box li {
            width: 296px;
            height: 285px;
            background-color: pink;
            float: left;
            margin-right: 14px;
        }
        .box .lili {
            margin-right: 0;
        }
    </style>
</head>
<body>
    <ul class="box">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li class="lili">4</li>
    </ul>
</body>
```

![在这里插入图片描述](media/在这里插入图片描述-268.png)

```html
    <style>
        .box {
            width: 1226px;
            height: 615px;
            margin: auto;
            background-color: purple;
        }
        .left {
            float: left;
            width: 234px;
            height: 615px;
            background-color: pink;
        }
        .right {
            float: left;
            width: 992px;
            height: 615px;
            background-color: powderblue;
        }
        .right>div {
            float: left;
            width: 234px;
            height: 300px;
            margin-left: 14px;
            background-color:plum;
            margin-bottom: 14px;

        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">左</div>
        <div class="right">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
    </div>

</body>

```

## 02 常见网页布局

### 2.1 常见网页布局

![在这里插入图片描述](media/在这里插入图片描述-265.png)  
![在这里插入图片描述](media/在这里插入图片描述-270.png)

```html
    <title>常见网页布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        .top {
            height: 50px;
            background-color: gray;
        }

        .banner {
            width: 980px;
            height: 150px;
            background-color: gray;
            margin: 10px auto;
        }

        .box {
            width: 980px;
            margin: 0 auto;
            height: 300px;
            background-color: pink;
        }

        .box li {
            float: left;
            width: 237px;
            height: 300px;
            background-color: gray;
            margin-right: 10px;
        }

        .box .last {
            margin-right: 0;
        }

        /* 只要是通栏的盒子(和浏览器一样宽) 不需要指定宽度 */
        .footer {
            height: 200px;
            background-color: gray;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="top">top</div>
    <div class="banner">banner</div>
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="last">4</li>
        </ul>
    </div>
    <div class="footer">footer</div>
</body>

```

### 2.2 浮动布局注意点

![在这里插入图片描述](media/在这里插入图片描述-277.png)  
![在这里插入图片描述](media/在这里插入图片描述-255.png)  
会。

## 03 清除浮动

### 3.1 为什么需要清除浮动

![在这里插入图片描述](media/在这里插入图片描述-297.png)

### 3.2 清除浮动的本质

![在这里插入图片描述](media/在这里插入图片描述-279.png)

### 3.3 清除浮动

![在这里插入图片描述](media/在这里插入图片描述-285.png)  
清除浮动方法  
![在这里插入图片描述](media/在这里插入图片描述-275.png)  
1、额外标签法  
![在这里插入图片描述](media/在这里插入图片描述-287.png)  
![在这里插入图片描述](media/在这里插入图片描述-262.png)  
2、父级添加overflow  
![在这里插入图片描述](media/在这里插入图片描述-278.png)  
3、：after伪元素法  
![在这里插入图片描述](media/在这里插入图片描述-287.png)  
4、双伪元素清除浮动  
![在这里插入图片描述](media/在这里插入图片描述-282.png)

### 3.4 清除浮动总结

![在这里插入图片描述](media/在这里插入图片描述-272.png)

## 04 PS切图

### 4.1 图层切图

![在这里插入图片描述](media/在这里插入图片描述-266.png)

### 4.2 切片切图

![在这里插入图片描述](media/在这里插入图片描述-280.png)  
如果需要透明的图片，把图层拉到最底部，关闭背景的小眼睛再操作即可。

### 4.3 ps插件切图

## 05 学成在线案例

（D:\\黑马HTML\\CSS练习new\\DAY07）

### 5.3 CSS属性书写顺序

![在这里插入图片描述](media/在这里插入图片描述-296.png)

### 5.4 页面布局分析

![在这里插入图片描述](media/在这里插入图片描述-264.png)

## CSS定位

## 01 定位

### 1.1 为什么需要定位

![在这里插入图片描述](media/在这里插入图片描述-296.png)  
![在这里插入图片描述](media/在这里插入图片描述-294.png)  
![在这里插入图片描述](media/在这里插入图片描述-280.png)

### 1.2 定位组成

![在这里插入图片描述](media/在这里插入图片描述-271.png)  
![在这里插入图片描述](media/在这里插入图片描述-296.png)

### 1.3 静态定位（了解）

![在这里插入图片描述](media/在这里插入图片描述-256.png)

### 1.4 相对定位relative（重要）

![在这里插入图片描述](media/在这里插入图片描述-297.png)

### 1.5 绝对定位absolute（重要）

![在这里插入图片描述](media/在这里插入图片描述-262.png)

### 1.6 子绝父相的由来

![在这里插入图片描述](media/在这里插入图片描述-292.png)

### 1.7 固定定位fixed（重要）

![在这里插入图片描述](media/在这里插入图片描述-274.png)  
![在这里插入图片描述](media/在这里插入图片描述-281.png)

### 1.8 粘性定位sticky（了解）

![在这里插入图片描述](media/在这里插入图片描述-290.png)

### 1.9 定位总结

![在这里插入图片描述](media/在这里插入图片描述-288.png)

### 1.10 定位叠放次序z-index

![在这里插入图片描述](media/在这里插入图片描述-287.png)

### 1.11 定位的拓展

![在这里插入图片描述](media/在这里插入图片描述-287.png)  
![在这里插入图片描述](media/在这里插入图片描述-276.png)  
![在这里插入图片描述](media/在这里插入图片描述-251.png)  
![在这里插入图片描述](media/在这里插入图片描述-290.png)

## 02 综合案例

淘宝轮播图案例  
（D:\\黑马HTML\\html\_css\_material\\第八天\\13）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>淘宝轮播图做法</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;
        }

        .tb-promo {
            position: relative;
            width: 520px;
            height: 280px;
            background-color: pink;
            margin: 100px auto;
        }

        .tb-promo img {
            width: 520px;
            height: 280px;
        }

        /* 并集选择器可以集体声明相同的样式 */
        .prev,
        .next {
            position: absolute;
            /* 绝对定位的盒子垂直居中 */
            top: 50%;
            margin-top: -15px;
            /* 加了绝对定位的盒子可以直接设置高度和宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0, 0, 0, .3);
            text-align: center;
            line-height: 30px;
            color: #fff;
            text-decoration: none;
        }

        .prev {
            left: 0;
            /* border-radius: 15px; */
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }

        .next {
            /* 如果一个盒子既有left属性也有right属性，则默认会执行 left属性 同理  top  bottom  会执行 top */
            right: 0;
            /* border-radius: 15px; */
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
        .promo-nav {
            position: absolute;
            bottom: 15px;
            left: 50%;
            margin-left: -35px;
            width: 70px;
            height: 13px;
            /* background-color: pink; */
            background: rgba(255,255,255, .3);
            border-radius: 7px;
        }
        .promo-nav li {
            float: left;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin: 3px;
        }
        /* 不要忘记选择器权重的问题 */
       .promo-nav .selected {
            background-color: #ff5000;
        }
    </style>
</head>

<body>
    <div class="tb-promo">
        <img src="images/tb.jpg" alt="">
        <!-- 左侧按钮箭头 -->
        <a href="#" class="prev"> &lt; </a>
        <!-- 右侧按钮箭头 -->
        <a href="#" class="next"> &gt; </a>
        <!-- 小圆点 -->
        <ul class="promo-nav">
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>

</html>
```

## 03 网页布局总结

![在这里插入图片描述](media/在这里插入图片描述-283.png)

## 04 元素的显示和隐藏

![在这里插入图片描述](media/在这里插入图片描述-254.png)

### 4.1 display属性

![在这里插入图片描述](media/在这里插入图片描述-271.png)

### 4.2 visibility属性

![在这里插入图片描述](media/在这里插入图片描述-263.png)

### 4.3 overflow溢出

![在这里插入图片描述](media/在这里插入图片描述-286.png)

### 4.4 元素的显示和隐藏

![在这里插入图片描述](media/在这里插入图片描述-285.png)  
案例：土豆网鼠标经过显示遮罩

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>仿土豆网显示隐藏遮罩案例</title>
    <style>
        .tudou {
            position: relative;
            width: 444px;
            height: 320px;
            background-color: pink;
            margin: 30px auto;
        }

        .tudou img {
            width: 100%;
            height: 100%;
        }

        .mask {
            /* 隐藏遮罩层 */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
        }

        /* 当我们鼠标经过了 土豆这个盒子，就让里面遮罩层显示出来 */
        .tudou:hover .mask {
            /* 而是显示元素 */
            display: block;
        }
    </style>
</head>

<body>
    <div class="tudou">
        <div class="mask"></div>
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <div class="mask"></div>
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <div class="mask"></div>
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <div class="mask"></div>
        <img src="images/tudou.jpg" alt="">
    </div>
</body>

</html>
```