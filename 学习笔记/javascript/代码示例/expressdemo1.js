const express=require('express')
const app=express()

app.listen(80,(request,response)=>{
    console.log('server running at http://127.0.0.1')
})

app.get('/',(request,response)=>{
    console.log(request.query)
    response.end("<h1>Hello World天津市!</h1>")
    
})

app.get('/user/:id',(request,response)=>{
    console.log(request.params.id)
})

app.use(express.static('public'))