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


function oferecerSeguro(obj){
    const proposta = Object.keys(obj)
    if(proposta.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)
console.log(Object.values(cliente))