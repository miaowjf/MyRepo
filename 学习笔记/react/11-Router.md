# React Router 5.0

react-router-dom

## 一、基本使用

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
            #BrowserRouter包起来
            <BrowserRouter>
                <ul>
            #Link进行导航
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to ='/about'>About</Link></li>
                    <li><Link to='dashbord'>DashBord</Link></li>
                </ul>
            #Route进行定义渲染组件
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/dashbord" component={DashBord}></Route>
            </BrowserRouter>
            </>
        )
    }
}

export default App
```

## 二、使用参数操作

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

## 三、嵌套路由

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

## 四、switch

```javascript
<Switch>
    <Route path='/' exact component={Home}></Route>
    <Route path='/topics' component={Topics}</Route>
</Switch>
```

在这种情况下，如果不加<font color=red>exact</font>，则无法渲染后面的组件，只能渲染<font color=red>    /    </font>的这个<Home>组件。Switch是一个<font color=red>排他性的路由</font>，其它的是<font color=red>包容性路由</font>。或把<font color=red>    /    </font>放到最后一个进行匹配。

## 五、component、render、children

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





