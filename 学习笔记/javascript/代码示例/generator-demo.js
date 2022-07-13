function* generator(){
    yield 'foo'
    yield 'bar'
    return 'bz'//没有这句最后返回{value:undefined,done:true}
}

let g=generator()
console.log(g)
console.log(g[Symbol.iterator]())//和g是一样的
console.log(g.next())
console.log(g.next())
console.log(g.next())