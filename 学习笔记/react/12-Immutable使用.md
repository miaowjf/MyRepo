# Immutable使用

不可变数据(Immutable Data)就是一旦创建，就不能再被更改的数据。对Immutable对象的任何修改或添加删除操作都会返回一个新的Immutable对象。<font color=red>Immutable</font>实现的原理是持久化数据结构(<font color=red>Persisten Data Structure</font>)，也就是数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免deepCopy把所有节点都复制一遍带来的性能损耗，Immutable使用了结构共享(<font color=red>Structural Sharing</font>),即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。

<font color=red>每时每刻的值都被保留，可以在页面有撤消操作时，取出原来的数据即可。</font>


```javascript
const {Map} = require('immutable')

const map1=Map({a:1,b:2,c:3})
const map2=Map({a:1,b:2,c:3})

console.log(map1.equals(map2))//true
console.log(map1==map2)//fasle
console.log(map1===map2)//fasle
```
```javascript
const {Map} = require('immutable')

const map1=Map({a:1,b:2,c:3})
const map2=Map({b:2})

console.log(map1.equals(map2))//true
console.log(map1==map2)//true
console.log(map1===map2)//true
```
```javascript
const {List} =requier('immutable')

const list=([1,2])
list1=list.push(3,4,5,6)
console.log(list1)
```