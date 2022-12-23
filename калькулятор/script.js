'use strict';

// 1) Калькулятор
const sum = document.getElementById('sum');
const mult = document.getElementById('mult');

const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputRes = document.getElementById('res');


const calculator = {
    res: 1,

    sum: function(a, b) {
      return a + b;
    },

    mult: function(a, b) {
      for(a; a <= b; a++) {
        this.res *= a;
      }
      return this.res;
    },

    show: function(result) {
        inputRes.value = result;
        this.res = 1;
    }
};


sum.addEventListener('click', () => {
    calculator.show( calculator.sum(+inputA.value, +inputB.value) );
});

mult.addEventListener('click', () => {
    calculator.show( calculator.mult(+inputA.value, +inputB.value) );
});
/////////////////////////////////////////////////////////////////////////////////////////////