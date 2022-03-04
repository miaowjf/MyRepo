# useCallback
```javascript
class App{
    render(){
        return
        <div>
            <SomeComponent style={{fontSize:14}} doSomething={()=>{console.log('do something)}}/>
        </div>
           
        }
}
```
上述代码一旦组件的<font color=red>props或者状态</font>改变了就会<font color=red>触发生渲染</font>，即使用SomeCompnent组件不相关，**由于每次render都会产生新的style和doSomething（<font color=yellow>因为重新render前后，style和doSomething分别指向了不同的引用</font>）**，所以会导致SomeComponent重新渲染，倘若SomeComponent是一个大型的组件树，这样的<font color=red>Virtual DOM</font>的比较显然是很浪费的，解决的办法是将<font color=red>参数抽离成变量</font>
```javascript
const fontSizeStyle={fontSize:14}
class App{
    doSomething=()=>{
        console.log('do something')
    }
    render(){
        return
        <div>
            <SomeComponent style={fontSizeStyle} doSomeThing={this.doSomething} />
        </div>
    }
}
```
以上是<font color=red>类组件</font>中的使用方式，我们可以通过this这个对象来存储函数，而在<font color=red>函数组件</font>中没办法进行挂载。所以函数组件在每次渲染时如果有传递函数的话都会重渲染子组件。
```javascript
functon App(){
    const handleClick=()=>{
        console.log('Click happened')
    }
    return <SomeComponent onClick={handleClick}>Click me</SomeComponent>
}
```
**函数式组件理解为class组件render函数的语法糖**，所以<font color=red>每次重新渲染</font>的时候函数式组件内部所有的代码<font color=red>都会重新执行一遍</font>。所以上述代码每次render，handleClick都会是一个新的引用，传给子组件的props.onClick一直在变，函数组件在每次渲染时都会重渲染子组件。可以使用useCallback来解决这个问题，通过useCallback获得一个记忆后的函数。
```javascript
function App(){
    const memoizeHandleClick=useCallback(()=>{
        console.log('click happened')
    },[])//空数组情况下，该函数都不会发生改变。第二个参数传入一个数组后，里面有一项发生变化就会重新渲染。
}
```
子组件继承了PureComponent或者使用React.memo可以避免不必要的VDOM渲染。(<font color=red>子组件需要用React.memo包裹起来才管用</font>)
可以由useMemo所取代

# useMemo
shouldComponentUpdate组件更新前执行的方法
请求数据时需要使用，避免重复请求数据
避免反复执行
const actionXiaoHong=useMemo(()=changeXiaoHong(name),[name])
只有name发生变化时才执行changeXiaoHong
**useCallback(fn,inputs)与useMemo(()=>fn,inputsj是一样的**
```javascript
function App(){
    const memoizeHandleClick=useMemo(()=>()=>{
        console.log('Click happened')
    },[])
    return <SomeComponent onClick={memoizeHandleClick}>Click me</SomeComponent>
}
```
**useCallback**不会执行第一个参数函数，而是将它返回给你，而**useMemo**将执行第一个函数并且并函数执行结果返回给你。
**useCallback**常用于<font color=red>记忆事件函数</font>，而**useMemo**更适合<font color=red>经过函数计算得到一个确定的值，比如记忆组件</font>。
```javascript
function ChildHood(){
    return(
        <div>
            childhood
        </div>
    )
}
const Child=memo(function({a,b,onAdd}){
    console.log('child run...')
    const Child1=useMemo(()=>()=><ChildHood a={a}></ChildHood>,[a])//调用时注意应该返回一个函数(fn) 
    const Child1=useMemo(()=>()=><ChildHood a={b}></ChildHood>,[b])
    return(
        <>
            <h1>hello</h1>
            <button onClick={onAdd}>add</button>
            <Child1>
            <Child2>
        </>
})

)
```