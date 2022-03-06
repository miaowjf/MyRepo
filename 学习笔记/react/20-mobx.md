# mobx使用

## 一、基本应用
<font color=red>App.js</font>
```javascript
import React from 'react'
import {observer} from 'mobx-react'
import counter from './Count'
import TestCounter from './TestCounter'

class App extends React.Component{
    render(){
        return(
            <>
                <div>Mobx:计数器中案例</div>
                <div>点击次数：{counter.count}</div>
                <button onClick={()=>counter.increment()}>+1</button>
                <button onClick={()=>counter.reset()}>重置</button>
                <TestCounter/>
            </>
        )
    }
}

export default observer(App)//observer包裹组件
```
使用mobx中数据的组件文件中要引入<font color=red>observer</font>并<font color=red>用observer包裹该组件</font>。
<font color=red>Count.js</font>
```javascript
import {action,makeObservable,observable} from 'mobx'

class Count{
    constructor(){
        makeObservable(this,{
            count:observable,
            increment:action,
            reset:action
        })

    }

    count=1
    increment(){
        this.count++
    }
    reset(){
        this.count=0
    }
}

export default new Count() //只能初始化1次
```
使用<font color=red>makeObservable(target,{指定哪些属性和方法变为可观察}</font>来对属性和方法变为可观察
makeObservable(this,{increment:<font color=red>action.bound</font>}),action.bound可以绑定this，不用在组件中使用()=>...来进行事件绑定。(在使用<font color=red>makeObservable</font>的使用可以通过<font color=red>action.bound</font>绑定this指向)
通过new Count()返回一个对象，保证<font color=red>全局只有一个对象</font>

<font color=red>TestCounter.js</font>
```javascript
import React from 'react'
import store from './Count'
import {observer} from 'mobx-react'

class TestCounter extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>store.increment()}>Add</button>
                <button onClick={()=>store.reset()}>Reste</button>
            </div>
        )
    }
}

export default observer(TestCounter)
```
哪个组件使用数据，就在哪个组件中导入相应的数据文件就可以使用，并且各数据共享。
## 二、computed字段

- <font color=red> computed</font>可以用来观察其它对象中派生信息。
- 计算属性采用惰性求值，会缓存其输出，只有当其<font color=red>依赖的对象被改变时都会重新计算</font>
- 计算属性是一个方法，且方法前面<font color=red>必须用get进行修饰</font>
- 计算属性还需要通过makeObservable方法指定。
<font color=yellow> makeObservable(this,{double:computed}) </font>

<font color=green> get double(){ return this.count*2 }
</font>
## 三、makeAutoObservable的使用
- <font color=red> makeAutoObservable</font>就像是加强的makeObservable，在默认情况下它将推断属性和方如下：
makeAutoObservable(this)
  - 所有的属性都为observable
  -  所有的方法都为action
  - 所有的get都为computed
- 通过<font color=red>overrides</font>排除不需要被观察的属性和方法
makeAutoObservable(this,<font color=yellow>{rest:fasle}</font>) <font color=red>rest</font>不再是一个action
- 通过<font color=red>autoBind</font>可以绑定this指向
makeAutoObservable(this,{rest:fasle},<font color=yellow>{autoBind:true}</font>),自动绑定到this
makeAutoObservable(this,{},<font color=yellow>{autoBind:true}</font>),自动绑定到this

## 四、监听属性
1. autoRun的使用
- <font color=red>autoRun</font>函数<font color=yellow>接受一个函数</font>作为一个参数，每当函数所<font color=yellow>观察的值</font>发生变化时，<font color=red>这个函数就运行</font>。
- 当创建autoRun时，它也会运行一次。
- Mobx自动收集并订阅热闹的人可观察属性，一旦改变发生，autoRun将会再次触发。
```javascript
autoRun(()={
    console.log('counter',counter.count)
})
autoRun(()=>{
    console.log('double',counter.double)
})
```
2. reaction的使用
- <font color=red>reaction</font>类似于autoRun,但可以更精细的控制要跟踪的可观察对象。
- 它接受两个<font color=red>函数</font>作为参数
  - 参数1：data参数，其<font color=red>返回值</font>将会作为<font color=red>第二个函数的输入</font>。
  - 参数2：回调函数 
```javascript
reaction(
    ()=>{},
    (value,oldValue)=>{
        console.log('counter.count变化了',value,oldValue)
    }
)
```
- 与autoRun不一样的是，<font color=red>默认情况下创建时是不执行的。</font>

## 五、Mobox处理异步
- 异步处理在Mobx中可以不需要任何特殊处理，因为不论是何时引发的所有reaction都将会自动更新。
- 因为可观察对象是可变的，因此在action执行过程中保持对他们的引用一般是安全的
- 如果可观察对象的修改不在action函数中，控制台会警告（可以关闭，但不推荐）
```javascript
import {configour} from 'mobx'
configour({
    //observer 可观察状态必须通过action进行修改
    //never 可观察对象可以在任何地方修改
    enfourceAction:'observer'
})
```
1. 异步处理方式-<font color=red>将异步和修改操作分离</font>
```javascript
increment(){
    this.count++
}

incrementAsync(){
    setTimeout(this.increment,1000)
}
```
2. 异步处理方式-<font color=red>runInAction</font>
- 通过<font color=red>runInAction</font>可以保证所有异步更新可观察对象的步骤都应该标识为action
```javascript
increment(){
    setTimeout(()={
        runInAction(()=>{
            this.count++
        })
    },1000)
}
```
## 六、Mobx模块化
- 项目规模变大之后，不能将所有的状态和方法都放在一个Store中
- 可以根业务模块定义多个Store
- 通过一个根Store统一管理Store
  **实现步骤：**
  - 拆分Counter和Cart两个Store，每个Store都可以有自己的state/action/computed
  - 在store/index.js中导入热闹的人Store，组合成一个Store
  - 使用useContext机制，自定义useStore hook，统一导出Store
```javascript
import {useContext,createContext} from 'react'
import cart from './Cart'
import counter from './Counter'
class RootStore{
    cart=cart
    counter=counter
}
const store=new RootStore()
//如果createContext提供了默认值，就不需要Provider了
const Context=createContext(store)
export default const useStore=()=>{
    return useContext(Context)
}
```
**在组件中使用：**
```javascript
import React from 'react'
import useStore from './store'//上页的代码

function App(){
    const {counter,cart}=useStore()
    return(
        <div>
            {counter.count}:{cart.list}
        </div>
    )
}
```

## 七、Mobx中数组的使用

Mobx中的数组是由mobx进行ObservableArrayAdministration后的数组，可能使用map、push、filter等直接进行操作。