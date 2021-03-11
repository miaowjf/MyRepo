# 文本的设定（颜色、背景、单词样式-大小-首字母大写）

```html
<h1 class='bg-danger text-center text-white text-uppercase'>
    Hello World
</h1>
<p class='....'>
    Hello
</p>
```

**注意：**h1所在的位置可能不能占整个1行，可以通过 **col-md-12**等方法来独占1行,**或用类container**

**文本颜色：**text-info，text-warning,text-success,text-secondary,text-black-50,text-light,text-white-20,text-muted

**每个单词第一个字母大写:**text-capitalize

**背景：**bg-dark,bg-danger,bg-success,bg-info,bg-info,bg-warning,bg-secondary

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
</p>

```

class='h1'...'h6'

class='display-1'...'display-4'

**small,mark,code,kbd**显示如下：

<p>
    Normal text<small>   I am smart</small>
    <br/>
    <mark>I am mark</mark>
    <br/>
    <code>I am code</code>
    <br/>
    <kbd>I am KBD</kbd>
</p>

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

**m-5**是div之间的间距（外部间距）,m-0是没有间距,**ml-5**左边留5个，mr-5,mx-5**x轴外两边各留5个**,my-5**y轴上下各留5个**（margin)，mx-auto**外部两边自动留白，居中**



**p-5**是div内的间距（内部留白），pl-5,pt-5,pb-5,pr-5,px-5,py-5:**左，上，下，右，左右留，上下留**(padding)

**w-25**,**w-100**:设置div宽度

```html
<div class='container'>
    <div class="row">
        <div class='col bg-danger' 'd-flex'>
            <p class='bg-warning'>
                hello world
            </p>
            <p class='bg-info'>
                hello world
            </p>
        </div>
    </div>
</div>
```

# 



1. **d-flex**后两这**p标签**并列显示(J**一行排版**)

2. **水平方向对齐**加**justify-content-start,justify-content-end,justify-content-center,justify-content-between,justify-content-around**:左、右、中间、两边，环绕（平均分配），左中右p标签之间不留空白

3. **垂直方向对齐**加**align-items-start,align-items-end,align-items-center，上、中、下对齐**

4. align-self-start，在单个p标签里设定自己对齐方式

   

# 图标



class='title-underline' 单独一个div内用是一个下划线**粗的**

```html
<strong>粗体</strong>
<i class='fas fa-check fa-3x'/>
```



