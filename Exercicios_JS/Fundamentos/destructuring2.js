const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [6, 7, 9, 8]
console.log(n1, n3, n5, n6) //6 9 undefined 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) //6


