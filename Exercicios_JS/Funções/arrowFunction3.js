let comparaComThis = function (param) {
    console.log(this === param)

}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)



/// this na função Arrow escopo função
/// this na função normal escopo global