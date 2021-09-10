const numeros = []
var index = 0

for (let i = 100; i < 700; i= i+100){
    numeros.push(i)
    console.log(index, i)
    index ++
}

console.log(numeros)


// outra forma

for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}