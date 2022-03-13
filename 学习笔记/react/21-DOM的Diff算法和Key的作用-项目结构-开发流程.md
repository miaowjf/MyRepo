主要是对<font color=red>新虚拟DOM</font>和旧虚拟DOM对比，<font color=yellow>index索引值作为key</font>，更新数据时（<font color=red>逆序</font>增加和减少数据等破坏顺序操作），顺序发生变化，各条目的index也会发生变化，导致整个DOM重绘，如果结构中还包含<font color=red>输入类的DOM</font>时，<font color=yellow>界面就会出现问题</font>。使用ID等固定唯一标识可以避免上述问题。
<font color=green>如果不存在逆序添加、删除等破坏顺序操作，仅用于展示信息，可以用index索引值作为key。</font>
下面的代码中，使用index作为key时，input输入框内容会在增加数据后出现错位,<font color=red>信息展示出现问题。</font>
```javascript
import React from 'react'
class Person extends React.Component{
    state={
        persons:[
            {id:1,name:'xiaodong',age:18},
            {id:2,name:'xiaoli',age:19}
        ]
    }
    add=()=>{
        const {persons}=this.state
        const p={id:persons.length+1,name:'xiaowang',age:20}
        this.setState({
            persons:[p,...persons]
        })
        console.log(this.state.person)
    }
    render(){
        return(
            <div>
                <h2>展示人员信息</h2>
                <button onClick={this.add}>添加人员</button>
                <ul>
                    {
                        this.state.persons.map((person,index)=>
                        <li key={index}>{person.name}---{person.age}<input type="text" /></li>)
                    }
                </ul>
                <hr/>
                <ul>
                    {
                        this.state.persons.map(person=>
                        <li key={person.id}>{person.name}---{person.age}<input type="text" /></li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Person
```

组件放在不同的目录下时，可以使用<font color=red>index.js</font>命名组件文件，引入时就可以引用到目录。 
样式可以使用<font color=red>index.module.css</font>来命名,引入时使用<font color=red>import hello from './index.module.css'</font>,使用时用<font color=red><h 2 className={hello.title}>hello</h 2></font>

**<font color=red>功能界面的组件化编码流程:(下面)</font>** 
- 拆分组件：拆分界面，抽取组件
- 实现静态组件：使用组件实现静态页面效果
- 实现动态组件
  - 动态显示初始化数据
    - 数据类型
    - 数据名称
    - 保存在哪个组件？
- 交互（从绑定事件监听开始）
