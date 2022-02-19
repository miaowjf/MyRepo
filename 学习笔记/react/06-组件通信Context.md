# 组件通信
```javascript
import React from 'react'
import {testContext,Provider,Consumer} from './testContext'

class ChildA extends React.Component{
    static contextType=testContext//声明一个静态变量
        render(){
            console.log(contextType)
            return(
                    <div>
                    ChildA Component:
                    {this.context}//使用该值
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

const ChildC=function(porps){
    return(
            <div>
            ChildC Component:
            <ChildD></ChildD>
            </div>
          )
}

const ChildD=function(porps){
    return(
            <div>
            ChildD Component:
            ChildD
            <Consumer> //函数组件没有this，只能用这种方式使用
            {
            (value)=>{return <div>{value}</div>}
            }
            </Consumer>
            </div>
          )
}

export default class App extends React.Comopnent{

    render(){
        return (
                <Provider value="hello"> //使用标签包起来
                hello
                <ChildA></ChildA>
                <ChildB></ChildB>
                </Provider>
               )
    }
}
```
```javascript
//testContext.js
import React from 'react'

const testContext=React.createContext()
    const{Provider,Consumer}=testContext
    // const {Provider,Consumer}=testContext=createContext()与上两个语句的作用是一样的
    export default{
        testContext
            Provider,Consumer
    }
```

