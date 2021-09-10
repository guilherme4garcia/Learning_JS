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

let relatorio = ''

for (let info in cliente)
{
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){

    } else {
        relatorio += `
        ${info} : ${cliente[info]}
        `
    }
}

console.log(relatorio)