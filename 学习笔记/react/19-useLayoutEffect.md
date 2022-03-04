# useLayoutEffect同步执行副作用

大部分情况下，使用useEffect可以帮助我们处理组件的副作用，但是如果想要<font color=red>同步调用一些副作用</font>，比如对DOM的操作，就要使用useEfLayoutEffect，<font color=red>useLayoutEffect</font>中的副作用会在DOM更新之后同步执行。(<font color=yellow>DOM操作可以在这里做</font>)

**useEffect和useLayoutEffect**区别：<font color=red>useLayoutEffect</font>和原来的<font color=yellow>componentDidMount & componentDidUpdate</font>一致，<font color=yellow>在react完成DOM更新后</font>马上同步调用的代码，<font color=red>会阻塞页面渲染</font>。而useEffect是会在整个页面渲染完才会调用的代码。
修改DOM时使用useLayoutEffect