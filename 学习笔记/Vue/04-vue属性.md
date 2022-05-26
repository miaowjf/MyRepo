## ref属性
获取元素的引用
```javascript
<template>
<h1 v-text="msg" ref="title"></h1>

<button ref="btn" @clock="showDOM">点我显示内容</button>
</template>
<script>
export default{
    name:"App",
    components:{School},
    data(){
        return {
            msg:"hello World"
        }
    },
    methods:{
        showDOM(){
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
        }
    }
}
</script>
```
## props配置项
```javascript
//在组件中定义
props:["name","age","sex"]//与data、methods等是同级的
//接受的时候对数据类型进行限制
props:{
    name:String,
    age:Number,
    sex:String
}
props:{
    name:{
        type:String,//name的类型是字符串
        required:true//名字是必要的
    },
    age:{
        type:Number,
        default:88//默认值
    },
    sex:{
        type:String,
        required:true
    }
}
```
props的值不能修改，修改可能会出现问题

## mixin混入
把多个组件共用的配置提取成一个混入对象，再引入使用。
```javascript
//mixin.js(定义混入)
export const minix1={
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
export const minix2={
    data(){
        return{
            x:100,
            y:200
        }
    }
}
//应用混入
//在组件文件中引入
import {mixin} from './mixin'
export default{
    name:'Student',
    data(){
        return({
            name:'zhangsan',
            sex:'男'
        })
    },
    //应用混入
    mixins:[minix1,minix2]
}
```
混入也可以是data,如果混入的内容在组件中存在，由使用组件内的数据和方法,<font color=red>生命周期中的函数都要执行</font>,先执行混入的生命周期函数，再执行组件的生命周期函数。
**全局混入**
Vue.mixin(minix1)
Vue.mixin(minix2)
所有组件都混入，生命周期函数也会执行

### 插件
1. 定义插件
   ```javascript
   //plugins.js
   const obj={
       install(Vue){
           console.log("@@install",Vue)
           //可以把全局过滤器，全局指令，全局混入
           //可以给我Vue的原型上添加一个方法
       }
   }
   export{
       obj
   }
   //在main.js中引入plugins
   Vue.use(obj)
   ```

### scoped样式
引入的Vue组件不同，样式是后面的覆盖前面的
```javascript
<style scoped>
  //里面解构的只适用本组件。其他组件不用。
</style>
```

## 组件间通信
