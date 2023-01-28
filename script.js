'use strict';


const sliceStr = (str, num) => {

    if (!isNaN(str)) return 'не строка';

    const newStr = str.trim();

    return newStr.length > num ? newStr.substring(0, num) + '...' : newStr;

};

console.log( sliceStr('Hello my freinds and cat', 15) );
