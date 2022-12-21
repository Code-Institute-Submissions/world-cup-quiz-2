const question = document.querySelector('#question');
const answerOptions = Array.from(document.querySelector('.answer-option-text'));
const statusText = document.querySelector('#statusText');
const pointsText = document.querySelector('#question')
const statusBarFull = document.querySelector('#statusBarFull');

let currentQuestion ={}
let allowAnswers = true
let points = 0
let questionCount = 0
let remainingQuestions = []


