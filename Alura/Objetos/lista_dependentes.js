
const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '244556789543',
    email: 'andre@gmail.com',
    fones: [ '4736247', '213124' ],
    dependentes: [{ 
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2021' 
    }]
}

cliente.dependentes.push({
    nome: 'Gabriela',
    parentesco: 'Filha',
    dataNasc: '04/01/2014'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '04/01/2014')

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)