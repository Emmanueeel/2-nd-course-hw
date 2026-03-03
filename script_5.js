/*Задание 1
function getMinNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(getMinNumber(34, 10));*/

/*Задание 2

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOrOdd(10));*/

/*Задание 3

function printSquare(num) {
    console.log(`Квадрат числа ${num} равен ${num ** 2}`);
}

printSquare(8);

function printSquare(num) {
    return (`Квадрат числа ${num} равен ${num ** 2}`);
}

const result = printSquare(45);
console.log(result);*/   

/*Задание 4

function askAge() {
    
    let age = prompt("Сколько вам лет?");
    
    age = Number(age);
    
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Пожалуйста, введите число');
    }
}

askAge();*/


/*Задание 5

function safeMultiply(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }

    return numA * numB;

}

console.log(safeMultiply(2, '3')); 
console.log(safeMultiply(null, 10));    
console.log(safeMultiply(undefined, 10)); 
console.log(safeMultiply([], 10));      
console.log(safeMultiply([1, 2], 10));
*/

/*Задание 6

function calcCube() {
    const userInput = prompt("Введите число:");
    const number = Number(userInput);

    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }

    const cube = number ** 3;
    return `${number} в кубе равняется ${cube}`;
}

const result = calcCube();
alert(result);*/

/*Задание 7

// circle1
const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

// circle2
const circle2 = {
    radius: 10,
    
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("circle1:");
console.log("Радиус:", circle1.radius);
console.log("Площадь:", circle1.getArea());
console.log("Периметр:", circle1.getPerimeter());

console.log("\ncircle2:");
console.log("Радиус:", circle2.radius);
console.log("Площадь:", circle2.getArea());
console.log("Периметр:", circle2.getPerimeter());*/


