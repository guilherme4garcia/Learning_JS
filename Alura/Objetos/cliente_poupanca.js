function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}


function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const guilherme = new clientePoupanca('Guilherme', '2123445', 'nome@email.com', 100, 200)

console.log(guilherme)


clientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

guilherme.depositarPoup(5000)

console.log(guilherme)