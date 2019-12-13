'use strict'

function giveCompliment(name){
    let compliments = [
        'great',
        'awesome',
        'wonderful',
        'amazing',
        'perfect',
        'stunning',
        'brilliant',
        'extraordinary',
        'outstanding',
        'exellent'
    ];

    let randomOutput = compliments[Math.floor(Math.random() * compliments.length)];
    
    return `You are ${randomOutput}, ${name}!`

}


console.log(giveCompliment('hanbing'))