
const target={foo:'foo',bar:'bar'}
const handler={
  //get的三个参数分别是代理的目标、属性、接收者，可以进行相应操作
  get(trapTarget,property,receiver){
    console.log(trapTarget===target)//true
    console.log(property)//foo
    console.log(receiver===proxy)//true
    let s=Reflect.get(...arguments)+'!!!'//实现原始操作，可以在原始操作上增加内容
    return s
  },
  set(target,property,value,receiver){
    console.log('set()')
    value=value+'(set)'
    return Reflect.set(...arguments)
  }
}

const proxy=new Proxy(target,handler)

console.log(proxy.foo)
console.log('--')
console.log(proxy.bar)
console.log('----set-----')
proxy.foo='fooset-'
console.log(proxy)

const o={}
try{
    //Object.defineProperty(o,'foo',{value:'bar'})
    Object.defineProperty(o,'foo','bar')
    console.log('success')
}catch(e){
    console.log('failure')
}

if(Reflect.defineProperty(o,'foo',{value:'bar'})){
    console.log('success')
}else{
    console.log('failure')
}

function double(value){
  setTimeout(()=>setTimeout(console.log,0,value*2),1000)
}

double(3)
