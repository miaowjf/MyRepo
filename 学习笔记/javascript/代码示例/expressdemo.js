const express=require('express')
const app=express()

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})

app.get('/user',(req,res)=>{
    res.send("Hello user")
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params.id)
    console.log(req.params['id'])
    res.end('Hello'+req.params['id'])
})

app.get('/',(req,res)=>{
    console.log(req.query)
    console.log(req.query['name'])
    res.end("hello world")
})
