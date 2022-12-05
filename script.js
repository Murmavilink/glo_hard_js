'use strict';

const weekBox = document.querySelector('.week');
weekBox.style.fontSize = 25 + 'px';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const todayDay = new Date();



const addStyle = (weekDay) => {
    weekDay.style.fontStyle = 'italic';
    weekDay.style.color = 'red';
};


week.forEach((item, index) => {
    const weekDay = document.createElement('div');

    weekDay.style.padding = '10px';

    if(todayDay.getDay() - 1 === index) {
        weekDay.style.fontWeight = 900;
        weekDay.style.fontSize = 40 + 'px';
    } 
    
    
    item === 'Суббота' || item === 'Воскресенье' ? addStyle(weekDay) : '';


    weekDay.textContent = item;

    weekBox.insertAdjacentElement('beforeend', weekDay);
});

