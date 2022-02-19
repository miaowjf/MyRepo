# 组件通信
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

