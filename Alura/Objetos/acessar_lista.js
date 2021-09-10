const cliente = {
    nome: 'André', 
    idade: 36,
    cpf: '244556789543',
    email: 'andre@gmail.com'
}

const chaves = ['nome','idade', 'cpf', 'email']
const test = 'idade'
console.log(cliente[chaves[0]])  // variaveis e arrays devem ser informadas dentro do [colchete].


chaves.forEach(info => console.log(cliente[info]))