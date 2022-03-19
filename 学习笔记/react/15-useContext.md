# 组件间的数据传递

## 一、Context
类组件的使用,使用<font color=yellow>组件里的context属性</font>。
1. 创建Context容器对象
   const <font color=green>UsernameContext</font>=React.createContext()
2. 渲染子组件时，<font color=red>外面包裹</font><font color=green>UserContext</font>.Provider,再通过value属性给子组件传递数据(包裹后其子组件及子组件的子组件都能使用value）
   ```javascript
   < UsernameContext.Provider value={数据}>//必须使用value，不能改名。value值可以是对象
   子组件
   </ UsernameProvider>
   ```
3. 子组件读取数据
   ```javascript
   //第一种方式：仅在类组件中使用
   //声明接收context，接收usernameContext
   static contextType=UsernameContext
   //程序中读取context中的value值
   const value=this.context

   //第二种方法：函数组件和类组件都可以使用
   <UserNameContext.Consumer>
   {
     value=>(//value就是context中的value数据
       //显示的内容
       console.log(value)
     )
   }
   </UserName.Consumer>
   ```

```javascript
import React,{createContext} from 'react'

class B extends React.Component{
  render(){
    return(
      <div>
      B Component
      <h4> 我是B组件，我从A组件接收的用户名：{this.props.username}</h4>
      </div>
    )
  }
}
class C extends React.Component{
  render(){
    return(
      <div>
      C Component
      <h4>我是C组件，我从A组件接收到的用户名:{???}</h4>
      </div>
    )
  }
}
class A extends React.Component{
  state={username:'tom'}
  render(){
    return(
      <div>
      <h3>我是App</h3>
      <h4>我的用户名是：{this.state.username}</h4>
      <B username={this.state.username}/>
      </div>
    )
  }
}
```
## 二、useContext 父子传值

```javascript
import React from "react";
import { useState, createContext, useContext } from "react";
const CountContext = createContext();//创建Context

function ChuanZhi() {
  const count = useContext(CountContext);//子组件要引入CountContext
  return <div>{count}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <CountContext.Provider value={count}>{/*使用Provider包裹，并使用value属性传递值*/}
        <ChuanZhi />{/*子组件中可以使用该值*/}
      </CountContext.Provider>
    </div>
  );
}
export default App;
```
子组件传值，孙子组件传值
```javascript
 import React from "react";
import { useState, createContext, useContext } from "react";
const CountContext = createContext();//创建Context

function All(){
    const state=useContext(CountContext)
    return(
        <div>aaa:{state}</div>
    )
}

function Bll(){
    const state=useContext(CountContext)
    return(
        <div>bbb:{state}</div>
    )
}
function ChuanZhi(props) {
    const count = useContext(CountContext);//子组件要引入CountContext
    return <div>{count}<hr/>{props.children}</div>;//props.children显示子组件
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click</button>
              <CountContext.Provider value={count}>{/*使用Provider包裹，并使用value属性传递值*/}
                 <ChuanZhi >{/*子组件中可以使用该值*/}
                     <All/>{/*子组件中的子组件*/}
                     <Bll/>
                 </ChuanZhi>
             </CountContext.Provider>
         </div>
     );
 }
 export default App

```

## 三、组件通信方式总结

**组件间的关系：**
- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

**几种通信方式：**
- props:
  - children props
  - render props
- 消息订阅-发布：
    - pubs-sub、event等
- 集中式管理：
    - redux、dua等
- context:
    - 生产者-消费者模式
  
**比较好的搭配方式：**
- 父子组件：props
- 兄弟组件：消息订阅-发布、集中式管理
- 祖孙组件：消息订阅-发布、集中式管理、context（开发用的少，封装用的多）