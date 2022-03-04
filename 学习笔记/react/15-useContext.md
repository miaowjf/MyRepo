# useContext 父子传值

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
