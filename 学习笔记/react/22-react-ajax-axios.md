# react-ajax

```javascript
axios.get('地址').then(
    response=>{console.lg('成功',response.data)},
    error=>{console.log('失败',error)}
)
```
```javascript
    axios.get('https://api.github.com/search/users?q=js').then(
        response=>{console.log('成功',response.data)},
        error=>{console.log('失败',error)}
    )
```
fetch使用
```javascript
fetch('https://api.github.com/search/users?q=js').then(
    response=>{
        console.log('联系服务器成功了')
        return response.json()
    }
).then(
    response=>{console.log('获取数据成功了',response)}
).catch(
    error=>{console.log('数据请求错误',error)}
)
```
```javascript
//外面的函数要用async开头。
try {

    const response = await fetch('https://api.github.com/search/users?q=js')
    const data = await response.json()
    console.log(data)
}catch(error){
    console.log(error)
}
```