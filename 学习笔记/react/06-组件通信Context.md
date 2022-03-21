# 组件通信

## 第一个简单例子

```javascript
import React from 'react'
import {testContext,Provider,Consumer} from './testContext'

class ChildA extends React.Component{
    static contextType=testContext//类组件声明一个静态变量
    render(){
        return(
            <div>
            ChildA Component:
            {this.context}//类组件使用该值
            </div>
        )
    }
}


class ChildB extends React.Component{
    render(){
        return(
            <div>
                ChildB Component:
                <ChildC></ChildC>
            </div>
        )
    }
}

const ChildC=function(props){
    return(
        <div>
            ChildC Component:
            <ChildD></ChildD>
        </div>
    )
}

const ChildD=function(props){
    return(
        <div>
            ChildD Component:
            ChildD
            <Consumer>
                {
                    (value)=>{
                        return <div>{value}</div>
                }
                }
            </Consumer>
        </div>
    )
}

export default class App extends React.Component{

    render(){
        return (
            <Provider value="hello world"> //使用标签包起来
                <ChildA></ChildA>
            <ChildB></ChildB>
            </Provider>
        )
    }
```
```javascript
//testContext.js
import React from 'react'

const testContext=React.createContext()
const {Provider,Consumer}=testContext

export{
    testContext,
        Provider,Consumer
}
    // const {Provider,Consumer}=testContext=createContext()与上两个语句的作用是一样的
```
## 第二个例子
父组件中,A组件中包含一个B组件(A和B是父子关系）,传递props的方法如下：
- < A render={(name)=>< B name={name}/>}/>,插入组件,render只是一个属性可以更换名字，但一般都使用render。
- A组件中使用{this.props.render(name)},这里是预留位置，等插入组件
- B组件使用{this.props.name} 来使用该值。
```javascript
//children props方法
//问题：如果B组件需要A组件内的数据，无法实现
<A>
<B>***</B>
</A>
{this.props.children}

//render props
<A render={(data)=><B data={data}>}></B></A>
A组件：{this.props.render(内部state的数据)}
B组件：读取A组件传入的数据显示{this.props.data}
```
```javascript
#count.jsx
import React from 'react'

const {Provider,Consumer:CountConsumer} = React.createContext() //别名为CountComsumer
class CountProvider extends React.Component{
    constructor(props){
        super(props)
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
    }
    state={
        count:0
    }
    increment(args){
        this.setState(prevState=>({
            count:prevState.count+args
        }))
    }
    decrement(args){
        this.setState(prevState=>({
            count:prevState.count-args
        }))

    }
    render(){
        return (
            <Provider value={{
                count:this.state.count,
                increment:this.increment,
                decrement:this.decrement
            }}>
            {this.props.children}//显示这个组件下的包括的子组件，本例中是显示App.jsx下面CountProvider包括的Child组件
        </Provider>
        )
    }


}
export {
    CountConsumer,
    CountProvider
}
```
```javascript
#Child.jsx

import React from 'react'
import ChildHood from './ChildHood'
import {CountConsumer} from './count'

export default class Child extends React.Component{
    render(){
        return(
            <div>
                <CountConsumer>//返回值用下面的方法
                    {
                        ({count})=>{
                            return(
                                <div>{count}</div>
                            )
                        }
                    }
                            </CountConsumer>
                            <ChildHood></ChildHood>
                        </div>
        )
    }
}
```
```javascript
#ChildHood.jsx
import React from 'react'
import {CountConsumer} from './count'
export default class ChildHood extends React.Component{
    render(){
        return(
            <div>
                <CountConsumer>
                    {
                        ({count,increment,decrement})=>{//解构出状态和方法
                            return(
                                <div>
                                    <button onClick={()=>decrement(3)}>-</button>
                                    {count}
                                    <button onClick={()=>increment(3)}>+</button>
                                </div>
                            )
                        }
                    }
                            </CountConsumer>
                            ChildHood
                        </div>
        )
    }
}

#App.js
import React from 'react'
import Child from './Child'
import {CountProvider} from './count'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <CountProvider>//为里面的内容提供支持
                <Child></Child>
            </CountProvider>
        </div>
        )
    }
}

```

