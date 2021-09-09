let x = '';
console.log(x);
x = 'oi'


function imprimeTexto(texto) {
    console.log(texto)
}

function soma(){
    return 2 + 2
}

// console.log(soma())

imprimeTexto(soma())

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))