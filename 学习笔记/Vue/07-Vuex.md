## Vuex

在main.js中导入vuex
```javascript
//main.js这里写有问题,应该在store中引入使用
import Vuex from 'vuex'

//vm上会有$store
Vue.use(Vuex)
```

创建stort文件夹和index.js文件
```javascript
//index.js
//应该在这里引入vuex和vue创建store
import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const actions={
  add:function(context,value){
    context.commit('ADD',value)
    //context可以继续dispatch
    //context.dispatch('action',value),可以继续处理业务逻辑
  }
}

const mutations={
  ADD(state,value){
      state.sum+=value
  }
}

const state={
  sum:0,
  school:'atguigu',
  subject:'前端'
}
//用于将state中的数据进行加工
//在页面中可以使用{{$store.getters.bigSum}}就可以使用
const getters={
    bigSum(state){
        return state.sum*10
    }
}

export const store=new Vuex.Store({
    actions,
    mutations,
    state
})

//在main.js中引入store
import store from './store'
//在new Vue中配置store
new Vue({
    el:'#app',
    render:h=>h(App),
    store,
    ...
})
//组件中调用 
methods:{
    increment(){
        this.$store.dispatch('add',value)
        //也可以直接使用commit直接操作mutations中的方法
        this.$store.commit('ADD',value)
    }
}
```
### mapState

```javascript
import {mapState} from 'vuex'

methods:{
    //借助mapState生成计算属性，从state中读取数据（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
    //数组的方式
    ...mapState(['sum','school','subject'])
    //模块化的写法需要在定义的state选项中加namespaced:true才可以,其它map函数也是要做相应修改，注意第一个参数countAbout是store中modules{输出内容}
    ...mpaState('countAbout',['sum','school','subject'])
}

### mapGetters

```javascript
...mapGetters({bigSum:'bigSum'})
...mapGetters(['bigSum])
```
### mapMutations

```javascript
methods:{
    //调用时要加value，increment(value),decrement(value)
    ...mapMutations({increment:'ADD',decrement:'SUB'})
    //下面这个调用时要用ADD(value),SUB(value)
    ...mapMutations(['ADD','SUB'])
}
```

### mapActions

```javascript
methods:{
    //调用时要加value，increment(value),decrement(value)
    ...mapActions({increment:'add',decrement:'sub'})
    //调用时要加value，add(value),sub(value)
    ...mapActions(['add','sub'])
}
