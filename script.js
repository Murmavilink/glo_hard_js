'use strict';

const lang = prompt('Ввидите язык!').toLowerCase();



if(lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if(lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('not');
}

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Непредвиденное значение!');
}

let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);

const langArray = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]);


const namePerson = 'Александр';

console.log( (namePerson === 'Артем') ? 'Директор' : (namePerson === 'Александр') ? 'Преподаватель' : 'Студент' );

// let namePerson = prompt('Ввдите ваше имя *');
// let position;
//  true == Boolean( ((namePerson == 'Артем' ? position = 'Директор' : 0 ) || (namePerson == 'Александр' ? position = 'Преподаватель' : 0)) ? console.log(position) : console.log('Студент'));

