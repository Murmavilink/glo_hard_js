'use strict';

// УСЛОЖНЕННОЕ ЗАДАНИЕ №1:

// Придумать способ сохранять в переменную ответ пользователя после проверки на число именно как число при любом вводе. (с пробелами и без в переменную заносилось именно число) На данный момент проверка isNumber пропустит такой вариант "   123   " и именно это значение попадет в переменную. Необходимо это исправить. Так же учитывайте что человек может нажать отмену и в проверку уйдет значение NULL

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
////////////////////////////////////////////////////////////////////////////


// УСЛОЖНЕННОЕ ЗАДАНИЕ №2:
// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)


const arr = ['6543', '21354', '4652', '75612', '4651', '9614', '456123'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i].startsWith(2) || arr[i].startsWith(4)) {
        console.log(arr[i]);
    }
    
    // if(arr[i].includes(2) || arr[i].includes(4)) {
    //     // console.log(arr[i]);
    //     console.log(arr[i].includes(2));
    // }
    
}