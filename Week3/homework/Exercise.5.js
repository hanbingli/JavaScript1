'use strict'

function calculateTotalPrice(itemPrice){
    let numbers = Object.values(itemPrice);
    let sum = 0;
        for(let item of numbers){
            sum = sum + item
        }
        return sum
}


const cartForParty = {
    beers:  6,
    chips: 3,
    iceCream: 3,
    wine: 8,
    cheese: 2
}


calculateTotalPrice(cartForParty)