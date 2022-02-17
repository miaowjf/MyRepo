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

## 二、setState

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
        <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)/>#受控组件，推荐使用
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

P14视频