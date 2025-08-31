//обозначение всех переменных, связанных с DOM
const topicOfTheme = document.getElementById("topic-of-qwiz");
const bottomSide = document.getElementById("bottom-side");
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
        answers: ["1941", "1914", "1939", "1961"],
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
    }
]

let indexOfQuestion = 0;
let currentQuestion = questions[indexOfQuestion]; 
let correctAnswers = 0;

startButton.addEventListener("click", () => {
    bottomSide.classList.add("active");

    resultOfAnswer.innerHTML = ``;

    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < questions.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
});

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

function changeQuestion(){
    indexOfQuestion++;
    if(indexOfQuestion > 3){
        bottomSide.classList.remove("active");
        resultOfAnswer.style.color = "grey";
        resultOfAnswer.innerHTML = `Ты ответил правильно на ${correctAnswers}/${questions.length}`;
    }
    currentQuestion = questions[indexOfQuestion];
    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < questions.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
}

restartButton.addEventListener("click", () => {
    resultOfAnswer.innerHTML = ``;

    indexOfQuestion = 0;
    currentQuestion = questions[indexOfQuestion]; 
    correctAnswers = 0;

    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < questions.length; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
});