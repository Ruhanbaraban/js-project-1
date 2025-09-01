//обозначение всех переменных, связанных с DOM
const topicOfTheme = document.getElementById("topic-of-qwiz");
const bottomSide = document.getElementById("bottom-side");
const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const question = document.getElementById("question");
const answersWrapper = document.getElementsByClassName("answers-wrapper");
const answer = document.getElementsByClassName("answer");
const resultOfAnswer = document.getElementById("resutlValidationAnswer");
const restartButton = document.getElementById("restartButton");

//обозначение всех переменных, имеющих значение в создании логики
const questions = [
    {
        question: "В каком году произошла вторая мировая война?",
        answers: ["1941", "1914", "1939", "1969"],
        correctAnswer: 2
    },
    {
        question: "В каком году произошло крещение Руси?",
        answers: ["962", "618", "1102", "988"],
        correctAnswer: 3
    },
    {
        question: "В каком году к России присоеденилась Северная Осетия?",
        answers: ["1774", "1784", "1798", "1801"],
        correctAnswer: 0
    },
    {
        question: "В каком году в космос впервые был отправлен первый человек?",
        answers: ["1961", "1969", "1973", "1949"],
        correctAnswer: 0
    },
    {
        question: "Когда призошла 'Бородинское Сражение'",
        answers: ["1821", "1812", "1719", "1802"],
        correctAnswer: 1
    }
]

let indexOfQuestion = 0;
let currentQuestion = questions[indexOfQuestion]; 
let correctAnswers = 0;
let timerValue = 10;
let timerInterval = null;

//отображение первого вопроса с вариантами ответа и начало викторины
startButton.addEventListener("click", () => {
    bottomSide.classList.add("active");

    resultOfAnswer.innerHTML = ``;
    clearInterval(timerInterval)
    startTimer()

    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
});

//логика выбора ответа и проверки правильности с перенаправлением на функцию смены вопроса
Array.from(answer).forEach((element, index) => {
        element.addEventListener("click", () => {
            if(index === currentQuestion.correctAnswer){
                resultOfAnswer.style.color = "green";
                resultOfAnswer.innerHTML = "Правильно!"; 
                correctAnswers++;
            } else {
                resultOfAnswer.style.color = "red";
                resultOfAnswer.innerHTML = "Неправильно!";
            }
            timerValue = 10;
            changeQuestion();
        });
    });

//логика отображения нового вопроса после валидации предыдущего
function changeQuestion(){
    indexOfQuestion++;
    if(indexOfQuestion >= questions.length){
        bottomSide.classList.remove("active");
        resultOfAnswer.style.color = "grey";
        resultOfAnswer.innerHTML = `Ты ответил правильно на ${correctAnswers}/${questions.length}`;
    }
    currentQuestion = questions[indexOfQuestion];
    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
}

//функция перезапуска игры
restartButton.addEventListener("click", () => {
    resultOfAnswer.innerHTML = ``;

    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;
    timerValue = 10;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
});

//функция, запускающая таймер
function startTimer(){
    timerInterval = setInterval(() => {
        timer.innerHTML = timerValue;
        timerValue--
        if(timerValue < 0){
            resultOfAnswer.innerHTML = "Время вышло"
            resultOfAnswer.style.color = "red";
            timerValue = 10;
            changeQuestion()
        }
    }, 1000);
}