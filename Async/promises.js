let stocks = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}


let  is_shop_open = true

let order = (time, work) => {
    
    return new Promise( (resolve, reject) => {
        
        if(is_shop_open){

            setTimeout(() => {
                resolve(work () )
            }, time )
            
            
        
        }

        else {
            reject(console.log('our shop is closed'))
        }

    })
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

.then(() => {
    return order(0000, () => console.log('Production has started.'))
})

.then(() => {
    return order(2000, () => console.log('The fruit was chopped.'))
})

.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(() => {
    return order(1000, () => console.log('The machine was started.'))
})

.then(() => {
    return order(2000, () => console.log(`ice cream was placed on ${stocks.holder[0]}`))
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppings`))
})

.then(() => {
    return order(2000, () => console.log('serve ice cream'))
})


.catch(() => {
    console.log('Customer left') ///handling errors!
})


.finally(() => {
    console.log('day ended, shop is closed')  ///resolve or reject, always run.
})