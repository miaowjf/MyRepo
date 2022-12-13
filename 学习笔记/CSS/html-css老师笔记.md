##                                       网页

1.网站是指在因特网上根据一定的规则，使用HTML等制作的用于展示特定内容相关的网页集合

2.什么是网页？

   网页是网站中的一“页”，通常是HTML格式的文件，它要通过浏览器来阅读

   网页是构成网站的基本元素，它通常由图片，链接，文字，声音，视频等元素组成。通常我们看到的网页，常见以.htm或.html后缀结尾的文件，因此将其俗称为HTML文件。

3.什么是HTML？

   HTML指的是超文本标记语言，它是用来描述网页的一种语言

   HTML不是一种编程语言，而是一种标记语言

   标记语言是一套标记标签

4.所谓超文本，有2层含义：

   一是它可以加入图片，声音，动画，多媒体等内容（超越了文本限制）

   二是可以从文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本）

5.前端人员开发代码→浏览器显示代码（解析，渲染）→生成最后的web页面

6.浏览器是网页显示运行的平台。常见的浏览器有IE，火狐（Firefox）,谷歌（Chrome）,Safari(苹果)和Opera

7.浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面

   浏览器           内核                    备注

   IE                Trident               IE,猎豹安全，360极速浏览器，百度浏览器

   firefox            Gecko                火狐浏览器内核

   Safari             Webkit               苹果浏览器内核

   Chrom/Opera       Bink                 Chrome/opera浏览器内核

  （Blink其实是Webkit的分支）

   目前国内一般浏览器都会采用Webkit/Bink内核，如360，UC，QQ，搜狗

8.Web标准是由W3C组织和其他标准化组织制定的一系列标准的集合

   W3C（万维网联盟）是国际著名的标准化组织

9.结构      表现        行为

   HTML      CSS         JS

10.尖括号包围的关键字

     HTML最大标签 根标签

     双标签关系：包含关系，并列关系

     基本的结构标签：骨架标签

11.<!DOCTYPE html>文档类型声明标签，不是html标签，HTML5

12.lang语言种类 en英语    zh-CN中文   fr法语

     charset   <meta charset = “UTF-8”/>字符集

     万国码，基本包含了全世界所有国家需要用到的字符

13.根据标签的语义，在合适的地方给一个最为合适的标签，可以让页面结构更清晰

     加粗       <strong>       <b>         前，语义更强烈

     斜体       <em>          <i>

     删除线     <del>          <s>

     下划线     <ins>          <u>

14.div,span没有语义，用来装内容

15.文本格式化标签：

     alt 替换文本

     title 提示文本

16.src是<img>标签的必须属性，指定图像文件的路径和文件名

     键值对的格式  属性=“属性值”

17.目录文件夹：普通文件夹    html文件  图片

     根目录，打开目录文件夹的第一层就是根目录

18.绝对路径  \\   相对路径  /      anchor锚

19.target目标    表格：展示数据

     cellpadding    规定单元边沿与其内容之间的空白  默认1px

     cellspacing    单元格之间的空白    默认2px

20.表单的目的为了收集信息

     表单域（from定义）+ 表单控件（表单元素）+ 提示信息

    <from>会把范围内的表单元素信息提交给服务器

    action url地址    method:get/post   name

21.input 输入表单元素  select 下拉表单元素    textarea 文本域元素

    type 属性   checkbox 复选框  rest重置   radio 单选按钮

    checked 规定此input元素首次加载时应当被选中

___

##                                     CSS

1.基础选择器：标签选择器，类选择器，id选择器和通配符选择器

2.多类名   空格

3.通配符选择器使用“\*”定义，它表示选取页面中所有元素（标签）

4.Microsoft YaHei 微软雅黑   谷歌默认文字大小为16px

   normal 正常 ，bold  粗 对应    font-weight:  400    700

   font-style:italic   斜体

5.font复合属性书写

   font:font-style   font-weight   font-size/line height  font family

   其中font-size和font family必须保留

6.文本颜色

   color   预定义的颜色    red,green,blue

   十六进制        ##FF0000

    RGB代码        rgb（255,0,0）

7.text-decoration:none   underline（下划线）   overline(上划线)  line-through(删除线)

8.text-indext：2em     首行缩进

9.em是一个相对单位，当前元素(font-size)1个文字的大小

10.行间距：上间距，下间距，文本高度

11.CSS样式表：层叠样式表   级联样式表

     行内样式表（行内式） 内部样式表（嵌入式）  外部样式表（链接式）

12.<link rel=”stylesheet”(样式表文件)   href=”css文件路径”>

13.Emmet语法

14.复合选择器：后代选择器，子选择器，并集选择器，伪类选择器

15.LVHA:link visited hover active

16.input:focus 获得焦点的表单元素

17.块元素： <h1>~<h6>,<p>,<div>,<ul>,<ol>,<li>

18.文字类的元素内不能使用块级元素

19.行内元素，内联元素：a,strong,b,em,I,del,s,ins,span,a

20.img,input,td  行内块元素

21.display:block,inline,inline-block(有缝隙)

22.行高小于盒子高度   文字偏上

23.transparent透明

24.background-position:center top   水平  垂直

25.背景图像固定（背景附着）

     background-attachment:scroll（滚动）  fixed

26.背景复合写法

     background:transparent   url(image.jpg)   repeat-y  fixed top(控制位置)

     background:rgba(0,0,0,0.3)  IE9+

27.三大特性：层叠性，继承性，优先级

28.12px/1.5   当前子元素继承父元素的行高为1.5

29.选择器               选择器权重                  

     继承或\*                0,0,0,0     

     元素                     0,0,0,1 

     类，伪类              0,0,1,0

     ID                         0,1,0,0

     行内样式style=””   1,0,0,0

    important重要的    ∞无穷大

30.dashed虚线边框    solid实线边框    dotted电线边框

31.border-collapse:collapse   合并相邻的边框

32.上   左右   下  padding

33.没有指定宽度   padding不会撑大盒子

34.外边距可以让块级盒子水平居中，但必须满足两个条件：

     盒子必须指定了宽度（width）

     盒子左右的外边距都设置为auto

35.行内元素或者行内块元素水平居中给其父元素添加text-align:center

36.嵌套块元素垂直外边距的塌陷：

     对于两个嵌套关系（父子关系）的块元素，父元素有上外边距，同时子元素也有上外边距，此时父元素会塌陷较大的外边距值

     解决方案：一，可以为父元素定义上边距

                       二，可以为父元素定义上内边距

                       三，可以为父元素添加overflow:hidden

    还有其他方法：比如浮动，固定，绝对定位的盒子不会有塌陷问题

37.行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以。

38.text-decoration:none,underline

     list-style:none(可去除li前面的圆点)

39.width:200px

     height:200px

    设置border-radius:100px   为圆形

    设置border-radius:50%    也是一个圆○

40.border-top-left-radius   左上角

41.盒子阴影:

    box-shadow:11px 20px 10px 10px black inset

             (水平阴影/垂直阴影/模糊距离/阴影尺寸/颜色/内部阴影)

42.rgba(0,0,0,.3)

43.默认的是外阴影（outset），但是不可以写这个单词，否则导致阴影无效

44.盒子阴影不占用空间，不会影响其他盒子排列

45.传统网页布局的三种方式：

     普通流（标准流）      浮动       定位

46.网页布局第一准则：

    多个块级元素纵向排列找标准流，多个块级元素横向排列使用浮动

47.什么是浮动？

     float属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或者另一个浮动框的边缘

   浮动特性：

   一，浮动元素会脱离标准流（脱标），浮动的盒子不再保留原先位置

   二，浮动的元素会一行内显示并且元素顶部对齐

   三，浮动的元素会具有行内块元素的特性

48.为什么需要清除浮动？

    由于父级盒子很多情况下，不方便给高度，但是子盒子浮动不占有位置，最后父级盒子高度为0时，就会影响下面的标准流盒子

49.清除浮动的本质：

     清除浮动的本质是消除浮动元素造成的影响

     如果父盒子本身有高度，则不需要清除浮动

     清除浮动后，父级就会根据浮动的子盒子自动检测高度，父级有了高度，就不会影响下面的标准流了

     策略：闭合浮动

50.清除浮动的方法：

    一，额外标签法（隔离法）W3C推荐做法

    二，父级添加overflow属性

    三，父级添加after伪元素属性

    四，父级添加双伪元素属性

51.格外标签法（隔墙法）：就是在最后一个浮动的子元素后面添加一个额外标签，清除浮动样式

     浮动元素末尾添加一个空标签，例：<div style=”clear:both;”>（块级元素）

     通俗易懂，结构化较差

52.浮动总结：

    本质：是清除浮动元素脱离标准流造成的影响

    策略：闭合浮动，只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子

53.overflow:none ,auto,scroll(没溢出仍可见滚动条)

     代码简洁，无法显示溢出部分

54.zoom：normal|number(浮点数来定义缩放比例)|percentage

     IE浏览器专有属性

55.after伪元素清除浮动

```
.clearfix:after {content: "";display: block;height: 0;clear: both;visibility: hidden;        }.clearfix {            *zoom: 1;        }
```

56.双伪元素清除浮动

```
.clearfix:before ,cleaf:after {content: "";display: table;        }.clearfix:after {clear: both;        }.clearfix {            *zoom:1;        }
```

 57.常见的图片格式

      jpg : JPEG(JPG)     产品类图片经常    高清  颜色多 彩色信息保存较好

      gif ：最多存储256色   实际经常用于一些图片小动画效果

      png : 存储形式丰富  保存透明背景   切透明背景选择

      psd ： PhotoShop专用格式   复制文字   测量大小距离

58.ps切图：cutterman

59.开发工具：PS（切图）/cutterman插件 + vscode（代码） + chrome（测试）

60.CSS属性书写顺序：布局定位→自身→文本→其他

61.页面布局整体思路

-   确定版心（可视区）
-   分析页面行模块及每个行模块中列模块，页面布局第一准则
-   确定列大小，列位置        ，页面布局第二准则
-   HTML结构

62\. 浮动可以让多个块级盒子一行没有缝隙排列显示，经常用于横向排列盒子

63\. 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子

64\. 定位 = 定位模式 + 边偏移

     定位模式用于指定一个元素在文档中的定位方式，

     边偏移则决定了该元素的最终位置

65\. relative：

      一，移动位置的时候参照点是自己原来的位置

      二，不脱标，继续保留原来位置

66\. absolute:

     一，如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位（Document文档）

     二，如果祖先元素有定位（相对，绝对，固定定位），则以最近一级的有定位祖先元素为参考点移动位置

     三，绝对定位不再占有原来的位置（脱标）

67\. fixed（特殊的绝对定位）

   一，以浏览器的可视窗口为参照点移动元素（根父元素无关，不随滚动而滚动）

   二，脱标

67\. 固定在版心右侧位置

      先让固定盒子left:50%,走版心的一半位置

      然后margin:left：..版心宽度一般的距离

68.stick粘性定位（相对定位和固定定位的混合） IE不支持：

    比浏览器的可视窗口为参照点移动元素（固定定位特点）

    粘性定位占有原先的位置（相对行为特点）

    必须添加top,left,right,bot,tom其中一个才有效

69\. 盒子重叠，z-index来控制盒子的前后次序（z轴）

      默认auto 值越大 盒子越靠上

70\. 绝对定位的盒子居中

     加了绝对定位的盒子不能通过margin:.. auto水平居中，但是可以用以下计算方法：

     left:50%, 让盒子的左侧移动到父级元素的水平中心位置

     margin-left:-100px 让盒子向左移动自身宽的的一半

71\. 块 不设高宽 内容大小

72\. 浮动元素不同，只会压住它下面标准的盒子，但是不会压住下面标准盒子里的文字（图片）

     绝对定位（固定定位）会压住下面标准流所有内容

     浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的，文字会围绕浮动元素

73\. visibility:visible（元素可视） | hidden（元素隐藏）

     继续占有位置， display:none不占

74. 

![](/学习笔记/网络图片下载/20210723115038494.png)

为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了CSS精灵技术（CSSprites，也称CSS雪碧）

核心原理：将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求就可以了。往左为负值，往上为负值

75\. 字体图标iconfont:展示的是图标，本质属于字体

76.

![](/学习笔记/网络图片下载/20210723141459530.png)

```
.box {width: 0;height: 0;border: 50px solid transparent;border-right-color: pink;        }
```

77\. 兼容性

      line-height:0;

      font-size:0;

78\. 鼠标样式

      cursor: pointer | default | move | text |not-allowed

       小手  | 小白默认|移动|文本|禁止

79\. 取消表单轮廓（默认的蓝色边框）oubline:none;

80\. teatarea文本域 防止拖拽文本域 resize:none;

      <teatarea></textarea>去空白区域，放一行

81\. vertical-align: 经常用于设置图片或表单和文字垂直对齐，只针对于行内元素或者行内快元素

      baseline， 默认，元素放置在父元素的基线上

      top，     把元素的顶端与最高元素的顶端对齐

      middle，  把此元素放置在父元素的中部

      bottom,， 把元素的顶端与行中最低的元素的顶端对齐

82\. 图片底侧空白缝隙解决方案：

      除了baseline其他属性都可，再把图片设置为块级元素display:block

83\. 单行文字溢出省略号显示：

```
white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
```

84.

```
overflow: hidden;text-overflow: ellipsis;display: -webkit-box;            -webkit-line-clamp: 2;           -webkit-box-orient: vertical;
```

85\. margin-left : -1px  遮位

86\. 如果盒子无定位，则鼠标经过添加相对定位即可，z-index:1

      如果li都有定位，则利用z-index提高层级

87. 

![](/学习笔记/网络图片下载/20210723141903583.png)

```
border-top: 100px solid transparent;border-right: 50px solid skyblue;border-bottom:0 solid blue;border-left: 0 solid green;
```

 差不多

```
border-color: transparent red transparent transparent;border-style: solid;border-width: 100px 50px 0 0;
```

88\. #ccc白色

89\. CSS初始化

      \\9ED1\\4F53黑体

      \\5B8B\\4F53 宋体

      \\5FAE\\8F6F\\96C5\\9ED1微软雅黑

90\. CSS3抗锯齿形 文字显示更清晰

     -webkit-font-smoothing:antialiased

91\. HTML5新增 语义化标签：音频，视频，input表单，表单属性

      email  tel电话 date url

      number  search

92\. 新增表单属性

      required     内容不能为空

      placeholder  提示文本 存在默认值则不显示

      autofocus    自动聚焦属性

      autocomplete off/on 同时加name 用户在字段开始键入时，之前输入过的值

      multiple     多选文件提交

93\. CSS3新增选择器

       一，属性选择器 

            input\[value\], 有  \*=含有  $=结尾   ^=开头

       二，结构伪类选择器

       三，伪元素选择器

94\. ul li:first-child     匹配父元素中第一个子元素

      li:last-child      最后一个元素

      li:nth-child(n)    第n个元素

95\. nth-child(even偶数 | odd奇数)   n是公式，所有从0开始

      n + 5 第五个开始    -n +5 前5个

96\. nth-child    执行的时候先看nth-child(1)之后回去看指定元素

      nth-of-type  直接看指定元素

97\. 伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构（文档树中找不到）

98\. CSS3盒子模型

      box-sizing:content-box     width+padding+border

      box-sizing:border-box      width

     前提padding和border不会超过width宽度

99\. filter:calc(100%-30px)  动画 2D 3D

100\. 过渡 transition:width 5s ease 1s

          变化属性 花费时间 运动曲线 何时开始（all）

101\. 广义的H5 HTML5本身 + CSS3 +JavaScript

102\. 原型图 + psd效果图   网页美工

103\. 服务器（主机）是提供计算服务的设备，也是一种计算机

        文件服务器   数据库服务器 应用程序服务器 web服务器

104\. web服务器一般指网站服务器

        本地服务器：  局域网

        远程服务器 ： 互联网  域名

105.欠缺分析页面布局的能力：  模仿  收获

106\. D转换之translate 移动

        transform:translate(x,y)

        transform:translateX(n)

        transform:translateY(n)

    不影响其他元素位置，自身位置，对行内标签无用

107.rotate  旋转

       transform:rotate(45deg度数)   正  顺时针

108.转移中心点

      transform-origin:left bottom  方位名词

                 50%  50%  = center center

109\. 分页按钮 overflow:hidden

110\. scale缩放

        trandform:scale(1,1)  1倍   小于1缩放

111\. 2D转换综合写法    顺序问题

      transform:translate()空格 rotate() scale()

      位移放最前面

112\. 动画：相比过渡，动画实现更多变化，更多控制，连续，自动播放等效果

       先定义动画，再使用（调用）动画

113\. 用keyframed定义动画（类似定义类选择器）

      @keyframes   动画名称 {

      0% {

      width:100px;

      }

     100% {

     width:200px;

     }

     }

    调用  animation-name:move

    持续时间   animation-duration:2s

114.属性：运动曲线

      animation-timing-function:ease

      何时开始

      animation-delay:1s

      animation-iteration-count:1(默认 0)  infinite（无限）normal

      animation-play-state  默认 running paise 是否运行或暂停

      animation-fill-mode   运动结束状态后，保持forwards回到起始backwards

115\. 动画简写属性

      animation: 动画名称，持续时间 运动曲线 何时开始 播放次数 是否反方向

     运动起始或者结束的状态（不包含-play-state）

     animation:myfirst 5s linear(匀速) 2s infinite alternate

116\. 盒子动画结束后，停在结束位置：animation-fill-mode:forwards

117.opacity:1

118\. steps 指定了时间函数中的间隔效果（步长） 分几步完成动画

       animation:w 4s step(10) forward;

119\. 3D转移

        特点：近大远小，物体后面遮挡不可见

120\. 三维坐标系（3D）  平面坐标系（2D）

       X轴：水平向右

       Y轴：垂直向下

       Z轴：垂直屏幕 越靠眼睛越大 越往里是负值

       transform:translateX(100px),一般px 精确单位

       translate 3d(x,y,z)

121\. 透视perspective   模拟人类的视觉位置

        被观察元素的父盒子上面    越小越立体

　　transform:ratate3d(x,y,z,deg)

122\. 3D呈现transform-style

       控制子元素是否开启三位立体环境

        transform-style:flat | preserve-3d

        不开启 默认        开启

123\. 浏览器私有前缀是为了兼容老版本的写法

       -moz—firefox

       -ms- ie浏览器私有属性

       -webkit-safaric,chrome

       -o –opera

       -moz-border-radius:10px

       border-radius:10px

124\. pc端  火狐，ie

       移动端  uc，猎豹

125\. 兼容移动端主流浏览器，处理webkit内核浏览器即可

126\. 分辨率，屏幕尺寸

127\. 移动端调试方法：

-   谷歌浏览器的模拟手机调试
-   搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器
-   使用外网服务器，直接IP成域名访问

128\. 移动web开发流式布局

129\. 视口（viewport）就是浏览器显示页面内容的屏幕区域

        可分为布局视口，视觉视口和理想视口

130\. 布局视口 layout viewport

        用来解决早期的PC端页面在手机上显示的问题

       ioc,android基本设为980px

131\. 视觉视口: 网站的区域  visual viewPory

132\. 理想视口：ideal viewport  设备多宽，视口多宽

133\. meta视口标准

  <meta name="viewport" content="width=device-width, user-scalable=no initial-scale=1.0,，maximum-scale=1.0,minimum-scale=1.0">

width, 宽度设置的是viewport宽度，可以设置device-width特殊值

initial-scale， 初始缩放比大于0的数字

user-scalable, 用户是否可以缩放，yes或no(1或0)

134\. 物理像素：指的屏幕显示的最小颗粒

        iphone8 分辨率 1px =2个物理像素

        开发时1px不一定=1个物理像素

        pc端页面，1个px=1个物理像素

        一个px能显示物理像素点的个数（物理像素比或屏幕像素比）

        图片放大模糊 放大2倍

135\. background-size:500px 宽 高省略 等比缩放

        cover 把背景图像扩展至足够大尺寸  完全覆盖背景区域  （可能显示不全）

        contain    最大           式宽和高完全适应内容（部分空白区域）

136\. 移动端主流方案

     一，单独制作移动端页面（主流）  如京东商城手机版

     二，响应式页面兼容移动端（其次）   如三星手机官网

137\. 网页域名前加m(mobile)可打开移动端

        通过判断设备，如移动设备，则跳转移动端页面

        m.taobao.com   m,jd,com    m.suning.com

138\. 响应式  改变屏幕宽度  （制作麻烦，兼容性问题）

139\. CSS初始化   normalize.css

140\. CSS3盒子模型  box-sizing:border-box（移动端）   包含padding,margin

141\. 特殊样式   CSS盒子模型

     box-sizing: border-box;

     -webkit-box-sizing: border-box;

     /\* 点击高亮我们需要清楚  设置为完全透明 \*/

     -webkit-tap-highlight-color: transparent;

     /\* 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 \*/

     -webkit-appearance: none;

    /\*  禁用长按页面时的弹出菜单 \*/

     img,a {

         -webkit-touch-callout: none;

     }

142\. 移动端常见布局

一．单独移动：流式布局（百分比布局）（非固定像素布局）flex弹性布局（强烈推荐）

less + rem +媒体查询布局   混合布局

二．响应式

媒体查询  bootstrap

京东图片格式 无损压缩dpg webp 小320px

三．流式布局  max-width   min-width

四．flex布局  任何一个容器都可以指定为flex布局（灵活性）

当我们为父盒子设为flex布局以后，子元素的float,clear和vertical-align属性将失效

伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex布局

143\. 常见父项属

flex-derection: 设置主轴的方向

justify-content: 设置主轴上的子元素排列方式

flex-wrap: 设置子元素是否换行

align-content: 设置侧轴上的子元素的排列方式（多行）

align-items: 设置侧轴上的子元素的排列方式（单行）

flex-flow: 复合属性，相当于同时设置了flex-dirextion和flex-wrap

144\. flex-direction 主轴方向

       display:flex

        flex-direction:row;|row-reverse |column |column-reverse

         左→右        右→左     列，y轴主轴

145\. justify-content 主轴子元素排列

        justify-content:flex-start|flex-end|center，|space-around|space-between

       左到右，右到左（顺序不变），水平居中，平分剩余空位，先两边贴边，再平分剩余空间

146\. flex-wrap:wrap | nowrap

       换行

147\. align-items 侧轴上子元素排列

        align-items|flex-start |flex-end|center|strentch

       上到下|下到上|拉伸默认值

148\. align-cont侧轴上子元素排列（多行）

149.  
      flex-flow:column wrap;  
      flex-direction:column;  
      flex-wrap:wrap;  
150.flex布局常见子项常见属性  
       flex: 1占一份  
       align-self:fixed-end  控制子项自己在侧轴上的排列顺序  
151.背景线性渐变：  
       background:liner-grandient(起始方向，颜色1，颜色2~）  
       背景渐变必须添加浏览器私有前缀   -webkit--  
152.rem适配布局  
      rem的基准是相对于html元素的字体大小  
      如：根元素（html）设置font-size=12px;非根元素设置width:2rem，则换成px表示就是24px  
153.rem的优点是可以通过移动html里面的文字大小来改变页面中元素的大小可以整体控制  
154.媒体查询(Media Query)是CSS3新语法  
      @media可以针对不同的屏幕尺寸设置不同的样式  
      语法规范  
      @media mediatype(媒体类型) and|not|only（关键字）(media feature媒体特性） {  
        css-code;  
      }  
      mediatype  查询类型  
      all    所有设备  
      print  用于打印机和打印浏览  
      screen  用于电脑屏幕，平板电脑，智能手机等  
     @media screen and (max-width:800px) {  
     body {  
          bg-c:pink;      //在屏幕上最大宽度<=800  
          }  
     }

155.引入资源  
   <link rel="stylesheet" media="mediatype and|not|only media feature"  href="mystylesheet.css">  
156.less(leaner style sheets)一门扩展语言，css预处理器  
      现有css语法上，为css加入程序式语言的特点  
      简化了css的编写，降低了css的维护成本  
      常见的css预处理器：sass,less  
157.less是一门css预处理语言，它扩展了css的动态特性  
158.less变量   @变量名：值  
      命名规范：  
      ①，必须@前缀  
      ②，不包含特殊字符  
      ③，不以数字开头  
      ④，大小写敏感  
159.less嵌套  
      子元素的样式直接写到父元素里面  
      5px + 5 ，+ - \* /，运算符左右空格隔开，不一样单位，以第一个为准

160.rem适配方案  
       技术方案1：less + 媒体查询 + rem  
       技术方案(推荐）: flexible.js + rem  
161.设备         常见宽度  
    iphone4.5      640px  
    iphone6,7,8    750px  
     Android       常见320px,360/375/384/400/500/720  
                        (大部分4.7~5寸的安卓设备为720px)  
162.元素大小取值方法  
       ①，最后的公式：页面的元素的rem值 = 页面元素值（px)/屏幕宽度/划分份  
数  
       ②，屏幕宽度/划分的份数就是html font-size的大小  
       ③，页面元素的rem值 = 页面元素值（px)/html font-size字体大小  
163.在index.less中导入common less文件   
       @import "common"  
164.@import导入的意思，可以把一个样式文件导入到另外一个样式文件里面,link  
       是把一个样式文件引入到html页面里面  
165.最新less除法加括号  
166.flexible.js移动端适配库  
      <script src="js/flexible.js"></script>  
167.!important提权  
168.vscode px转换rem插件cssrem   ctrl + ,设置文字  
169.ps psd效果图，UI设计师，蓝湖/摹客  
170.图在上，字在下，  
      flex-direction:column  纵向显示  
      flex-items:center      水平居中  
171.swiper插件  轮播图  分页器  
       opcity:0.6  让盒子透明  
172.响应式开发原理  
       就是使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同  
设备的目的  
       设备划分           尺寸区间  
       超小屏幕（手机）   < 768px     
       小屏设备（平板）   >= 160px~992px  
       中等屏幕（桌面显示器）  >= 992px~1200px  
       宽屏设备           >= 1200px  
173.响应式需要一个父级作为布局容器，来配合子级元素来实现变化效果  
174.栅格系统   bootstrap最多12列     
175.每一列有默认15px的padding  
      类前缀：  
      xs-extra small(.col-xs-,超小)  
      sm-small  (.col-cm-,小）  
      md-medium（.col-md-,中等）  
      lg-large (.col-lg-,大）  
176.<div class="col=lg-3 col-md-4 col-xs-3"  
      hidden-md，中屏显示   ，visible-lg，  
177.列嵌套最好加个一个行 row  
      可以取消父元素padding,而且高度自动和父级一样高  
178.列偏移  
      .col-md-offset-4  一个盒子（12 - 8）/ 2  
179.列排序  
      .col-md-push，推     .col-md-pull，拉

##                                           JavaScript  
    

1.编程：就是让计算机为解决某个问题而使用某种程序设计语言编写程序代码，并

   最终得到结果的过程。

   计算机程序：就是计算机所执行的一系列的指令集合

   从事编程的人员就是程序员

2.计算机语言指用于人与计算机之间通讯的语言，它是人与计算机之间传递信息的

   媒介。

  种类：机器语言，汇编语言，高级语言

  实际上计算机最终所执行的都是机器语言，由二进制数“0”“1”

  二进制是计算机语言的基础

3.编程语言就是用来控制计算机的一系列语言，类似于人类语言的“语言”来控制

  计算机（汇编语言和高级语言）

  英文缩写的标识符

4.编程语言（很强的逻辑和行为能力，主动  if.else)

   标记语言（html)被读取的，被动的  格式化和间接

   翻译器

5.

![](/学习笔记/网络图片下载/20210727163654281.png)

显示器，键盘，主机，鼠标，硬盘，CPU，内存条

6.图片，文件所有数据最终都是以二进制数据（0.1）的形式存放在硬盘中

  程序，包括操作系统本质也是

7.平时所说的安装软件，其实就是把程序文件复制到硬盘中

8.bit < byte < kb < GB < TB <...

  位（bit)1bit可以保存一个0或1（最小的存储单位）

  字节（byte）1B=8b 

  千字节（KB）1KB=1024B

  兆字节1MB=1024kB   吉 太

9.程序运行  
  硬盘→内存条→CPU  
  ①，打开某个程序时，先从硬盘中把程序的代码加载到内存中  
  ②，CPU执行内存中的代码

10.注意：之所以要内存的一个重要原因，是因为CPU运行太快了，如果只从硬盘中  
读数据，会浪费CPU性能。所以，才使用存取速度更快的内存来保存运行时的数据  
    （内存是点，硬盘是机械）  
11.布兰登·艾奇     1995年 10天完成JavaScript设计  
     liveScript  Sun合作  改名 JavaScript  
12.JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言  
   （script是脚本的意思）  
13.脚本语言：不需要编译，运行过程中用JS解释器COS引擎，逐行来进行解释并执  
行  
14.现在也可以基于Node.js技术进行服务器端编程

![](/学习笔记/网络图片下载/20210727165748766.png)

15.JS的作用  
   一，表单动态检验（密码强度检测）（JS产生最初的目的）  
   二，网页特效  
   三，服务器开发（Node.js)  
   四，桌面程序（Electron)  
   五，APP（cordova)  
   六，控制硬件-物联网（Ruff）  
   七，游戏开发（cocos2d-js)

16.HTML/CSS标记语言---描述类语言  
    JS脚本语言--编程类语言  
    实现业务逻辑和页面控制（决定功能）  
17.浏览器分为两部分：渲染引擎和JS引擎  
    渲染引擎：用来解析HTML与CSS，俗称内核  
    比如chromr浏览器的blink，老版本的webkit  
    JS引擎：也称为JS解释器，用来读取网页中的JS代码  
   对其处理后运行，比如chrome浏览器的v8  
18.浏览器本身并不会执行JS代码，而是通过内置JS引擎（解释器）来执行JS代码  
，JS引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执  
行，因为脚本语言会逐行解释执行

19.

![](/学习笔记/网络图片下载/20210727170222327.png)

20.ECMAScript,规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守  
的一套JS语法工业标准  
    DOM,是W3C组织推荐的处理可扩展标记语言的标准编程接口  
   （通过DOM提供的接口可以对页面上的各种元素进行操作：大小，位置，颜色等  
）  
   BOM,它提供了独立于内容的，可以与浏览器窗口进行互动的对象模型，通过BOM  
   可以操作浏览器窗口（比如弹出框，控制浏览器跳转，获取分辨率等）  
21.行内式的JS  
    <input type="button" value=“唐伯虎” οnclick="alert('秋香')>  
    内嵌式 <script> </script>  
    外部  <script src=""><"/script>    双标签，中间不写代码  
22.单行注释 // ctrl + /  多行注释 shift + alt + a  
23.输入输出语句    
     方法                   说明                        归属  
   alert(msg)         浏览器输出警示框               浏览器  
   console.log(nsg)   浏览器控制台打印输出信息       浏览器  
   prompt(info)       浏览器弹出输入框，可以输入     浏览器  
  （console.log)  程序员测试  
24.变量是用于存储数据的容器，我们通过变量名获取数据，甚至数据可以修改  
     本质：变量是程序在内存中申请的一块用来存放数据的空间  
25.1.声明变量 var  (variable )  2.赋值  
     1 + 2 = 变量的初始化  var name = '‘  
26.  
     一，只声明不赋值  undefined   未定义  
     二，不声明不赋值  报错     x is not defined  
     三，不声明直接赋值使用  可使用   会变成全局变量  JS  
27.变量命名规范  
    ！name，一般浏览器有特殊含义，不使用  
    ①，由字母（a-z,A-Z），数字（0-9），下划线（\_),美元符号（$)组成  
    ②，区分大小写  
    ③，不能以数字开头  
    ④，不是关键字  
    ⑤，变量名必须有意义  
    ⑥，遵循驼峰命名法  首字母小写，后面单词的首字母大写myFirstName  
    var | (×) var &sex(×) var the\_word(√)  
28.temp  临时变量   交换效果  逻辑核心思路   
29.内存申请空间  
30.不同的数据所需占有的存储空间是不同的，充分利用存储空间数据的类型型号

31.JS是一种弱类型或者说动态语言，这意味着不用提前声明类变量的类型，在程  
     序运行过程中，类型会被自动确定  
     根据 = 右边变量值的数据类型来判断  
32.简单数据类型      说明           默认值  
     Number          数字型            0  
     Boolean      布尔值类型         false  
     String       字符串类型        ""　　''  
     Undefined    声明没给值       undefined  
     Null         var n = null空值    null  
33.010八进制转为10进制就是8     0~7  
     0~9 a~f   ox   十六进制  
    .MAX-VALUE最大值(1.7976..e + 308)  
    .Min-VALUE最小值(5e~324)  
     infinity无穷大  NaN ：not a mumber 非数值  
34.外双内单（“’‘”），内双外单（’“”‘）  
35.\\n换行，\\t tab缩进 ，\\b空格 blank  
36.字符串 + 任何类型 = 拼接之后的新字符串  
     数值相加，字符相连  
     变量和字符串相连的口诀：引引相加('' + '')  
37.undefined 和数字相加  结果是NaN  
     var space = null  
     console.log(space + 'pink');  //nullpink  
     console.log(space + 1 );  //1  
38.typeof检测变量数据类型  
39.var timer = null  prompt字符串 18  
    console.log(typeof timer); //object  
40.字面量是在源代码中一个固定值得表示法  
    通俗来说，就是字面量表示如何表达这个值  
    数字符字面量：8,9,10  
    字符串字面量：'黑马程序员',"大前端"  
    布尔字面量:true,false

41.prompt获取过来的数据默认是字符串类型的  
42.转换为字符串：   
    toString()  
    String()强制转换  
    加号拼接字符串  
   （和字符串拼接的结果都是字符串）  隐式转换  
    console.log(typeop sty);  
    console.log(String(num);  
    console.log(num + '');  
43.转换为数字型parseInt和parseFloat  
     parseInt(变量)  可以把字符串转换为数字型 得到的是整数  
     console.log(parseInt('3.14'));  //3 取整  
     console.log(parseInt('120px');  //120  
     console.log(........('rem120px');  //NaN  
44.Number()强制转换函数   JS隐式转换（- \* /）  
     隐式转换是我们在进行算数运算的时候，JS自动转换了数据类型  
45.用户输入→程序内部处理→输出结果  
46.转换为布尔型  
     Boolean()函数   
     代表空，否定的值会被转换为false，如'',0,NaN,null,undefined(5个）  
     翻译器翻译的两种：  
     编译器（生成代码文件，代码执行之前）  
     解释器（运行时进行及时解释并立即执行）  
47.当编译器以解释方式运行的时候，也称之为解释器

![](/学习笔记/网络图片下载/20210728113417379.png)

48.标识(zhi)符,指开发人员为变量，属性，函数，参数取的名字  
     不能是关键字或保留字  
49.运算符(operator)也叫操作符  
    是用于实现赋值，比较和执行算数运算等功能符号  
    JavaScript中常用的运算符：  
    算数运算符，增值和递减运算符，比较运算符，逻辑运算符，赋值运算符  
50.% 取余数（取模）  
51.浮点数  算数运算里面会有问题   精确度  
     console.log(0.1 + 0.2)  //0.30000...4  
52.表达式最后都会有1个结果  返回值  
     由数字，运算符，变量组成的式子  
53.变量前，前置递增运算符  和变量一起使用  
     变量后  后置  先返回值后 单独写和前置效果一样    
     c++ = 11 c = 12  
     人性化用后置  
     var e=10  
     var f = e++ + ++e;     //1.e++ =10 e=11  
     console.log(f);  //12    2.e=12  ++e=12  
54.== 判 等号（会转型）    ===全等  ！==  
     会把字符串型的数据转为数字型，要求值和数据类型都一致  
55.逻辑运算符  条件判断  &&（与）  ||（或） !（非）  
56.短路运算（逻辑中断）  
    原理：当多个表达式（值）时，左边的表达式可以确定结果时，就不再继续运  
    算右边的表达式的值

57.  
    表达式1&& 表达式2  
    如果表1值为真，返回表2的值，否则返回表1的值  
    表达式1||表达式2  
    如果表1值为真，返回表1的值，否则返回表2的值  
58.var num =0;  
     console.log(123 || num ||);  
     console.log(num)   //0  
59.++ 一个操作符   一元操作符    
60.一元操作符里面逻辑非优先级很高  
61.流程控制：就是来控制我们的代码按照什么结构顺序执行  
     顺序结构，分支结构，循环结构  
62.if(条件表达式） {  
       //执行语句1  
    }  
       //执行语句2  
63.双分支，多分支语句  
64.三元表达式  表达式？表达式1：表达式2  
65.switch(表达式，条件){  
    case value 1;  
    执行语句1；  
    break;  
    case .....                   代码验证  
    default:执行最后的语句;  
    }

66.switch..case  为比较确定值情况 直接  
   （分支多，效率更高）  
   if..else    灵活，范围判断   有几种条件，判断多少次  
   （分支少，效率更高）  
67.循环的目的：可以重复执行某些代码  
     在程序中，一组被重复执行的语句被称之为循环体  
     能否继续重复执行，取决于循环的终止条件。由循环体及循环的终止条件组成  
的语句，被称为循环语句。  
68.for(初始化变量；条件表达式；操作表达式）{  
     //循环体  
     }    计数器i   5050  
69.双重for循环，循环嵌套  
70.while(条件表达式){ //循环体}  
     计数器  初始化变量  
     也有操作表达式   完成计数器的更新  防止死循环  
71.continue   跳出本次循环，继续下一次循环  
     break      退出整个循环  
72.数组是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任  
意类型的元素。  
    数组将一组数据存储在单个变量名

73.创建数组方式：  
     一，利用new创建数组  var arr = new Array();  
     二，利用数组字面量创建数组   var 数组名 = \[\];  
74.数组名\[索引号\] 访问  获得  无 undefined  
75.遍历数组：就是把数组的元素从头到尾访问一次  
     数组名.length    元素个数  
     i是计数器，当索引号使用，arr\[i\]是数组元素第i个数组元素  
76.不要直接给数组名赋值，否则里面的数组元素都没有了  
77.函数：就是封装了一段可能重复调用执行的代码块，通过此代码块可以实现大  
量代码的重复使用  
78.函数使用分为两步：声明函数和调用函数  
     function 函数名() {  
       //函数体  }  
79.函数不调用自己不执行  小括号 .()  
80.函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个  
简单的函数接口  
81.在声明函数的小括号里面是形参（形式上的参数）  
     在函数调用的小括号里面是实参（实际的参数）  
82.多个参数之间用逗号隔开  
     形参可以看做是不用声明的变量  
     getSum(1);   //NaN     
     num2是一个变量，但没有接受之，结果就是undefined

83.①，我们函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名  
（）通过return实现  
     ②，只要函数遇到return就把后面的结果返回给函数的调用者 函数名（）  
\=return后面的结果  
84.return  终止函数  只能返回一个值，多个值可用数组  
85.如果函数没有return，返回undefined  
86.arguments对象存储了传递的所有实参  函数的内置对象  
   伪数组：   
   ①，具有数组的length长度  
   ②，按照索引的方式来存储的  
   ③，没有真正数组的一些方法 pop() push()  
87.函数是可以相互调用的  
88.var fun = function() {  
    //  
    }  fun (..)  
    fun 变量 匿名函数  
    function fn()  {   }  命名函数   函数关键字  
89.JavaScript作用域，就是代码名字在某个范围内起作用和效果，  
    目的是为了提高程序的可靠性，更重要的减少命名冲突  
90.JS的作用域（es6)之前：全局作用域，局部作用域  
    全局作用域：整个script标签，或者是一个单独的js文件  
    局部作用域（函数作用域）：在函数内部就是局部的作用域，这个代码的名字  
只在函数内部起效果和作用

91.如果在函数内部，没有声明直接赋值的变量也属于全局变量  
92.函数的参数也可以看做是局部变量  
93.全局变量只有在浏览器关闭的时候才会销毁，比较占内存资源  
     局部变量  当我们程序执行完毕就会销毁，比较节约  
94.根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据  
能被内部函数访问，就称作作用域链  
     一层一层往上查找  上一级  就近原则  
     站在目标出发，一层一层往上找  
95.一，console.log(num)报错  
     二，console.log(num); undefined  
            var num =10;  
     三，fn()  
           function fn()..  
           fn()  
           fn放在上下都可，自定义函数 函数关键字  
     四，fun();  
           var fun = function(){...   //报错  
96.JavaScript代码是由浏览器中的JS解析器来执行的  
     运行代码分为两步：预解析和代码执行  
     预解析JS引擎会把JS里面的所有var还有function提升到当前作用域的最前面  
     代码执行，按照代码书写的顺序从上到下执行  
97.变量预解析（变量提升）  
     就是把所有的变量声明提升到当前的作用域最前面 不提升赋值操作  
     函数预解析（函数提升）  
     就是把所有的函数声明提升到当前作用域最前面  不调用函数

98.函数表达式，调用必须写在函数表达式的下面  
99.var a=b=c=9  相当于  var a=9;b=9;c=9  
     b和c直接赋值，无var声明  当全局变量看  
100.对象是一个具体的对象  
       在JS中，对象是一组无序的相关属性和方法的集合  
       所有的事物都是对象，例如字符串，数值，数组，函数等  
101.对象由属性和方法组成（事物的特征，事物的行为）  
102.一个人的完整信息  数组 歧义  
       对象表达结构更清晰，更强大  
103.字面量创建对象  
      var obj = { sayhi:function()  
        name:"",  
        age:..  
      }方法冒号后跟一个匿名函数  
104.调用对象的属性  
       对象名.属性名       对象名\['age'\]  
105.变量和属性相同的  它们都是用来存储数据的  
       变量单独声明并赋值，使用的时候直接写变量名 单独存在  
       属性在对象里面的不需要声明的，使用的时候必须是对象.属性  
106.函数和方法的相同点 都是实现某种功能 做某件事  
       函数是单独声明的 并且调用的 函数名（）单独存在的  
       方法在对象里面  调用的时候  对象.方法

107.var obj=new Object(); 创建了一个空的对象  
　　obj.name="";  
108.利用构造函数的方式来创建对象  
109.构造函数就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面  
       封装的是对象  
110.function 构造函数名（） {  
       this.属性 = 值；  
       this.方法 = function(){}  
       }  
      new 构造函数名（）；  构造函数名字首字母大写  
      function Star(uname,age,sex) {  
       this.name = uname;  
       this.age = age;  
       this.sex = sex;  
       }  
      var ldh = new Star('刘德华',18,'男');  
111.构造函数不需要return  就可以返回结果  
      调用构造函数  必须用new  
112.对象特指是一个具体的对象  
      构造函数 明星 泛指的某一大类   它类似于java语言里面的类（class)  
113.new在执行时会做四件事情  
       一，在内存中创建一个新的空对象  
       二，让this指向这个新的对象  
       三，执行构造函数里面的代码，给这个新对象添加属性和方法  
       四，返回这个新对象（所以构造函数里面不需要return)  
114.for in 遍历我们的对象  
      for (变量 in  对象）{ }  
      for (var k in obj){  
      console.log(k); //k变量 输出得到属性名  
      console.log(obj\[k\]); //得到的是属性值  
      }     k  key

115.本质：对象就是一组无序的相关属性和方法的集合  
116.JS对象分为3种：自定义对象，内置对象，浏览器对象  
       前两种是JS基础内容，属于ECMAScript 后一个JS独有 ，JS API  
117.内置对象是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些  
常用的或是最基本而必要的功能（属性和方法）   帮助我们快速开发  
118.Math数学对象不是一个构造函数，所以我们不需要new来调用，而是直接使用  
里面的属性和方法即可  
   console.log(Math.PI); //一个属性 圆周率  
   console.log(Math.max(1,3);  
              (1,99,'pink')NaN  
              Math.max()　　-infinity  
   Math.min()  
   Math.floor()  //向下取整  ceil向上取整  
   Math.round()四舍五入 就近取整-3.5 结果 -3  1.5→2 -1.5→1 往大了取  
   Math.abs（）绝对值  
119.Math对象随机数方法 random()返回一个随机的小数  
      不跟参数  代码验证  
120.得到两个整数之间的随机整数，并包含这2个整数  
       function getRandom(min,max) {  
         return Math.floor(Math.random()\*(Max - Min)+ min;   
        }  
       console.log(arr\[getRandom(0,arr\[length -1\])随机点名

121.Date() 构造函数  new  
       var date = new Date();  
       console.log(date);   当前设备  
       new Date(2019,10,1)  // 返回11月  
       常用  '2019-10-1 8:8:8’）  
       date.getFullYear();  
       date.getMonth  当前月份0-11，少一月  
       date.getDate() 年月日  
       var arr = \['星期日'\] 0  
122.getHours()时 getMinutes()分  getseconds()秒  
123.Date对象是基于1920年1月1日（世界标准时间）的毫秒数 时间戳  
       一，valueof()  getTime()  
       二，var date  = + new Date()  
       三，H5新增  console.log(Date.now()); 获得总的毫秒数  
124.倒计时  时间戳转换为时分秒  
     （input TIme~now Time)  /1000  秒数  
      d = parseInt(总秒数/60/60/24）  //计算天数  
      h = parseInt(总秒数/60/60%24）  //小时  
      m = parseInt(总秒数/60%60）     //分数  
      s = parseInt(总秒数%60）        //当前秒数  
125.instanceof运算符，用来检测是否为数组  
      console.log(arr instanceof Array)  //true  
      Array is Array(参数）  
126.push()在我们数组的末尾，添加一个或多个数组元素 arr.push(4,'pink');unshift 在开头。。

127.pop（）删除最后一个元素  
       console.log(arr.pop());  
       console.log(arr)  返回删除的那个元素  
       shift()第一个  并返回第一个元素的值  
128.newArr.push(arr\[i\])  
       arr.reverse();翻转数组  
       arr.sort()  冒泡排序 个位 1.13.4.7  
129.arr.(indexOf('blue');返回该数组元素的索引号  
       只返回第一个满足条件的索引号  
       如果找不到  -1  
       lastindexOf  从后往前查找  
130.数组转换为字符串  
       arr.toString(); join(分隔符)   
       concat()连接，slice()数组截取 begin,end splice删除，几个开始，删除个  
数  
131.基本包装类型：就是简单数据类型，包装成为了复杂数据类型，就有了属性和  
算法。  
132.var temp = new String('andy');  
       str = temp;  
       temp = null; //销毁临时变量  
133.字符串的不可变  看上去内容没了  值不可变  地址变了  
       不要大量的拼接字符串

134.  
  一，charAt(index)返回位置返回字符  
  二，charCodeAt(index) 返回相应索引号的ASCII值  
      0 97 判断用户按下了哪个键  
  三，str\[index\]  H5新增的  
135.concat(str1,str2)连接  
    substr(start,length)从starth位置开始 length个数  
    slice(start,end) end取不到，都是索引号  
    substring(start,end) end取不到，不接受负值  
136.replace("被替换的字符"."替换的字符“）只换第1个  
137.split 字符转换为数组  
       console.log.str2.split(',');  
138.null返回object  错误 特殊 没想好存啥的变量  
139.简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型  
       一，值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身  
，因此叫做值类型（string,number,boolean,undefined,null)  
       二，引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），  
因此叫做引用数据类型）  
      通过new关键字创建的对象（系统对象，自定义对象）如Object,Array,Date等

140.堆栈空间分配区别：  
    一，栈（操作系统）：由操作系统自动分配释放存放函数的参数值，局部变量  
的值等。其操作方式类似于数据结构中的栈  
    简单数据类型存放到栈里面  
    二，堆（操作系统）：存储复杂类型（对象），一般由程序员分配不释放，由  
垃圾回收机制回收  
    复杂数据类型存放到堆里面  
141.  
   ①，简单数据类型：是存放在栈里面，里面直接开辟一个空间存放的是值  
   ②，复杂数据类型：首先在栈里面存放地址 十六进制表示，然后这个地址指向  
堆里面的数据

##                                       DOM

1.

![](/学习笔记/网络图片下载/20210728154326774.png)

2.API(Application Programming Interface,应用程序编程接口）  
   API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能  
   是一些预先定义的函数，目的是提供应用程序与开发人员给予某软件或硬件得以  
   访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节  
3.webAPI是浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM）  
4.DOM W3C组织推荐的处理可扩展标记语言(HTML或XML）的标准编程接口  
    W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容，结构  
和样式  
5.DOM树，一个页面就是一个文档，document。根元素 文本标签 element(所有标  
签，元素），node（所有内容，标签 属性 文本 注释）  
6.因为我们文档页面从上往下加载，所以先得有标签，script写标签下面  
   get获得，element元素,by通过，驼峰命名  
   typeOf sonsole.dir(timer)打印返回的元素对象，查看属性方法  
7.getElementsByTagName  
  返回的是获取返回元素对象的集合，以伪数组形式存储  
  得到元素对象是动态的  
8.element.getElementByTagName('标签名')  
   获取父元素内部所有指定的标签名的子元素  
   注意：父元素必须是单个对象（必须指明是哪个元素对象）  
   获取的时候不包括元素自己  
9.  
  一，getElementsByClassName 根据类名获得某些元素集合  
  二，querySelector 返回指定选择器的第一个元素对象  
  ！切记 里面的选择器需要加符号，，#nab  
  三，querySelectorAll()返回指定选择器的所有元素对象的集合  
10.document.body  返回body元素对象  
     document.documentElement  返回html元素对象  
11.事件概述  
     JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的  
行为  
    简单理解：触发 ---响应机制

12.事件三要素：  
     ①，事件源  事件被触发的对象  谁 按钮  
     ②，事件类型  如何触发  什么事件 比如鼠标点击（onclick) 还是鼠标经过  
，键盘按下  
     ③，事件处理程序：通过一个函数赋值的方式 完成  
13.执行事件步骤  
   ①，获取事件源  
   ②，绑定事件 注册事件  
   ③，添加事件处理程序（采取函数赋值形式）  
14.鼠标事件  
   onlick  鼠标点击左键触发  
   onmouseover 鼠标经过  
   onmouseout  离开  
   onfocus  获得焦点  
   onblur  失去焦点  
   onmousemove  移动  
   onmouseus 弹起  
   onmousedown 按下  
15.element.innerText  
     从起始位置到终止位置的内容，但它去除html标签，同时空格和换行符也会去  
掉  
16.element.innerHTML  
     起始位置到终止位置的全部内容，包括html标签，同时保留空格换行

17.innerHTML 是普通盒子，比如div标签里面的内容  
     input.value=''; 表单里面的值， 文字通过value来修改  
     input.disable=true; 禁用关系 this.disable  
18.element.style 行内样式操作 权重高  
     this.style.backgoundColor = '';  
19.让索引号 乘以44就是每个li的背景  
     index就是我们的y坐标  
     var index = i \* 44;  
     lis\[i\].style.backgroundPosition = '0' + index + 'px'

20.使用element.style获得修改元素样式  如果样式比较少或者功能简单的情况下  
使用     
     我们可以通过className更改元素的样式，适用于样式较多或者功能复杂的情况  
     this.className = "change"  
     className会直接更改元素的类名，会覆盖原先的类名  
21.element属性获取内置属性值（元素本身自带的属性）  
     element.getAttribute('属性');主要获取自定义的属性（标准）程序员自定义  
的属性  
22.设置元素属性值  
     一，element.属性 = '值'  
     二，element.setArribute('属性','值')主要针对自定义属性  
            div.setAttribute('class','footer');  
            class特殊，这里面是class 不是class  
     三，移除属性 removeAttribute(属性)  
23.自定义属性目的：是为了保存并使用数据，有些数据可以保存到页面中而不用  
保存到数据库中  
     但有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义  
属性  
24.H5规定自定义属性data-开头作为属性名并且赋值  
     比如 <div data-index='1'></div> 或使用JS设置  
     element.setAttribute('data-index',2)  
25.<div data-index = "2" data-list-name="andy">  
     console.log(div.dataset.\['index'\])  
     dataset是一个集合里面存放了所有以data开头的自定义属性  
     console.log(div.dataset\['listName'\]);  
     如果自定义属性里面有多个链接的单词，我们获取的时候采取驼峰命名法

26.一般地，节点至少拥有nodeType（节点类型），nodeName(节点名称）和  
nodeValue(节点值） 这三个基本属性  
27.元素节点：nodeType为1  实际开发：主要操作的是  
     属性节点: nodeType为2  
     文本节点：nodeType为3 （文本节点包括文字，空格，换行等）  
28.子节点  
     parentNode.childNodes(标准）  
     返回值包含了所有的子节点，包括元素节点，文本节点等  
     if(ul.childNodes\[i\].nodeType == 1) {}  
     parentNode.children(非标准)  只读属性，返回子元素节点  
29.firstChild 第一个子节点，不管是文本节点还是元素节点  
     firstElementChild返回第一个子元素节点  
     实际开发的写法，既没有兼容性问题又返回第一个子元素  
     console.log(children\[0\])  
30.nextSibling 下一个兄弟节点 包含元素节点或文本节点  
     div.nextSibling div.previousibling  
31.next ElementSibing 得到下一个兄弟元素节点  
     div.nextElementSibing previousElementSibing  
     封装一个兼容性函数  
32.node.appendchild(child) 后面追加元素，类似于数组中的push  
     node.insertBefore(child,指定元素）  
     var lili = document.createElement("li");  
     ul.insertBefore(lili,ul.children\[0\]);  
33.node.removeChild(child)  从DOM中删除一个子节点，返回删除节点

34.<a href="javascript:void(0);" 防止链接跳转  
     ul.removeChild(this.parentNode)  
35.node.cloneNode()  复制节点（克隆节点）  
     如果括号参数为空或者false，则是浅拷贝，即只克隆复制节点本身，不克隆里  
面的子节点  
     如果节点参数为true，则是深度拷贝，会复制节点本身以及里面所有的子节点  
36.创建元素  
     document.write('<div>123</div>') window.onload新页面  
     直接将内容写入页面的内容流，但是文档执行完毕，则它会导致页面全部重绘  
37.三种动态创建元素区别  
     一，document.write是直接将内容写入页面的内容流，但是文档流执行完毕，  
则它会导致页面全部重绘  
     二，innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘  
     三，innerHTML创建多个元素效率更高（不要拼接字符串，采取数组形式拼接）  
结构稍微复杂  
     四，creatElement()创建多个元素效率稍低一点点，但是结构更清晰  
     总结：不同浏览器下，innerHTML效率比creatElement高  
38.dom操作，主要有创建，增，删，改，查，属性操作，事件操作。  
39.给元素添加事件，称为注册事件或者绑定事件  
     注册事件有两种方式：传统方式和方法监听注册方式  
     传统方式：  
     特点：注册事件的唯一性  
     同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖  
前面注册的处理函数  
     addEvenlistener:  
     I9IE之前不支持，attachEvent()代替  
     特点：同一个元素同一个事件注册多个监听器，按注册顺序依次执行

40.eventTarget.addEventListener(type,listener\[,uselapture\])  
                     事件类型，事件处理函数，可选参数，布尔默认false  
     btns\[1\].addEventListener('click',function() {  
     alert(22);  
     })  
41.eventTarget.attachEvent(eventNameWithon,cellback)  
         事件类型字符串，事件处理函数   当目标触发事件时回调函数被调用  
42.删除事件（绑定事件）  
     div\[0\].onclick =null;  
43.divs\[i\].addEventListener(attachEvent)('click',fn)  
     function fn() {  
        alert(22);  
        divs\[1\].removeEventListenner（‘click',fn);  
     }  
44.事件流描述的是从页面中接收事件的顺序  
     事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流  
     三个阶段：捕获阶段，当前目标阶段，冒泡阶段  
45.！JS代码中只能捕获或者冒泡其中的一个阶段  
     onclick和attachEvent(e)只能得到冒泡阶段  
     捕获阶段：如果addEventListener 第三个参数是true，那么则处于捕获阶段  
     document→html   false：冒泡阶段

46.function(event)，event就是一个事件对象，写到我们监听函数小括号里，当  
形参来看  
     事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传  
递参数  
    事件对象是我们事件的一系列相关数据的集合，跟事件相关的，比如鼠标点击  
里面就包含了鼠标的相关信息，鼠标坐标  
    可自己命名 event evt e  
    事件对象也有兼容性问题，ie678通过，window.event   
    兼容性的写法  e=e||window.event  
47.e.target返回的是触发事件的对象（元素）  
     this返回的是绑定事件的对象（元素）  
     current Target 相似  i678不认识  
48.e.type返回事件类型  
49.防止默认行为 让链接不跳转 让提交按钮不提交  
     a.preventDefanlt()  //dom标准 写法  
     低版本  e.returnvlue 属性  
     return false  
50.获取元素通常使用两种方式：  
     一，利用DOM提供的方法获取元素  
            document.getElementById()  
            document.getElementByTagName()  
            document.querySelector等  
          （逻辑性不强，繁琐）  
   二，利用节点层级关系获取元素  
          利用父子兄节点关系获取元素  
        （逻辑性很强，但是兼容性稍差)

51.事件冒泡：开始时由具体的元素接收，然后逐级向上传播到DOM最顶层节点  
     e.stopPropagation();  
     e.cance(Bubble = true)  非标准  
52.事件委托（代理委托）  
     原理：不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点  
上，然后利用冒泡原理影响设置每个子节点  
     作用：只操作了一次DOM，提高了程序的性能  
53.docement.addEventListener('contextmenu',function(e){  
     e.preventDefault();禁止选中文字和禁止右键菜单  
     禁止鼠标选中   'selectstart'  
54.鼠标事件对象  MouseEvent  
     一，e.clientX clientY  可视区 x,y坐标  
     二，e.pageX  pageY     文档页面  IE9+支持  
     三，screenX   screenY  电脑屏幕  
55.document.onkeyup  按键弹起时触发  
     addEventListener('ketup',function  
56.'keydown '  按下  
57."keypress"  按下 但不识别功能键  比如ctrl shift  
     执行顺序 keydown→keypress→onkeyup  
58.keyup和keydown不区分字母大小写  a（97） 和A（65)都是65   
     !keypress区分  
59.keycode  返回该键ASCLL码值  
60.keyup事件触发的时候，文本已经落入文本框里面了

##                                                 BOM

1.BOM（Browser Object Model)即浏览器对象模型，它提供了独立于内容而与浏览  
器窗口进行交互的对象，其核心对象是window  
2.BOM缺乏标准，JavaScript语法的标准组织是ECMA  
               DOM                   W3C  
               BOM 最初是Netscape浏览器标准的一部分  
3.顶级对象window，把浏览器当做一个对象看待  
   BOM是浏览器厂商在各自浏览器上定义的，兼容性较差  
4.

![](/学习笔记/网络图片下载/20210729114028505.png)  
  window对象  双重角色  
  它是JS 访问浏览器窗口的一个借口  
  它是一个全局对象，定义在全局作用域中的变量，函数都会变成window对象的属  
性和方法  
5.窗口（页面）加载事件  
   window.onload =function() { }  
   或  
   window.addEventListener = ("load",function() {｝；）  
   当文档内容完全加载完成后会触发该事件（包括图像脚本文件，css文件等），  
就调用的处理函数  
6.document.addEventListenner('DOMContenloaded",function(){}  
   仅当DOM加载完成，不包括样式表，图片，flash等  
   图多时,load慢  
7.调整窗口大小事件  
  ('resize')  onresize  
  window.innerWidth 当前屏幕的尺寸

 8.window.setTimeout(调用函数（可写函数名），\[延迟的毫秒数\]）  
    setTimeout(function () {  
    console.log('时间到了');  
    },2000);   默认为0  
9.回调函数 callback  
   需要等待时间，事件到了才去调用这个函数  
10.clearTimeout(1 清除定时器  
11.serInterval 反复调用一个函数  
12.JS执行机制  
     JS一大特点是单线程  同一时间只能做一件事，所有任务需要排队  
13.如果JS执行的时间过长，会造成页面的渲染不连贯，导致页面渲染加载堵塞的  
感觉  
14.利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JS脚本创建多个线  
程，于是JS出现了同步和异步  
15.同步：  
     前一个任务结束后再执行另一个任务，任务执行的顺序与任务的排列顺序是一  
致的，同步的  
     异步：  
     做这件事的同时，可以去处理其他事情  
     本质区别：这条流水线上各个流程的执行顺序不同  
16.同步任务：  
     同步任务都在主线上执行，形成一个执行栈

17.异步任务  
   JS的异步是通过回调函数实现的  
   一般而言，异步任务有以下三种类型  
   ①，普通事件，如click,resize  
   ②，资源加载，load,error  
   ③，定时器，setInterval,setTimeout  
   异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）  
18.JS执行机制  执行栈主车道    
   ①，先执行执行栈中的同步任务  
   ②，异步任务（回调函数）放入任务队列中  
   ③，一旦执行栈中的所有同步任务执行完毕，系统就按次序读取任务队列中的  
异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行  
19.由于主线程不断的重复获得任务执行任务，再获取任务，再执行，所以这种机  
制被称为事件循环 event loop  
20.window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可  
以用于解析URL。因为这个属性返回的是一个对象，所以我们将这个属性也叫  
location对象  
21.URL统一资源定位符(Uniform Resourse Location)是互联网上标准资源的地址  
。互联网上的每个文件都有一个唯一的URL，它包含信息指出文件的位置以及浏览  
器应该怎么处理它  
     一般语法格式为：  
http: //www.itcast.cn/index.html?name=andy,age=18#link protocal://host  
\[:port\]/path\[?query\]#fragment  
通信协议 主机域名 端口号 路径（一个目录或文件地址） 参数  常见链接 锚点

location.href | host |port |pathname |search |hash  
整个URL        域名                   参数    片段

22.location.assign()跟href一样，可以跳转页面（也称为重定向页面)  
     location.replace()替换当前页面，因为不记录历史，所以不能后退页面  
     location.reload()重新加载页面，相当于刷新按钮或者f5，如果参数为true，  
强制刷新ctrl + f5  
23.navigator对象包含有关浏览器的信息，最常用的是userAgent.该属性可以返回  
由客户机发送服务器的user-agent头部的值  
24.history对象，与浏览器历史记录进行交互，该对象包含用户（在浏览器窗口中  
）访问过的URL  
    back()后退功能  forward()前进功能（）  
    go(参数)前进后退功能 参数1 前进1个页面 oa办公系统  
25.本地存储特性：  
    数据存储在用户浏览器中  
    设置，读取方便，甚至页面刷新不丢失数据  
    容量大，sessionstorage约5m  localstorage约20m  
26.  
  ①，生命周期为关闭 浏览器窗口  
  ②，在同一个窗口页面下数据可共享  
  ③，以键值对的形式存储使用  
  存： sessionStorage.setItem(key value)  
  取： getItem (key)  
  删： removeItem()  
  删all: clear()  
27.localStorage  
     生命周期永久生效，除非手动删除  
     可以多窗口（页面）共享  同一浏览器可以共享

##                                              JSON

1.JSON(JavaScript Object Nation)是一种轻量级的数据交换格式  
   一，采用完全独立于编程语言的文本格式来存储和表示数据  
   二，简洁和清晰的层次结构使得JSON成为理想的数据交换语言  
   三，易于人阅读和编写，同时也易于机器解析和生成，并有效地提高网络传输效  
率  
2.JSON是JS对象的字符串表示法  
   它使用文本表示一个JS对象的信息，本质是一个字符串  
3.将JS对象转换为JSON  {  "name ": "qingjiang"}  
   var str = JSON.stringify(user);  
   parse 转回对象  
4.前后端分离，前后端交互变得非常重要  
5.  
  对象表示键值对  
  数据由逗号分隔  
  花括号保存对象  
  方括号保存数组

##                                                 AJAX

1.AJAX(Asynchronous JavaScript and XML)  
      (异步的JavaScript 和 XML）  
  是一种在无需重新加载整个页面的情况下，能够更新部分网页的技术  
  不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的web应用  
程序的技术  
2.B/S未来主流，并且会爆发式的持续增长  
  产品链：H5 + 网页 + 客户端 + 手机端(android,ios) + 小程序  
3.使用ajax技术的网页通过在后台服务器进行少量的数据交换，就可以实现异步局  
部更新  
4.使用ajax，用户可以创建接近本地桌面应用，直接，高可用，更丰富，更动态的  
web用户界面  
5.注册时，输入用户名自动检测用户是否已经存在  
  登陆时，提示用户名密码错误  
  删除数据行时，将行ID发送到后台，后台在数据库中删除。删除后，在页面DOM  
中将数据行也删除  
6.核心: XMLHttpRequest对象（XHR)  
   XHR为向服务器发送请求和解析服务器响应提供了接口，能够从异步方式从服务  
器获取新数据

##                                             Vue.js

1.Vue是一个渐进式的框架，意味着你可以将vue作为你应用的一部分嵌入其中，带  
来更丰富的交互体验  
2.Vue有许多特点和web开发中常见的高级功能  
   解耦视图和数据  
   可复用的组件  
   前端路由技术  
   状态管理  
   虚拟DOM  
3.安装  
   方式一：直接CDN引入  开发环境版本(debug) 生产环境版本(release)  
   方式二：下载和引入  
   方式三：NPM安装  
4.ES6 let(变量） const(常量)   编程范式：声明式编程  
  <div id="app">  
  const app = new Vue ({  
     el:'#app';   //用于挂载要管理的元素  
     data: {  
              //定义数据  
            message  (可以服务器加载）   以前js（命令式编辑）  
      }  
    }；  
5.数据页面完全分离  
   数据改变页面自动改变（响应式）  
6.<li v-for = "items in movies">  
  视图层 DOM   视图模型层 ViewModel    数据层  Model  
  视图层 DOM 对数据层 Mode l进行DOM监听  
  数据层 Model 对视图层 DOM 进行事件绑定  
  MVVM  软件架构模式  
  有助于将图形用户界面的开发与页面逻辑或后端逻辑（数据模型）的开发分离开  
7.el:  
     作用：决定之后Vue实例会管理哪一个DOM  
  data:  组件中data必须是一个函数  
     vue实例对应的数据对象  
  Methods:  
     定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用

8.开发中什么时候称为函数(function)，什么时候称为方法(method)  
9.生命周期：事物从诞生到消亡的整个过程

10.Mustache语法{{}}  双大括号 胡子 将data文本数据插入到HTML  
11.  
    v-once 只渲染一次，不随数据改变而改变  
    v-html ='url'  
    v-text 一般不用，不灵活  
    v-cloak 不灵活  
    v-pre 用于跳过这个元素和它子元素的编译过程  
12.v-bind 动态绑定属性 动态绑定a元素的href属性  
     v-bind :src =  
     语法糖 指令简写 :src=  
13.computed 计算属性  
14.使用const修饰的标识符为常量，不可以再次赋值  
     使用const定义标示符，必须进行赋值  
     变量的含义是指向的对象不能修改，但是可以改变对象内部的属性  
15.v-onclick @click  
     如果该方法不需要额外参数，那么方法后（）可以不添加  
     如果方法本身中有一个参数，那么会默认将原生Event参数传递进去  
     如果同时传入某个参数，同时需要event，可以$event传入事件  
16.stop调用event.stoppropagetion()防止冒泡  
     prevent调用event.preventDefanlt()防止默认行为  
     {keycode | keyalias}只当事件是从特定键触发时才触发回调  
    .native  监听组件根元素的原生事件  
    .once 只触发一次回调

17.v-if v-else-if v-else  
     key判断是否复用  
18.v-if 当条件为false时，包含v-if指令的元素，根本不会存在dom中  
     v-show v-show只是给我们的元素添加一个行内样式display:none  
19.当需要在显示与隐藏之间切片很频繁时，使用v-show  
     当只有一次切换时，通过使用v-if  
20.v-for key的作用主要是为了高效的更新虚拟DOM  
     v-model指令来实现表单元素和数据的双向绑定

21.filter中回调函数有一个要求：必须返回一个boolean值，  
     true:当返回true时，函数内部都会自动将这次回调的加入到新的数组中  
     false:当返回false时，函数内部会过滤掉这次的  
22.map  
     reduce作用对数组中所有的内容进行汇总  
23.v-model其实是一个语法糖，它的背后本质上包含两个操作：  
     v-bind 绑定一个value属性  
     v-on 指令给当前元素绑定input属性  
24.v-model修饰符的使用  
     lazy修饰符：可以让数据在失去焦点或回车时才会更新  
25.number:可以在输入框中输入的内容自动转换成数字类型  
     trim:可以过滤内容左右两边的空格  
26.组件化：  
    我们将一个完整的页面分成很多个组件  
    每个组件都用于实现页面的一个功能块，而每一个组件又可以进行细分  
27.提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的  
应用  
    任何的应用都会被抽象成一颗组件树  
28.小的可复用，让我们代码更加方便组织和管理，并且扩展性也更强  
29.组件的使用分成三个步骤：  
   ①，创建组件构造器  
   ②，注册组件  
   ③，使用组件

30.const cpnc = vue.extend({  
     template:  
       <div>...})  
     Vue.component('my-cpn',cpn()  
31.子组件是不能引用父组件或者Vue实例的数据的  
     让大组件（父组件）将数据传递给小组件（子组件）  
     通过props(properties属性)向子组件传递数据  
     通过事件向父组件发送消息

![](/学习笔记/网络图片下载/20210729164806319.png)  
32.当子组件需要向父组件传递数据时，就要用到自定义事件  
     我们之前学习的v-on不仅仅可以用于监听DOM事件，也可以用于组件间的自定义  
事件  
33.在子组件中，通过$emit()来触发事件  
     在父组件中，通过v-on来监听子组件事件  
34.watch  双向绑定  
35.父组件访问子组件：使用$children或$refs  
     子组件访问父组件，使用$parent  
36.$refs→对象类型，默认时一个空的对象 refs='bbb'  
     console.log(this,$refs,aaa,name)  
37.slot  插槽  
    组件的插槽  
    是为了让我们封装的组件更具有扩展性  
    让使用者可以决定组件内部的一些内容到底展示什么  
38.编译作用域  
     父组件模板的所有东西都会在父级作用域内编译  
     子组件模板的所有东西都会在子级作用域内编译  
39.solt作用域插槽  
     父组件替换插槽的标签，但是内容由子组件来提供  
40.随着ajax异步请求的出现，慢慢形成了前后端的分离

41.全局变量同名问题  
42.在匿名函数内部，定义一个对象  
     给对象添加各种需要暴露到外面的属性和方法（不需要暴露的直接定义即可）  
     最后将这个对象返回，并且在外面使用了一个moudle接受  （模块最基础的封  
装）  
43.常见的模块化规范：  
     CommonJS,AMD,CMD也有ES6的Modules

##                                            Webpack

1.从本质上讲，webpack是一个现代的JavaScript应用的静态模块打包工具（模块  
和打包）  
2.而webpack其中一个核心就是我们可能进行模块化开发，并且会帮助我们处理模  
块间的依赖关系  
3.打包就是将webpack中的各种资源模块进行打包，合并成一个或多个包(bundle)  
   并且在打包的过程中，还可以对资源进行处理，比如：压缩图片，将scss转成  
css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等操作。  
4.grunt/gulp的核心是task  
   可配置一系列的task,而且定义task要处理事务（例如esc)  
   之后让grunt/gulp来依次执行这些task，让整个流程自动化也被称为前端自动化  
任务管理工具  
5.什么时候用grunt/gulp  
   如果你的工程模模块依赖非常简单，甚至是没有用到模块化的概念  
   只需要进行简单的合并，压缩，就使用grunt/tulp即可  
   但是如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用更  
加强大的webpack  
6.grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心  
   webpack更加强调模块化开发管理，而文件压缩合并，预处理等功能，是他附带  
的功能  
   依赖node环境   npm工具（node packages managel)  
7.npm install webpack@3.6.0 -g 全局安装  
   dist→distribution（发布）  
8.routine-only代码中，不可以有任何的template  
   routime-compiler代码中，可以有template，因为有compiler可以用于编译  
template

##                                                   Vue   CLI

1.Command-Line Interface 命令行界面 俗称脚手架，是一个官方发布Vue.js项目  
脚手架  
2.使用vue-cil可以快速搭建Vue开发环境以及对应的webpack配置  
3.开发大型项目 必然使用Vue.CLI  
  需要考虑代码目录结构，项目结构和部署，热加载，代码单元测试等  
4.路由（routing)就是通过互联的网络把信息从源地址传输到目的地址的活动  
5.路由器提供了两种机制：路由和传递  
   路由是决定数据包从来源到目的地的路径  
   转动将输入端的数据转移到合适的输出端  
6.vur-router  
  路由中有一个非常重要的概念叫路由表  
  路由表本质上就是一个映射表，决定了数据包的指向。