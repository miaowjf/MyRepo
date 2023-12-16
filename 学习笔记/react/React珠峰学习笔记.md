## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%AD%A6%E4%B9%A0%E7%9B%AE%E6%A0%87 "学习目标")学习目标

独立完成React项目；

掌握淘系React解决方案；

掌握常见的面试题；

预计完成天数46天，共计七周；

笔记代码地址[2023年最新珠峰React全家桶](https://github.com/ApostleChan/React_learn/tree/main/React_%E7%8F%A0%E5%B3%B0%E5%85%A8%E5%AE%B6%E6%A1%B6)

课程视频链接：[2023年最新珠峰React全家桶【基础-进阶-项目-源码-淘系-面试题】](https://www.bilibili.com/video/BV1sx4y1L7Rg/?share_source=copy_web&vd_source=6b0966f1205e7c0b4b8c8dce081f2e56)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#Create-react-app%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C "Create-react-app基础操作")Create-react-app基础操作

当下以及未来的前端开发一定是组件化/模块化。

1.  有助于团队协作开发
2.  便于组件的复用：提高开发效率、方便后期维护、减少页面中的冗余代码

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%A6%82%E4%BD%95%E5%88%92%E5%88%86%E7%BB%84%E4%BB%B6%EF%BC%9F "如何划分组件？")如何划分组件？

业务组件:针对项目需求封装的

-   普通业务组件：复用性低，只是单独拆选出来的一个模块；
-   通用业务组件：具备复用性

功能组件：适用于多个项目（列如：UI组件库中的组件）

-   通用功能组件

组件话开发必然带来工程化，基于webpack/vite/turbopack等工具实现组件的合并、压缩、打包等。

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%AE%89%E8%A3%85Create-react-app "安装Create-react-app")安装Create-react-app

React官方提供的脚手架，便于创建React项目。

全局安装`create-react-app`脚手架：

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>npm i create-react-app -g</span><br></pre></td></tr></tbody></table>

检查 `create-react-app`版本。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>create-react-app --version</span><br></pre></td></tr></tbody></table>

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E4%BD%BF%E7%94%A8Create-react-app%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E5%9F%BA%E4%BA%8E%E8%84%9A%E6%89%8B%E6%9E%B6%E5%BA%8A%E5%88%9B%E5%BB%BAReact%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%A1%B9%E7%9B%AE%EF%BC%9A "使用Create-react-app创建项目基于脚手架床创建React工程化项目：")使用Create-react-app创建项目基于脚手架床创建React工程化项目：

-   项目名称要遵循npm包命名规范:使用”数字、小写字母、\_”命名；

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>create-react-app 项目名称</span><br></pre></td></tr></tbody></table>

一个React项目中，默认会安装：

-   react：React框架的核心；
-   react-dom：React视图渲染的核心【基于React构建WebApp（HTML页面）】
-   react-scripts：一组脚本，帮忙运行或打包项目；

在项目根目录的package.json中定义了许多项目参数：

[![image-20230215005200864](media/image-20230215005200864.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215005200864.png)

暴露webpack配置，一旦暴露就不能还原。在暴露之前建议提交到git。

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>yarn eject</span><br></pre></td></tr></tbody></table>

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E8%84%9A%E6%89%8B%E6%9E%B6%E7%9A%84%E8%BF%9B%E9%98%B6%E5%BA%94%E7%94%A8 "脚手架的进阶应用")脚手架的进阶应用

[![image-20230215123313020](media/image-20230215123313020.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215123313020.png)

[![image-20230215124615696](media/image-20230215124615696.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215124615696.png)

基于环境变量修改端口号

[![image-20230215125037256](media/image-20230215125037256.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215125037256.png)

修改兼容列表

[![image-20230215125117135](media/image-20230215125117135.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215125117135.png)

处理Proxy跨域

在src目录中，新建setupProxy.js，安装 `http-proxy-middleware`：

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>yarn add http-proxy-middleware</span><br></pre></td></tr></tbody></table>

[![image-20230215130005785](media/image-20230215130005785.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215130005785.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#MVC%E6%A8%A1%E5%BC%8F%E5%92%8CMVVM%E6%A8%A1%E5%BC%8F "MVC模式和MVVM模式")MVC模式和MVVM模式

React是Web前端框架

1.  目前市面上比较主流的前端框架

-   React
-   Angular
-   Vue

主流的思想：不再直接操作DOM，而是改为“数据驱动思想”。

操作DOM思想：

-   操作DOM比较消耗性能，主要原因是：可能导致DOM重拍
-   操作起来也相对麻烦一些

数据驱动思想：

-   操作数据，框架会按照相关的数据，让页面重新渲染
-   框架底层构建虚拟DOM->真实DOM的渲染体系
-   有效避免DOM的重排/重绘

优点：

-   开发效率更高
-   性能更优

2.  React框架才用的是MVC体系；Vue采用的是MVVM体系

MVC：model数据层+view视图层+controler控制层

[![image-20230215131821095](media/image-20230215131821095.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230215131821095.png)

数据驱动视图的渲染，单向驱动；

MVVM：model数据层+view视图层+viewModel数据/视图监听层

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#JSX%E8%AF%AD%E6%B3%95%E4%BD%BF%E7%94%A8%E4%B8%8A%E7%9A%84%E7%BB%86%E8%8A%82 "JSX语法使用上的细节")JSX语法使用上的细节

JSX：JavaScript and xml（HTML） 把JS和HTML标签混合在一起

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span>;  </span><br><span><span>import</span> <span>ReactDOM</span> <span>from</span> <span>'react-dom/client'</span>;    </span><br><span><span>import</span> <span>App</span> <span>from</span> <span>"./App"</span>;</span><br><span></span><br><span></span><br><span><span>const</span> root = <span>ReactDOM</span>.<span>createRoot</span>(<span>document</span>.<span>getElementById</span>(<span>"root"</span>));</span><br><span></span><br><span>root.<span>render</span>(</span><br><span>    <span><span>&lt;&gt;</span>  </span></span><br><span><span>    {/*空标签，不会增加层结构 React.Fragment,既保证了只有一个根节点，又不增加一个HTML层级结构*/}</span></span><br><span><span>        <span>&lt;<span>div</span>&gt;</span>hello world<span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>         {/* 每一个构建的视图是能有一个根节点</span></span><br><span><span>        <span>&lt;<span>button</span>&gt;</span>取消注释会报错<span>&lt;/<span>button</span>&gt;</span>*/}</span></span><br><span><span>    <span>&lt;/&gt;</span></span></span><br><span>);</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#JSX%E7%9A%84%E5%85%B7%E4%BD%93%E5%BA%94%E7%94%A8 "JSX的具体应用")JSX的具体应用

`{}`胡子语法中嵌入不同的值，所呈现出来的特点

-   number/string：值是啥，渲染出来啥
    
-   bool/null/undefined/Symbol/Bigint：渲染内容是空
    
-   不支持渲染：普通对象
    
-   数组对象：把每一项拿出来，分别渲染
    
-   函数对象：不支持在`{}`中渲染，但是可以作为函数组件，作为`<componment/>`渲染
    

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%85%83%E7%B4%A0%E8%AE%BE%E7%BD%AE%E6%A0%B7%E5%BC%8F "元素设置样式")元素设置样式

行内样式，要以对象的形式设置

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span>root.<span>render</span>(</span><br><span>    <span><span>&lt;&gt;</span>  </span></span><br><span><span>        <span>&lt;<span>div</span> <span>style</span>=<span>{{</span></span></span></span><br><span><span><span>            <span>color:</span>'<span>red</span>',</span></span></span><br><span><span><span>        }}&gt;</span>hello world<span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>    <span>&lt;/&gt;</span></span></span><br><span>);</span><br></pre></td></tr></tbody></table>

设置样式类名：要把class替换为className

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>&lt;h2 className=<span>"box"</span>&gt;&lt;/h2&gt;</span><br></pre></td></tr></tbody></table>

需求一：基于数据的值，来判断元素的显示隐藏

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br></pre></td><td><pre><span> &lt;div&gt;</span><br><span>      {}</span><br><span>      &lt;div style={{</span><br><span>          <span>display</span>: <span>this</span>.<span>flag</span> ? <span>"block"</span> : <span>"None"</span></span><br><span>      }}&gt;显示</span><br><span>      &lt;/div&gt;</span><br><span>      {}</span><br><span>      {<span>this</span>.<span>flag</span> ? <span><span>&lt;<span>button</span>&gt;</span>渲染/不渲染<span>&lt;/<span>button</span>&gt;</span></span> : <span>null</span>}</span><br><span>      &lt;button onClick={<span>this</span>.<span>handleClick</span>}&gt;点击隐藏/显示&lt;/button&gt;</span><br><span>&lt;/div&gt;</span><br></pre></td></tr></tbody></table>

需求二：从服务器获取了一组列表数据，循环动态绑定相关的内容

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br><span>33</span><br><span>34</span><br><span>35</span><br><span>36</span><br><span>37</span><br><span>38</span><br><span>39</span><br><span>40</span><br><span>41</span><br><span>42</span><br><span>43</span><br><span>44</span><br><span>45</span><br><span>46</span><br><span>47</span><br><span>48</span><br><span>49</span><br><span>50</span><br><span>51</span><br><span>52</span><br><span>53</span><br><span>54</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span>;</span><br><span></span><br><span><span>class</span> <span>App</span> <span>extends</span> <span>React.Component</span> {</span><br><span>    <span>constructor</span>(<span>props</span>) {</span><br><span>        <span>super</span>(props);</span><br><span>        <span>this</span>.<span>state</span> = {</span><br><span>            <span>flag</span>: <span>false</span>,</span><br><span>            <span>data</span>: [],</span><br><span>        };</span><br><span>    }</span><br><span></span><br><span>    handleClick = <span>(<span>event</span>) =&gt;</span> {</span><br><span>        <span>this</span>.<span>flag</span> = !<span>this</span>.<span>flag</span>;</span><br><span>        <span>this</span>.<span>setState</span>({<span>flag</span>: <span>this</span>.<span>flag</span>});</span><br><span>    }</span><br><span></span><br><span>    <span>componentDidMount</span>(<span></span>) {</span><br><span>        </span><br><span>        <span>this</span>.<span>setState</span>({</span><br><span>            <span>data</span>: [</span><br><span>                {<span>id</span>: <span>1</span>, <span>title</span>: <span>"藏器于身"</span>},</span><br><span>                {<span>id</span>: <span>2</span>, <span>title</span>: <span>"潜龙勿用"</span>},</span><br><span>                {<span>id</span>: <span>3</span>, <span>title</span>: <span>"似水流年"</span>},</span><br><span>                {<span>id</span>: <span>4</span>, <span>title</span>: <span>"万物生长"</span>},</span><br><span>            ],</span><br><span>        })</span><br><span></span><br><span>    }</span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> (</span><br><span>            <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>                {/*控制元素显示不显示，本身已经渲染出来了*/}</span></span><br><span><span>                <span>&lt;<span>div</span> <span>style</span>=<span>{{</span></span></span></span><br><span><span><span>                    <span>display:</span> <span>this.flag</span> ? "<span>block</span>" <span>:</span> "<span>None</span>"</span></span></span><br><span><span><span>                }}&gt;</span>显示</span></span><br><span><span>                <span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>                {/*控制元素渲染或不渲染*/}</span></span><br><span><span>                {this.flag ? <span>&lt;<span>button</span>&gt;</span>渲染/不渲染<span>&lt;/<span>button</span>&gt;</span> : null}</span></span><br><span><span>                <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handleClick}</span>&gt;</span>点击隐藏/显示<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span></span></span><br><span><span>                <span>&lt;<span>ul</span>&gt;</span></span></span><br><span><span>                    {this.state.data.map((item, index) =&gt; {</span></span><br><span><span>                        // 循环创建的元素一定要设置key属性，属性值是本次循环中的唯一值 [优化DOM-DIFF]</span></span><br><span><span>                        return <span>&lt;<span>li</span> <span>key</span>=<span>{index</span> + <span>1</span>}&gt;</span>{index + 1}.{item.title}<span>&lt;/<span>li</span>&gt;</span>;</span></span><br><span><span>                    })}</span></span><br><span><span>                <span>&lt;/<span>ul</span>&gt;</span></span></span><br><span><span>            <span>&lt;/<span>div</span>&gt;</span></span></span><br><span></span><br><span>        )</span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>App</span>;</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#JSX%E5%BA%95%E5%B1%82%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6-%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9FDOM "JSX底层渲染机制[创建虚拟DOM]")JSX底层渲染机制\[创建虚拟DOM\]

1.  关于JSX的底层处理机制

-   第一步：把JSX编译为虚拟DOM对象（virtualDOM)

虚拟DOM：框架内部构建大一套对象体系（对象的相关成员都是React内部规定的），基于这些属性描述出我们所构建视图中的DOM节点的相关特征。

@1 基于babel-prest-react-app把JSX编译为React.createElement(…)这种格式！！只要是元素节点，必然基于createElement进行处理：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>React</span>.<span>createElement</span>(ele, props, ...children)</span><br><span> + ele：元素标签名【或组件】</span><br><span> + props：元素的属性集合【如果没有设置过任何属性，则为<span>null</span>】</span><br><span> + children：第三个及以后参数，都是当前元素的子节点</span><br></pre></td></tr></tbody></table>

@2 再把createElement方法执行，创建出virtualDOM虚拟DOM对象，【也有称之为：JSX元素、JSX对象、ReactChild对象】

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span>vitrualDOM = {</span><br><span>    <span>$$typeof</span>: <span>Symbol</span>(react.<span>element</span>),</span><br><span>    <span>ref</span>: <span>null</span>,</span><br><span>    <span>key</span>: <span>null</span>,</span><br><span>    <span>type</span>: 标签名 【或组件】</span><br><span>    </span><br><span>    <span>props</span>: {</span><br><span>    元素的相关属性,</span><br><span>    <span>children</span>: 子节点信息 [没有子节点则没有这个信息、属性可能是一个值、也可能是一个数组]</span><br><span>}</span><br><span>}</span><br></pre></td></tr></tbody></table>

-   第二步：把构建的virtualDOM渲染为真实DOM

真实 DOM：浏览器页面中，最后渲染出来，让用户看见的DOM元素。

基于ReactDOM中render方法处理

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span></span><br><span><span>ReactDOM</span>.<span>render</span>(</span><br><span><span><span>&lt;&gt;</span>...<span>&lt;/&gt;</span></span></span><br><span>    <span>document</span>.<span>getElementById</span>(<span>'root'</span>)</span><br><span>);</span><br><span></span><br><span></span><br><span><span>const</span> root = <span>ReactDOM</span>.<span>creatRoot</span>(<span>document</span>.<span>getElementById</span>(<span>'root'</span>));</span><br><span>root.<span>render</span>{</span><br><span>    <span><span>&lt;&gt;</span>...<span>&lt;/&gt;</span></span></span><br><span>};</span><br></pre></td></tr></tbody></table>

补充说明：第一次渲染页面是直接从virtualDOM->真实DOM；但是后期视图更新的时候需要经过一个DOM-DIFF的对比，计算出补丁包PATCH（两次视图差异的部分），把PATCH补丁包进行渲染。

[![image-20230217005329246](media/image-20230217005329246.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230217005329246.png)

\[Babel 中文网 · Babel - 下一代 JavaScript 语法的编译器 (babeljs.cn)\]([https://www.babeljs.cn/repl#?browsers=defaults%2C](https://www.babeljs.cn/repl#?browsers=defaults%2C) not ie 11%2C not ie\_mob 11&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code\_lz=DwEwlgbgfAUABHYALAjFAEgUwDbYPZwDueATtiMAPSqxXjRA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.15&externalPlugins=&assumptions={})

[![image-20230217005805085](media/image-20230217005805085.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230217005805085.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BA%95%E5%B1%82%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6 "函数组件的底层渲染机制")函数组件的底层渲染机制

React中的组件化开发：

1.  函数组件
2.  类组件
3.  Hooks组件：在函数组件中使用React Hooks函数

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6 "函数组件")函数组件

创建一个函数返回JSX元素：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br></pre></td><td><pre><span><span>const</span> <span>DemoOne</span> = <span>function</span> <span>DemoOne</span>(<span></span>){</span><br><span>    <span>return</span> <span><span>&lt;<span>div</span> <span>className</span>=<span>"demo-box"</span>&gt;</span></span></span><br><span><span>        我是DEMO-ONE</span></span><br><span><span>    <span>&lt;/<span>div</span>&gt;</span></span>;</span><br><span>};</span><br><span><span>export</span> <span>default</span> <span>DemoOne</span>;</span><br></pre></td></tr></tbody></table>

在Src目录中创建一个xxx.jsx文件，创建一个函数，让函数返回JSX视图【或者JSX元素、virtualDOM虚拟DOM对象】，这就是创建了一个”函数组件”。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span>&lt;<span>Componment</span>/&gt; </span><br><span><span><span>&lt;<span>Componment</span>&gt;</span>...<span>&lt;/<span>Componment</span>&gt;</span></span> </span><br></pre></td></tr></tbody></table>

组件的命名：一般采用PascalCase（大驼峰命名方法）

调用组件，可以给组件设置（传递）各种属性：

<table><tbody><tr><td><pre><span>1</span><br></pre></td><td><pre><span>&lt;<span>DemoOne</span> title=<span>"我是标题"</span> x={<span>10</span>} data={<span>100</span>, <span>200</span>} style={{<span>fontSize</span>: <span>'20px'</span>}}/&gt;</span><br></pre></td></tr></tbody></table>

如果设置的属性不是字符串，需要用`{}`嵌套。

基于双闭合调用，还可以传递子节点：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br></pre></td><td><pre><span>&lt;<span>Componment</span>&gt;</span><br><span><span><span>&lt;<span>span</span>&gt;</span>hello<span>&lt;/<span>span</span>&gt;</span></span></span><br><span>&lt;/<span>Componment</span>&gt; </span><br></pre></td></tr></tbody></table>

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#props%E5%B1%9E%E6%80%A7%E7%9A%84%E7%BB%86%E8%8A%82%E7%9F%A5%E8%AF%86 "props属性的细节知识")props属性的细节知识

对象的设置规则：

-   冻结对象：`Object.freeze(obj)`，检测对象是否被冻结：`Object.isFrozen(obj)=>true/false`；被冻结的对象不能被修改成员值、不能修改成员值、不能删除成员值；
-   密封对象：`Object.seal(obj)`;检测对象是否密封`Object.isSealed(obj)`；不能新增、删除；但是可以读取、修改；
-   扩展对象：把对象设置为不可扩展：`Object.preventExtension(obj)`；检测是否可扩展：`Object.isExtensible(obj)`；被设置不可扩展的对象：除了不能新增成员，其余的操作都可以处理；被冻结的对象是密封、也是不可扩展；

1.  属性props的处理

-   调用组件：传递进来的属性是“只读”的【原理：props对象被冻结了】
    -   Object.isFrozen(props)=>true
    -   获取：props.xxx
    -   修改：props.xxx=xxx =>报错

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span><span>const</span> <span>DemoOne</span> = <span>function</span> <span>DemoOne</span>(<span>props</span>){</span><br><span>    <span>let</span> {className, style, title } = props;</span><br><span>    <span>return</span> <span><span>&lt;<span>div</span> <span>className</span>=<span>{</span>`<span>demo-box</span> ${<span>className</span>}`} <span>style</span>=<span>{style}</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>h2</span>&gt;</span>{title}<span>&lt;/<span>h2</span>&gt;</span></span></span><br><span><span>        我是DEMO-ONE</span></span><br><span><span>    <span>&lt;/<span>div</span>&gt;</span></span>;</span><br><span>};</span><br></pre></td></tr></tbody></table>

-   作用：父组件（index.jsx）调用子组件（DemoOne.jsx）的时候，可以基于属性，把不同的信息传递给子组件，子组件接收响应的属性值，呈现不同的效果，让组件复用性更强；
    
-   虽然对传递进来的属性不能直接修改，但是可以做一些规则校验
    
    -   设置默认值
        
        <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span></span><br><span><span>DemoOne</span>.<span>defaultProps</span> = {</span><br><span>    <span>x</span>: <span>0</span></span><br><span>}</span><br></pre></td></tr></tbody></table>
        
    -   设置其他规则，列如：数据值格式、是否必传…【依赖于官方的一个插件：`prop-types`】
        
        <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br></pre></td><td><pre><span><span>import</span> <span>PropTypes</span> <span>from</span> <span>'prop-types'</span>;</span><br><span>函数组件.<span>propTypes</span> = {</span><br><span>    </span><br><span>    <span>title</span>: <span>PropTypes</span>.<span>string</span>.<span>isRequired</span>,</span><br><span>    </span><br><span>    <span>x</span>: <span>PropTypes</span>.<span>number</span>,</span><br><span>    </span><br><span>    <span>y</span>: <span>PropTypes</span>.<span>oneOfType</span>([</span><br><span>        <span>PropTypes</span>.<span>number</span>,</span><br><span>        <span>PropsTypes</span>.<span>bool</span>,</span><br><span>    ])</span><br><span>};</span><br></pre></td></tr></tbody></table>
        
        传递进来的属性，首先会经历规则校验，不管校验成功还是失败，都会把属性给形参props，只不过如果不符合设定规则，控制台会抛出错误（不影响属性值的获取）
        
    -   如果就想把传递的属性值进行修改：
        
        -   把props中的某个属性赋值给其他内容【列如：变量、状态】
            
        -   不直接操作props.xxx=xxx，但是可以修改变量/状态值
            
            <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br></pre></td><td><pre><span><span>let</span> y = props.<span>y</span>;</span><br><span>y = <span>1000</span>;</span><br></pre></td></tr></tbody></table>
            

[![image-20230219224955930](media/image-20230219224955930.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230219224955930.png)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br></pre></td><td><pre><span><span>let</span> {className, style, title,x, children } = props;</span><br><span></span><br><span>children = <span>React</span>.<span>Children</span>.<span>toArray</span>(children); </span><br><span></span><br><span><span>let</span> headSolt = [];</span><br><span><span>let</span> headerSlot = [],</span><br><span>    footerSlot = [],</span><br><span>    defaultSlot = [];</span><br><span>children.<span>forEach</span>(<span><span>child</span>=&gt;</span>{</span><br><span></span><br><span>    <span>let</span> {slot} = child.<span>props</span>;</span><br><span>    <span>if</span> (slot == <span>'header'</span>){</span><br><span>        headerSlot.<span>push</span>(child);</span><br><span>    }<span>else</span> <span>if</span>(slot ==<span>'footer'</span>){</span><br><span>        footerSlot.<span>push</span>(child);</span><br><span>    }<span>else</span> {</span><br><span>        defaultSlot.<span>push</span>(child);</span><br><span>    }</span><br><span>});</span><br></pre></td></tr></tbody></table>

[![image-20230219231152425](media/image-20230219231152425.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230219231152425.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%88%9D%E6%AD%A5%E5%B0%9D%E8%AF%95%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B0%81%E8%A3%85 "初步尝试组件的封装")初步尝试组件的封装

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br><span>33</span><br><span>34</span><br><span>35</span><br><span>36</span><br><span>37</span><br><span>38</span><br><span>39</span><br><span>40</span><br><span>41</span><br><span>42</span><br></pre></td><td><pre><span><span>import</span> <span>PropTypes</span> <span>from</span> <span>"prop-types"</span>;</span><br><span><span>import</span> <span>React</span> <span>from</span> <span>"react"</span>;</span><br><span></span><br><span><span>const</span> <span>Dialog</span> = <span>function</span> (<span>props</span>) {</span><br><span>    </span><br><span>    <span>let</span> {title, content, children} = props;</span><br><span>    children = <span>React</span>.<span>Children</span>.<span>toArray</span>(children);</span><br><span></span><br><span>    <span>return</span> <span><span>&lt;<span>div</span> <span>className</span>=<span>"dialog-box"</span> <span>style</span>=<span>{{</span></span></span></span><br><span><span><span>        <span>width:</span> '<span>300px</span>',</span></span></span><br><span><span><span>    }}&gt;</span></span></span><br><span><span>        <span>&lt;<span>div</span> <span>className</span>=<span>"header"</span> <span>style</span>=<span>{{</span></span></span></span><br><span><span><span>            <span>display:</span>'<span>flex</span>',</span></span></span><br><span><span><span>            <span>justifyContent:</span> '<span>space-between</span>',</span></span></span><br><span><span><span>            <span>alignItems:</span> '<span>center</span>',</span></span></span><br><span><span><span>        }}&gt;</span></span></span><br><span><span>            <span>&lt;<span>h2</span> <span>className</span>=<span>"title"</span>&gt;</span>{title}<span>&lt;/<span>h2</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>span</span>&gt;</span>X<span>&lt;/<span>span</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>div</span> <span>className</span>=<span>"main"</span>&gt;</span></span></span><br><span><span>            {content}</span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>        {</span></span><br><span><span>            children.length &gt; 0 ?</span></span><br><span><span>                <span>&lt;<span>div</span> <span>className</span>=<span>"footer"</span>&gt;</span></span></span><br><span><span>                    {children}</span></span><br><span><span>                <span>&lt;/<span>div</span>&gt;</span> : null</span></span><br><span><span>        }</span></span><br><span><span>    <span>&lt;/<span>div</span>&gt;</span></span>;</span><br><span>}</span><br><span></span><br><span></span><br><span><span>Dialog</span>.<span>defaultProps</span> = {</span><br><span>    <span>title</span>: <span>'温馨提示'</span></span><br><span>};</span><br><span></span><br><span><span>Dialog</span>.<span>propTyprs</span> = {</span><br><span>    <span>title</span>: <span>PropTypes</span>.<span>string</span>,</span><br><span>    <span>content</span>: <span>PropTypes</span>.<span>string</span>.<span>isRequired</span></span><br><span>};</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Dialog</span>;</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6%E5%92%8C%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6 "静态组件和动态组件")静态组件和动态组件

函数组件是静态组件，第一次渲染组件把函数执行：

-   产生一个私有的上下文
-   把解析出来的props（含children）传递进来 但是被冻结了
-   对函数返回JSX元素 virtualDOM进行渲染

当我们点击按钮时，会把绑定的小函数执行：

-   修改上级上下文中的变量
-   私有变量发生了改变
-   但是视图不会更新

也就是说函数组件在第一次渲染完成后，组件中的内容，不会根据组件内的某些操作，再进行更新，所以称为静态组件。

除非在父组件中，重新调用这个函数组件 【可以传递不同的属性信息】

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6 "动态组件")动态组件

类方法实现：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>"react"</span>;</span><br><span></span><br><span></span><br><span></span><br><span><span>class</span> <span>Vote</span> <span>extends</span> <span>React.Component</span> {</span><br><span>    </span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Vote</span>;</span><br></pre></td></tr></tbody></table>

HOOKS实现；

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#ES6%E4%B8%ADclass%E8%AF%AD%E6%B3%95%E5%92%8C%E7%BB%A7%E6%89%BF%E7%9A%84%E5%8E%9F%E7%90%86 "ES6中class语法和继承的原理")ES6中class语法和继承的原理

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br></pre></td><td><pre><span><span>class</span> <span>Parent</span>{</span><br><span>    </span><br><span>    <span>constructor</span>(<span>x, y</span>) {</span><br><span>        <span>this</span>.<span>total</span> = x + y;</span><br><span>    }</span><br><span>    num = <span>200</span>; </span><br><span>    getNum = <span>()=&gt;</span>{</span><br><span>        </span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>); </span><br><span>    };</span><br><span>    <span>sum</span>(<span></span>){</span><br><span>        </span><br><span>        </span><br><span>    };</span><br><span></span><br><span>    </span><br><span>    <span>static</span> avg = <span>1000</span>;</span><br><span>    <span>static</span> <span>average</span>(<span></span>){</span><br><span></span><br><span>    }</span><br><span></span><br><span>};</span><br><span></span><br><span><span>Parent</span>.<span><span>prototype</span></span>.<span>y</span> = <span>2000</span>; </span><br><span><span>let</span> p = <span>new</span> <span>Parent</span>(<span>10</span>, <span>20</span>);</span><br><span><span>console</span>.<span>log</span>(p);</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%B8%B2%E6%9F%93%E7%9A%84%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91 "类组件第一次渲染的底层逻辑")类组件第一次渲染的底层逻辑

render函数在渲染的时候，如果type是：

-   字符串：创建一个标签
-   普通函数：把函数执行，并且把props传递给函数
-   构造函数：把构造函数基于new执行，也就是创建类的一个实例，也会把解析出来的props传递过去，

每次调用一次类组件都会创建一个单独的实例。

把在类组件中编写的render函数执行，把返回的jsx virtualDOM当做组件视图进行渲染。

从调用类组件new Vote({…})开始，类组件内部发生的事情：

1.  初始化属性 && 规则校验
    
    先规则校验，校验完毕后，再处理属性其他操作
    
    方案一：
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br></pre></td><td><pre><span><span>import</span> <span>PropTypes</span> <span>from</span> <span>"prop-types"</span>;</span><br><span><span>static</span> defaultProps = {</span><br><span>    </span><br><span>    <span>num</span>: <span>0</span></span><br><span>}</span><br><span><span>static</span> propTypes = {</span><br><span>    <span>title</span>:  <span>PropTypes</span>.<span>string</span>.<span>isRequired</span>,</span><br><span>}</span><br><span><span>constructor</span>(<span>props</span>){</span><br><span>    <span>super</span>(props); </span><br><span>    <span>console</span>.<span>log</span>(<span>this</span>.<span>props</span>); </span><br><span>}</span><br></pre></td></tr></tbody></table>
    
    方案二：
    
    即使不在constructor中处理，【或者constructor都没写】，在constructor处理完毕后，React内部也会把传递的props挂载到实例上；所以在其他的函数中，只要保证this是实例，就可以基于this.props获取传递的属性。
    
    -   同样this.props获取的属性对象也是被冻结的（只读的）Object.isFrozen(this.props)->true
    -   设置规则校验
2.  初始化状态
    
    状态：后期修改状态，可以触发视图的更新
    
    需要手动初始化，如果没有做相关的处理，则默认会往实例上挂载一个state，初始值是`null=>this.state=null`
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span>state = {</span><br><span>    <span>supNum</span>: <span>0</span>,</span><br><span>    <span>oppNum</span>: <span>3</span></span><br><span>}</span><br></pre></td></tr></tbody></table>
    
    修改状态，控制视图更新
    
    @1`this.setState({})`既可以修改状态，也可以让视图更新【推荐使用这种方法】
    
    @2 `this.forceUpdate()`强制更新
    
3.  触发周期函数`componmentWillMount`周期函数（钩子函数)
    
    钩子函数：在程序运行到某个阶段，可以基于提供一个处理函数，让开发者在这个阶段做一些自定义的事情，一般也叫生命周期函数
    
    此周期函数，目前是不安全的，虽然可以用，但是未来可能要被移除，不建议使用。
    

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E7%9A%84%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91 "类组件更新的底层逻辑")类组件更新的底层逻辑

当修改了相关状态，组件会更新；

第一种组件更新的逻辑是组件的内部状态做了修改，组件更新：

1.  触发周期函数 `shouldComponentUpdate`
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br></pre></td><td><pre><span><span>shouldComponentUpdate</span>(<span>nextProps, nextState</span>) {</span><br><span>    </span><br><span>    </span><br><span>    <span>console</span>.<span>log</span>(<span>this</span>.<span>state</span>, nextState)</span><br><span>    </span><br><span>    </span><br><span>    </span><br><span>    <span>return</span> <span>true</span>;</span><br><span>}</span><br></pre></td></tr></tbody></table>
    
2.  触发 `componmentWillUpdate`周期函数：更新之前
    
    此周期函数也是不安全的
    
    在这个阶段，状态还没有被修改
    
3.  修改状态值/属性值 让this.state.xxx改为最新的值
    
4.  触发render周期函数：组件更新
    
    按照最新的状态/属性，把返回的JSX编译为virtualDOM
    
    和上一次渲染的virtualDOM进行对比，
    
    把差异的部分进行渲染为真实DOM
    
5.  触发componmentDidUpdate周期函数：组件更新完毕
    
    特殊说明：如果我们是基于this.forceUpdate()强制更新视图，会跳过shouldComponentUpdate周期函数的校验，直接从componmentWillUpdate开始更新（也就是说视图一定会更新）；
    

第二种，组件的父组件更新，触发子组件更新

1.  触发componementReceiveProps周期函数：接收最新属性之前
    
    周期函数本事是不安全的
    
    <table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span><span>UNSAFE_componmentReceiveProps</span>(<span>nextProps</span>){</span><br><span>    </span><br><span>    </span><br><span>    <span>console</span>.<span>log</span>(<span>'componmentWillReceiveProps:'</span>, <span>this</span>.<span>props</span>, nextgProps);</span><br><span>}</span><br></pre></td></tr></tbody></table>
    
2.  触发周期函数 `shouldComponentUpdate`
    

 ….同上

 父子组件嵌套，处理机制上遵循深度优先原则：父组件在操作中，遇到子组件，一定是把子组件处理完，父组件才能继续处理：

-   父组件第一次渲染
    
    父willMount——>父render \[子willMount ——>子 render ——>子didMount\] ——>父didMount
    
-   父组件更新：
    
    父shouldUpdate——>父willUpdate——>父render\[子willReceiveProps ——>子 shouldUpdate ——>子willUpdate ——> 子render ——>子 didUpdate\] ——>父didUpdate
    
-   父组件销毁：
    
    父willUmount——>处理中\[子willUnmount——>子销毁\] ——>父销毁
    

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0%E7%A4%BA%E6%84%8F%E5%9B%BE "周期函数示意图")周期函数示意图

[![image-20230224231412476](media/image-20230224231412476.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230224231412476.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#PureComponment%E5%92%8CComponment%E7%9A%84%E5%8C%BA%E5%88%AB "PureComponment和Componment的区别")PureComponment和Componment的区别

`PureComponent`会给类组件默认加一个`shouldComponment`周期函数。

-   在此周期函数中，会对新老的属性/状态进行浅比较
-   如果经过浅比较，发现属性和状态并没有改变，则返回false

[![image-20230225142842527](media/image-20230225142842527.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230225142842527.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E6%9C%89%E5%85%B3REF%E6%93%8D%E4%BD%9C%E7%9A%84%E8%A7%A3%E8%AF%BB "有关REF操作的解读")有关REF操作的解读

受控组件：基于修改数据/状态，让视图更新，达到需要的效果 【推荐】

非受控组件：基于ref获取DOM元素，操作DOM元素，来实现需求和效果

基于ref获取DOM元素的方法

1.  给需要获取的元素设置`ref='xxx'`，后期基于`this.refs.xxx`去获取相应的DOM元素 【不推荐使用这种用法】

 `<h2 className="title" ref="titleBox">温馨提示</h2>`

 获取：this.refs.titleBox

2.  把ref属性设置为一个函数
    
    `ref={x=>thhis.xxx=x}`
    
    -   `x`是函数的形参：存储的就是当前的DOM元素
    -   然后获取的DOM元素”x”直接挂载在实例的某个属性上（列如box2）

原理：在render渲染的时候，会获取virtualDOM的属性

-   如果属性值是一个字符串，则会给this.refs增加这样一个成员，成员值就是当前的值
-   如果属性值是一个函数，则会把函数执行，把当前DOM传递给这个函数【x->DOM元素】，而在函数执行的内部，一般会把DOM元素直接挂到实例的某个属性上

3.  基于`React.createRef()`方法创建一个REF对象`->{current:null}`
    
    `ref={REF对象}`
    
    获取：`this.xxx.current`
    

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>"react"</span>;</span><br><span></span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span>    box3 = <span>React</span>.<span>createRef</span>(); </span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>h2</span> <span>className</span>=<span>"title"</span> <span>ref</span>=<span>"titleBox"</span>&gt;</span>温馨提示<span>&lt;/<span>h2</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>h2</span> <span>className</span>=<span>"title"</span> <span>ref</span>=<span>{x</span> =&gt;</span> this.box2 = x}&gt;友情提示<span>&lt;/<span>h2</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>h2</span> <span>className</span>=<span>"title"</span> <span>ref</span>=<span>{this.box3}</span>&gt;</span>严重警告<span>&lt;/<span>h2</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span></span><br><span>    <span>componentDidMount</span>(<span></span>) {</span><br><span>        </span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>.<span>refs</span>);</span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>.<span>refs</span>.<span>titleBox</span>);</span><br><span>        <span>console</span>.<span>log</span>(<span>"box2"</span> + <span>this</span>.<span>box2</span>);</span><br><span>        <span>console</span>.<span>log</span>(<span>"box3"</span> + <span>this</span>.<span>box3</span>.<span>current</span>);</span><br><span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

给元素标签设置ref ,目前：获取对应的DOM元素

给类组件设置ref，目的：获取当前组件的实例，后续可以获取子组件中的相关信息

给函数组件设置ref直接报错，但是可以让其配合React.forwardRef实现ref的转发

目的：获取函数子组件内部的某个元素

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%85%B3%E4%BA%8EsetState%E7%9A%84%E8%BF%9B%E9%98%B6%E5%A4%84%E7%90%86 "关于setState的进阶处理")关于setState的进阶处理

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br><span>33</span><br><span>34</span><br><span>35</span><br><span>36</span><br><span>37</span><br><span>38</span><br><span>39</span><br><span>40</span><br><span>41</span><br><span>42</span><br><span>43</span><br><span>44</span><br><span>45</span><br><span>46</span><br><span>47</span><br><span>48</span><br><span>49</span><br><span>50</span><br><span>51</span><br></pre></td><td><pre><span>import React from "react";</span><br><span></span><br><span>class Demo extends React.Component {</span><br><span>    state = {</span><br><span>        x: 10,</span><br><span>        y: 5,</span><br><span>        z: 0</span><br><span>    }</span><br><span></span><br><span>    handle = () =&gt; {</span><br><span>        // this-&gt;实例 【宿主环境】</span><br><span>        let { x, y, z } = this.state;</span><br><span>        // 同时修改三个状态值：只会触发一次视图更新</span><br><span>        this.setState({</span><br><span>            x: x + 1,</span><br><span>            y: y + 1,</span><br><span>            z: z + 1</span><br><span>        }, () =&gt; {</span><br><span>            console.log('更新完毕x');</span><br><span>        })</span><br><span>    }</span><br><span></span><br><span>    componentDidUpdate() {</span><br><span>        console.log('视图更新完毕');</span><br><span>    }</span><br><span></span><br><span>    render() {</span><br><span>        console.log('视图渲染：RENDER')</span><br><span>        let { x, y, z } = this.state;</span><br><span>        return &lt;div&gt;</span><br><span>            x:{x} - y:{y} - z:{z}</span><br><span>            &lt;br /&gt;</span><br><span>            &lt;button onClick={this.handle}&gt;按钮&lt;/button&gt;</span><br><span>        &lt;/div&gt;;</span><br><span>    }</span><br><span>};</span><br><span></span><br><span>export default Demo;</span><br><span></span><br><span>/*</span><br><span>this.setState([partialState], [callback]])</span><br><span>    [partialState]：支持部分状态修改</span><br><span>        this.setState({</span><br><span>            x: 100 // 不论总共有多少状态，只修改了x，其余的状态不动</span><br><span>        })</span><br><span>    [callback]:在状态更改，视图更新完毕后触发执行</span><br><span>        发生在componmentDidUpdate周期函数之后[DidUpdate会在任何状态更改后都触发执行；而回调函数方式，可以再指定状态更新后处理</span><br><span>        一些事情；]</span><br><span>        特殊：即便基于shouldComponmentUpdate阻止了状态/视图更新，DidUpdate周期函数肯定不会执行了，但是我们设置的这个callback回调函数</span><br><span>        依然会被触发执行！！</span><br><span>*/</span><br></pre></td></tr></tbody></table>

[![image-20230303221808879](file:///C:/Users/%E9%99%88%E6%B5%A9/AppData/Roaming/Typora/typora-user-images/image-20230303221808879.png)](file:///C:/Users/%E9%99%88%E6%B5%A9/AppData/Roaming/Typora/typora-user-images/image-20230303221808879.png)

[![image-20230303223336884](media/image-20230303223336884.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230303223336884.png)

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6 "合成事件")合成事件

合成事件是围绕浏览器原生事件，充当浏览器包装器的对象；它们将不同浏览器的行为合并为一个API，这样做是为了确保事件在不同浏览器中显示一致的属性。

### [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C "合成事件的基本操作")合成事件的基本操作

在JSX元素上，直接基于`onXxx={函数}`进行事件绑定。

浏览器标准事件，在React中大部分都支持。

基于React内部的处理，如果我们给合成事件绑定一个普通函数，当事件行为触发，绑定的函数执行，方法中的this会是undefined

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span></span><br><span></span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span>    </span><br><span>    <span>handle</span>(<span></span>) { </span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>); </span><br><span>    }</span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle}</span>&gt;</span>按钮<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

使用bind绑定函数，可以解决这个问题：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br></pre></td><td><pre><span><span>render</span>(<span></span>) {</span><br><span>    <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle.bind(this)}</span>&gt;</span>按钮<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>    <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>}</span><br></pre></td></tr></tbody></table>

这时候的this就是当前实例对象。

当然还有更方便的方法，那就是使用箭头函数定义事件触发函数：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span></span><br><span></span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span></span><br><span>    handle = <span>() =&gt;</span> { </span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>); </span><br><span>    }</span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle}</span>&gt;</span>按钮<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

合成事件对象

在事件函数中输出event事件变量：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span></span><br><span></span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span></span><br><span>    handle = <span>() =&gt;</span> { </span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>); </span><br><span>    }</span><br><span></span><br><span>    handle1 = <span>(<span>ev</span>) =&gt;</span> {</span><br><span>        <span>console</span>.<span>log</span>(<span>this</span>);</span><br><span>        <span>console</span>.<span>log</span>(ev); </span><br><span>    }</span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle}</span>&gt;</span>按钮<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>            <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle1}</span>&gt;</span>按钮1<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

React内部经过特殊处理，把各个浏览器的事件对象统一化后，构建的一个事件对象`SyntheticBaseEvent`。合成事件对象包含了浏览器内置事件对象中的事件和方法

-   clientX/clientY
-   pageX/pageY
-   target
-   type
-   preventDefault
-   stopPropagation
-   …
-   nativeEvent:基于这个属性，可以获取浏览器内置的原生事件对象

给事件函数传递参数，使用bind函数处理，基于bind函数处理会把事件对象以最后一个实参传递给函数。

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br></pre></td><td><pre><span>handle2 = <span>(<span>x,y, ev</span>)=&gt;</span> {</span><br><span>    <span>console</span>.<span>log</span>(x, y, ev);</span><br><span>}</span><br><span></span><br><span><span>render</span>(<span></span>) {</span><br><span>    <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle}</span>&gt;</span>按钮<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle1}</span>&gt;</span>按钮1<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>        <span>&lt;<span>button</span> <span>onClick</span>=<span>{this.handle2.bind(null,</span> <span>1</span>, <span>2</span>,)}&gt;</span>按钮2<span>&lt;/<span>button</span>&gt;</span></span></span><br><span><span>    <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>}</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E4%BA%8B%E4%BB%B6%E5%8F%8A%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98 "事件及事件委托")事件及事件委托

[![image-20230309224908756](media/image-20230309224908756.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230309224908756.png)

阻止事件传播：

ev.stopPropagation();

[![image-20230310203609837](media/image-20230310203609837.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230310203609837.png)

[![image-20230311112115822](media/image-20230311112115822.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230311112115822.png)

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>'react'</span></span><br><span></span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span> <span>className</span>=<span>'outer'</span></span></span></span><br><span><span><span>            <span>onClick</span>=<span>{()</span> =&gt;</span> {</span></span><br><span><span>                console.log('outer冒泡')</span></span><br><span><span>            }}</span></span><br><span><span>            onClickCapture={() =&gt; {</span></span><br><span><span>                console.log('outer捕获')</span></span><br><span><span>            }}&gt;</span></span><br><span><span></span></span><br><span><span>            <span>&lt;<span>div</span> <span>className</span>=<span>'inner'</span></span></span></span><br><span><span><span>                <span>onClick</span>=<span>{()</span> =&gt;</span> {</span></span><br><span><span>                    console.log('inner冒泡')</span></span><br><span><span>                }}</span></span><br><span><span>                onClickCapture={() =&gt; {</span></span><br><span><span>                    console.log('inner捕获')</span></span><br><span><span>                }}&gt;</span></span><br><span><span></span></span><br><span><span>            <span>&lt;/<span>div</span>&gt;</span></span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#React%E4%B8%AD%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%8E%9F%E7%90%86 "React中合成事件处理原理")React中合成事件处理原理

绝对不是给当前元素基于addEventListener单独做的事件绑定，React中的合成事件，都是基于“事件委托”处理的

在React17以后版本，都是委托给#root这个容器，捕获和冒泡都做了委托；

在React17版本以前，都是委托给doucment容器，而且只做了冒泡阶段的委托；

对于没有实现事件传播机制的委托，才是单独做的事件绑定；

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#%E5%BE%AA%E7%8E%AF%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A "循环事件绑定")循环事件绑定

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br><span>22</span><br><span>23</span><br><span>24</span><br><span>25</span><br><span>26</span><br><span>27</span><br><span>28</span><br><span>29</span><br><span>30</span><br><span>31</span><br><span>32</span><br><span>33</span><br><span>34</span><br><span>35</span><br><span>36</span><br><span>37</span><br><span>38</span><br><span>39</span><br></pre></td><td><pre><span><span>import</span> <span>React</span> <span>from</span> <span>"react"</span>;</span><br><span></span><br><span><span>class</span> <span>Demo</span> <span>extends</span> <span>React.Component</span> {</span><br><span>    state = {</span><br><span>        <span>arr</span>: [{</span><br><span>            <span>id</span>: <span>1</span>,</span><br><span>            <span>title</span>: <span>'新闻'</span></span><br><span>        }, {</span><br><span>            <span>id</span>: <span>2</span>,</span><br><span>            <span>title</span>: <span>'体育'</span></span><br><span>        }, {</span><br><span>            <span>id</span>: <span>3</span>,</span><br><span>            <span>title</span>: <span>'娱乐'</span></span><br><span>        }]</span><br><span>    };</span><br><span></span><br><span>    <span>handle</span>(<span>item</span>){</span><br><span>        <span>console</span>.<span>log</span>(item.<span>title</span>)</span><br><span>    };</span><br><span></span><br><span>    <span>render</span>(<span></span>) {</span><br><span>        <span>let</span> { arr } = <span>this</span>.<span>state</span>;</span><br><span>        <span>return</span> <span><span>&lt;<span>div</span>&gt;</span></span></span><br><span><span>            {arr.map(item =&gt; {</span></span><br><span><span>                let { id, title } = item;</span></span><br><span><span>                return <span>&lt;<span>span</span> <span>key</span>=<span>{id}</span> <span>style</span>=<span>{{</span></span></span></span><br><span><span><span>                        <span>padding:</span> '<span>5px</span> <span>15px</span>',</span></span></span><br><span><span><span>                        <span>marginRight:</span> <span>10</span>,</span></span></span><br><span><span><span>                        <span>border:</span> '<span>1px</span> <span>solid</span> #<span>DDD</span>',</span></span></span><br><span><span><span>                        <span>cursor:</span> '<span>pointer</span>'</span></span></span><br><span><span><span>                    }}</span></span></span><br><span><span><span>                    <span>onClick</span>=<span>{this.handle.bind(this,</span> <span>item</span>)}&gt;</span></span></span><br><span><span>                    {title}<span>&lt;/<span>span</span>&gt;</span></span></span><br><span><span>            })}</span></span><br><span><span>        <span>&lt;/<span>div</span>&gt;</span></span></span><br><span>    }</span><br><span>}</span><br><span></span><br><span><span>export</span> <span>default</span> <span>Demo</span>;</span><br></pre></td></tr></tbody></table>

## [](https://apostlechan.github.io/2023/02/15/2023%E5%B9%B4%E6%9C%80%E6%96%B0%E7%8F%A0%E5%B3%B0React%E5%85%A8%E5%AE%B6%E6%A1%B6/index.html#Redux%E7%9A%84%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C%E5%92%8C%E6%80%9D%E6%83%B3 "Redux的基础操作和思想")Redux的基础操作和思想

[![image-20230311122232593](media/image-20230311122232593.png)](https://blog-1301697820.cos.ap-guangzhou.myqcloud.com/blog/image-20230311122232593.png)

除了Redux这5步操作之外，还需要一些其他的知识做配合。