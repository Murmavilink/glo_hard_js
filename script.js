'use strict';


const num = 266219;
const numArray = num.toString().split('');

const funcNum = function() {
    let result = 1;

    for(let i = 0; i < numArray.length; i++) {
        result *= numArray[i];
    }
    
    return result;
};

console.log( funcNum() );

// const resultPow = funcNum() ** 3;
// console.log( funcNum() ** 3 );
// console.log( resultPow.toString().substring(0, 2) );

const result = numArray.reduce(function (sum, number) {
    return sum *= number;
}, 1);

console.log(result);


