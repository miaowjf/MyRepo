# Redu使用

## 一、不在react中使用，纯js中使用

```javascript
//demo.js
const {createStore}=require('redux')

const reducer = require('./Reducer')

const store=createStore(reducer)

store.dispatch({
    type:'increment'
})
console.log(store.getState().count)
store.subscribe(()=>{
    console.log(store.getState().count)
})

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
```

```javascript
//Reducer.js
const defaultState={
    count:0
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'increment':
            return{
                ...state,
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

module.exports=reducer
```

使用node demo.js运行

## 二、在react组件中使用

```javascript
//index.js
import React from 'react'
import ReactDOM from 'react-dom'
//要引入Provider,及Store
import {Provider} from 'react-redux'
import store from './redux-todolist/Store'
import App from './redux-todolist/App'

ReactDOM.render(
    <Provider store={store}>//使用Provider提供store
        <App/>
        </Provider>,
    document.getElementById('root'))
```

```javascript
//Store.js
import {createStore} from 'redux'

import reducer from './Reducer'

export default createStore(reducer)
```

```javascript
//Reducer.js,操作数据的代码
const defaultState={
    list:['task 1','task2']
}

export default(state=defaultState,action)=>{
    switch(action.type){
        case 'LOAD_DATA':
            return state
        case 'PUT_DATA':
            return{
                list:[
                    ...state.list,
                    action.task
                ]
            }
        case 'DELETE_DATA':
            let newlist=state.list.filter((value,index)=>{
                return index!==action.index
            })
            return {
                ...state,
                list:newlist
            }
        default:
            return state

    }
}
```

```javascript
//TodoList.jsx
import React from 'react'
import Form from './Form'
import List from './List'

export default class TodoList extends React.Component{
    render(){
        return(
            <div>
                TodoList
                <Form/>
                <List/>
            </div>
        )
    }
}

```

```javascript
//Form.js输入控件
import React from 'react'
import {connect} from 'react-redux'

const mapDispatchToProps=dispatch=>{
    return{
        putData(task){
            dispatch({
                type:'PUT_DATA',
                task:task
            })
        }
    }
}
class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }
    state={
        task:''
    }
    handleChange(e){
        this.setState({
            task:e.target.value
        })
    }
    handleKeyUp=(e)=>{
        if(e.keyCode===13){
            this.props.putData(this.state.task)
            this.setState({
                task:''
            })
        }
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.task} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(Form)
//connect将mapDispatchToProps方法映射到组件的props上，以便组件使用。
```

```javascript
//List.js
 import React from 'react'
 import {connect} from 'react-redux'
 
 //映射State到Props
 const mapStateToProps=state=>{
     return {
         list:state.list
     }
 }
 //映射Dispatch到Props
 const mapDispatchToProps=dispatch=>{
     return{
         remove(index){
             dispatch({
                 type:'DELETE_DATA',
                 index:index
             })
         }
     }
 }
 //返回一个高阶组件
 //connect(mapStateToProps)
 class List extends React.Component{
     render(){
         return(
             <div>
                 <ul>
                     {
                         this.props.list.map((value,index)=><li key={index}>{value}<button onClick=    {()=>this.props.remove(index)}>remove</button></li>)
                     }
                 </ul>
             </div>
         )
     }
 }
 
 export default connect(mapStateToProps,mapDispatchToProps)(List)
```

