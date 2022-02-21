## 高阶组件（HOC）

higher-Order Components就是一个函数，传给它一个组件，它返回一新的组件。

```javascript
#App.jsx
import React from 'react'
import hoc from './hoc'

class App extends React.Component{
    render(){
        return(
            <div>
                hello hoc
            </div>
        )
    }
    componentDidMount(){
        console.log(this)//打印出props，后面的js文件在props里添加prop
    }
}

export default hoc(App)//这里对App组件进行包装，根据下面hoc.js文件的内容添加prop
```

```javascript
#hoc.js注意是js文件，不是jsx
import React from 'react'
const hoc=(Comp)=>{//将Comp包起来
    return class extends React.Component{
        render(){
            return(
                <Comp title="Hello Compo" {...this.props}> //...this.props将原来的属性放到该位置
            </Comp>
            )
        }
    }
}

export default hoc
```

## 装饰器

需要安装插件