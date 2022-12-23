'use strict';

const country = document.getElementById('country');
const city = document.getElementById('city');
const result = document.getElementById('res');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};


const addNewOptions = (value) => {
  city.style.display = 'inline';

  cityArr[value].forEach(item => {
    const option = document.createElement('option');
    option.textContent = item;
    
    city.append(option);
  });
};


const changeOptionCity = (name) => {
  city.addEventListener('change', () => {
    const cityName = city.options[city.selectedIndex].textContent;

    result.textContent = name + ' ' + cityName;
  });
};


country.addEventListener('change', () => {
  const countryName = country.options[country.selectedIndex].textContent;
  const countryValue= country.options[country.selectedIndex].value;

  city.innerHTML = '';
  result.innerHTML = '';

  addNewOptions(countryValue);
  changeOptionCity(countryName);
});