function sumDigits(number) {

    if (number < 0){
        number = Math.abs(number)
    }
    
    string_number = number.toString()
    var soma = 0
    
    for (let digit in string_number) {
        var soma = soma + (parseInt(string_number[digit]))
        //console.log(string_number[digit])
        
    } 
    return console.log(soma)
}

const y = (-32)
sumDigits(y)
