const { nextTick } = require("process")

let arr = ['a', 'b', 'c']
let str = 'abcde'
let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])
let set = new Set().add('e').add('f').add('g')
console.log(arr, str, map, set)

for (let i of set) {
    console.log(i)
}
console.log('----')
let done, value;
let i1 = arr[Symbol.iterator]()

class Count {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count=1,limit=this.limit
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ }
                } else {
                    return { done: true, value: undefined }
                }
            },
            return(){
                console.log('exit')
                return {done:true}
            }
        }
    }
}

let c1 = new Count(4)
for (let i of c1) {
    console.log(i)
}
for (let i of c1) {
    if (i>2){
        break;
    }
    console.log(i)
}

class Counter{
    constructor(limit){
        this.limit=limit
    }
    [Symbol.iterator](){
        let count=1,limit=this.limit
        return{
            next(){
                if (count<=limit){
                    return {done:false,value:count++}
                }else{
                    return {done:true,value:undefined}
                }
            },
            return(){
                console.log('exit')
                return {done:true}
            }
        }
    }
}


let c2 = new Counter(8)
let [a,b]=c2
console.log("------")
console.log(a,b)
try {
    for (let i of c2) {
        if (i > 5) {
            throw 'err'
        }
        console.log(i)
    }
}catch(e){
    console.log(e)
}
