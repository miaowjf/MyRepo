# Dom树
![[DOM树介绍.png]]
- 文档：一个页面就是一个文档，DOM中使用document表示
- 元素：页面中的所有标签都是元素，DOM中使用element表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示。**回车、空格**都是一个节点
- **DOM把以上内容都看做是对象**

## 获取页面元素
- 根据ID获取
>[!Code]- getElementById代码
>![[document-getelementbyid学习.png]]
>```javascript
><body>
>    <div id="hello">hello world!</div>
>    <script>
>        let hello=document.getElementById('hello')
>        console.log(hello)
>        console.log(typeof hello)
>        console.dir(hello)
>    </script>
></body>
>```

- 根据标签名获取
 >[!Code]- getElementsByTagName代码
> ![[getelementbytagname.png]]
>```javascript
><body>
>    <div>
>        <ul>
>            <li>item1</li>
>            <li>item2</li>
>            <li>item3</li>
>            <li>item4</li>
>            <li>item5</li>
>            <li>item6</li>
>            <li>item7</li>
>        </ul>
>    </div>
>    <script>
>        let list=document.getElementsByTagName('li')
>        console.log(list)
>        for(i=0;i<list.length;i++){
>            console.log(list[i])
>        }
>    </script>
></body>
>```
- 通过HTML5新增的方法获取
  - document.==getElements==ByClassName('类名');//根据类名返回元素==对象集合==
  - document.querySelector('选择器');//根据指定的选择器返回==**第一个**==元素对象
  - document.querySelectorAll('选择器');//根据指定选择器返回
  
>[!Code]- 代码图片
>![[H5新增加的获取元素方式-总结.png]]
>![[H5新增加的获取元素方式.png]]
- 特殊元素获取
![[获取body和html对象.png]]

## 事件的简介 #javascript/DOM/事件
![[事件的简单介绍.png]]
#javascript/DOM/事件/鼠标事件 #javascript/DOM/事件/mouse #javascript/DOM/事件/修改属性 #javascript/DOM/注册事件
![[常见的鼠标事件.png]]
![[元素属性的修改.png]]
![[表单元素值的改变.png]]

## 属性的获取和设置
#javascript/DOM #javascript/DOM/属性操作 #javascript/DOM/属性删除 #javascript/DOM/属性设置 #javascript/DOM/属性获取
#javascript/DOM/innerText #javascript/DOM/innerHTML
![[元素内容的改变与获取.png]]
![[说明-元素内容的改变与获取.png]]
- element.属性 ==获取属性值==
- element.getAttribute('属性')  ==获取**自定义**属性==
![[自定义属性值 的获得-代码.png]]
属性的设置
![[设置属性的值-代码.png]]
==innerText属性无法获取和设置，id可以获取和设置==
```javascript
<body>
    <div>
        <ul>
            <li id="li1">item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
            <li>item5</li>
            <li>item6</li>
            <li>item7</li>
        </ul>
    </div>
    <script>
        let list=document.getElementsByTagName('li')
        console.log(list)
        for(i=0;i<list.length;i++){
            console.log(list[i])
        }
        let li=document.querySelector('#li1')
        console.log(li.innerText)

        li.innerText="abc"

        console.log(li.getAttribute('id'))
        console.log(li.getAttribute('innerText'))
        li.setAttribute('id',"ddd")
    </script>
</body>
```
![[设置属性的值-代码-1改类名的特殊写法.png]]
![[设置属性的值.png]]
![[移除属性.png]]
![[自定义属性名规范-前面加data-就行.png]]
![[H5获取处定义属性dataset加属性名.png]]
![[H5获取处定义属性dataset加属性名-代码.png]]
![[H5获取处定义属性dataset加属性名-代码-驼峰-不加data.png]]

## 样式属性操作
#javascript/DOM/修改样式
![[javascript控制样式.png]]
![[javascript控制样式-代码例子.png]]
![[样式属性操作.png]]
![[元素属性的修改-代码.png]]
![[元素属性的修改-多类名代码.png]]
![[样式属性操作-2.png]]
![[操作元素总结.png]]

## 节点的操作
![[概述.png]]
![[父节点获取.png]]
![[子节点（标准）childnode.png]]
![[子节点（非标准）children.png]]
![[子节点获取-代码.png]]
![[获取第一个子节点.png]]
![[获取第一和最后一个子节点.png]]
![[获取第一和最后一个子元素-不包括文本.png]]
![[获取第一和最后一个子节点-代码.png]]
![[兄弟节点的获取.png]]
![[兄弟节点和元素获取-代码.png]]
![[兄弟元素的获取.png]]
![[创建元素.png]]
![[创建节点代码.png]]
![[添加子节点.png]]
![[删除节点.png]]
![[复制节点.png]]
![[复制节点-代码.png]]
![[三种动态创建元素的方法.png]]

## DOM操作
![[创建 1.png]]

![[增加.png]]

![[删.png]]

![[改.png]]

![[查.png]]

![[属性操作.png]]

![[事件操作.png]]

## DOM事件操作
![[事件操作任务.png]]

![[事件操作任务-具体.png]]

![[注册事件1.png]]

![[注册事件2.png]]

![[注册事件2-代码.png]]

![[注册事件兼容问题-ie9以前的.png]]

![[注册事件2-IE9以前使用.png]]

![[删除事件-代码（解绑事件）.png]]

![[删除事件.png]]

## DOM事件流
![[事件流过程.png]]

![[事件流过程-1.png]]

![[事件流过程-1-冒泡代码.png]]

![[事件流过程-1-注意事项.png]]

![[事件对象.png]]

![[事件对象说明.png]]

![[事件对象-1.png]]

![[事件对象-1-兼容处理.png]]

![[事件对象常见的方法和属性.png]]

![[this和target的区别.png]]

![[事件的currentTarget属性与this相似.png]]

![[事件委托.png]]

![[事件委托-代码.png]]

![[鼠标事件.png]]

![[常用的鼠标事件.png]]

![[常用鼠标事件.png]]

![[鼠标事件对象.png]]

![[常用键盘事件-代码.png]]

![[常用键盘事件.png]]

![[常用键盘事件-获得键码-代码.png]]

![[常用鼠标事件对象.png]]

![[常用键盘事件-注意事项、.png]]