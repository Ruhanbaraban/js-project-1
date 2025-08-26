const container = document.getElementsByClassName("container");
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
        question: "В каком году было крещение Руси",
        answers: ["862 год", "1256 год", "301 год", "988 год"],
        correctAnswer: 4

    },
    {
        questionNumber: 1,
        question: "В каком году было крещение Руси",
        answers: ["862 год", "1256 год", "301 год", "988 год"],
        correctAnswer: 4
    }
];