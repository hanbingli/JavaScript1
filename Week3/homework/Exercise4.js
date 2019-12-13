'use strict'

let shoppingList = ['bananas', 'milk']

function addToShoppingCart(oneMore){
    shoppingList.push(oneMore)
    if(shoppingList.length <=3 ){
        console.log(shoppingList)
        return `You bought ${shoppingList}!`
        
    }else{
        shoppingList.shift()
        console.log(shoppingList)
       return `You bought ${shoppingList}!`
    }

}



addToShoppingCart('ice cream')
addToShoppingCart('chocolate')
addToShoppingCart('doritos')
