const notas = [10, 9, 8, 7, 6]

// ++nota != nota++

const notasAtualizadas = notas.map(nota => nota == 10 ?
    nota : ++nota)


console.log(notasAtualizadas)


///also works:
function attnota(nota){
    if (nota == 10){
    return nota
    } else {
        return nota++
    }
}