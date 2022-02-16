# React样式、Props、属性类型验证

## 一、样式定义

```javascript
#ClassStyle.js文件内容
import React from 'react'

class ClassStyle extends React.Comonent{
    render(){
        return(
            <div style={{fontSize:'50px'}}>Hello</div>
        )
    }
}

export default ClassStyle
```

sytle={{}}，要两个大括号来使用，或使用下列代码

```javascript
#ClassStyle.js文件内容
import React from 'react'

const styles={
    fontSize:'50px',
    color:'red'
}
class ClassStyle extends React.Comonent{
    render(){
        return(
            <div style={styles}>Hello</div>
        )
    }
}

export default ClassStyle
```



```javascript
#index.js文件内容
import App from './ClassStyle' #将ClassStyle中的默认输出做为APP在此文件中使用

ReactDOM.render(<App/>,document.getElementById('root'))

```

styled-components样式定义

```javascript
const Div2=style.div{
    ...后期学习
}
```

## 二、props

```javascript
#函数式组件，也是无状态组件（自己没有状态）
import React,{Component} from 'react'

export defalut (porps)=>{
    return(
        <div>child {props.title}</div>
    )
}
```

props，是由组件直接带来的，不定义也能使用。

<font color=red>class中使用时，要带this。箭头函数中使用时，不带this</font>

类的静态属性：

```javascript
import React,{Component} from 'react'

export default class Child extends Component{
    static defaultPorps={
        title:'default value' #默认值使用
    }
}
#也可以写在外面：
Child.defaultPorps={
    title:'default value'
}

#或用以下方法
export default function Child(props){
    return 
    <>
    <div>child {props.title}</div>
    {props.children} #可以使用<Child><div>Hello solt</div></Child>,来显示solt内容，插槽内容。
    </>
}
Child.defaultProps={
    title:'default value'
}
```

## 三、props-types检查

```javascript
import React from 'react'
import PropTyps from 'prop-types'

class MyComponent extends React.Component{
    static propTypes={
        title:PropTypes.string
    }
    render(){
        return ...
    }
}
MyComponent.propTypes={#声明了一个属性，和在类里面定义一样
    optionalArray:PropTypes.array,
    opti0onalBool:PropTypes.bool,
    ....
}
    
```

props-types有很多用法，可以慢慢学习。

