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
|history下的方法|location下的属性|match下的属性|
|-------|--------|-----|
|go(n)|pathname|params|
|goBack()|search|path|
|goForware(path,state)|state|url|
|push(path,state)|||
|replace(path,state)|||
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
###1. <font color=red>params传递参数</font>
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
### 2.传递search参数
- 路由链接（携带参数）：<Link to=`/demo/test?id=${message.id}&title=${message.title}` component={Test}>详情</Link>
- 注册路由（无需声明，正常注册即可）:<Route path='/demo/test' component={Test}/> 
- 接收参数:const {search} =<font color=red>this.prpos.location</font>，然后获取的search为urlencoded编码的字符串，用querystring解析。
```javascript
//向路由传递search参数
<Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
//声明接收search参数,无需声明接收
<Route path="/home/message/detail" commponent={Detail}/>
//接收参数，在组件的render函数中解析数据
import qs from 'querystring'
const {search} =this.props.location
const {id,title}=qs.parse(search.slice(1))
```
### 3.向路由组件传递state
- 路由链接（携带参数）：<Link to={{pathname='/demo/test',state={name:'tom',age:18}}}>详情</Link>
- 注册路由（无需声明，正常注册即可):<Route path='/demo/test' component={Test}/>
- 接收参数:const {变量名列表}=this.props.location.state
<font color=red>不是组件中的state，是路由组件中独有的state</font>
在地址栏中不显示传递的内容,刷新也不会丢失。
```javascript
//向路由传递state参数
<Link to={{pathname:"/home/message/detail",state:{id:message.id,title:message.title}}}>{message.title}</Link>
//声明接收state参数,无需声明接收
<Route path='/home/message/deatil' commponent={Detail}/>
//接收参数，在组件的render函数中解析数据
const {id,title}=this.props.location.state
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

## 八、路由push与replace
路由跳转默认都是push浏览时会留下痕迹，下面代码是使用replace方式
```javascript
//给最后的加replace属性，在浏览器中使用返回时，回到上次push内容的地方。
<Link replace={true} to={`.....`}>详情</Link>
```
## 九、编程式路由式导航
**借助this.props.history对象上的API来操作路由跳转、前进和后退**
- this.props.history.push()
- this.props.history.replace(path,state)
- this.props.history.goBack()
- this.props.history.goForward(path,state)
- this.props.history.go(n)
```javascript
//push也一样，把replace改为push
//这里的this是当前的路由组件(BrowserRouter)，后续查看相关资料,用路由组件上的history中的replace、push、goBack、goForward、go方法操作路由。go(n),n为1，2，3，-1，-2根据历史记录退几步或前进几步。
replace=()=>{
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
}
<button onClick={()=>this.replaceShow(message.id,message.title)}>replace查看</button>
```

## 十、withRouter的使用
<font color=red>withRouter</font>把一般组件转换为路由组件(<font color=yellow>是一个装饰器</font>)，为一般组件加上(<font color=red>BrowserRouter上的</font>)history、location和match三个属性

```javascript
import {withRouter} from 'react-router-dom'
class Header extends React.Component{
    ...
}
export default withRouter(Header)
```
withRouter的返回值是一个新组件，加上了路由组件的API和属性。

## 十一、BrowserRouter和HashRouter的区别
1. BrowserRouter使用的是H5的history API（React进行了封装），不兼容IE9及以下版本。HashRouter使用的是URL的哈希值,没有版本兼容问题。
2. url表现方式不一样
   - BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
   - HashRouter的路径包含#，localhost:3000/#/demo/test
3. 刷新后对路由state参数的影响
   - BrowserRouter没有任何影响，因为state保存在history对象中
   - HashRouter刷新后会导致路由state参数的丢失
4. 备注：HashRouter可以用于解决一些路径错误相关的问题

## 十二、路由的懒加载

```javascript
import React,{lazy,Suspense} from 'react'

import Home from './Home'//直接加载
//下面这行是懒加载
const About=lazy(()=>{
    import('./About')
})
//在这里给fallback写一个加载过程的组件
<Suspense fallback={<h1>Loading......</h1>}>
<Route >
</Suspense>
```


## 十三、React Router 6
**与React Router 5相比的改变**
- 内置组件变化：移除<Switch/>，新增<Routers/>等；
- 语法变化：component={About}变为element={<About>}等； 
- 新增多个Hook：useParams、useNavigate、useMatch等；
- <font color=red>官方明确推荐函数式组件</font>

1. 一级路由
   <font color=red>必须用Routes包裹</font>,有匹配的路由就不会继续向下找，与Switch一样。
```javascript
<BrowserRouter>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/home'>Home</NavLink>

    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}>
        //caseSensitive匹配时是否区分大小写（默认false）
        <Route caseSensitive /> 
    </Routes>
</BrowserRouter>
```

2. 重定向(Navigate)
`< Route path='/' element={<Navigate to='/about'>}/>`
Navigate组件只要渲染就会引起视图的切换。replace默认为false，使用push跳转有后退，true是没有后退。
`{sum===2 ? < Navigate replace={fasle} to='/about'/> : <h4> 当前sum的值是:{sum}</ h2>}`
   
`< button onClick={()=>{setSum(2)}}>点我导航至'/about'</ button>`
3. NavLink高亮
```javascript
function computeClassName({isActive}){
    return isActive ? "普通类名" : "活动类名"
}
<NavLink className={({isActive})=>return isActive ? "类的名字" : "活动类的名字"} to='/home'>Home</NavLink>
<NavLink classNamd={coputeClassName} to='/home'>Home</NavLink>
```
4. useRoutes路由表
适合统一管理路由
```javascript
const routes=useRoutes([
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/',
        element:<Navigate to='/about'/>
    }
])
//使用路由表
{routes}
```
5. 嵌套路由
使用children来定义   
 <font color=red>注意嵌套路由的path和to中不能使用/,可以使用./或不写</font>
 携带参数时path与原来写法一样
<Outlet/>相当于是插槽，指出在哪里显示路由组件
```javascript
const routes=useRoutes([
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'message',
                element:<Message/>,
                children:[
                    path:'detail/:id/:title',
                    element:<Detail/>
                ]
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to='/about'/>
    }
])
//使用路由表
{routes}
//指定路由组件显示的位置
<Outlet/>
//注意嵌套路由的path和to中不能使用/,可以使用./或不写
```

6. params参数使用
```javascript
import React,{useState} from 'react'

export default function Message(){
    const [messages]=useState([
        {id:'001',title:'消息1',content:'12345'},
        {id:'002',title:'消息2',content:'22345'},
        {id:'003',title:'消息3',content:'32345'},
        {id:'004',title:'消息4',content:'42345'},
    ]
    )
    return (
        <div>
            <ul>
            {
                message.map((m)=>{
                    return(
                        <li key={m.id}>
                        <Link to={`detail${m.id}${m.title}`}>{m.title}</Link>
                        </li>
                    )
                })
            }
            </ul>
            <Outlet/>

        </div>
    )
}

```
子组件需要的操作
```javascript
import {useParams} from 'react-router-dom'
// 就可以获取路由传来的数据
const {id,title}=useParams()
//还有useMatch,很少用
const x=useMatch('/home/message/detail/:id/:title')

```
7. search参数使用
路由表的数组里不用写参数
path:'detail',
element:<Detail/>
```javascript
import React,{useState} from 'react'

export default function Message(){
    const [messages]=useState([
        {id:'001',title:'消息1',content:'12345'},
        {id:'002',title:'消息2',content:'22345'},
        {id:'003',title:'消息3',content:'32345'},
        {id:'004',title:'消息4',content:'42345'},
    ]
    )
    return (
        <div>
            <ul>
            {
                message.map((m)=>{
                    return(
                        <li key={m.id}>
                        <Link to={`detail?id=${m.id}&title=${m.title}`}>{m.title}</Link>
                        </li>
                    )
                })
            }
            </ul>
            <Outlet/>
        </div>
    )
}
```
子组件中使用useSearchParams
```javascript
const [search,setSearch]=useSearchParams()
//通过get得到相应的参数值。
console.log(search.get('id'))
//setSearch更新收到的search参数
setSearch('id=008&title=哈哈')
//useLocation的使用
const lo=useLocation()//直接获取相应的参数
console.log(lo)
```
8. state参数
也不需要在路由表数组里写特殊的路径
```javascript
<Link to='detail' state={
    id:m.id,
    title:m.title,
    content:m.content
}>{m.content}</Link>
```
子组件中的写法
```javascript
//{state:{id,title,context}}是连续解构，可能直接使用id,title,context
const {state:{id,title,context}}=useLocation()
console.log(id,title,context)
```
9. 编程式路由
useNavigate
```javascript
const navigate=useNavigate()
//跳转至/about
navigate('/about')
//跳转子路由使用相对路径,只能使用state属性，其它的只能用字符串拼接。
navigate('detail',{replace:false,state:{
    id:id,
    title:titele,
    content:content
}})
//前进
navigate(1)
//后退
navigate(-1)
```
10. useRouterContext
判断当前组件是否在<font color=red>路由(Router)的上下文环境中</font>。Router包括BrowserRouter、HashRouter等组件包裹。console.log(useRouterContext()),返回true,或false。
11. useNavigationType()
    在组件return前写console.log(useNavigationType())
    返回当前导航的类型（POP、PUSH、REPLACE)
    POP是指在浏览器中直接打开了这个组件（刷新页面）

12. useOutlit
    用来呈现当前组件中渲染的嵌套路由，（当前组件下的嵌套路由）
    const result=useOutlet()
    console.log(result)
    如果嵌套路由没有挂载,则result为null(点完/home年，它下面的<font color=red>路由组件</font>还未渲染时)
    如果嵌套路由已挂载，则展示嵌套的路由对象
13. useResolvedPath
    给定一个URL值，解析其中的params,search,location
    console.log(userResolvedPath('/usr?id=001&name=lisi'))
    