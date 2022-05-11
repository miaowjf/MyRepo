const fs = require('fs')
const path=require('path')

console.log(0 == false)
console.log(Object.is(NaN, NaN))

const person = {
    name: "wjf",
    age: 45
}
const personProxy = new Proxy(person, {
    get(target, property) {
        return target[property] ? target[property] : 'default'
    }
})

console.log(personProxy.name)
console.log(personProxy.xxx);

//let lines = fs.writeFile('./index12.txt', 'Hello World', (err) => {
//    if (err) {
//        console.log('写入失败'+err)
//    }else{
//        console.log('写入成功')
//    }
//})
console.log('当前目录'+__dirname)

console.log(path.join(__dirname,'/a','b','../','./d','e','f'))

console.log(path.basename('c:/wjf/abc.txt','.txt'))
console.log(path.basename('c:/wjf/abc.txt'))
console.log(path.extname('abc.txt'))

console.log(path.basename('c:/wjf/abc.txt',path.extname('c:/wjf/abc.txt')))
const http=require('http')
const server=http.createServer()
server.on('request',(request,response)=>{
    console.log(request.url)
    console.log(request.name)
    response.end("<H1>HelloWorld</H1>")
})
server.listen(80,()=>{
    console.log('http://127.0.0.1')
})