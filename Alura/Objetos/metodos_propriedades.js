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


///exemplo de herança

class ClientePoupanca extends Cliente{
    constructor (nome, email, cpf, saldo, saldoPoupanca){
        super (nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }

}


const guilherme = new ClientePoupanca('Guilherme', 'g@gmail.com', '43256', 1000, 6000)
guilherme.depositar(750)
guilherme.depositarPoupanca(800)
console.log(guilherme)