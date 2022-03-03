# useMemo
shouldComponentUpdate组件更新前执行的方法
请求数据时需要使用，避免重复请求数据
避免反复执行
const actionXiaoHong=useMemo(()=changeXiaoHong(name),[name])
只有name发生变化时才执行changeXiaoHong