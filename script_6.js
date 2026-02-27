/*Задание 1

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    if (array[i] === 10) {
        break;
    }
}*/

/* Задание 2 

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
        console.log('Индекс числа 4:', i);
    }
}*/ 

/* еще вариант
const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log('Индекс числа 4:', index); */


/* Задание 3 
const array = [1, 3, 5, 10, 20];
const result = array.join(' ');
console.log(result);*/


/* Задание 4 

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    
    for (let j = 0; j < 3; j++) {
        row.push(1);  
    }
    matrix.push(row);
}

console.log(matrix); */


/* Задание 5 
const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);  */



/* Задание 6 
let array = [9, 8, 7, 'a', 6, 5];
array.sort();

array = array.filter(function(element) {
    return element !== 'a';
});
console.log(array);  */



/* Задание 7 

const array = [9, 8, 7, 6, 5];

const userGuess = prompt("Угадайте число от 1 до 10:");
const userNumber = Number(userGuess);

if (array.includes(userNumber)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}  */



/* Задание 8 

const str = 'abcdef';
const arr = str.split(''); 

arr.reverse(); 
const reversedStr = arr.join('');

console.log(reversedStr);  */


/* Задание 9 

const nestedArray = [[1, 2, 3], [4, 5, 6]];
const flatArray = [...nestedArray[0], ...nestedArray[1]];

console.log(flatArray);  */


/* Задание 10 

const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];
for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    console.log(`Сумма ${numbers[i]} и ${numbers[i + 1]} = ${sum}`);
} */


/* Задание 11 

function squareArray(numbers) {
    return numbers.map(function(num) {
        return num * num;
    });
}
const result = squareArray([2, 4, 6, 8]);
console.log(result);   */


/* Задание 12 

function getStringLengths(strings) {
    return strings.map(function(str) {
        return str.length;
    });
}
const result = getStringLengths(["apple", "banana", "kiwi", "orange"]);
console.log(result);  */



/* Задание 13 

function getNegativeNum(numbers) {
    return numbers.filter(function(num) {
        return num < 0;
    });
}
const result = getNegativeNum([1, -2, 3, -4, 5, -6, 0]);
console.log(result);   */


/* Задание 14
const originalArray = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11); 
    originalArray.push(randomNumber);
}

const evenNumbers = originalArray.filter(function(num) {
    return num % 2 === 0;
});

console.log('Исходный массив:', originalArray);
console.log('Четные числа:', evenNumbers);    */

/* Задание 15 

const numbers = [];

for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(randomNumber);
}
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
const average = sum / numbers.length;

console.log('Сгенерированный массив:', numbers);
console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average); */