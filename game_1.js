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

// Игра 3 "Переверни текст"

document.getElementById('playGame-3').addEventListener('click', function() {
    let userText = prompt('🎮 Введите слово или текст');
    
    if (userText === null) {
        alert('Вы отменили ввод текста.');
        return;
    }
    
    if (userText.trim() === '') {
        alert('Вы не ввели текст. Попробуйте снова.');
        return;
    }
    
    const reversedText = userText.split('').reverse().join('');
    alert(`🎮 Перевернутый текст: ${reversedText}`);
});

// Игра 4 «Викторина»
document.getElementById('playGame-5').addEventListener('click', function() {
    
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let totalCorrect = 0;
    
    alert("🎮 Добро пожаловать в викторину! Вам будет предложено 3 вопроса. Удачи!");

    for (let itemIndex = 0; itemIndex < quiz.length; itemIndex++) {
        
        const currentItem = quiz[itemIndex];
        
        let messageForUser = `🎮 ВОПРОС № ${itemIndex + 1}`;
        messageForUser += `${currentItem.question}\n\n`;
        messageForUser += "Варианты ответа:\n";
        
        for (let opt = 0; opt < currentItem.options.length; opt++) {
            messageForUser += `${currentItem.options[opt]}\n`;
        }
        
        const playerResponse = prompt(messageForUser);
        
        // Обработка случая, когда пользователь нажал "Отмена"
        if (playerResponse === null) {
            const wantExit = confirm("🎮 Вы действительно хотите прервать викторину?");
            if (wantExit) {
                alert("🎮 Жаль, что вы уходите. Возвращайтесь в другой раз!");
                return;
            } else {
                itemIndex--;
                continue;
            }
        }

        const answerAsNumber = Number(playerResponse);
        
        if (!Number.isInteger(answerAsNumber) || answerAsNumber < 1 || answerAsNumber > currentItem.options.length) {
            alert(` Ошибка! Нужно ввести число от 1 до ${currentItem.options.length}. Попробуйте еще раз.`);
            itemIndex--; 
            continue;
        }

        if (answerAsNumber === currentItem.correctAnswer) {
            totalCorrect++;
            alert(" Абсолютно верно! +1 балл");
        } else {
            const correctText = currentItem.options[currentItem.correctAnswer - 1];
            alert(` К сожалению, неверно.\nПравильный ответ: ${correctText}`);
        }
    }

    const totalQuestions = quiz.length;
    const percentResult = Math.round((totalCorrect / totalQuestions) * 100);
    
    let finalResult = "\n🎮 ВИКТОРИНА ЗАВЕРШЕНА\n";
    finalResult += ` Правильных ответов: ${totalCorrect}\n`;

    alert(finalResult);
});