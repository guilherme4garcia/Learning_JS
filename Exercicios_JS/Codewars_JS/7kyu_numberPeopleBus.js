function number (busStops){
    var entrando = 0
    var saindo = 0

    for (let ponto in busStops) {
        entrando += busStops[ponto][0]
        saindo += busStops[ponto][1]
    }

    return console.log(entrando - saindo)
}

