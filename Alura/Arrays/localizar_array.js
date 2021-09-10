const alunos = ['Pedro', 'Bino', 'José', 'Carlos']
const media = [10, 7, 5, 8]

let alunosNotas = [alunos, media]


// includes -> booleano
// indexOf -> [3]

const exibeNomeNota = (nome) => {
    if (alunosNotas[0].includes(nome)) {
        indice = alunosNotas[0].indexOf(nome)
        return alunosNotas[0][indice] + ', sua média é ' + alunosNotas[1][indice]
    } else {
        return 'Aluno não encontrado'
    }
}

console.log(exibeNomeNota('Carlos'))