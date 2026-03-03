//Задание 1
let password = 'пароль';

let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 50;
let e = 12;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
let a ='2';
let b = '3';

alert(Number(a) + Number (b));

let monthNumbtr = 13;

switch (monthNumbtr) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Некорректный номер месяца. Введите число от 1 до 12.');
}

/*Дополнительные задания
//Задание 1
let userInput = prompt('Пожалуйста, введите любое число');
let number = Number(userInput);

if (isNaN(number)) {
    alert('Ошибка: Введено не число!');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}*/