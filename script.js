'use strict';

let price;

const isNumber = function(num) {
    let priceNum;
    
    if(num === null) {
        return false;
    }

    priceNum = num.trim();
    
    if(!isNaN( parseFloat(priceNum) ) && isFinite(priceNum)) {
        return price = priceNum;
    }
    
};


do {
    price = prompt('Введите число!');
} while(!isNumber(price));


if(isNumber(price)) {
    console.log(price, 'ok');
} else {
    console.log('Не число!!!');
}


