class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const guilherme = new Cliente('Guilherme', 'guilhermegarcia@gmail.com', '8237234723', 5000)

guilherme.depositar(7000)
guilherme.exibirSaldo()

console.log(guilherme)
