# Redux

## 一、Redux组成

### 1. State-状态

- **DomainDate**:可以理解成为服务器端的数据，比如：获取用户的信息，商品的列表等等
- **UI State**: 决定当前UI展示的状态，比如：弹框的显示隐藏、受控组件等等
- **App State**： App级别的状态，比如：当前是否请示loading，当前路由信息等可能被多个组件去使用的状态

### 2.Action-事件

**Action**是把数据从应用传到**store**的载体，它是**store**数据的唯一来源，一般通过**store.dispatch()**将**action**传递给**store**

**Action特点**：

- Action的本质是一个javascript的普通对象
- Action对象内部必须有一个**type**属性来表示要执行的动作
- 多数情况下，这个**type**会被定义成<font color=red>字符串常量</font>
- 除**type**字段外，action的结构随意进行定义
- 项目中，更多的是使用**action创建函数**（就是<font color=red>创建action的地方</font>）
- **只是描述了有事情要发生，并没有描述如何去更新**

### 3.Reducer

**Reducer**是一个**函数**，它用来**响应**发送过来的**actions**，然后经过处理，把**state**发送给**Store**。

**注意**：

1. 在Reducer函数中，需要**return返回值**，这样Store才能接收到数据
2. 函数会接收两个参数，第一个参数是初始化state，第二个参数是action

```JAVASCRIPT
const initState={...}
rootReducer=(state=initState,action)=>{...return {...}}
```

### 4.Store

<font color=red>**Store**</font>就是把**action**与**reducer**联系到一起的对象。

**主要职责**：

- 维持应用的state
- 提供getState()方法获取state
- 提供dispatch()方法发送action
- 通过subscribe()来注册监听
- 通过subscribe()返回值来注销监听

```javascript
import {createStore} from 'redux'
const store=createStore(传递reducer)
```

## 二、案例

### 1.创建一个action

- 在根目录下创建一个文件夹acton
- 在该目录下创建一个index.js

```javascript
const sendAction=()=>{...}
```

- 在action创建函数里利用return，返回一个action对象，注意需要携带type属性

```javascript
const sendAction=()=>{return {type:'send_action',value:'发送一个action'}}//可能需要在return后面加（）将action包起来。
```

- 把这个action创建函数进行导出

```javascript
module.exports={sendAction}
```

```javascript
//action/index.js
const sendAction=()=>{
    return{
        type:'send_type',
        value:'I am an action'
    }
}

module.exports={
    sendAction
}
```



### 2.创建一个Reducer

- 在根目录下创建一个文件夹reducer
- 在该目录下创建一个index.js文件，用来构建reducer，注意reducer要接收两个参数

```javascript
const rootReducer=(state,action)=>{...}
```

- 第一个参数是默认状态，可以定义一个初始化的state，然后进行赋值

```javascript
const iniState={value:"默认值"}
const rootReducer=(state=initState,action)=>{...}
```

- 在函数里判断第二个参数action的type是否是我们发送的
- 如果是的话，可以通过return返回一个新的state

```javascript
//reducer/index.js
const initState={
    value:'默认值'
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'send_type':
            return {
                value:"i am a reducer"
            }
        default:
            return state
    }

}

module.exports={
    reducer
}
```

### 3.创建Store

- 在根目录下创建一个文件夹store
- 在该目录下创建一个index.js文件，用来构建stort，注意createStore函数里面第一个参数接收的是reducer

```javascript
import {createStore} from 'redux'
const store=createStore(reducer)
```

- 导入reducer，然后设置到函数里去
- createStore的返回值就是构建好的store，然后导出

```javascript
//store/index.js
import {createStore} from 'redux'

import {reducer} from './reducer/index'


const store=createState(reducer)

export default store;
```

### 4.在的组件在使用

- 在页面的button按钮绑定一个点击事件
- 在组件加载完成时通过store来进行监听器的注册，返回值可以用来注销监听

```javascript
this.unSubscribe=store.subscribe(()=>{...}
```

- 在点击事件处理函数中，通过store.dispatch来发送一个action

```javascript
handleClick=()=>{store.dispatch(sendAction())}
```

```javascript
import React from 'react'
import store from './store/index'
import {sendAction} from './action/index'

export default class App extends React.Component{
    handleClick=()=>{
        store.dispatch(sendAction())
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>send action</button>
            <div>{store.getState().value}</div>
            </>
        )
    }
    //获取更改的值
    componentDidMount(){
        //store.subscribe回调函数来收到返回的数据
        store.subscribe(()=>{
            console.log('subscribe:',store.getState())
            //store.getState().value来获取数据
            this.setState({})//对组件进行重绘。
        })
    }
}
```

## 三、React-Redux概述

**Redux**与**React**之间是没有关系的，Redux支持React、Angular、jQuery甚至是JavaScript

**react-redux**就是Redux官方出的用于配合React的绑定库

**react-redux**能够使React组件从<font color=red>Redux store</font>中很方便的读取数据，并且向<font color=red>store</font>中分发**action**来更新数据。

**注意**：两个重要部分

**<font color=red>Provider组件</font>**:这个组件使整个app都能获取到store中的数据

**<font color=red>connect方法</font>**：这个方法能够使组件跟store来进行关联

- **Provider**包裹在<font color=red>根组件</font>最外层，使用所有的子组件都能拿到**store**
- **Provider**接收<font color=red>store</font>作为<font color=red>props</font>，然后通过context往下传递，这样react中任何组件都可以通过context获取到store
- **connect**进行一层包裹封闭（必须要被connect进行加强）**Provider**内部组件才能使用state中的数据
- **connect**可以方便组件获取store中的state

## 四、React-Redux基本使用

### 1.利用redux来构建store

- 创建reducer/index.js文件，构建reducer来响应actions
- 创建store/index.js文件，通过createStore方法，把reducer传入

```javascript
import {createStor} from 'redux'
import {reducer} from '../redux'
export default createStore(reducer)
```

- 在app.js中引入store

###  2.引入Provider组件

- 在app.js中导入Provider

```javascript
import {Provider} from 'react-redux'
```

- 利用Provider组件将我们整个结构包裹，并且传递store

```javascript
//App.js
import React from 'react'
import store from './store'
import Com1 from './com1'
import Com2 from './com2'
import {Provider,connect} from 'react-redux'

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div>react-redux-App</div>
                <Com1/>
                <Com2/>
            </Provider>
        )
    }
}
export default connect()(App)
```

### 3. connect使用

connect(**mapStateToProps**(state,ownProps),**mapDispatchToProps**(dispatch,ownProps))

**mapStateToProps(<font color=red>state</font>,<font color=yellow>ownProps</font>)**:这个函数允许我们将<font color=green>store中的数据</font>作为<font color=green>props绑定到组件上</font>，<font color=red>state</font>是redux中的store，<font color=yellow>ownProps</font>是自己的props

**mapDispatchToProps**(<font color=red>dispatch</font>,<font color=yellow>ownProps</font>):将action作为props绑定到我们自己的函数中,<font color=red>dispatch</font>就是stort.dispatch(),<font color=yellow>ownProps</font>是自己的props

- 在组件Com1和Com2中，分别导入connect方法

```javascript
import {connect} from 'react-redux'
```

- 利用connect方法来对组件进行加强，并且导出

```javascript
export default connect(mapStateToProps,mapDispatchToProps)(App)
```



- Com1用于发送方，要实现第二个参数

```javascript
import React from 'react'
import {connect} from 'react-redux'

class Com1 extends React.Component{
    handleClick=()=>{
        console.log("Com1:",this.props)
        this.props.sendAction()
    }
    render(){
        return(
            <button onClick={this.handleClick}>+</button>
        )
    }
}

const mapMethod=(dispatch)=>{
    return{
        sendAction:()=>{
            dispatch({
                type:'add_action'
            })
        }
    }
}
export default connect(null,mapMethod)(Com1)
```



- COM2用于接收，实现第一个参数

```javascript
import React from 'react'
import {connect} from 'react-redux'

class Com2 extends React.Component{
    render(){
        console.log('com2.props',this.props)
        return(
            <div>{this.props.count}</div>
        )
    }

}
const mapState=(state)=>{//类外面定义这个函数才能使用
    console.log('Com2',state)
    return state
}
export default connect(mapState)(Com2)
```

