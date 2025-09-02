//Обозначение всех переменных, связанных с DOM
const topicOfTheme = document.getElementById("topic-of-qwiz");
const bottomSide = document.getElementById("bottom-side");
const qwizBox = document.getElementById("qwiz-box");
const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const question = document.getElementById("question");
const answersWrapper = document.getElementsByClassName("answers-wrapper");
const answer = document.getElementsByClassName("answer");
const inputAnswer = document.getElementById("input-answer");
const nextQuestion = document.getElementById("nextQuestion");
const resultOfAnswer = document.getElementById("resutlValidationAnswer");
const restartButton = document.getElementById("restartButton");

//Обозначение всех переменных, имеющих значение в создании логики
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
        question: "Когда призошло 'Бородинское Сражение'",
        answers: ["1821", "1812", "1719", "1802"],
        correctAnswer: 1
    }
]
const inputQuestions = [
    {
        question: "Как звали основателя Киевской Руси",
        correctAnswer: "Рюрик"
    },
    {
        question: "Какова фамилия главенствующего лицо партии 'Большевики'?",
        correctAnswer: "Ленин"
    },
    {
        question: "Имя и прозвище правителя Руси, который ",
        correctAnswer: "Ленин"
    }
]

let indexOfQuestion = 0;
let currentQuestion = questions[indexOfQuestion]; 
let indexOfInputQuestion = 0;
let currentInputQuestion = inputQuestions[indexOfInputQuestion];
let correctAnswers = 0;
let timerValue = 10;
let timerInterval;

//Отображение первого вопроса с вариантами ответа и начало викторины
startButton.addEventListener("click", () => {
    qwizBox.classList.remove("inputActive");
    bottomSide.classList.add("active");

    resultOfAnswer.innerHTML = ``;
    startTimer(changeQuestion);

    indexOfInputQuestion = 0;
    currentInputQuestion = inputQuestions[indexOfInputQuestion];
    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
});

//Логика выбора ответа и проверки правильности с перенаправлением на функцию смены вопроса
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
            changeQuestion();
        });
    });

//Логика отображения нового вопроса после валидации предыдущего
function changeQuestion(){
    indexOfQuestion++;
    timerValue = 10;
    if(indexOfQuestion >= questions.length){
        startQuestionsWithInput();
    }
    currentQuestion = questions[indexOfQuestion];
    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
}

//Функция перезапуска игры
restartButton.addEventListener("click", () => {
    resultOfAnswer.innerHTML = ``;

    indexOfInputQuestion = 0;
    currentInputQuestion = inputQuestions[indexOfInputQuestion];
    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;
    timerValue = 10;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < currentQuestion.answers.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
    qwizBox.classList.remove("inputActive");
});

//Начало отображения вопросов с ответом в видео поля ввода
function startQuestionsWithInput(){
    qwizBox.classList.add("inputActive");
    question.innerHTML = currentInputQuestion.question;
    startTimer(changeInputQuestion);
}

//Логика нажатия на кнопку для валидации и перенаправления на функцию смены вопроса
nextQuestion.addEventListener("click", () => {
    if(inputAnswer.value.toLowerCase() === currentInputQuestion.correctAnswer.toLowerCase()){
        resultOfAnswer.innerHTML = "Правильно!";
        resultOfAnswer.style.color = "green";
        correctAnswers++;
    } else{
        resultOfAnswer.innerHTML = "Неправильно!";
        resultOfAnswer.style.color = "red";
    }
    changeInputQuestion();
});

function changeInputQuestion(){
    indexOfInputQuestion++;
    timerValue = 10;
    if(indexOfInputQuestion === inputQuestions.length){
        resultOfAnswer.style.color = "grey";
        bottomSide.classList.remove("active");
        resultOfAnswer.innerHTML = `Ты ответил правильно на ${correctAnswers}/${questions.length + inputQuestions.length}`;
        clearInterval(timerInterval)
    }
    currentInputQuestion = inputQuestions[indexOfInputQuestion];
    inputAnswer.value = "";
    question.innerHTML = currentInputQuestion.question;
}

function startTimer(e){
    clearInterval(timerInterval);
    timerValue = 10;
    timerInterval = setInterval(() => {
        timer.innerHTML = timerValue;
        timerValue--;
        if(timerValue < 0){
            resultOfAnswer.innerHTML = "Время вышло!";
            resultOfAnswer.style.color = "red";
            e();
        }
    }, 1000);
}