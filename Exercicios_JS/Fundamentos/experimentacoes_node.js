let a = 3  //local

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // { c: 456, d: false, e: 'teste' }


//criando uma variavel sem var/let
abc = 3 // NÃO FAÇA ISSO!
console.log(global.abc)

