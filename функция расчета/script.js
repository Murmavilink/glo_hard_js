'use strict';

function getResult(x,y){
  let result = x ** y ;

  result = result.toString().split('');

  const newResult = result.reduce((sum, res) => {
    return sum += +res;
  }, 0);

  return newResult;
}

console.log(getResult(4, 8));