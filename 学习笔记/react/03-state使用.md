# state使用

## 一、state定义

```javascript
#1.在constructor中使用state
import React from 'react'

export default class State extends React.Component{
    constructor(props){
        //调用父类的构造函数,将porps传给父类
        super(porps)
        this.state={
            isShow:false
        }
    }
    render(){
        return(
        <>
            <div>state:{JSON.stringify(this.state.isShow)}</div>
        </>
        )
    }
}
#2.在类里直接使用state
import React from 'react'

export default class State extends React.Component{
    state={
        isShow:true
    }
render(){
    return(
    <>
        {
            this.state.isShow ? <div>state是真</div> : null
        }
    </>
    )
}
}
```

## 二、修改状态（setState）
- 语法

  `this.setState({ 要修改的部分数据 })`

- setState方法作用

  1. 修改state中的数据状态
  2. 更新UI

- 思想

  ​	数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom

- 注意事项

  ​	**不要直接修改state中的值，必须通过setState方法进行修改**
  
```javascript
  //错误的修改方法(直接修改)
  state = {
  count : 0,
  list: [1,2,3],
  person: {
     name:'jack',
     age:18
  }
  }
  // 直接修改简单类型Number
  this.state.count++
  ++this.state.count
  this.state.count += 1
  this.state.count = 1
  
  // 直接修改数组
  this.state.list.push(123)
  this.state.list.spice(1,1)
  
  // 直接修改对象
  this.state.person.name = 'rose'
```

```javascript
//正确修改状态的方法(覆盖原来的值)
  this.setState({
    count: this.state.count + 1
    list: [...this.state.list, 4],
    person: {
       ...this.state.person,
       // 覆盖原来的属性 就可以达到修改对象中属性的目的
       name: 'rose'
    }
})
```


```javascript
import React from 'react'

export default class State extends React.Component{
    state={
        isShow:true，
        count:0,
        ls:['a','b','c']
    }
render(){
    return(
    <>
        {
            this.state.isShow ? <div>state是真</div> : null
        }
        <div>count:{count}</div>
    </>
    )
}
componentDidMount(){
    setTimeout(()=>{
        //使用setState来对字典进行设置值,这里使用了原值，会出现错误
        this.setState({
            isShow:!this.state.isShow
        })
    },3000)
    //修改对原值进行更改的方式
    setTimeout(()=>{
        this.setState(prevState=>{  #使用prevState来进行操作,引用原来的值
            return {
                isShow:!prevState.isShow,
                count:prevState.count+1
            }            
        })
    },3000)
this.state.ls.push('d')
this.setState({})
}
}

this.setSate(prevState=>{
    return {
        count:prevState.count+1
    }
},()=>{
    console.log('回调函数，在setState成功执行，并完成渲染后执行')
})
{
    this.state.ls.map((value,key)=>{
        return <li key={key}>{value}</li>
    })
}
```



```javascript
this.state.ls.push('d')

this.setState({})#此语句相当于是下面代码
let obj={}
state={
    ...this.state,
    ...obj
}
```

```javascript
//函数组件使用useState
function App(){
    const [message,setMessage]=useState('')
    const handleChange=(e)=>{
        setMessage(e.target.value)
        console.log(message)
    }
    return(
        <div>
          <input
            placeholder='请输入信息'
            value={message}
            onChange={handleChange}
          />
        </div>
    )
}
```

## 三、状态提升

```javascript
#父组件
import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends React.Component{
    state={
        data:''
    }
    handleReceiveData(data){
        this.setState({
            data
        })
    }
    render(){
        return (
        <>
            <Child1 onReceiveData={this.handleReceiveData.bind(this)}></Child1>
            <Child2 data={this.state.data}></Child2>
        </>
        )
    }
}
export default Parent
```

```javascript
#Child1.js
import React from 'react'

class Child1 extends React.Component{
    render(){
        return(
        <Child1 onClick={this.props.onReceiveData.bind(this,'hello')}>Child1</Child1>
        )
    }
}
export default Child1

#Child2.js
import React from 'react'

class Child2 extends React.Component{
    render(){
        return(
        <Child2 onClick={this.props.data}>Child2</Child2>
        )
    }
}
export default Child2
#函数的Child2.js
import React from 'react'

export default (props)=>{
    return <div>{props.data}</div>
}
```

## 四、受控组件与非受控组件

```javascript
#受控组件，推荐使用
import React from 'react'

export default class App extends React.Component{
    state={
        value:'hello'
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
        <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>#受控组件，推荐使用
        )
    }
}
```



```javascript
#非受控组件
import React from 'react'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.ipt=React.createRef() #创建ref
    }
    state={
        value:'hello'
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
        <input type='text' value="" ref={this.ipt} onInput={this.handleChange.bind(this)}/>#非受控组件
        )
    }
}
```

```javascript
#条件运算符
条件?真时显示:假时显示
条件 && 显示内容 #当条件为真时显示后面的内容，短路显示
#dangerouslySetInnerHTML将字符串渲染显示
const data='<h1>hello</h1>'
<div dangerouslySetInnerHTML={{__html:data}}></div> #显示渲染后的data
<label htmlFor='id号' >abc <inpout type='text' id='id号'/></label> #点广本后，焦点进入id号的控件

#函数组件
const Home=()=>{
    return <div>home</div>
}
```

## 五、事件处理

```javascript
#事件绑定
import React from 'react'

export default class App extends React.Component{
    state={
        count:0
    }
    handleClick(){
        console.log(this.state.count) #拿不到this,es6类里的函数访问不到this，需要绑定
    }
    render(){
        return(
        <div onClick={this.handleClick}>Event</div> #jsx模板能访问到this，解析模板时会把上下文this对象绑定。
        <div onClick={this.handleClick.bind(this)}>Event</div> #绑定就可以，每次bind都会创建一个（每点击一次创建一个），性能差，其它方法可心绑定一次，不推荐这种方法。
        </div>
        )
    }
}
```

```javascript
#事件绑定一次，推荐这种方法
import React from 'react'

export default class App extends React.Component{
    Constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)#这进而进行一次绑定，必须有上面的super，推荐这种方法
    }
    state={
        count:0
    }
    handleCanShuClick(args){
        console.log(args)
    }
    handleClick(){
        console.log(this.state.count) #绑定后可以拿到this
    }
    render(){
        return(
            <>
            <div onClick={this.handleClick}>Event</div> #可以使用
            <div onClick={()=>this.handleCanShuClick('abcd')}></div>  #使用回调函数传递参数
            </>

        )
    }
}
```

```javascript
#事件柯里化
import React from 'react'

export default class App extends React.Component{
    Constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)#这进而进行一次绑定，必须有上面的super
    }
    state={
        count:0
    }
    #下面函数是柯里化 
    handleClick=(args)=>{
        return()=>{
            console.log(args)
        }
     }
    render(){
        return(
            <>
               <div onClick={this.handleClick('abc')}></div>  #柯里化的函数可以直接调用，返回一个函数给onClick
            </>

        )
    }
}
```

 ### 绑定事件

采用<font color=red>on+**事件名**</font>的方法绑定一个事件。javascript原生的事件全是小写onclick，React里的事件是驼峰onClick，React的事件不是原生事件，而是合成事件。

### 事件handler的写法

- 直接在render里写行内的箭头函数（不推荐）
- 在组件内使用一个箭头函数定义一个方法（推荐）
- 直接在组件内定义一个非箭头函数的，然后在render里直接使用onClick={this.handleClick.bind(this)}(不推荐)
- 直接在组件内定义一个非箭头函数的方法，然后在constructor里bind(this）（推荐）

**注意：**

- 组件中的**render**方法中的**this**为<font color=red>组件实例对象</font>
- 组件<font color=red>自定义方法</font>中的<font color=yellow>this</font>为<font color=red>undefined</font>如果要在组件中使用要进行绑定
  + 强制绑定this，通过函数对象的bind（）：在类的constructoer方法中使用<font color=red>this.方法名=this.方法名.bind(this)</font>
  + 使用箭头函数定义一个属性：<font color=red>handleClick=()=>{......}</font>
  + 在组件中使用箭头函数：<button onClick={()=>this.setState(prevState=>{count:prevState.count+1})}

## 六、setState的扩展
1. 对象式的setState
   - 原来的setState后续操作是异步的，setState只是通知React进行状态修改，并不立即执行修改，需要使用setState中的第二个函数参数 进行操作。
   - **在不依赖原状态**的情况下，使用对象方式的方便。this.setState({count:99},<font color=yellow>()=>{console.log(this.state.count)}</font>)黄色部分看下面的黄色解释。
2. 函数式setState
   - this.setState((prevCount)={count:prevCount+1},<font color=red>()=>{console.log(this.state.count)}</font>)
后面的（）=>{}是可选的回调函数，<font color=yellow>它在状态更新完毕，界面也更新后（render调用后才被调用）</font>
   - this.setState(<font color=yellow>(state,props)</font>=>{
    return {count:state.count+1}
})
<font color=yellow>它接收state和props数据</font>
   - **依赖原状态和属性**的情况下使用函数的方法好



