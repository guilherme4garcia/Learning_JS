let stocks = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}


let  is_shop_open = true


function time (ms) {
    return new Promise( (resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen () {
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]}`)
        
        await time(0000)
        console.log('start the production')

        await time(2000)
        console.log('The fruit was chopped.')

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log('The machine was started.')

        await time(2000)
        console.log(`ice cream was placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was added as toppings`)
    }
    catch(error){
        console.log('customer left', error)
    }
    finally{
        console.log('day ended, shop is closed')
    }

}

kitchen()

///--------------------------------------------------------------------

// let toppings_choice = () => {
    
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
            
//             resolve(console.log('which topping would you want?'))

            
//         }, 3000)
//     })
// }

// async function kitchen () {
//     console.log('A')
//     console.log('B')
//     console.log('C')

//     await toppings_choice()

//     console.log('D')
//     console.log('E')

// }

// kitchen()

// console.log('doing the dishes')
// console.log('cleaning the tables')
// console.log('taking others orders')

///--------------------------------------------------------------------

// let order = () => {
//     return new Promise( (resolve, reject)  => {
//         if(){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     } )
// }

// order()
// .then()
// .then()
// .catch()
// .finally()


///--------------------------------------------------------------------

// async function order (){
//     try{
//         await abc 
//     }

//     catch(error){
//         console.log('abc doesnt exist', error)
//     }

//     finally{
//         console.log('runs code anyways')
//     }
// }

// order()
// .then(() => {
//     console.log('test')
// })