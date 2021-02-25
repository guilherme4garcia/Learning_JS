const escola = 'Cod3r'

console.log(escola.charAt(4)) //letra na posição
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3)) //unicode - html code
console.log(escola.indexOf('C')) // indexOf devolve a posição

console.log(escola.substring(1)) //imprime do 1 até o fim
console.log(escola.substring(0, 3)) // imprime do 0 até 2

console.log('Escola '.concat(escola).concat('!')) //concat = concatenar strings
console.log(escola.replace(3, 'e')) //substitui a letra na posição
console.log(escola.replace(/\d/, 'e')) //  /\d/ = todos os digitos, substituir por 'e'
console.log(escola.replace(/\w/g, 'e')) //  /\w/g = todas as letras e digitos, substituidos por 'e'

console.log('Ana, Maria, Pedro'.split(',')) //gera uma array, dividindo os elementos a partir da virgula
