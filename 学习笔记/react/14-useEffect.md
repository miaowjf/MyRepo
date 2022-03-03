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
+ <font color=red>[ ]</font>：时只在组件加载完成后执行，相当于是componentDidMount,只执行一次。
+ <font color=red>[count,state]</font>:只有状态count或state改变时才会执行。
+ 




