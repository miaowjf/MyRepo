## 基本使用
```shell
mkdir sutdy
npm init -y
npm install express
touch main.js
```
**注意参数位置,req,res,next**
```javascript
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>hello GET</h1>')
})

//可以使用get,post,put,delete等命令
app.listen(3000,()=>{
    console.log("express is running at http://127.0.0.1:3000")
})
```
### req传参数
1. req.query属性传参数(?id=1001)
```javascript
app.get('/user',(req,res))
//staus可以使用query参数传递方式
res.status(201).send('hello')
```
2. req.params属性传参数
```javascript
app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params.id,':',req.params.name)
    console.log(req.params)
    //响应代码用res.end
    res.statusCode=201
    res.end()
})
```

### res 响应对象

```javascript
res.send(对象)
//对象将被返回（字符串方式）
```
cookie设置
```javascript
app.get('/user',(req,res)=>{
    console.log(req.query.id,':',req.query.name)
    res.cookie('id',req.query.id)
    res.cookie('name',req.query.name)
    res.status(201).send(req.query)
})
```

## 中间件

### 404处理
```javascript
//在最后增加没有配置的路径时执行
app.use((req,res)=>{
    res.send(req.url+'未找到')
})
```
### 中间件的定义
中间件的顺序很重要,可以做日志、权限管理、附加参数等方面(修改request和response,结束请求响应周期，调用下一个中间件。可以在request中增加变量，函数为后面的处理使用)
```javascript
//要写满3个参
app.use((req,res,next)=>{
    //这里进行处理，然后用next进行下一个匹配的中间件和路由
    next()
})
```
```javascript
//函数返回的形式
function json(option){
    return(req,res,next)=>{
        //处理的函数
        console.log(option.message)
    }
}
//函数返回使用的方式
app.use(json({message:'hello'}))

```
```javascript
//函数的方式
function json(req,res,next){
    //...处理
    }
app.use(json)
```
**注意事项**：如果当前的中间件功能没有结束请求-响应周期(res.end,res.send...),<font color=red>则必须调用next()</font>将控制权传递给下一个中间件功能，否则该请求将被挂起。

### 中间件的分类
1. 应用程序级别的中间件
   - 使用app.use挂载的中间件
   `app.use(function(req,res,next)=>{...})`
   - 限定路径的中间件
   `app.use('/usr/:id',function(req,res,next)=>{...})`
   - 限定请求方法+请求路径(app.get)
   `app.get('/usr/:id',function(req,res,next)=>{...})`
   - 多个中间件处理方式
     ```javascript
     app.use('/usr/:id',
       function(req,res,next)=>{
        //进行处理
       },
       function(req,res,next)=>{
        //再进行处理
       }
       )
       app.get('/usr',[...中间件],(req,res)=>{...})
       app.use('/usr',[...中间件],(req,res)=>{...})
       //也可以分开写
       app.use('/usr/:id',(req,res,next)=>{})
       app.use('/usr/:id',(req,resm,next)=>{})
       ```
    - 跳过其余中间件功能(同一组中间件，其他语句挂载的不算,超级用户判断时使用,如果是超级用户，直接往下执行，不在做多余判断），可以调用<font color=red>next('route')</font>这里要注意是字符串(注意：仅在使用app.Method()或router.Method()函数加载的中间件函数中有效,<font color=red>app.use</font>中不能使用)

2. 路由器级中间件
 ```javascript
 //router.js
 const express=requier('express')
 const router=express.Router()
 router.get('/',(req,res)=>{...})
 router.post('/user',(req,res)=>{...})
 module.exports=router
 //主程序中挂载
 //main.js
 const router=requier('./router')
 app.use(router)
 //app.use('/api',router)调用时要使用/api前缀
 ```
 <font color=red>与app一样定义中间件</font>`router.get('/',(req,res,next)=>{...})`

3. 错误处理中间件，<font color=red>必须是4个参数</font>
   最后挂载这个中间件
   ```javascript
   app.use(function(err,req,res,next){
    console.log(err.stack)
    //res.status(500).json({error:err.message})
    res.status(500).send('Something broke!')
   })
   //调用错误处理,注意要有next这个参数
   app.get('/',(req,res,next)=>{
    try{
        //...出现错误到catch
    }catch(err){
        next(err)//这里到上面的错误处理程序
    }
   })
   ```
   在try-catch时使用,在catch中调用next(err)
   **<font color=red>next传递3种参数:</font>**
      - next()转到下一个中间件
      - next('router')跳过一起定义的路由器
      - next(任意数据)express当做是错误,直接跳到错误处理函数执行
4. 404错误处理
   ```javascript
   //以下定义都可以,放到最后,不然最后都只执行这个中间件
   app.use(()=>{...})  
   app.use((req,res,next)=>{...})
   ```
5. 内置中间件
   - express.json()解析Content-Type为applicatio/json格式的请求体
   - express.urlencoded()解析Content-Type为application/x-www-form-urlencoded格式的请求体
   - express.raw()解析Content-Type为application/octet-stream格式的请求体
   - express.text()解析Content-Type为text/plain格式的请求体
   - express.static()托管静态资源文件
6. 第三方中间件
   - body-parser已经内置(express.json(),express.urlencoded())
   - cookie-parser挂载cookie到req.cookies中
   - cookie-session基于cookie的sessions
   - cors CORS支持跨域资源请求
   - session 

## 路由

 ?:匹配任意一个字符
\+:匹配1个或多个字符
\*:匹配0个或多个字符,{0,}需要使用这个代替
\$:结尾是后面的内容
'/ab(cd)?e'：匹配/abe和/abcde,()代表一个分组
'/a/':匹配所有带a的路径(有a就行)
'/\*.\$fly\*/':fly结尾的路径
'/user/:userid/book/:bookid':/user/u1001/book/b2012
'http://localhost:3000/flights/:useerid-:bookid'：可以通过params参数获取userid和bookid的值(flights/u001-b003，u001和b003给userid和bookid)
/usr/:userId(\\\\d+)控制userId必须是数字才匹配(要有两个\\\\)
 ```javascript
 //router.js
 const express=requier('express')
 const router=express.Router()
 router.get('/',(req,res)=>{...})
 router.post('/user',(req,res)=>{...})
 module.exports=router
 //主程序中挂载
 //main.js
 const router=requier('./router')
 app.use(router)
 //app.use('/api',router)调用时要使用/api前缀
 ```
 多个功能处理
 ```javascript
 const fn1=function(req,res,next){
    console.log('fn1')
    next()
 }
 const fn2=function(req,res,next){
    console.log('fn12)
    next()
 }
 const fn3=function(req,res){
    console.log('fn3')
    res.send('3个功能处理完成')
 }
 app.get('/example',[fn1,fn2,fn3])

 ```
 响应方法：
 1. res.download()提示要下载的文件
 2. res.end()结束响应过程
 3. res.json()发送JSON响应
 4. res.jsonp()发送带有JSONP支持的响应
 5. res.redirect()重定向请求
 6. res.render()渲染视图模板
 7. res.send()发送各种类型的响应
 8. res.sendFile()将文件作为8位字节流发送
 9. res.sendStatus()设置响应状态码，并将字符串表示形式发送响应报文

链式路由处理程序示例：app.route()
 ```javascript
 app.route('/book')
   .get((req,res)=>{...})
   .put((req.res)=>{...})
   .post((req,res)=>{...})
```   


