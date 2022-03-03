# useState保存组件状态


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

