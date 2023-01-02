'use strict';


const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

const airplane = document.querySelector('.airplane');
const santa = document.querySelector('.man');

let idInterval;
let count = 0;

const flyAnimate = () => {
    count++;

    idInterval = requestAnimationFrame(flyAnimate);
    
    if(count < 200) {
        santa.style.top = count + 'px';
        airplane.style.left = count * 3 + 'px';
    } else if(count < 400) {
        airplane.style.left = count * 3 + 'px';   
    } else {
        cancelAnimationFrame(idInterval);
    }
};


start.addEventListener('click', () => {
    idInterval = requestAnimationFrame(flyAnimate);
    addNoneBlock(start, reset);
});
 

reset.addEventListener('click', () => {   
    cancelAnimationFrame(idInterval);
    count = 0;
    santa.style.top = count;
    airplane.style.left = count;

    addNoneBlock(reset, start);
});
 



const addNoneBlock = (btn1, btn2) => {
    btn1.style.display = 'none';
    btn2.style.display = 'block';
};
