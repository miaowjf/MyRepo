附上教学视频链接[黑马程序员pink老师前端入门教程](https://www.bilibili.com/video/BV14J4114768?from=search&seid=13137029902323705629)  
该博文是自己随手记的上述视频笔记

[跳转到css, p61](https://blog.csdn.net/qq_45734879/article/details/119530806#css)  
P18  
`<div> </div>`一行一个，`<span></span>`一行可多个，都是盒子

p26

```
<img src="" alt="" title="" width=  height=  />
```

img是图片标签，是单标签。src是图片地址，alt是图片不能正常显示时的替换文本， title是将鼠标放在图片上的提示文本，width和height表示大小（二选一即可）

```
<a href="" target="" >文本或图片描述<a>
```

a表示超链接标签，是双标签。href是网址，target表示打开方式。href可以是内部标签（自己写的网页）和外部标签（百度），分别将地址和网址写入href之中。当href="#"表示空链接。当href是文件或者压缩包时，点击超链接表示下载文件。当文本描述为图片标签时，表示点击图片跳转到相应网址。  
target有\_self(默认)和\_blank两种格式，\_self表示在原有窗口打开超链接，\_blank表示新开一个窗口打开超链接。

p28

```
 <a href="#rukou">跳转入口<a/>
 <h1 id="rukou">目标跳转位置<h1/>
```

锚点分为入口和出口。入口是一个超链接a标签，href开头为#表示入口。出口是一个标题，添加id标签表示跳转目标位置。其中id和href中标签名要一致，href多个#。

p29

```
<!--这是一个注释-->
```

注释快捷键是ctrl /

```
&nbsp空格
&lt小于号
&gt大于号
```

html中特殊字符不能直接写，常用的有这三个。

p33  
表格标签：

```
<table>
<tr>
<td>
<td>
<tr>
<table />
```

table 表示一个表格  
tr 表示表格中的一行  
td 表示一行中的一个单元格

p34

```
<th><th>
```

表头单元格，作为表格的属性行。和td不同的是th会居中并加粗。

p35  
表格常用属性，通过css设置  
![表格常用属性，通过css设置](media/表格常用属性，通过css设置.png)  
cellpadding是文字和边框之间的距离。cellspacing是单元格与单元格之间的空隙，若为0则表格的边框之间没有空隙。  
![在这里插入图片描述](media/在这里插入图片描述-4.png)  
width可控制表格宽度，height控制表格高度。

p37  
thrad和tbody  
![在这里插入图片描述](media/在这里插入图片描述-162.png)  
thead表示表格头部，内部必须有tr标签，一般位于第一行。tbody表示表格主体，存放数据。两者都放在table标签内部。

p38  
合并单元格  
![在这里插入图片描述](media/在这里插入图片描述-86.png)![在这里插入图片描述](media/在这里插入图片描述-106.png)

![在这里插入图片描述](media/在这里插入图片描述-30.png)

```
<body>
    <table width="500" height="300" border="1" cellspacing="0" cellpadding="0">
        <tr>
            <td colspan="2"></td>
            <td></td>
        </tr>
        <tr>
            <td rowspan="2"></td>
            <td></td>
            <td></td>
        </tr>
        <tr>

            <td></td>
            <td></td>
        </tr>
    </table>
</body>

```

效果如下（注意table要设置宽度和高度，否则表格不显示）：  
![在这里插入图片描述](media/在这里插入图片描述.png)

p39  
![在这里插入图片描述](media/在这里插入图片描述-109.png)

p40  
ul 无序标签

p41  
ol 有序标签  
ul和ol里面只能放li标签，不能放其它标签。li里面可以放任何标签。

p42  
自定义列表，使用dl定义一个自定义标签。自定义标签分为主标签 (dt)和描述标签(dd)  
![在这里插入图片描述](media/在这里插入图片描述-116.png)  
![在这里插入图片描述](media/在这里插入图片描述-86.png)

![在这里插入图片描述](media/在这里插入图片描述-107.png)

p44  
表单标签（用于收集用户信息）  
![在这里插入图片描述](media/在这里插入图片描述-119.png)  
表单域：将用户信息送到后台  
![在这里插入图片描述](media/在这里插入图片描述-117.png)  
p46  
表单控件  
![在这里插入图片描述](media/在这里插入图片描述-167.png)

p48  
![ ](media/_-2.png)  
![在这里插入图片描述](media/在这里插入图片描述-117.png)  
name：将单选按钮(type=“radio“)的name值设置相同，可以实现单选效果。否则还是多选  
value：设置显示框内提示信息  
![在这里插入图片描述](media/在这里插入图片描述-9.png)

checked：当单选框或多选框checked="checked"时，首次加载将该选项勾选。单选框只能设置一个（name值一样），多选框可设置多个  
maxlength：规定输入字符的最大个数  
![在这里插入图片描述](media/在这里插入图片描述-97.png)  
**总结：  
表单Input属性共五个选项：type, name, value, checked, maxlength。type常用的值有text, password, radio,checkbox等等。name可以用来控制单选框radio真正实现单选（name全部一样）。value设置输入框提示信息。check针对勾选框，实现首次加载自动勾选。maxlength设置输入的最大长度。  
输入框可用属性：type, value, maxlength  
勾选框可用属性：type, name, checked**

示例代码：

```
<body>
    <form>
        用户名：<input type="text " name="用户名" value="请输入用户名" maxlength=6> <br>
        密码： <input type="password"  maxlength=6> <br>
        性别： 男<input type="radio" name="sex" value="请输入xingbie" checked="checked"> 女<input type="radio" name="sex"> <br>
        爱好： 吃饭<input type="checkbox" checked="checked"> 睡觉<input type="checkbox" value="验证码"> 打豆豆 <input type="checkbox" checked="checked">
    </form>
</body>
```

效果如下：  
![在这里插入图片描述](media/在这里插入图片描述-3.png)  
p51  
type=“submit” 将表单的值送到后台  
type=“reset” 还原表单的初始状态  
两者都是按钮的格式  
![在这里插入图片描述](media/在这里插入图片描述-155.png)  
![在这里插入图片描述](media/在这里插入图片描述-33.png)  
p52  
普通按钮 type=“button” 点击完成完成某个动作，不上传表单数据。常搭配js进行使用  
文件上传按钮 type=“file” 点击上传文件或图片  
**注意：button可以通过value值设置按钮上的文字，而file不能通过value值，只能用键值对形式**  
![在这里插入图片描述](media/在这里插入图片描述-159.png)![在这里插入图片描述](media/在这里插入图片描述-7.png)

p53  
label标签：点击提示文字将光标定位到表单区域

```
<label for="name"> 用户名 </label>
 <input type="text" id="name"> <br>
```

这样就能点击“用户名”光标定位到输入区域  
注意：  
label是双标签，没有value属性  
for入口和id定位目标要一样

p54  
select下拉表单元素  
![在这里插入图片描述](media/在这里插入图片描述-8.png)  
![在这里插入图片描述](media/在这里插入图片描述-86.png)  
带提示信息的下拉表单

```
<select name="cars">
<option selected hidden disabled value="">点击选择你想要的选项</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
```

p55  
textarea文本域表单控件  
![在这里插入图片描述](media/在这里插入图片描述-87.png)  
![在这里插入图片描述](media/在这里插入图片描述-32.png)  
![在这里插入图片描述](media/在这里插入图片描述-1.png)

P56  
综合案例  
我的代码

```
<body>
    <h4>青春不常在，抓紧谈恋爱</h4>
    <table width="500">
        <tr>
            <td> 性别：</td>          
            <td>
                <input type="radio" id="male" name="sex"> <label for="male">男</label>
                <input type="radio" id="female" name="sex"> <label for="female">女</label>
            </td>
        </tr>
        <tr>
            <td>生日</td>
            <td>
                <select name="year" id="year">
                    <option selected hidden disabled value="">请选择年份</option>
                    <option value="2010">10</option>
                    <option value="2011">20</option>
                    <option value="2012">30</option>
                </select>

                <select name="month" id="month">
                    <option selected hidden disabled value="">请选择月份</option>
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">1</option>
                </select>

                <select name="day" id="day">
                    <option selected hidden disabled value="">请选择日</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </td>
        </tr>

        <tr>
            <td>所在地区</td>
            <td>
                <input type="text" value="北京思密达">
            </td>
        </tr>

        <tr>
            <td>婚姻状况</td>
            <td>
                <input type="radio" name="Marry" id="noMarry"> <label for="noMarry">未婚</label> 
                <input type="radio" name="Marry" id="married"> <label for="married">已婚</label> 
                <input type="radio" name="Marry" id="disMarry"> <label for="disMarry">离婚</label> 
            </td>
        </tr>

        <tr>
            <td>学历</td>
            <td><input type="text" value="幼儿园"></td>
        </tr>

        <tr>
            <td>喜欢的类型</td>
            <td>
                <input type="checkbox" name=“type” id="1"> <label for="1">妩媚的</label>
                <input type="checkbox" name=“type” id="2"> <label for="2">可爱的</label>
                <input type="checkbox" name=“type” id="3"> <label for="3">小鲜肉</label>
                <input type="checkbox" name=“type” id="4"> <label for="4">老腊肉</label>
                <input type="checkbox" name=“type” id="5"> <label for="5">都喜欢</label>
            </td>
        </tr>

        <tr>
            <td>自我介绍</td>
            <td><textarea name="selfIntrdct" id="selfIntrdct" cols="30" rows="10">自我介绍</textarea></td>
        </tr>

        <tr>
            <td></td>
            <td>
                <input type="button" value="免费注册"> <br>
                <input type="checkbox" id="agreement" selected="selected"> <label for="agreement">我同意注册条款和会员加入标准</label> <br>
                <a href="#">我是会员，立即登录</a> <br>
                <br>
                <strong>我承诺</strong> <br>
                <ul>
                    <li>年满18岁</li>
                    <li>抱着严谨的态度</li>
                    <li>真诚寻找另一半</li>
                </ul>
            </td>
        </tr>
    </table>
</body>
```

p60  
学会查阅文档  
常用网站  
![在这里插入图片描述](media/在这里插入图片描述-149.png)

p61

## css

!\[ \](https://img-blog.csdnimg.cn/e8b4a0416d58471f8d53dae1bd3cf417.png?x-oss-process=image/watermark,type\_ZmFuZ3poZW5naGVpdGk,shadow\_10,text\_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzM0ODc5,size\_16,color\_FFFFFF,t\_70) color: 字体颜色 font-size: 字体大小（px像素）

p64  
css代码风格  
![在这里插入图片描述](media/在这里插入图片描述-106.png)  
1 样式格式  
![在这里插入图片描述](media/在这里插入图片描述-5.png)  
![在这里插入图片描述](media/在这里插入图片描述-87.png)  
![在这里插入图片描述](media/在这里插入图片描述-88.png)

p66  
css基础选择器  
![在这里插入图片描述](media/在这里插入图片描述-111.png)  
1、标签选择器  
将标签作为选择名，选择所有同名标签。标签选择器不够灵活  
![在这里插入图片描述](media/在这里插入图片描述-42.png)

2、类选择器  
将class作为选择器名，想要改变谁的样式就设置谁的class名，然后将此类名作为选择器名。很灵活  
![在这里插入图片描述](media/在这里插入图片描述-80.png)  
![在这里插入图片描述](media/在这里插入图片描述-111.png)  
![在这里插入图片描述](media/在这里插入图片描述-2.png)

![在这里插入图片描述](media/在这里插入图片描述-153.png)  
p67  
类命名规则  
![在这里插入图片描述](media/在这里插入图片描述-149.png)

p68  
background-color: 背景颜色  
color: 颜色

html:

```
<body>
    <div class="red"></div>
    <div class="green"></div>
    <div class="red"></div>
</body>
```

css:

```
.red {
    width: 100px;
    height: 100px;
    background-color: red;
}

.green {
    width:100px;
    height: 100px;
    background-color: green;
}
```

![在这里插入图片描述](media/在这里插入图片描述-6.png)

p69  
多类名选择器  
设置多个类名选择器，html的class属性可以调用多个选择器（中间加个空格）。这样就实现了样式的叠加，灵活性比单一样式选择器更高，隔离性更好，且能使提高代码利用率。  
下例可以实现“刘德华”即改变颜色也改变大小  
![在这里插入图片描述](media/在这里插入图片描述-106.png)

p70  
id选择器  
id选择器用#开头，而类选择器用.开头  
Id唯一，class不唯一  
![在这里插入图片描述](media/在这里插入图片描述-109.png)  
![在这里插入图片描述](media/在这里插入图片描述-22.png)

p71  
通配符选择器  
![在这里插入图片描述](media/在这里插入图片描述-111.png)

**总结**  
![在这里插入图片描述](media/在这里插入图片描述-130.png)  
font-family: 字体  
字体可用中文或英文，但尽量英文，兼容性更好  
![在这里插入图片描述](media/在这里插入图片描述-13.png)

![在这里插入图片描述](media/在这里插入图片描述-11.png)  
字体可以写多个，浏览器使用第一个字体，当第一个字体用户没有安装时使用下一个，以此类推。这样可提高兼容性  
当字体名有空格时，用**单引号**括起来  
尽量不要使用小众字体  
![在这里插入图片描述](media/在这里插入图片描述-31.png)

p73  
字体大小  
font-size  
![在这里插入图片描述](media/在这里插入图片描述-155.png)

p74  
字体粗细  
font-weight  
**现实开发中更提倡使用number属性，400等价于normal，700等价于bold。**  
![在这里插入图片描述](media/在这里插入图片描述-112.png)

p75  
文字倾斜  
常用此属性**取消**斜体效果  
![在这里插入图片描述](media/在这里插入图片描述-152.png)

p76  
font缩写  
![在这里插入图片描述](media/在这里插入图片描述-139.png)  
复合属性更简洁，可取代以下效果  
![在这里插入图片描述](media/在这里插入图片描述-137.png)  
![ ](media/_-1.png)  
p77  
**总结**  
![在这里插入图片描述](media/在这里插入图片描述-114.png)

p78  
文本颜色  
![在这里插入图片描述](media/在这里插入图片描述-98.png)

p79  
文本水平对齐  
text-align  
![在这里插入图片描述](media/在这里插入图片描述-141.png)

p80  
装饰文本  
text-decoration  
![在这里插入图片描述](media/在这里插入图片描述-128.png)  
链接`<a href=""></a>`默认自带下划线

```
text-decoration: none
```

可以取消链接的下划线效果

p81  
文本缩进  
text-indent  
![在这里插入图片描述](media/在这里插入图片描述-134.png)

p82  
行间距  
line-height  
![在这里插入图片描述](media/在这里插入图片描述-135.png)  
加入字体大小font-size为16px，行间距line-height为26px，则上间距和下间距都为5，文本高度为16  
可以用素材中的标尺进行测量像素值

取消文字的行距：将line-height设置的和font-size相等，即可取消文字的上边距和下边距

p83  
**文本属性总结**  
![在这里插入图片描述](media/在这里插入图片描述-115.png)  
共有9个属性。其中可以使用font进行缩写的有5个，不可以缩写的有4个

font: font-style font-weight font-size/line-hight font-family  
分别是文本倾斜 文本加粗（700，400） 字体大小/行距 字体（微软雅黑，英汉皆可，推荐英）

文本水平居中：text-align(left, center, right)  
文本加线：text-decoration(overline上划线, line-through删除线, underline下划线)  
文本颜色：color(英文单词，16进制，rgb)  
文本缩进：text-indent(单位为px或em，1em为1个当前字体大小)

p90  
css综合案例

1、若是css对class="gray"进行修饰，则只对直接包含的文本起作用，其中的文本框和按钮中的文本不受class="gray"修饰的影响。若是想对其进行修饰需要在同一层级上进行修饰

```
<div class="gray">
    2021-08-16 00:00 <a href="#">中国新闻网</a>
    <input type="text" value="请输入搜索内容" class="search">
    <button class="btn">搜索</button>
    </div>
```

```
.gray {
    color: #888;
 }
```

![在这里插入图片描述](media/在这里插入图片描述-12.png)

2、将img图片标签放在p标签中，在p中设置图片居中等效果

```
<p class="center"><img src="img.jpg" alt="img" title="img"></p>
```

p92  
chrom调试工具的使用  
![在这里插入图片描述](media/在这里插入图片描述-113.png)  
\*\*  
谷歌调试工具的作用：

1、样式调整：谷歌调试工具的作用是调整html样式。比如我们写好了一个网页，可以用谷歌打开，在开发者模式下对文字大小、颜色等进行调整并实时查看效果。当调整到满意效果时复制调整好的代码到html或css文件中

2、检查错误：当出现以下黄色感叹号（删除线）时说明此处有语法错误，右边的35代表错误出现在第35行  
\*\*  
![在这里插入图片描述](media/在这里插入图片描述-1.png)

p94  
![在这里插入图片描述](media/在这里插入图片描述-157.png)  
**emmet语法**  
快速生成html结构  
![在这里插入图片描述](media/在这里插入图片描述-129.png)  
生成带类名的标题 h1.title :`<h1 class="title"></h1>`

生成带id名的标题 h1#title :`<h1 id="title"></h1>`

div类名自增 .demo$\*5:

```
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
    <div class="demo4"></div>
    <div class="demo5"></div>
```

div{我是文字}：`<div>我是文字</div>`

div{$}\*5 :

```
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
```

**p95  
快速生成css样式**  
当输入tac时，就可生成 text-align: center;  
w100就是width:100;  
只打出首字母即可；

p96  
快速格式代码  
![在这里插入图片描述](media/在这里插入图片描述-127.png)

p97  
复合选择器  
![在这里插入图片描述](media/在这里插入图片描述-129.png)

p98  
后代选择器  
![在这里插入图片描述](media/在这里插入图片描述-116.png)  
注意：  
1、后代选择器不一定只有父子，可以是爷爷父亲儿子，也可以更多，中间都是以空格隔开。最终选择的是最后一个

2、后代选择器可以是类选择器、id选择器、标签选择器等的任意组合。这样的主要作用是更加精准定位。比如有两个div p img这样的结构，为了选择出第二个可以将第二个div加个class=“name”，那么就可以.name p img。当然也可以设置id，不一定必须是class，可以是任意方式的组合。

**3、当后代选择器如下图写法时，不仅.nav的儿子会被影响，孙子也会被影响。选择的是.nav的所有后代a。若只想选儿子要用到下一节的子选择器**  
![在这里插入图片描述](media/在这里插入图片描述-155.png)  
![在这里插入图片描述](media/在这里插入图片描述-10.png)

p99  
子选择器  
![在这里插入图片描述](media/在这里插入图片描述-132.png)  
和后代选择器不同的是，子选择器只选择他的儿子

p101  
并集选择器  
![在这里插入图片描述](media/在这里插入图片描述-131.png)  
后代选择器和子选择器可以作为并集选择器的一部分  
![在这里插入图片描述](media/在这里插入图片描述-153.png)

p102  
伪类选择器  
![在这里插入图片描述](media/在这里插入图片描述-152.png)  
链接伪类选择器  
![在这里插入图片描述](media/在这里插入图片描述-111.png)  
active: 即鼠标长按的链接（不松开）

p103  
![在这里插入图片描述](media/在这里插入图片描述-132.png)

没有必要四个状态都写全，实际开发中只写a和a:hover就够用，如下图：  
![在这里插入图片描述](media/在这里插入图片描述-124.png)  
补充：  
p249:  
hover关联用法：当鼠标放到盒子a上时，显示a的**子盒子**b（当没有放在上面时b是隐藏的）：

```
a:hover b {
display: block;
}
```

p104  
focus选择器  
针对input表单元素，哪个元素获得了鼠标光标它的样式才会改变，是动态的。  
![在这里插入图片描述](media/在这里插入图片描述-166.png)  
![在这里插入图片描述](media/在这里插入图片描述-168.png)

p105  
复合选择器总结  
![在这里插入图片描述](media/在这里插入图片描述-159.png)

p106  
元素显示模式  
![在这里插入图片描述](media/在这里插入图片描述-153.png)

p107  
块元素  
![在这里插入图片描述](media/在这里插入图片描述-154.png)  
![在这里插入图片描述](media/在这里插入图片描述-108.png)

p108  
行内元素  
![在这里插入图片描述](media/在这里插入图片描述-129.png)  
块元素里面可以放块元素和行内元素，而行内元素里面只能放行内元素。  
![在这里插入图片描述](media/在这里插入图片描述-36.png)

p109  
行内块元素  
![在这里插入图片描述](media/在这里插入图片描述-115.png)  
行内块元素：  
具有的块元素的特点：可以设置宽和高  
具有的行内元素的特点：一行可以放多个

p110  
元素显示模式总结：  
![在这里插入图片描述](media/在这里插入图片描述-115.png)

p111  
**显示模式的转换**  
![在这里插入图片描述](media/在这里插入图片描述-48.png)  
将行内元素转换为块元素：可设置宽度和高度，但每行只能有一个  
将块元素转换为行内元素：不可设置宽度和高度，每行可有多个  
行内快元素：每行可以有多个，并可以设置宽度和高度

例：  
![在这里插入图片描述](media/在这里插入图片描述-158.png)

p112  
截图工具  
![在这里插入图片描述](media/在这里插入图片描述-124.png)

p114  
单行文字垂直居中（text-align是水平居中）  
![在这里插入图片描述](media/在这里插入图片描述-112.png)  
![在这里插入图片描述](media/在这里插入图片描述-126.png)

p115  
css背景  
背景颜色  
![在这里插入图片描述](media/在这里插入图片描述-128.png)

p116  
背景图片  
![在这里插入图片描述](media/在这里插入图片描述-131.png)

p117  
背景平铺  
![在这里插入图片描述](media/在这里插入图片描述-157.png)

p118  
背景图片位置  
background-position  
![在这里插入图片描述](media/在这里插入图片描述-168.png)  
若是省略方位名词，则默认居中

背景图片比插入图片更容易控制位置  
通常超大图片和超小图片都使用背景图片位置

背景图片位置可以是混合单位（像素值和位置）

p121  
![在这里插入图片描述](media/在这里插入图片描述-136.png)

p123  
背景固定  
background-attachment  
![在这里插入图片描述](media/在这里插入图片描述-167.png)

p124  
背景复合属性  
background，共5个属性  
和字体不同，背景复合属性没有特定的顺序  
![在这里插入图片描述](media/在这里插入图片描述-121.png)

p125  
盒子背景颜色半透明，对盒子内容无影响  
![在这里插入图片描述](media/在这里插入图片描述-157.png)

p126  
背景总结  
![在这里插入图片描述](media/在这里插入图片描述-171.png)

![在这里插入图片描述](media/在这里插入图片描述-138.png)

p127  
综合案例  
![在这里插入图片描述](media/在这里插入图片描述-165.png)

vscode多行输入同一内容: shift alt 鼠标左键

p129  
css三大特性  
层叠性（覆盖性）  
![在这里插入图片描述](media/在这里插入图片描述-114.png)  
当类名、属性名两者都一致时才会覆盖。若类名相同，属性名**不完全**相同则不会被覆盖。以下代码只会把前面设定的颜色覆盖掉，宽度和高度还是前面设定的，不会变。

```
.nav .bg2{
    background-color: pink;
    width: 200px;
    height: 100px;
}

.nav .bg2 {
    background-color: #666;
}
```

p130  
继承性  
![在这里插入图片描述](media/在这里插入图片描述-125.png)  
![在这里插入图片描述](media/在这里插入图片描述-92.png)  
继承性可以简化代码

P131  
行高的继承（继承的特殊情况）  
![ ](media/_.png)  
继承来的行高是根据子元素自身来变化的

P132  
优先级  
![在这里插入图片描述](media/在这里插入图片描述-125.png)  
行内样式：  
![在这里插入图片描述](media/在这里插入图片描述-92.png)  
important：  
![在这里插入图片描述](media/在这里插入图片描述-18.png)

p134  
权重叠加  
![在这里插入图片描述](media/在这里插入图片描述-163.png)  
权重会叠加，但不会进位

![在这里插入图片描述](media/在这里插入图片描述-112.png)

p135  
继承的权重是0，无论父亲的权重多高

如果要将第一个li中"人生四大悲"由红色改为粉色，不能直接用.pik，而要用.nav .pink。原因是.pink的优先级不如.nav .li的优先级高，无法覆盖红色。  
![在这里插入图片描述](media/在这里插入图片描述-162.png)

p137  
![在这里插入图片描述](media/在这里插入图片描述-155.png)  
![在这里插入图片描述](media/在这里插入图片描述-152.png)  
![在这里插入图片描述](media/在这里插入图片描述-35.png)

p138  
![在这里插入图片描述](media/在这里插入图片描述-126.png)  
![在这里插入图片描述](media/在这里插入图片描述-107.png)

p139  
盒子边框border  
![在这里插入图片描述](media/在这里插入图片描述-122.png)  
常用border-style: solid实线 dashed虚线 dotted点线  
![在这里插入图片描述](media/在这里插入图片描述-47.png)

P140  
边框的复合写法  
![在这里插入图片描述](media/在这里插入图片描述-118.png)  
根据层叠性的“就近原则”，boder-top会覆盖border里的内容。若是borde-topr在上border在下，则border会覆盖border-top的内容  
![在这里插入图片描述](media/在这里插入图片描述-91.png)

p141  
表格细线边框  
border-collapse边框合并  
![在这里插入图片描述](media/在这里插入图片描述-62.png)

p142  
边框会影响盒子的实际大小  
![在这里插入图片描述](media/在这里插入图片描述-38.png)

p143  
内边距  
![在这里插入图片描述](media/在这里插入图片描述-107.png)

p144  
内边距复合写法  
![在这里插入图片描述](media/在这里插入图片描述-166.png)

p145  
padding也会影响盒子实际大小  
![在这里插入图片描述](media/在这里插入图片描述-123.png)  
撑开  
![在这里插入图片描述](media/在这里插入图片描述-95.png)

p146  
padding撑大盒子的好处  
![在这里插入图片描述](media/在这里插入图片描述-121.png)  
![在这里插入图片描述](media/在这里插入图片描述-46.png)

p149  
padding不会撑开盒子的情况  
![在这里插入图片描述](media/在这里插入图片描述-94.png)  
如果只设置了height而没有设置width，则padding只会在垂直方向上撑开盒子，不会再水平方向上撑开。如果设置了width：100%，则padding会水平撑开盒子，在水平方向上出现滚动条

p150  
外边距  
![在这里插入图片描述](media/在这里插入图片描述-60.png)  
外边距复合写法和padding完全一致

padding和border会撑大盒子，但margin不会撑大盒子

p151  
块级盒子水平居中显示  
![在这里插入图片描述](media/在这里插入图片描述-160.png)  
![在这里插入图片描述](media/在这里插入图片描述-43.png)

P153  
外边距合并，外边距塌陷问题  
当两个盒子进行嵌套时，如果想要让子盒子在父盒子内有一定外边距，如让第一张图变为第二张图：

![在这里插入图片描述](media/在这里插入图片描述-16.png)  
![在这里插入图片描述](media/在这里插入图片描述-19.png)  
如果直接对子盒子的margin进行设置（例如margin-top: 10px），则父元素和子元素会一起向下移动，无法实现分离，如下：  
![在这里插入图片描述](media/在这里插入图片描述-86.png)  
正确解法应该是给父元素添加border、padding或者overflow: hidden三者之一，如下所示：  
![在这里插入图片描述](media/在这里插入图片描述-156.png)  
**注意：浮动的盒子不会有外边距塌陷**

![在这里插入图片描述](media/在这里插入图片描述-131.png)  
![在这里插入图片描述](media/在这里插入图片描述-74.png)

p154  
清除内外边距  
css第一行代码就是要清除浏览器自带的内外边距  
![在这里插入图片描述](media/在这里插入图片描述-112.png)

p161  
总结  
![在这里插入图片描述](media/在这里插入图片描述-133.png)

p164  
去除无序列表前面的小圆点：

```
li {
    list-style: none;
}
```

p165  
盒子圆角边框  
![在这里插入图片描述](media/在这里插入图片描述-124.png)

p166  
圆角边框常见用法  
![在这里插入图片描述](media/在这里插入图片描述-170.png)

p167  
盒子阴影  
![在这里插入图片描述](media/在这里插入图片描述-167.png)  
模糊距离越大，阴影越模糊（虚幻）；阴影尺寸越大，阴影越大。前者控制模糊，后者控制尺寸

![在这里插入图片描述](media/在这里插入图片描述-158.png)

p168  
文字阴影（了解）  
text-shadow  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p169  
浮动导读  
![在这里插入图片描述](media/在这里插入图片描述-128.png)  
![在这里插入图片描述](media/在这里插入图片描述-97.png)

p170  
传统网页布局的三种方式  
![在这里插入图片描述](media/在这里插入图片描述-122.png)  
![在这里插入图片描述](media/在这里插入图片描述-161.png)

p171  
![加粗样式](media/加粗样式-1.png)

p172  
![在这里插入图片描述](media/在这里插入图片描述-158.png)  
![在这里插入图片描述](media/在这里插入图片描述-73.png)

p173  
浮动特性  
![在这里插入图片描述](media/在这里插入图片描述-118.png)

脱标  
![在这里插入图片描述](media/在这里插入图片描述-118.png)  
![在这里插入图片描述](media/在这里插入图片描述-106.png)

p174  
浮动元素在一行显示，顶部对齐（一行显示不开的话会换行）  
![在这里插入图片描述](media/在这里插入图片描述-130.png)

p175  
浮动元素具有行内块元素相似特性  
![在这里插入图片描述](media/在这里插入图片描述-141.png)

p176  
![在这里插入图片描述](media/在这里插入图片描述-129.png)  
布局时先确定盒子大小，在确定盒子位置，不要颠倒

p181  
常见网页布局

![在这里插入图片描述](media/在这里插入图片描述-118.png)  
左右分开用浮动布局  
![在这里插入图片描述](media/在这里插入图片描述-158.png)

![在这里插入图片描述](media/在这里插入图片描述-117.png)

p182  
浮动就是让元素飘起来，后面的标准流元素能跑到浮动元素的下面（被浮动元素遮住）  
但是后面的浮动不会影响前面的（不会遮住前面的标准流元素，只会浮动在前面元素的后面，表面看去没有变化）  
![在这里插入图片描述](media/在这里插入图片描述-58.png)

p183  
清除浮动

在很多情况下我们没办法给父盒子设置具体高度。比如淘宝页面有很多商品，父盒子高度无法确定，如果不给父盒子设置高度而让其子盒子浮动，那么父盒子的高度会变为0。清除浮动可解决此类问题  
![在这里插入图片描述](media/在这里插入图片描述-164.png)  
![在这里插入图片描述](media/在这里插入图片描述-50.png)

p184  
清除浮动的本质  
![在这里插入图片描述](media/在这里插入图片描述-56.png)  
![在这里插入图片描述](media/在这里插入图片描述-105.png)  
![在这里插入图片描述](media/在这里插入图片描述-108.png)  
1、额外标签法（隔墙法）  
![在这里插入图片描述](media/在这里插入图片描述-49.png)  
![在这里插入图片描述](media/在这里插入图片描述-44.png)

p185  
清除浮动：给父级添加overflow  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

P186  
清除浮动：after伪元素  
![在这里插入图片描述](media/在这里插入图片描述-66.png)

p187  
清除浮动：双伪元素  
![在这里插入图片描述](media/在这里插入图片描述-66.png)

p188  
清除元素总结  
![在这里插入图片描述](media/在这里插入图片描述-143.png)  
![在这里插入图片描述](media/在这里插入图片描述-148.png)

p196  
css书写顺序  
![在这里插入图片描述](media/在这里插入图片描述-67.png)  
![在这里插入图片描述](media/在这里插入图片描述-45.png)

p197  
页面布局思路  
![在这里插入图片描述](media/在这里插入图片描述-64.png)

p198  
![在这里插入图片描述](media/在这里插入图片描述-143.png)  
![在这里插入图片描述](media/在这里插入图片描述-72.png)  
多类名调用时，后面的类会覆盖前面的类（优先级相同时）

p201  
导航栏制作：  
![在这里插入图片描述](media/在这里插入图片描述-93.png)  
![在这里插入图片描述](media/在这里插入图片描述-117.png)

p202  
下划线可以通过下边框设置

p203  
给其中一个孩子添加浮动，就需要给所有孩子添加浮动

p204  
1、按钮border默认有边框，需要手动去除  
2、button和input元素是行内块元素，默认之间有缝隙  
3、去除默认缝隙：设置浮动

**制作“学成在线”遇到问题及其解决：**

1、当父盒子空间有限时，margin不会撑大父盒子，但会把同级元素挤出父盒子

2、浮动的盒子没有外边距合并的问题

3、注意父盒子高度不要小于子盒子大小，否则子盒子会被挤在下面。表面上看不出问题，但父盒子下面的布局会出现问题，下面的布局和子盒子会重叠

4、class写多类名有好处也有坏处。好处是便于**批量**控制样式和css类可以重复使用，坏处是容易导致样式冲突并引起混乱。  
建议开始写css时可以先定义几个公用类，重复使用。公用类的原则是普适，并尽量少地定义公用类。公用类不应被定义为子类。  
而除了公用类外其余的类应有着严格的子代关系，这样可以避免样式冲突。

p223  
定位  
![在这里插入图片描述](media/在这里插入图片描述-52.png)

p224

静态定位（了解）  
![在这里插入图片描述](media/在这里插入图片描述-143.png)

相对定位（重要）  
relative  
![在这里插入图片描述](media/在这里插入图片描述-70.png)  
![在这里插入图片描述](media/在这里插入图片描述-54.png)

```
top: 8px; 
left: 10px;
```

表示距离它原来的顶部向下移动8px，距离它原来的左边缘向右移动10px。  
可以设置四个值：top bottom left right

p225 p226 p227  
绝对定位  
![在这里插入图片描述](media/在这里插入图片描述-59.png)  
和相对定位不同，绝对定位不保留原先的位置。这个特性可以使定位元素漂浮在其他元素之上而不影响其他元素

p228  
定位：子绝父相  
相对定位给绝对定位当爹  
![在这里插入图片描述](media/在这里插入图片描述-140.png)  
当两个盒子嵌套时，我们希望子盒子可以在父盒子内漂浮在其他元素之上而本身不占有位置，则需要给子盒子添加绝对定位。同时，只有父盒子拥有定位子盒子才会相对父盒子移动，而我们又不希望父盒子失去它原来的位置以至于导致下面布局混乱，所以给父盒子添加相对定位。这就是所谓的“子绝父相”（xiang一声）

“子绝父相”是使用最多的一种定位模式，但并不是一定使用这种模式，需要根据情况而定。

p230  
固定定位  
![在这里插入图片描述](media/在这里插入图片描述-57.png)  
![在这里插入图片描述](media/在这里插入图片描述-54.png)

p231  
![在这里插入图片描述](media/在这里插入图片描述-142.png)  
![在这里插入图片描述](media/在这里插入图片描述-101.png)

p232  
粘性定位  
若是给某元素添加了粘性定位，则当元素还可视窗口内时会跟随窗口滑动，达到设置的位置条件（top、left…）时则固定在那里。  
![在这里插入图片描述](media/在这里插入图片描述-53.png)  
![在这里插入图片描述](media/在这里插入图片描述-27.png)  
注意：  
1、当定位样式冲突时：left和right会默认right，top和bottom会默认top，和先后次序无关

2、为了简化css代码，可以使用并集选择器。将重复样式放入并集选择器中，然后再逐一设置每个类独有的样式。如下：  
![在这里插入图片描述](media/在这里插入图片描述-39.png)![在这里插入图片描述](media/在这里插入图片描述-58.png)

p244  
网页布局总结  
![在这里插入图片描述](media/在这里插入图片描述-110.png)

p245  
元素的显示与隐藏  
![在这里插入图片描述](media/在这里插入图片描述-76.png)  
display  
![在这里插入图片描述](media/在这里插入图片描述-100.png)  
![在这里插入图片描述](media/在这里插入图片描述-51.png)

p246  
visibility  
![在这里插入图片描述](media/在这里插入图片描述-68.png)

p247  
overflow  
![在这里插入图片描述](media/在这里插入图片描述-161.png)

p248  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

图片和父盒子一样大的方法：

```
img {
width: 100%;
height: 100%;
}
```

p249:  
hover关联用法：当鼠标放到盒子a上时，显示a的**子盒子**b（当没有放在上面时b是隐藏的）：

```
a:hover b {
display: block;
}
```

p250  
css高端技巧  
![在这里插入图片描述](media/在这里插入图片描述-94.png)  
![在这里插入图片描述](media/在这里插入图片描述-146.png)

p251  
精灵图  
![在这里插入图片描述](media/在这里插入图片描述-144.png)  
![在这里插入图片描述](media/在这里插入图片描述-55.png)

p252  
![在这里插入图片描述](media/在这里插入图片描述-104.png)

p255  
字体图标  
![在这里插入图片描述](media/在这里插入图片描述-116.png)  
![在这里插入图片描述](media/在这里插入图片描述-103.png)

p256  
字体图标下载  
![在这里插入图片描述](media/在这里插入图片描述-14.png)  
![在这里插入图片描述](media/在这里插入图片描述-63.png)

p257  
字体图标引入  
![在这里插入图片描述](media/在这里插入图片描述-96.png)  
![在这里插入图片描述](media/在这里插入图片描述-71.png)  
font-face可以在字体文件中style.css中进行复制，然后粘贴到我们自己的css文件中  
![在这里插入图片描述](media/在这里插入图片描述-169.png)

![加粗样式](media/加粗样式.png)  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p258  
字体图标的追加与加载  
![在这里插入图片描述](media/在这里插入图片描述-110.png)

p259  
css三角做法

左三角：

```
.box {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color:#000;
}
```

![在这里插入图片描述](media/在这里插入图片描述-17.png)

p261  
用户界面样式  
![在这里插入图片描述](media/在这里插入图片描述-90.png)  
鼠标样式  
![在这里插入图片描述](media/在这里插入图片描述-25.png)

p262  
轮廓线 outline  
![在这里插入图片描述](media/在这里插入图片描述-85.png)

防拖拽文本域 resize  
![在这里插入图片描述](media/在这里插入图片描述-15.png)

![在这里插入图片描述](media/在这里插入图片描述-22.png)

p263  
设置图片或表单（行内块元素）和文字垂直对齐  
vertical-align  
![在这里插入图片描述](media/在这里插入图片描述-99.png)  
![在这里插入图片描述](media/在这里插入图片描述-69.png)  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p264  
取消图片底部留白  
![在这里插入图片描述](media/在这里插入图片描述-168.png)

p265  
溢出的文字省略号显示  
![在这里插入图片描述](media/在这里插入图片描述-96.png)  
![在这里插入图片描述](media/在这里插入图片描述-160.png)  
![在这里插入图片描述](media/在这里插入图片描述-20.png)

p266  
![在这里插入图片描述](media/在这里插入图片描述-60.png)  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p267 p268  
常见布局技巧  
![在这里插入图片描述](media/在这里插入图片描述-96.png)  
相当于border-collapse效果（边框合并）

虽然所有盒子都向左移动了1像素，但是并不会出现“追不上”无法覆盖的情况。原因是盒子既添加了浮动也添加了margin-left:-1px这种效果。浏览器在渲染时，先渲染第一个盒子，时期左浮动并向左移动一像素。然后渲染第二个盒子，**先让其左浮动紧贴在第一个盒子右侧**，然后再左移一像素，以此类推。。。所以能很好地覆盖边框。

上图中的第二点是因为想要实现鼠标经过盒子显示完整边框的效果，但因为右侧的盒子压住了左侧盒子的有边框，所以右边框无法正常显示。当添加了定位并增加z-index级别后该元素会浮动到最上面，所以就能够显示完全。

p273  
css初始化  
![在这里插入图片描述](media/在这里插入图片描述-100.png)

![在这里插入图片描述](media/在这里插入图片描述-154.png)  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

P274  
html5和csss3新增特性导读

p275  
html5  
![在这里插入图片描述](media/在这里插入图片描述-118.png)  
![在这里插入图片描述](media/在这里插入图片描述-41.png)  
![在这里插入图片描述](media/在这里插入图片描述-156.png)  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p276  
新增视频标签  
![在这里插入图片描述](media/在这里插入图片描述-24.png)  
![在这里插入图片描述](media/在这里插入图片描述-29.png)  
![在这里插入图片描述](media/在这里插入图片描述-71.png)

、  
![在这里插入图片描述](media/在这里插入图片描述-112.png)

p277  
新增音频标签  
![在这里插入图片描述](media/在这里插入图片描述-109.png)  
![在这里插入图片描述](media/在这里插入图片描述-81.png)  
![在这里插入图片描述](media/在这里插入图片描述-26.png)  
![在这里插入图片描述](media/在这里插入图片描述-37.png)

p278  
新增input类型  
![在这里插入图片描述](media/在这里插入图片描述-129.png)

p279  
新增表单属性  
![在这里插入图片描述](media/在这里插入图片描述-168.png)

p280 p281  
css3新特性

新增选择器  
![在这里插入图片描述](media/在这里插入图片描述-23.png)  
属性选择器  
![在这里插入图片描述](media/在这里插入图片描述-123.png)  
![在这里插入图片描述](media/在这里插入图片描述-78.png)

![在这里插入图片描述](media/在这里插入图片描述-147.png)

p282 p283  
结构伪类选择器  
![在这里插入图片描述](media/在这里插入图片描述-130.png)  
p284  
![在这里插入图片描述](media/在这里插入图片描述-102.png)

p285  
nth-child和nth-of-type的区别：  
![在这里插入图片描述](media/在这里插入图片描述-119.png)  
例如，如果有以下html：  
![在这里插入图片描述](media/在这里插入图片描述-21.png)  
如果和下面一样用nth-child去选择，在本例中不会选择任何东西。原因是nth-child会先将所有元素依次排序（1、光头强；2、熊大；3、熊二），然后将序号为1的选择出来，再与冒号前的标签对比。但由于在本例中序号1是p标签而不是div，和冒号前标签不同，所以舍弃。最终未选择到任何东西。  
![在这里插入图片描述](media/在这里插入图片描述-114.png)  
如果和下面一样用nth-of-type去选择，则会将“熊大”选择出来。原因是nth-of-type先对和冒号前标签一样的元素进行排序（1、熊大；2、熊二），然后再选择出序号为1的元素。  
![在这里插入图片描述](media/在这里插入图片描述-119.png)

p286  
伪元素选择器  
before在盒内元素前面，after在盒内元素后面  
伪元素也能设置hover效果，参照p289

p290  
伪元素清除浮动  
使用after伪元素，会在盒子最后生成一个子元素（注意display: block; 转化为块级元素，否则无法生效）。本质是隔墙法  
![在这里插入图片描述](media/在这里插入图片描述-120.png)  
![在这里插入图片描述](media/在这里插入图片描述-28.png)  
display: table的作用是让两个块级元素在一行显示。当我们选择闭合浮动时，需要在父盒子的最前面和最后面都设置一个块级元素。但块级元素独占一行，如果需要在一行显示则设置display: table; 如下：  
![在这里插入图片描述](media/在这里插入图片描述-99.png)

p291  
css3新增盒子模型  
![在这里插入图片描述](media/在这里插入图片描述-160.png)  
![在这里插入图片描述](media/在这里插入图片描述-103.png)

p292  
css其他特性  
滤镜filter  
![在这里插入图片描述](media/在这里插入图片描述-160.png)

p293  
calc函数  
![在这里插入图片描述](media/在这里插入图片描述-158.png)

p294  
过渡  
![在这里插入图片描述](media/在这里插入图片描述-40.png)  
![在这里插入图片描述](media/在这里插入图片描述-125.png)  
![在这里插入图片描述](media/在这里插入图片描述-77.png)  
![在这里插入图片描述](media/在这里插入图片描述-151.png)

p295  
![在这里插入图片描述](media/在这里插入图片描述-103.png)  
![在这里插入图片描述](media/在这里插入图片描述-150.png)

p297  
![在这里插入图片描述](media/在这里插入图片描述-81.png)

p353  
服务器  
![在这里插入图片描述](media/在这里插入图片描述-65.png)  
![在这里插入图片描述](media/在这里插入图片描述-84.png)

p354  
![在这里插入图片描述](media/在这里插入图片描述-159.png)

p356  
2D转换之translate  
translate虽然让元素移动了，但**元素移动前的位置保留着，移动后的元素不占有位置（移动后会覆盖标准流）**。因此translate不会影响布局  
![在这里插入图片描述](media/在这里插入图片描述-83.png)  
![在这里插入图片描述](media/在这里插入图片描述-159.png)

p357  
让一个盒子水平垂直居中  
position和transform: translate的百分比表示结合来做。百分比二者都可以为负值  
![在这里插入图片描述](media/在这里插入图片描述-158.png)

p358  
2D转换之旋转rotate  
![在这里插入图片描述](media/在这里插入图片描述-172.png)

after元素制作hover效果  
![在这里插入图片描述](media/在这里插入图片描述-143.png)

p360  
设置转换中心点  
transform-origin  
![在这里插入图片描述](media/在这里插入图片描述-102.png)

伪元素和hover结合的写法  
![在这里插入图片描述](media/在这里插入图片描述-106.png)

transform: rotate(); 是根据最初的位置来定位的。比如在初始状态让一个元素顺势针旋转90°【添加hover(90deg)】。要是想让其hover之后恢复原来位置，要添加rotate(0)，而不是rotate(-90deg)。

border-collapse是给**表格**合并边框用的，并不能让其他相邻元素边框合并为一。要实现合并其他元素边框，可用magin-left:边框大小的负值; 来进行设置。下面是border-collapse示例（下面那张图使用了border-collapse）：  
![在这里插入图片描述](media/在这里插入图片描述-144.png) ![在这里插入图片描述](media/在这里插入图片描述-144.png)  
![在这里插入图片描述](media/在这里插入图片描述-143.png)

p362  
2D转换缩放scale  
![在这里插入图片描述](media/在这里插入图片描述-104.png)  
![在这里插入图片描述](media/在这里插入图片描述-105.png)

注：  
使用width和height缩放盒子的缺点是盒子上沿不动，左右下向四周延伸，**会影响其他盒子布局**  
而scale的优点是不会影响其他盒子布局(但放大会覆盖住其他盒子)，而且能设置缩放中心点（默认在中心，缩放时四条边一起动）  
![在这里插入图片描述](media/在这里插入图片描述-35.png)  
![在这里插入图片描述](media/在这里插入图片描述-90.png)

p365  
2D转换综合写法及其顺序问题  
![在这里插入图片描述](media/在这里插入图片描述-102.png)  
![在这里插入图片描述](media/在这里插入图片描述-26.png)  
旋转会改变坐标轴方向，最好放在最后

p366  
2D转换小结  
![在这里插入图片描述](media/在这里插入图片描述-120.png)

p367  
css3动画基本使用  
![在这里插入图片描述](media/在这里插入图片描述-78.png)  
![在这里插入图片描述](media/在这里插入图片描述-101.png)  
![在这里插入图片描述](media/在这里插入图片描述-119.png)

p368  
动画序列

from to只能做两个状态，相当于0%和100%  
![在这里插入图片描述](media/在这里插入图片描述-34.png)  
动画设置多个状态  
**百分比代表总时间的划分（占比越多，过程持续越长，占用总时间的比值越大）**  
![在这里插入图片描述](media/在这里插入图片描述-84.png)  
p369  
css3动画常见属性  
![在这里插入图片描述](media/在这里插入图片描述-126.png)

p370  
css3动画简写  
![在这里插入图片描述](media/在这里插入图片描述-82.png)

p371 372  
[大数据](https://so.csdn.net/so/search?q=%E5%A4%A7%E6%95%B0%E6%8D%AE&spm=1001.2101.3001.7020)热点图（波纹）案例

注意：  
1、做波纹效果不要用边框，要用阴影效果。因为波纹是有点模糊的感觉，而边框是完全实心的，不好看  
2、圆点和三个波纹是兄弟关系，一起放在一个div里。不给父级div设置大小，它只起定位作用。圆点和波纹都设置绝对定位效果  
3、给波纹设置放大效果时不要用scale，用width和height。因为scale会放大阴影效果（阴影模糊的宽度会增大，而我们想要宽度不变只是半径增大）  
4、记得给三个波纹设置不同的延迟效果和透明度(opacity，范围0到1，数值越大颜色越深，越小越透明)，以实现波纹的层叠效果，否则就只有一个波纹

p373  
速度曲线细节  
animation-timing-function  
![在这里插入图片描述](media/在这里插入图片描述-145.png)  
steps(n) 分n步完成这个动画（上一步到下一步是瞬间完成的）

white-space: nowrap; 文字强行一行显示

p374  
奔跑的小熊案例

注意：  
1、动画的0%是用来设置初态的，若是设置动画的那个目标盒子已经有了初态，0%可不写。若是无，0%要写明初始状态。初始状态一定要写全面，否则动画会有非常奇怪的效果。反之，若动画非常奇怪，记得检查一下初态（在这个案例中定位初态left: 0%; 忘了写）

p375  
css3D转换  
![在这里插入图片描述](media/在这里插入图片描述-83.png)  
![在这里插入图片描述](media/在这里插入图片描述-79.png)

p376  
3D转换之平移translate  
![在这里插入图片描述](media/在这里插入图片描述-103.png)![在这里插入图片描述](media/在这里插入图片描述-34.png)  
![在这里插入图片描述](media/在这里插入图片描述-89.png)

p377 p378  
透视  
perspective  
![在这里插入图片描述](media/在这里插入图片描述-166.png)  
注意：  
1、透视要写在被观察元素的**父盒子**（不一定是直接父级，爷爷曾爷爷啥的都可以）里面，而不是给被观察元素添加  
2、透视的单位是像素，下面用45°旋转效果举例说明透视值对透视效果的影响：

下面是 perspective: 400px;  
![在这里插入图片描述](media/在这里插入图片描述-124.png)

下面是 perspective: 800px;  
![在这里插入图片描述](media/在这里插入图片描述-149.png)  
可以看出透视值越大，图像距离我们眼睛越远，图像远端和近端在我们眼中的距离差距就越小（透视感越小）

当透视值设置较小时，可以做出很抽象类似“道路”的感觉。例如下面是perspective: 40px; 的效果  
![在这里插入图片描述](media/在这里插入图片描述-61.png)  
但当透视值为0时，图像反而失去了透视感，变得和透视值无穷大一样。

p379 p380 p381  
3D旋转rotateX Y Z  
![在这里插入图片描述](media/在这里插入图片描述-124.png)  
注意：沿着x轴旋转不是在x方向上旋转，而是以x轴为旋转轴上下翻转，方向为面朝x轴箭头**负**方向，正顺时针，负逆时针  
左手定则（适用x y z三个轴）：  
![在这里插入图片描述](media/在这里插入图片描述-164.png)

p381  
3D旋转  
语法：  
transform: rotate3d(x, y, z, angle)；  
前三个参数决定旋转的轴，**没有单位**，最终的旋转轴由x y z三个轴参数的**矢量和**决定。第四个参数界定旋转的角度，旋转的方向遵循左手定则

p382  
3D呈现transform-style  
![在这里插入图片描述](media/在这里插入图片描述-163.png)  
注：给爷爷添加了transform-style: preserve3d效果，孙子也能受到影响，即不一定要是亲儿子，只要是子代都可以

p383  
案例：两面翻转的盒子  
这个案例的主要思路是：设置一个父盒子，父盒子里面装两个子盒子。子盒子利用定位一上一下，下面的盒子被上面的覆盖住，同时将下面的盒子旋转180°（这样当父盒子旋转时底下的盒子的字就是正面的了）。然后当鼠标放在父盒子上时让**父盒子**旋转180°，这样就形成了两面翻转的效果。

p384  
立体导航栏

注意：  
1、给爷爷添加了transform-style: preserve3d效果，孙子也能受到影响，即不一定要是亲儿子，只要是子代都可以

2、添加多个transform效果的方法是不同效果之间用空格隔开，而不是逗号

3、做出下面那个趴倒盒子的效果：首先准备两个盒子，让他们位置重合，并用定位一个在上面，另一个被上面的覆盖掉。然后被覆盖的盒子**先向下移动**上面盒子高度的一半（translateY），**然后再沿x轴旋转**90°（rotate(-90deg)）。注意**一定要先移动后旋转**，否则轴方向会改变，得不到想要的效果。

4、上面2完成后，就实现了下图的效果。接下来要将上面的盒子向前移动下面盒子高度的一半，而不是将下面的盒子向后移动。原因是我们最终要旋转的是这两个盒子的父盒子（沿x轴旋转），父盒子和上面的盒子在一个面上，沿x轴旋转的话旋转中心在上面盒子的中心（高度一半的那条线）。如果上面盒子向前移动，那么旋转中心就刚好位于两个面围成立方体的中心，这样旋转效果比较自然。如果下面盒子向后移动的话，父盒子旋转中心就不在立方体中央了，旋转不好看  
![在这里插入图片描述](media/在这里插入图片描述-75.png)  
5、定位有两个作用：  
（1）设置top和left值  
（2）使多个元素在同一个位置，并实现覆盖效果  
在本例中，即使不适用top和left值也不可去除定位，因为要实现元素的覆盖

p386  
旋转木马案例

注意：  
和上一个案例不同，这个案例要先旋转再平移。原因是旋转后坐标轴会随之发生改变，这样便于控制平移方向（直接translateZ即可）

p388  
![在这里插入图片描述](media/在这里插入图片描述-122.png)