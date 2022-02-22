# 手工实现

## 第一个版本

```javascript
//App.jsx
import React from 'react'
import {dispatch} from './Store'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>dispatch({type:'decrement'})}>-</button>
                <span id="count"></span>
                <button onClick={()=>dispatch({type:'increment'})}>+</button>
            </div>
        )
    }
    componentDidMount(){
        dispatch()
    }
}
```

```javascript
//Store.js
//定义初始状态
const defaultState={
    count:0
}
//修改状态
const changeState=(action)=>{
    action=action||{type:''}
    switch(action.type){
        case 'increment':
            defaultState.count++
            break
        case 'decrement':
            defaultState.count--
            break
        default:
            break
    }

}

//DOM操作
const renderDom=()=>{
    let countEle=document.querySelector('#count')
    countEle.innerHTML=defaultState.count
}
const dispatch=(action)=>{
    changeState(action)
    renderDom()
}

export{
    dispatch
}
```

## 第二个版本

```javascript
//App.jsx
import React from 'react'
import store from './Store'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>store.dispatch({type:'decrement'})} >-</button>
                <span id="count"></span>
                <button onClick={()=>store.dispatch({type:'increment'})} >+</button>
            </div>
        )
    }
    componentDidMount(){
        store.dispatch()
    }
}
```

```javascript
//Store.js
import {state,changeState} from './Reducer'
const createStore=()=>{

    const render=(state)=>{
        document.querySelector('#count').innerHTML=state.count
    }

    const dispatch=(action)=>{
        changeState(action)
        render(state)

    }
    return {
        dispatch
    }
}

const store=createStore()

export default store
```

```javascript
//Reducer.js
let state={
    count:0
}

const changeState=(action)=>{
    action=action || {type:''}
    switch(action.type){
        case 'increment':
            state.count++
            break
        case 'decrement':
            state.count--
            break
        default:
            break
    }
}


export {
    state,
    changeState
}
```

## 使用观察者模式

在第上一版的基础上修改Store.js，如下：

```javascript
import {state,changeState} from './Reducer'
const createStore=()=>{
    //GetState获取状态
    const getState=()=>{
        return state
    }

    //观察者模式
    const listeners=[]
    //subscribe订阅模式
    const subscribe=(listener)=>{
        listeners.push(listener)

    }
    const dispatch=(action)=>{
        changeState(action)
        //publish发布模式
        listeners.forEach((listener)=> listener())
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}
const store=createStore()

const render=()=>{
    document.querySelector('#count').innerHTML=store.getState().count
}
store.subscribe(render)

export default store
```

<font color=red>纯函数</font>:

1. 相同的入参会得到相同的输出
2. 不能修改入参

## 最后一版模仿Redux

```javascript
//App.jsx
import React from 'react'
import store from './Store'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>store.dispatch({type:'decrement'})} >-</button>
                <span id="count"></span>
                <button onClick={()=>store.dispatch({type:'increment'})} >+</button>
            </div>
        )
    }
    componentDidMount(){
        store.dispatch()
    }
}
```

```javascript
//Store.js
import {changeState} from './Reducer'

let state={count:0}
const createStore=()=>{
    //GetState获取状态
    const getState=()=>{
        return state
    }

    //观察者模式
    const listeners=[]
    //subscribe订阅模式
    const subscribe=(listener)=>{
        listeners.push(listener)

    }
    const dispatch=(action)=>{
        state=changeState(state,action)
        //publish发布模式
        listeners.forEach((listener)=> listener())
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}
const store=createStore()

const render=()=>{
    document.querySelector('#count').innerHTML=store.getState().count
}
store.subscribe(render)

export default store
```

```javascript
//Reducer.js
const changeState=(state,action)=>{
    action=action || {type:''}
    switch(action.type){
        case 'increment':
            return{
                ...state,
                //不能用++和--来操作原数据
                count:state.count+1
            }
        case 'decrement':
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}

export {
    changeState
}
```



