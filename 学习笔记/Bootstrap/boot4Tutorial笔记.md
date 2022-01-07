# 文本的设定（颜色、背景、单词样式-大小-首字母大写）

```html
<h1 class='bg-danger text-center text-white text-uppercase'>
    Hello World
</h1>
<p class='....'>
    Hello
</p>
```

**注意：** h1所在的位置可能不能占整个1行，可以通过 **col-md-12**等方法来独占1行,**或用类container**

**文本颜色：** text-info，text-warning,text-success,text-secondary,text-black-50,text-light,text-white-20,text-muted

**每个单词第一个字母大写:** text-capitalize

**背景：** bg-dark,bg-danger,bg-success,bg-info,bg-info,bg-warning,bg-secondary

# Typography(排版)



```html
<p class='h1'>
    Hello World!
</p>
<p class='display-1'>
    Hello World
</p>
<p>
    Normal text<small>smaller text</small>
    <mark>I am mark</mark>
    <code>I am code</code>
    <kbd>I am KBD</kbd>
    <del>I am DEL</del>
    I am <s>s</s>
    I am <ins>ins</ins>
    I am <ins>ins</ins>
    I am <strong>strong</strong>
    I am <u>u</u>
    I am <em>em</em>

</p>
<blockquote>
    <p>
        这里是引用内容
    </p>
</blockquote>
    <p title="显示提示">这个文字上会提示一些内容</p>
也可以在class="u em strong mark..."来使用
```

class='h1'...'h6'

class='display-1'...'display-4'

**small,mark,code,kbd,del**显示如下：·

<p>
    Normal text<small>   I am smart</small>
    <br/>
    <mark>I am mark</mark>
    <br/>
    <code>I am code</code>
    <br/>
    <kbd>I am KBD</kbd>
    <br/>
    <del>I am DEL</del>
	<br/>
    I am <s>s</s>
    <br/>
     I am <ins>ins</ins>
    <br/>
    I am <strong>strong</strong>
    <br/>
    I am <u>u</u>
    <br/>
    I am <em>em</em>
    <br/>
</p>
<blockquote>
    <p>
        这里是引用内容
    </p>
</blockquote>
<p title="这是提示">鼠标在这里有提示</p>

在一个**标签里加title="内容"时**，当鼠标停留在标签上时会有提示

```HTML
<ul className='list-inline' >
    <li className='list-inline-item'>java</li>
    <li className='list-inline-item'>python</li>
    <li className='list-inline-item'>PHP</li>
    <li className='list-inline-item'>Javascript</li>
</ul>
```

**list-inline,list-inline-item**让列表横向排列

```html
<div class="container">
    <dl class='row'>
        <dt class='col-sm-3'>eduwork</dt>
        <dd class='col-sm-9'>在工作中学习</dd>
        
        <dt class='col-sm-3'>work</dt>
        <dd class='col-sm-9'>在玩游戏</dd>

    </dl>
</div>
和上面的水平排列相似
```

**通过.text-truncate**，可以将显示的内容里进行截取，class='.text-truncate'




```html
<p class="font-weight-bold">
    I am 加粗黑体    
</p>
```

**font-weight-bold,font-weight-light,font-italic,lead**

**text-left,text-center,text-right,small,text-uppercase,text-capitalize,text-lowercase**



# container,row,col

所有元素都定义在div中，属性应该有container或container-fluid

```html
<div class="container bg-danger p-5">
    Hello
</div>
<div class="container-fluid bg-primary">
    hello
</div>
```

container,container-fluid**区别:**container在大到一定程度时会留边(**固定宽度**)，container-fluid不留边(**100%宽度**)



**可以在col里加row再加col形成表格样式**

```html
<div class='container'>
    <div class='bg-danger m-5'>
        I am simple div
    </div>
     <div class='bg-info m-3 p-5'>
        I am simple div
    </div>
    <div class='bg-info m-0'>
        I am simple div
    </div>

</div>
```

**m-5**是div之间的间距（外部间距）,m-0是没有间距,**ml-5**左边留5个，mr-5,mx-5**x轴外两边各留5个**,my-5**y轴上下各留5个**（margin)，mx-auto**外部两边自动留白，居中**，mr-N或ml-N微调距离。offset-N,offset-*-N，N为栅格数。ml-auto,mr-auto，自动对齐

在class里加**border**就是加边框，**col,row**中都可以加这个



**p-5**是div内的间距（内部留白），pl-5,pt-5,pb-5,pr-5,px-5,py-5:**左，上，下，右，左右留，上下留**(padding)

**w-25**,**w-100**:设置div宽度（**切割row？**后面详细查一下）

```html
<div class='container'>
    <div class="row">
        <div class='col bg-danger' 'd-flex'>
            <p class='bg-warning'>
                hello world
            </p>
            <p class='bg-info'>h
                hello world
            </p>
        </div>
    </div>
</div>
```

# 



1. **d-flex**后两这**p标签**并列显示(J**一行排版**)，**要加在col里才有用**

2. **水平方向对齐**加**justify-content-start,justify-content-end,justify-content-center,justify-content-between,justify-content-around**:左、右、中间、两边，环绕（平均分配），左中右p标签之间不留空白(**不足100%时对齐，没有占满12上格时的留白**)

3. **垂直方向对齐**加**align-items-start,align-items-end,align-items-center，上、中、下对齐**（**行对齐**）

4. **align-self-start**，end,center在单个p标签里设定自己对齐方式(**列对齐**)

   

# 图标



class='title-underline' 单独一个div内用是一个下划线**粗的**

```html
<strong>粗体</strong>
<i class='fas fa-check fa-3x'/>
```



```html
<h1 className="d-none d-sm-block">
    在小屏幕上隐藏
</h1>
<h1 className="d-block d-sm-none">
    在小屏幕上显示
</h1>
```

通过上面的代码，可以在**手机**和**电脑屏幕**上显示**不同**的控件（页面）

**隐藏元素:**d-{sm,md,lg,xl}-none,**隐藏所有:**d-none

![bootstrap显示隐藏图示1](.\images\bootstrap显示隐藏图示1.png)

![bootstrap](.\images\bootstrap显示隐藏图示2.png)

```html
<div class="container">
    <div class='row'>
        <div class='col col-sm-3 order-3'>
            第一列
        </div>
        <div class='col col-sm-3 order-2'>
            第二列
        </div>
        <div class='col col-sm-3 order-1'>
            第三列
        </div>
    </div>
</div>     
```

**order-n**,**n=1,2,3,...,12**,第一列将排到第三列位置。最大为12。**order-first,order-last,代表第一列和最后一列**，可以代替上面的数字



# 图片

**<img class="...">**

**img-fluid**,设置style为max-width:100%,height:auto

**img-thumbnail**,为小图加一个空心的外边框

**float-left,float-right** 设置图片左右浮动

**mx-auto**居中，应该为一个块的形式，加d-block类，或在上层div中设置

<pitcture></pitcture>在标签里使用**media="(max-width:600px)"，在界面小于等于600时显示此图片。

```html
<figure class='figure'>
    <img src='' class='figure-img'>
    <figurecaption class='figure-caption text-center'>在图片下显示的文字</figurecaption>
</figure>
```

# 表格

```html
<table class="table table-dark">
    <thead>
        <th>
            <td>...</td>
        </th>
    </thead>
    <tbody>
        <tr>
            <td>...</td>
        </tr>
    </tbody>
</table>
```

1. 在**table标签里**设置，**table**形成简单表格,**table-dark**颜色反转，**table-striped**隔行换色，**table-borderless**没有边框，**table-bordered**设置边框,**table-hover**悬停效果

​        在**table标签里**设置，**table-responsive**实现滚动，本表格超长的滚动，页面内其它的内容不滚动

2. 在**thead标签**里设置**浅灰或深灰标题头**，thead-dark,thead-light

3. 在**tr,td,th**设置table-success设置背景色，也可以在里面高文字颜色text-success

# 颜色和边框

**border-*:top,bottom,left,right**

**border-***：success,primary等设置边框颜色

**border-\*-0**消除某一边的边框：top,left,bottom,right

**.rounded和.rounded-\***,实现圆角，rounded-circle正圆，rounded-pill椭圆

**.rounded-sm,.rounded-lg**圆角的大小



# 工具类

### 公共样式（一）

```html
<button class="close">
    <span>&times;</span>
</button>
```

显示一个*的关闭按钮

**button:**里加类close在左上角加一个关闭按钮

在div中加**float-left,float-right**让两个div左右排列，**float-none**清除浮动（一般在浮动div的下一个div使用），在上一层div中加clear-fix可以在div中浮动，下面的div不浮动。

float-md-left在多大的屏幕才开始浮动

text-hide隐藏元素标签内容，但SEO还可以使用

```html
<div class="text-hide">
    Hello World//这里不显示
</div>
```

overflow-auto和overflow-hide来设置区域显示方式，隐藏后使用滚动条来查看（超长文本：上下，左右）。

div设置**visable,invisable**y设置内容是否可见。

**对齐**align-baseline,align-text-top,align=top,align-middle,align=bottom,align-text-bottom，顶部是没有空白的顶部，text-top是内去padding的顶部，有一定空白。

inline-block内联块，在一行显示。

### 位置相关的样式（二）

**.p-n:**内部留白0-5或auto,pt-n，pb-n,pl-n,pr-n,(px-n,py-n:指定左右、上下边距)

**.m-n:**外边距0-5或auto,mt-n,mt-n,mr-n,mb-n,可以同时指定多多个。(mx-n,my-n:指定左右、上下边距)

**.w-n:**设置元素的长度包括25%、50%、75%、100%和auto,w-100,w-25

**.h-n:**设置元素的高度包括25%、50%、75%、100%和auto,h-50,h-75

**.mv-\*,mh-\*:** 设置max-width,max-height

**.vw-\*,vh-\*:**设置相对于窗口的大小

**.shdaw-\*:**实现元素的阴影效果shdaw-lg,

### 文字块的样式（三）

**d-\*:**来设置display模式.*可以是none,inline,inline-block,block,table,table-row等

**text-wrap,text-nowrap:**文字是否换行，**text-break**对没有空格的句子强制换行，text-reset字体颜色重置，text-dceoration-none删除超链接下划线。



# Flex弹性布局

使用**d-flex和d-inline-flex**实现flx布局（**一般都用d-flex**）

**flex-row**可以呈现子元素水平方向位置，默认左到右显示(1,2,3)，flex-row-reverse反转各列

**flex-column**可以呈现子元素垂直方向位置，默认上到下显示(1,2,3)，flex-column-reverse反转各列

justify-content-start,justify-content-end,justify-content-end,justify-content-around,justify-content-between

align-items-start,align-items-center,align-items-end

align-self-start,align-self-end,align-self-center,align-self-baseline,align-self-stretch(这个是填满整个格)



**flex-fill**强制填完上一层div，中间加的是中间的高度可变高。两个设flex-fill则两个div等分高度或宽度（对列和行布局而言）。

flex-grow-\*,\*为1和0，为1时与flex-fill一样，为0未设flex-fill

**flex-shirk-1:**表示宽度不够时，换到新的一行中。0为不换行，不再新行中显示，在原来的行中缩放显示。

mr-auto,ml-auto，让定义此属性右边或左边的div自动排列（向右或左）。mb-auto,mt-auto用于列。

**flex-wrap,flex-nowrap:**如果需要自动换行，就用wrap,flex-wrap-reverse倒序

**order-\*:**指定顺序

**algin-content-start(end,center,between,around,stretch)重直对齐**



























