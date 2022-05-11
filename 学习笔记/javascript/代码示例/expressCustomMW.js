const express=require('express')
//querystring已弃用，现在使用JSON.parse
const qs=require('querystring')

const app=express()

app.use((req,res,next)=>{
    let str=''
    req.on('data',(chunk)=>{
        str+=chunk
    })
    req.on('end',()=>{
        console.log(qs.parse(str))
        req.body=qs.parse(str)
        console.log(req.body)
    })
    next()
})


app.post('/user',(req,res)=>{
    res.send('ok')
})

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1")
})