{
    {
        {
            {
                var sera = 'Será???' // var fora de uma função visibilidade global.

            }
        }
    }
}

// A variavel var dentro de um bloco de código ficara visivel fora do bloco também.

console.log(sera)

function teste() { 
    var local = 123 /// var dentro da função, é visivel apenas nesse escopo
}

teste()
//console.log(local)  não é possivel acessar pois esta dentro da função

