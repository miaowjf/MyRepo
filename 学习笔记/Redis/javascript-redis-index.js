const redis=require('redis')
const client=redis.createClient()
client.connect().then(()=>{
    console.log("connect succect")
})
client.on('ready',()=>console.log('redis ready'))
client.on('error',err=>console.log('redis Client Error',err))
client.ping().then((data)=>console.log(data))
client.ping().then((data)=>console.log(data))
client.ping().then((data)=>console.log(data))
    client.hGetAll('43804526').then((data)=>{
        console.log(data)
    })
/*
con.then(()=>{
    client.ping().then((data)=>console.log(data))
    client.hGetAll('43804526').then((data)=>{
        console.log(data)
    })
    client.hGetAll('45190831').then((data)=>{
        console.log(data)
    })
    client.KEYS("????????").then(data=>{
        console.log(data)
    })
})
*/
client.quit()
