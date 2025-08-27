const container = document.getElementById("container");
const header = document.getElementById("header");
const questionsBox = document.getElementById("questions-box");
const question = document.getElementById("question");
const answersWrapper = document.getElementById("answers-wrapper")
const answer = document.getElementsByClassName("answer");
const startButton = document.getElementById("startGame");
const restartButton = document.getElementById("restartGame");
const questions = [
    {
        questionNumber: 1,
        question: "В каком году было крещение Руси?",
        answers: ["862 год", "1256 год", "301 год", "988 год"],
        correctAnswer: 4

    },
    {
        questionNumber: 2,
        question: "В каком году началась вторая мировая война?",
        answers: ["1812 год", "1914 год", "1939 год", "1941 год"],
        correctAnswer: 3
    },
    {
        questionNumber: 3,
        question: "В каком году распался СССР?",
        answers: ["1991 год", "1992 год", "1990 год", "1993 год"],
        correctAnswer: 1
    },
    {
        questionNumber: 4,
        question: "в каком году была основана крепость 'Владикавказ'?",
        answers: ["1774 год", "1809 год", "1735 год", "1784 год"],
        correctAnswer: 4
    }
];
let correctAnswersResult = 0;
// Фунция, отвечающая за старт игры
let indexOfQuestion = 0;
let currentQuestion = questions[indexOfQuestion];
startButton.addEventListener("click", (e) => {
    container.classList.add("active")
    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < 4; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
    Array.from(answer).forEach((element, index) => {
    element.addEventListener("click", () => {
        if(index + 1 === currentQuestion.correctAnswer){
            alert("Правильно!");
            correctAnswersResult++
           } else{
            alert("Неправильно!")
        }
        changeQuestion()
    });   
});
});

function changeQuestion(){
        indexOfQuestion++
    if(indexOfQuestion > 3){
        container.classList.remove("active");
        alert(`Ты ответил на ${correctAnswersResult}/${questions.length}`)
        return;
    }
    currentQuestion = questions[indexOfQuestion];
    question.innerHTML = currentQuestion.question;
    for(let i = 0; i < 4; i++){
        answer[i].innerHTML = currentQuestion.answers[i];
    }
}

