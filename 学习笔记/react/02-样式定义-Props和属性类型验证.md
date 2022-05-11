# React样式、Props、属性类型验证

## 一、样式定义

### 行内样式
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

<font color=red>sytle={{}}，</font>要两个大括号来使用，或使用下列代码

### 行内样式的优化写法

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
### 类名方法className(推荐写法)

```css
/*app.css*/
.title {
  font-size: 30px;
  color: blue;
}
```
```javascript
import './app.css'

function App() {
  let flag=true
  return (
    <div className="App">
      //直接使用方式
      <div className='title'>this is a div</div>
      //动态使用方式
      <div className={flag?'title':null}>根据flag的值使用类</div>
    </div>
  )
}
export default App
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

<font color=red>class中使用时，要带this</font>。<font color=yellow>箭头函数中使用时，不带this</font>

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

## 三、props-types检查、默认值

```javascript
import React from 'react'
import PropTyps from 'prop-types'

class MyComponent extends React.Component{
    static propTypes={
        title:PropTypes.string
    }
    static defaultProps{
        sex:'男',
        age:18
    }
    render(){
        return ...
    }
}
MyComponent.propTypes={#声明了属性，和在类里面定义一样。在函数组件中只能使用这种方式
    optionalArray:PropTypes.array,
    opti0onalBool:PropTypes.bool,
    ....
}
MyComponent.defaultPorps={#使用默认值，和在类里面定义一样。在函数组件中只能使用这种方式
    sex:'男',
    age:18
}
    
```
props-types有很多用法，可以慢慢学习。

## 四、JSX中使用js表达式

**语法**
{js表达式}

**可以使用的表达式**
1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')
3. fn()
4. <font color=red>也就是能直接由console.log()打印出来值就可以</font>

**列表渲染**
```javascript
const List=(porps){
    return(
        <ul>
            props.list.map(item=><li key={item.id}>{item.name}</li>)
        </ul>
    )
}
const list=[
    {
        id:1,
        name:'津蓟天津站'
    },
    {
        id:2,
        name:'京津北塘站'
    },
    {
        id:3,
        name:'津晋塘沽站'
    }
]
//使用方式
<List list={list}>
```

**条件渲染**
目标任务: 能够在JSX中实现条件渲染
作用：根据是否满足条件生成HTML结构，比如Loading效果
实现：<font color=red>可以使用\`三元运算符\` </font>或<font color=red> 逻辑与(&&)运算符</font>
```javascript
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? 'flag值为真' : 'flag值为假'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>flag为真时渲染</span> : null}
    </div>
  )
}
export default App
```