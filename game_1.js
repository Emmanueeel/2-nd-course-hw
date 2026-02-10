// Игра 1 "Угадай число"

document.getElementById('playGame-1').addEventListener('click',
    function guessNumber() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        alert('Угадай число от 1 до 100.');

        while (true) {
            let guessInput = prompt('Введи свой вариант:');

            if (guessInput === null) {
                alert('Игра окончена');
                return;
            }

            let guess = Number(guessInput);
            attempts++;



            if (guess === randomNumber) {
                alert(`Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток!`);
                break;
            } else if (guess < randomNumber) {
                alert('Загаданное число больше. Попробуй еще!');
            } else {
                alert('Загаданное число меньше. Попробуй еще!');
            }
        }


    }

);


