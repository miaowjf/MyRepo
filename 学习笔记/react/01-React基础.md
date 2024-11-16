# React基础

## 一、create-react-app

```shell
npm install -g create-react-app #全局安装create-react-app
create-react-app app名

npx create-react-app app名 #建立app，后删除create-react-app 程序，避免安装相应的全局模块

```

```shell
#卸载node和npm
#1.apt-get卸载
sudo apt-get remove --purge npm
sudo apt-get remove --purge nodejs
sudo apt-get remove --purge nodejs-legacy
sudo apt-get autoremove
#2.手动删除npm及相关目录
rm -r /usr/local/bin/npm #npx
rm -r /usr/local/lib/node-moudels
find / -name npm
rm -r /tem/npm*
```

```shell
#安装node和npm
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

#安装最新版本
sudo npm install n -g
sudo n stable  # 安装最新版本
```

**src/index.js** 是webpack下配置的入口文件，名字不能更改

## 二、组件的使用


### 组件的类型(函数组件和类组件定义及使用)
```javascript
import './App.css';
import React from 'react'
//函数组件定义:剪头函数方式
const Home=(props)=>{
    return <div>Home Component.{props.name}</div>
}
//函数组件定义:普通函数方式
function Home(props){
    return <div>Home Component.{props.name}</div>
}
//类组件定义
class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                About Component {this.props.name}
            </div>
        )
    }
}
//类组件
class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
                <About name='lzi'/>
                <Home name='wjf'/>
            </div>
        )
    }
}


export default App

```
```javascript
#使用变量的方式进行渲染
const app=<div>hello</div>
ReactDOM.render(app,getElementById('root'))

#使用函数的方式进行渲染
可以用函数来传参数，函数式组件
const App=(props)=>{
    return <div>hello {props}</div>
}
ReactDOM.render(app('!!!'),getElementById('root'))
#多个属性值，函数式组件
const App=(props)=>{
    #let {title,name}=props 解构的方式赋值
    #return <div>hello {title} {name}</div>
    return <div>hello {props.title} {props.name}</div>
}
ReactDOM.render(<App title='!!!' name='world'/>,getElementById('root'))
```

const App=()=>{}的资料要仔细看。函数的使用。<font color=red>箭头函数</font>:更简短的函数并且不绑定this。

<font color=red>函数组件</font>的<font color=yellow>props</font><font color=red>是不用</font><font color=yellow>this</font>来进行绑定使用的。在函数组件中直接使用<font color=red>props.属性名</font>直接使用。

==**<font color=red>没有单独的this</font>**==

在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的this值：

- 如果该函数是一个构造函数，this指针指向一个新的对象
- 在严格模式下的函数调用下，this指向undefined
- 如果该函数是一个对象的方法，则它的this指针指向这个对象
- 等等

React元素（HTML元素）是小写的，camel-case，React组件是pascal-case首字母大写(组件要把app改为App，{props.title}来使用组件的值，详情看上面示例)

```javascript
class App extends React.Component{
    render(){
        return (
            <div>Hello World {this.props.title}</div>
            )
    }
}
```

## 三、组件的嵌套

Fragment组件，可以代替<div>来使用，import {Fragment} from 'react'

```javascript
import React,{Fragment,Component} from 'react'

class Header extends Component{
    render(){
        return(
        <div>Header</div>
        )
    }
}

class Content extends Component{
    render(){
        return(
        <div>Content</div>
        )
    }
}

export default class App extends Component{
    render(){
        return (
        <Fragment>
            <Header></Header>
            <Content></Content>
        </Fragment>
        )
    }
}
```

<font color=red>Fragment可以使用空的<>、</>来代替，不用引用就可以使用</font>

```javascript
<div class='app' id='appRoot'>
    <h1 class='title'>欢迎进入React的世界</h1>
    <p>React.js是一个构建页面UI的库</p>
</div>
#上面的HTML所有的信息我们可以用以下javascript对象来表示：
{
    tag:'div',
    attrs:{className:'app',id:'appRoot'},
    children:[
        {
            tag:'h1',
            attrs:{className:'title'}
            children:['欢迎进入React的世界']
        },
        {
            tag:'p',
            attrs:null,
            children:['React.js 是一个构建页面UI的库']            
        }
    ]         
}
#上面的javascript就是虚拟DOM，只渲染改变的部分，速度快。可以通过属性快速更改相关内容。
```

## 四、函数组件注意

定义用法：

```javascript
//第一种方法
function 组件名(){//组件名第一个字母大写
    ...
}
export default 组件名
//第二种方法
export default ()=>{ //没有组件名直接暴露
    ...
}
//第三种方式
const 组件名=()=>{

}


