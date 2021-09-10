function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

//instancia
const andre = new cliente('Andre', '21324534', 'andre@gmail.com', 100)

console.log(andre)