const cliente = {
    nome: 'André', 
    idade: 36,
    cpf: '244556789543',
    email: 'andre@gmail.com'
}

//Chave : Valor

console.log(`Meu nome é ${cliente.nome}, eu tenho ${cliente.idade} anos.`)

            //começando indice [0] indo até [2]
console.log(cliente.cpf.substring(0, 3)) 