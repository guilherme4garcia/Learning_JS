const a = {name: 'Test'}

const b = a   //tanto a quanto b esta apontando para o mesmo endereço na memória. [ATRIBUIÇÃO POR REFERÊNCIA]

b.name = 'Opa'
console.log(a)

let c = 3
let d = c   //quando trabalhamos com tipos primitivos é feito uma cópia por valor, != de quando trabalhamos com objetos que a passagem é feita por referência.

d++

console.log(c)
console.log(d)


let valor // não inicializado
console.log(valor)

valor = null //null significa que não está apontando para nenhum endereço de memória, ausência de valor.
console.log(valor)
//console.log(valor.toString()) // Erro!

//sempre use null para zerar o valor de uma variavel, não utilizar undefined

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)