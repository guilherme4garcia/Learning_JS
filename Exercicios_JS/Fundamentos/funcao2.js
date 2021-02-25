// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 2)

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito  - apenas uma linha

const subtracao = (a, b) => a - b   
console.log(subtracao(2, 2))

const imprimir = a => console.log(a)
imprimir('Cool!')