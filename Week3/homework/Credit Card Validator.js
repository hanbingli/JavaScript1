'use strict';

function checkCardNumber (input){

//initialization of variables that may get into use
    let numString = input.toString();
    let sum = 0;
    let equality = 0;
      
    
//to get the sum of the numbers before hand
    for (let i in numString){
        
        let numSplit = parseFloat(numString[i]);
        sum = sum + numSplit;

    };
//can't figure out the regex online, so I just have to stick to the stupid method of comparing digits one by one, luckily this time I just have to make sure all of them aren' the same. will be in big trouble if I don't get regex next time
    for (let c = 0; c < numString.length; c++){

        if(parseFloat(numString[c])=== parseFloat(numString[c+1])){
            equality ++;
        }   
    
    };

    if (parseFloat(input).toString() == "NaN") { 
//to make sure all of them are numberss
        return 'Invalid input(not a number), please enter a valid credit card number';


    }else if(input.toString().length !== 16){
//to check if it is 16 digit
        return 'Invalid input(length problem), please enter a valid credit card number';


    }else if(equality >= 15){
//at least two different digits represented (all of the digits cannot be the same)
    return 'Invalid input(same number), please enter a valid credit card number';


    }else if(input.toString().split('').pop() % 2 === 1){
//The final digit must be even
        return 'Invalid input(odd last digit), please enter a valid credit card number';


    }else if(sum <= 16){
//The sum of all the digits must be greater than 16
        return 'Invalid input(sum), please enter a valid credit card number';

        
    }else{
        return 'Valid'
    }

}


console.log(checkCardNumber('9999777788880000'));
console.log(checkCardNumber('6666666666661666'));
console.log(checkCardNumber('a92332119c011112'));
console.log(checkCardNumber('4444444444444444'));
console.log(checkCardNumber('0000000000000010'));
console.log(checkCardNumber('6666666666666661'));

