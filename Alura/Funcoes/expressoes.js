/// HOISTING = Içar - funções são "listadas" no topo do arquivo



function minhafunc(param) {

}

// expressão de função


const soma = function(n1, n2) {
    return n1 + n2
}

console.log(soma(3,3))

console.log(apresentar())

function apresentar() {
    return 'olá'
}
