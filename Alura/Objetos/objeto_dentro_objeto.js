const cliente = {
    nome: 'André', 
    idade: 36,
    cpf: '244556789543',
    email: 'andre@gmail.com',
    fones: ['4736247', '213124']
}


cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNasc: '20/03/2021'
}   

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)