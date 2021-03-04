function highAndLow(numbers){
    const xray = numbers.split(' ')

    high = parseInt(xray[0])
    low =  parseInt(xray[0])


    for (let num in xray){

    

        if (parseInt(xray[num]) > high){
            high = parseInt(xray[num])
        }

        if (xray[num] < low){
            low = parseInt(xray[num])
        }
    }

        return (high) + ' ' + (low)
  }



  