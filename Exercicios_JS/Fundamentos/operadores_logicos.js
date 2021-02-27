/*

V and V = V
V and F = F
F and ? = F

V or ? = V
F or V = V
F or F = F

V xor V = F
V xor F = V
F xor V = V
F xor F = F

!V = F
!F = V

*/


function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  //or
    const comprarTv50 = trabalho1 && trabalho2  //and
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
