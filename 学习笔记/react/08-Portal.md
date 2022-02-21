# Portal

Portals提供了一个最好的<font color=red>在父组件</font>包含的DOM结构<font color=red>层级外</font>的DOM节点渲染组件的方法。

ReactDOM.createPortal(child,container)

第一个child是可渲染的react子项，比如元素、字符串或片段等。第二个参数container是一个DOM元素。

1. 用法

```javascript
render(){
    //React挂载一个div节点，并将子元素渲染在节点中
    return(
    <div>
        {this.props.children}
    </div>
    )
}
```

有时需要将元素渲染到DOM中的不同位置上去，这时就用到的portal的方法

```javascript
render(){
    //此时React不再创建div节点，而是将子元素渲染到DOM节点上。domNode，是一个有效的任意位置的dom节点
    return ReactDOM.createPortal(
        this.props.children,
        domNode
    )
}
```

一个典型的用法就是当父组件的dom元素有overflow:hidden或者z-inde样式，而你又需要显示的子元素超出父元素的盒子。比如，对话框、悬浮框和小提示。

```javascript
#App.jsx

import React from 'react'
import Modal from './Modal'

export default class App extends React.Component{
    handleClick=()=>{
        console.log(0)
    }
    render(){
        return(
            <div>
                Hello Portal
                <div onClick={this.handleClick}>
                    <Modal></Modal>
                </div>
            </div>
        )
    }
}
```

```javascript
#Modal.jsx
import React from 'react'
import withPortal from './withPortal'

class Modal extends React.Component{
    render(){
        return(
            <div>
                <h1>Protal header</h1>
                <button >add</button>
            </div>
        )
    }
}
export default withPortal(Modal)
```

```javascript
#withPortal.js
import React from 'react'
import {createPortal} from 'react-dom'
function getDiv(){
    //纯DOM操作
    let div=document.createElement('div')
    document.body.appendChild(div)
    return div
}

function withPortal(WrappedComponent){
    return class extends React.Component{
        render(){
            return createPortal(
                <WrappedComponent {...this.props}/>,document.querySelector('body')

            )
        }
    }
}

export default withPortal

```

