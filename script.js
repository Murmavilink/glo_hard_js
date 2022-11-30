'use strict';


const strHandler = (arg) => {

    if(typeof arg === 'string') {
        let str = arg.trim();

        return str.length > 15 ? str = str.substring(0, 15) + '...' : str;
 
    } else {
        console.log('Не строка!');
    }

};

console.log( strHandler('Hello my freinds and cat') );