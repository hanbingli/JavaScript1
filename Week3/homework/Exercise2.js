'use strict'

function calculateDogAge (anyNumber){
    if (parseFloat(anyNumber).toString() == "NaN") { 
        　　　　return "Please enter a Numeber."
    }else{
        let doggyAge = anyNumber * 7;
        return `Your doggy is ${doggyAge} years old in dog years!`
    }
        
}

calculateDogAge('hey')
console.log(calculateDogAge('hey'))

calculateDogAge(2)
console.log(calculateDogAge(2))