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
    }],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

