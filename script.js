'use strict';


const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    if(input.value) {
        const li = document.createElement('li');
    
        li.textContent = input.value;
        ul.append(li);
        input.value = '';
    }


});