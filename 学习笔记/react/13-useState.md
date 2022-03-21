# useState保存组件状态
在函数中使用state

```javascript
import React from 'react'
import { useState } from "react";


function App(props){
    let [count,setCount]=useState(0)//数组解析
    function handClick(){
        setCount((count)=>{
            return count+2
        })
    }
    return(
        <div>
            hello count:{count}
            <button onClick={handClick}>+2</button>
        </div>
    )
}

export default App
```

**值得注意的是useState不帮助你处理状态，相较于setState非覆盖式更新状态，useState覆盖式更新状态，需要开发者自己处理逻辑。**
()=setState({<font color=red>...object</font>,count:obj.count+2})对象不能直接赋值，需要进行替换

# useRef的使用
```javascript
import React,{useRef} from 'react'

function App(){//函数式组件
    //创建
    myRef=useRef()
    function show(){
        //使用myRef
        console.log(myRef.current.value)
    }
    return(
        <div>
        //下面直接引用myRef
        <input type="text" ref={myRef}>
        <button onClick={show}>点我显示数据</button>
        </div>
    )

}
```
# Fragment
React在解析Fragment时，会丢掉它，减少div的使用，减少无关div层级
<Fragment key={1}></Fragment>
<></>相当于是Fragment
<font color=red>Fragment中允许使用key值(<font color=yellow>只能使用key，其他的会出错</font>)，Fragment可以使用遍历。</font>但空标签不能写任何属性，不能遍历。