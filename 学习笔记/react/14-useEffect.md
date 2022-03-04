# useEffect
```javascript
import React from 'react'
import { useState,useEffect} from 'react'

function App(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`useEffect=>${count}`)
    },[count])
    return(
        <div>
        count:{count}
        <button onClick={()=>setCount(count+1)}>>click</button>
        </div>
    )
}
export default App
```
useEffect(()=>{
    return()=>{
        console.log('这里是解绑')
    }
},**<font color=red>第二个参数</font>**)
**<font color=yellow>第二个参数说明：</font>**

+ <font color=red>没有第二个参数</font>：组件的<font color=yellow>初始化和更新</font>时都会更新
+ <font color=red>[ ]</font>：<font color=yellow>初始化调用一次后不再执行</font>，相当于是componentDidMount,只执行一次。
+ <font color=red>[count,state]</font>:传入多个变量时时（也可以是函数），只要有一个<font color=yellow>值变化</font>，就会执行。

```javascript
import React,{useState,useEffect} from 'react'

export default ()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        //comopnentDidMount
        const I=setTimeout(()=>{
            setCount(x=>x+1)
        },1000)
        return()=>{//componentWillUmount
            clearTimeout(I)
        }
    },[count>5?5:count])//大于5时停止更新
}

```

```javascript
import React, { useState, useEffect } from "react";
//component will Receive Props
//shouldComponentUpdate
const Input = (props) => {
  useEffect(() => {
    console.log(`value change ${props.value}`);
  }, [props.value]);//属性的值发生变化时就会响应
  return <input />;
};
export default (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);
  useEffect(() => {}, [props.value]);
  return (
    <div>
      <Input value={value} />
      <button onClick={() => setValue("Hello")}>Click Me</button>
    </div>
  );
};
```




