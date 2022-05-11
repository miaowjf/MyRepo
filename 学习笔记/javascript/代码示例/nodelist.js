//console.log(process.env)
//console.log(process.versions)
//console.log(process.arch);
//console.log(process.cpuUsage());
//console.log(process.memoryUsage());
//console.log(process.platform);
//console.log(process.argv);
//console.log(process.argv0);
//console.log(process.uptime());
//console.log(process.pid)



//事件
//process.on('exit',(code)=>{
//    console.log('exit',code);
//});
//
//process.on('beforeExit',(code)=>{
//    console.log('before exit',code);
//});
//
//标准输入输出错误
//console.log=function(data){
//    process.stdout.write('---'+data+'\n');
//}
//console.log('abc')

//const fs=require('fs')
//fs.createReadStream('./index.js').pipe(process.stdout)

//process.stdin.setEncoding('utf-8')
process.stdin.on('readable',()=>{
    let chunk=process.stdin.read()
    console.log(chunk)
    if (chunk!=null){
        process.stdout.write('data:',chunk)
    }
})