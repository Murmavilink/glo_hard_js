// 'use strict';

const dateBlock = document.querySelector('.date');


const numWord = (value, words) => {
    value = Math.abs(value) % 100;

    const lastNum = value % 10;
    
    if(value >= 5 && value <= 20) return words[1];

    if(lastNum > 1 && lastNum < 5) return words[2];
    if(lastNum === 1 || lastNum === 21) return words[0];
    
    return words[1];
};


const updateTimer = () => {
    const date = new Date();
    const dayName = date.toLocaleString('ru', { weekday: 'long' });
    // const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря'];


    dateBlock.textContent = 
    `Сегодня ${dayName}, ${monthList[month]} ${year}, ${hours} 
    ${numWord(hours, ['час', 'часов', 'часа'])} 
    ${minutes} минут ${seconds} секунды`;


};

setInterval(updateTimer, 500);








// const date = new Date().toLocaleDateString();
// const dateTime = new Date().toLocaleTimeString()
// console.log(date, dateTime);
