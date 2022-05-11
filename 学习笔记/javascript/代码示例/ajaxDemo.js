const express=require('express');

const app=express();

app.get('/server',function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello AJAX')
    console.log(request.query.a)
    console.log(request.query.b)
    console.log(request.query.c)
    console.log(request.query)
});
app.post('/server',function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello AJAX POST');
});
app.all('/json-server',function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    const data={
        name:"wjf",
        age:45,
        sex:'man'
    }
    response.send(JSON.stringify(data));
});

//延时响应
app.all('/delay',function(request,response){
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});