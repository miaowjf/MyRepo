# React Router 5.0

react-router-dom

## 一、基本使用
- <font color=red>路由</font>：Route,注册路由(<font color=yellow>必须在Router中使用</font>)
- <font color=red>路由器</font>：Router用来管理各个路由(BrowserRouter,HashRouber。<font color=red>HashRouter路径里会出现#</font>,#是锚点，也是hash值，不会作为资源发给服务器)(<font color=yellow>每个应用只能用一个路由器来管理</font>)(<font color=green>一般在index.js中把App组件包上即可</font>)
- <font color=red>链接</font>：Link，React中靠路由链接实现切换组件--编写路由链接(<font color=yellow>必须在Router中使用</font>)
1. 明确界面中的导航区、展示区
2. 导航区的a标签改为<font color=red>Link标签</font>
          <font color=red><Link to='/about>About</ Link></font>
3. 展示区写<font color=red>Route标签</font>进行路径的匹配
          <font color=red>< Route path='/about' component={About}/></font>
4. 在index.js中< App/>的最外层用<font color=yellow>< BrowserRouter>或< HashRouter>包裹。</font>
5. <font color=red>Route</font>中加入<font color=red>exact={true}</font>实现精确路由，完全匹配才会渲染组件。
   `< Route exact={true} path='/about' component={About}/>`(<font color=yellow>每个Route都可以加exact</font>)没有副作用的时候不要开启严格匹配模式(有时会导致二级路由无法使用)。默认的是模糊匹配（输入的路径必须包含匹配的路径，且顺序一致，<font color=red>即Link中的路径包括Route中的路径</font>,Link中的路径可以比Route中的路径多。
6. 默认选择一个路由，Redirect在Route最后加上，没有匹配时，就会渲染它指向的路由。
   `< Redirect to='/about'/>`,都不匹配时转到/about

## 二、一般组件与路由组件的区别
一般组件放在components中，路由组件放在pages中
一般组件没有显式的传递props时，this.porps为空
路由组件没有显式传递props时，this.props有<font color=red>history(里面也有一个location)、location、match</font>三个重要的props
|history|location|match|
|-------|--------|-----|
|go|pathname|params|
|goBack|search|path|
|goForware|state|url|
|push|||
|replace|||
`<NavLink to='/about'>About</NavLink>`用NavLink时，点谁会在谁的上面加一个<font color=red>Active样式</font>。NavLink的<font color=yellow>activeClassName属性,</font>是激活状态的样式，可以定义其它的样式，给activeClassName来实现不同的激活状态。
`<NavLink to='/about'>About</NavLink>` <font color=yellow>About</font>是标签体，可以通过<font color=red>this.props.children</font>拿到该值。
`<NavLink to='/about'>About</NavLink>`也可以使用`<NavLink to='/about' children='About'/>`来代替
`<MyNavLink to='about'>About</MyNavLink>`
`<NavLink activeClassNAme='atguigu' className='list-group-item' {...porps}/>`这句里会把上面语句的About自动通过<font color=red>{...props}</font>带到NavLink标签中。
```javascript
//封装NavLink
class MyNavLink extends {
    render(){
        return <NavLink className='...' style={...} {...this.props}/>
    }
}
//以下面的方式使用,children自动带到NavLink中。
<MyNavLink to='/about'/>About</MyNavLink>
```
```html
<style>
  .atguigu{
      background-color:rgb(209.137,4)!imortant;/*!importtant是覆盖bootstrap的样式*/
  }
</style>
```
```javascript
import React from 'react'
import {BrowserRouter ,Route,Link} from 'react-router-dom'


const Home=(props)=>(<div>Home</div>)
const About=(props)=>(<div>About</div>)
const DashBord=(props)=>(<div>DashBord</div>)

class App extends React.Component{
    render(){
        return(
            <>
            /*BrowserRouter包起来*/
            <BrowserRouter>
                <ul>
            #Link进行导航
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to ='/about'>About</Link></li>
                    <li><Link to='dashbord'>DashBord</Link></li>
                </ul>
            #Route进行定义渲染组件
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/dashbord" component={DashBord}/>
            </BrowserRouter>
            </>
        )
    }
}

export default App
```

## 三、使用参数操作
1. <font color=red>params传递参数</font>
  - 路由链接（携带参数）：< Link to={\`/demo/test/tom/<font color=red>${参数}</font>\`}>详情</ Link>
  - 注册路由（声明接收）：< Route path='/demo/test/tom/<font color=red>:name/:age</font>' component={Test}/>
  - 接收参数： const {name,age}=<font color=red>this.props.match.params</font>
```javascript
import React from 'react'
export default class Message extends React.Component{
    state={
        messages:[
        {id:'01',title:'消息1'},
        {id:'02',title:'消息2'},
        {id:'03',title:'消息3'}
        ]
    }
    render(){
        const {messages}=this.state
        return(
            <div>
            <ul>
            {
                messages.map(message=>{
                    return(
                        <li key={message.id}>
                        //向路由组件传递params参数,${message.id}可以传多个数据用/${message.title}
                        <Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>
                        </Link>
                    )
                })
            }
            </ul>
            <hr/>
            //声明接收params参数，:id，可以用多个参数/:id/:title
            <Route path="/home/message/detail/:id" component={Detail}/>
            </div>
    
        )
    }
}
```

```javascript
import React from 'react'
export default class Detail extends React.Component{
    render(){
        //解构传递过来的参数
        const {id,title} =this.props.match.params
        return(
            <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            </ul>
        )
    }
}
```

```javascript
//拿到路由的参数
import React from 'react'

import {BrowserRouter,Link,Route} from 'react-router-dom'


class Child extends React.Component{
    render(){
        return(
            #id所在的位置
            <div>hello ID:{this.props.match.params.id}</div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}

class App extends React.Component{
    render(){
        return(
            <>
            <BrowserRouter>
            #定义路径
                <Route path='/:id' component={Child}></Route>
            </BrowserRouter>
            </>
        )
    }
}

export default App
```

## 四、嵌套路由(多级路由)
<font color=red>注意如果上级路由使用的exact属性，二级路由将不能使用。</font>如下代码：
```javascript
<Route exact to='/home' component={Home}/>
<Route to='/home/news' component={News}>这个路由将不起作用。
```

```javascript
//嵌套路由
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

const Home=()=>(<div>Home</div>)

const Topics=(props)=>{
    #取出url
    let {url} = props.match
    return (
        <div>
            <h1>Topics</h1>
            <hr/>
            <ul>
                <li><Link to='/topics/rendering'>Rendering</Link></li>
                <li><Link to='/topics/components'>Components</Link></li>
                <li><Link to='/topics/propsstate'>PropsState</Link></li>
            </ul>
        #替换字符串
            <Route path={`${url}/rendering`} component={Rendering}></Route>
            <Route path={`${url}/components`} component={Components}></Route>
            <Route path={`${url}/propsstate`} component={PropsState}></Route>
        </div>
    )
}


const Rendering=()=><div>Rendering</div>
const Components=()=><div>Components</div>
const PropsState=()=><div>Props v. State</div>

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/topics'>topics</Link></li>
                    </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route path='/topics' component={Topics}></Route>
                </BrowserRouter>
            </div>
        )
    }
}


export default App

```

## 五、switch

```javascript
<Switch>
    <Route path='/' exact component={Home}></Route>
    <Route path='/topics' component={Topics}></Route>
</Switch>
```
switch包起来以后只匹配第一个路径，后面将不在比较
在这种情况下，如果不加<font color=red>exact</font>，则无法渲染后面的组件，只能渲染<font color=red>    /    </font>的这个<Home>组件。Switch是一个<font color=red>排他性的路由</font>，其它的是<font color=red>包容性路由</font>。或把<font color=red>    /    </font>放到最后一个进行匹配。

## 六、component、render、children

```javascript
import React from 'react'

import {BrowserRouter,Route,NavLink} from 'react-router-dom'

const Home=()=>(<div>Home</div>)
class DashBord extends React.Component{
    render(){
        return(
            <div>DashBord</div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
class About extends React.Component{
    render(){
        return(
            <div>About</div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <ul>
                        <li><NavLink to='/'>home</NavLink></li>
                        <li><NavLink to='/about'>about</NavLink></li>
                        <li><NavLink to='/dashbord'>dashbord</NavLink></li>
                    </ul>
                    <Route exact path='/' component={()=><Home/>}></Route>
                    {/*render只能渲染函数组件，不能直接渲染类组件,只能通过render={()=><About/>}*/}
                    <Route path='/about' render={(props)=><About {...props}/>}></Route>
                    {/*children 使用后,无论路由是否匹配，都会显示组件。与render一样也是能直接使用函数组件，使用类组件时需要使用children={()=><DashBord/>}。只有点DashBord时match才不为null*/}
                    <Route path='/dashbord' children={props=><DashBord {...props}/>}></Route>
                    <Route path='/about1'>
                        <About></About>
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}
export default App
```

<font color=red>render</font>只能渲染函数组件，不能直接渲染类组件,只能通过render={()=><About/>}

<font color=red>children</font> 使用后,无论路由是否匹配，都会显示组件。与render一样也是能直接使用函数组件，使用类组件时需要使用children={()=><DashBord/>}。只有点DashBord时match才不为null。<font color=red>switch</font>中还是精确匹配

## 七、样式丢失问题(多级路由，使用后刷新会出问题)

- 将public/index.html中的<font color=red>样式文件的引入方式</font>把./改为/
- 也可以将<font color=red>%PUBLIC_URL%</font>,加到引入文件的前面(<font color=yellow>只在React中使用，别的不认</font>)
- 使用<font color=red></font>也可以避免样式丢失。