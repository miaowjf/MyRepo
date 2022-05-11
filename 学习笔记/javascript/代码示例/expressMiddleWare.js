const express=require('express')
const app=express()
//必须先使用json中间件，才能使用req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})

app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})

app.listen(80,function(){
    console.log("express server running at http://127.0.0.1")
})
