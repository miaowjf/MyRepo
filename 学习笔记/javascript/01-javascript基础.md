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