// Игра 1 "Угадай число"

document.getElementById('playGame-1').addEventListener('click',
    function guessNumber() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        alert('🎮 Угадай число от 1 до 100.');

        while (true) {
            let guessInput = prompt('Введи свой вариант:');

            if (guessInput === null) {
                alert('Игра окончена');
                return;
            }

            let guess = Number(guessInput);
            attempts++;

            if (guess === randomNumber) {
                alert(`🎮 Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток!`);
                break;
            } else if (guess < randomNumber) {
                alert('Загаданное число больше. Попробуй еще!');
            } else {
                alert('Загаданное число меньше. Попробуй еще!');
            }
        }


    }

);

// Игра 2 "Простая арифметика"

document.getElementById('playGame-2').addEventListener('click',
    function startMathQuiz() {
        let score = 0;
        let keepPlaying = true;
        
        alert('🎮 Добро пожаловать в игру "Простая арифметика"!\nРешайте примеры и набирайте очки. При первой ошибке игра завершится.');

        while (keepPlaying) {
            const firstValue = Math.floor(Math.random() * 10) + 1;
            const secondValue = Math.floor(Math.random() * 10) + 1;
            const mathSigns = ['+', '-', '*', '/'];
            const selectedSign = mathSigns[Math.floor(Math.random() * mathSigns.length)];
            let correctResult = 0;
            let playerInput = '';
            let validTask = true;
            let expressionText = '';

            switch (selectedSign) {
                case '+':
                    expressionText = `${firstValue} + ${secondValue}`;
                    playerInput = prompt(`${expressionText} = ?`);
                    correctResult = firstValue + secondValue;
                    break;
                    
                case '-':
                    expressionText = `${Math.max(firstValue, secondValue)} - ${Math.min(firstValue, secondValue)}`;
                    playerInput = prompt(`${expressionText} = ?`);
                    correctResult = Math.max(firstValue, secondValue) - Math.min(firstValue, secondValue);
                    break;
                    
                case '*':
                    expressionText = `${firstValue} * ${secondValue}`;
                    playerInput = prompt(`${expressionText} = ?`);
                    correctResult = firstValue * secondValue;
                    break;
                    
                case '/':
                    // Проверяем, что результатом деления будет целое число
                    const largerNum = Math.max(firstValue, secondValue);
                    const smallerNum = Math.min(firstValue, secondValue);
                    
                    if (largerNum % smallerNum !== 0) {
                        validTask = false;
                        break;
                    }
                    
                    expressionText = `${largerNum} / ${smallerNum}`;
                    playerInput = prompt(`${expressionText} = ?`);
                    correctResult = largerNum / smallerNum;
                    break;
            }

            // Если задача невалидна (деление с остатком), пропускаем ход
            if (!validTask) {
                continue;
            }

            // Если пользователь нажал "Отмена"
            if (playerInput === null) {
                const wantToQuit = confirm('Вы хотите завершить игру?');
                if (wantToQuit) {
                    keepPlaying = false;
                    continue;
                } else {
                    continue; // Продолжаем игру с новым примером
                }
            }

            // Проверяем, что введено число
            if (playerInput.trim() === '') {
                alert('Пожалуйста, введите число.');
                continue;
            }

            const numericAnswer = parseFloat(playerInput);
            
            // Проверяем на NaN
            if (isNaN(numericAnswer)) {
                alert('Ошибка: введите корректное число.');
                continue;
            }

            const answerIsRight = numericAnswer === correctResult;

            if (answerIsRight) {
                score++;
                alert(`Правильно! ${expressionText} = ${correctResult}`);
            } else {
                keepPlaying = false;
                alert(`Неверно! Правильный ответ: ${correctResult}\nВы набрали правильных ответов: ${score}`);
            }
        }

        alert(`🎮 Игра окончена! Правильных ответов: ${score}`);
    }
);