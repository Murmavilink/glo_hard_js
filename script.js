// 'use strict';
// const Data = new Date();
// const Year = Data.getFullYear();
// const Month = Data.getMonth();
// const Day = Data.getDate();

// let fMonth;


// // Преобразуем месяца
// switch (Month)
// {
//   case 0: fMonth="января"; break;
//   case 1: fMonth="февраля"; break;
//   case 2: fMonth="марта"; break;
//   case 3: fMonth="апреля"; break;
//   case 4: fMonth="мае"; break;
//   case 5: fMonth="июня"; break;
//   case 6: fMonth="июля"; break;
//   case 7: fMonth="августа"; break;
//   case 8: fMonth="сентября"; break;
//   case 9: fMonth="октября"; break;
//   case 10: fMonth="ноября"; break;
//   case 11: fMonth="декабря"; break;
// }

// // Вывод
// console.log("Сегодня " + Day + " " + fMonth + " " + Year + " года");

const dateBlock = document.querySelector('.date');


const numWord = (value, words) => {
    value = Math.abs(value) % 100;
 
    
    const lastNum = value % 10;
    // console.log(lastNum);
    
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
    // const hours = date.getHours();
    const hours = 2;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const monthList = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        // console.log(dayName);
        // console.log(month);
        // console.log(year);
        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
        // console.log(monthList);
    // console.log(day);

    dateBlock.textContent = 
    `Сегодня ${dayName}, ${monthList[month]} ${year}, ${hours} 
    ${numWord(hours, ['час', 'часов', 'часа'])} 
    ${minutes} минут ${seconds} секунды`;


};

setInterval(updateTimer, 500);








// const date = new Date().toLocaleDateString();
// const dateTime = new Date().toLocaleTimeString()
// console.log(date, dateTime);
