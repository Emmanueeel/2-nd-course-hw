//Задание 1
/*
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

*/


//Задание 2
/*
function filterByStart(array, searchString) {
    const lowerSearch = searchString.toLowerCase();
    return array.filter(function(item) {
        return item.toLowerCase().startsWith(lowerSearch);
    });
}
const words = ['Hello', 'world', 'JavaScript', 'help', 'Heaven', 'goodbye'];
const result = filterByStart(words, 'he');
console.log(result);

*/

//Задание 3

/*

const number = 32.58884;

// Округление до меньшего целого (всегда вниз)
const floorNumber = Math.floor(number);
console.log('До меньшего целого (floor):', floorNumber);

// Округление до большего целого (всегда вверх)
const ceilNumber = Math.ceil(number);
console.log('До большего целого (ceil):', ceilNumber);

// Округление до ближайшего целого (по правилам математики)
const roundNumber = Math.round(number);
console.log('До ближайшего целого (round):', roundNumber);

*/

//Задание 4

/*

const min = Math.min(52, 53, 49, 77, 21, 32);
console.log('Минимальное значение:', min);

const max = Math.max(52, 53, 49, 77, 21, 32);
console.log('Максимальное значение:', max);

*/

//Задание 5

/*


function randomNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}

randomNumber();
randomNumber();
randomNumber();

*/

//Задание 6

/*

function generateRandomArray(n) {
    const length = Math.floor(n / 2);
    
    const result = [];
    
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (n + 1));
        result.push(randomNum);
    }
    
    return result;
}

console.log('Массив для числа 10:', generateRandomArray(10));
console.log('Массив для числа 8:', generateRandomArray(8));
console.log('Массив для числа 6:', generateRandomArray(6));

*/

//Задание 7
/*
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Случайное число от 1 до 10:', getRandomInRange(1, 10));
console.log('Случайное число от 5 до 15:', getRandomInRange(5, 15));
console.log('Случайное число от -10 до 10:', getRandomInRange(-10, 10));

*/
//Задание 8
/*
const currentDate = new Date();
console.log(currentDate);
*/

//Задание 9
/*
const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());
*/

//Задание 10
/*
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 
        'четверг', 'пятница', 'суббота'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${weekday}\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDate(now));
*/