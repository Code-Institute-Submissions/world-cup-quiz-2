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

let questions = [
    {
        question: 'Which country won the 2022 World Cup?',
        option1: 'Brazil',
        option2: 'France',
        option3: 'Argentina',
        option4: 'Republic of Ireland',
        answer: 'Argentina',
    },
    {
        question: 'Who scored the most goals at this World Cup?',
        option1: 'Harry Kane',
        option2: 'Lionel Messi',
        option3: 'Cristiano Ronaldo',
        option4: 'Kylian Mbappé',
        answer: 'Kylian Mbappé',
    },
    {
        question: 'How many teams qualified to play at the World Cup?',
        option1: '24',
        option2: '40',
        option3: '32',
        option4: '56',
        answer: '32',
    },
    {
        question: 'How many matches were played in total at the World Cup?',
        option1: '108',
        option2: '72',
        option3: '64',
        option4: '48',
        answer: '64',
    },
    {
        question: 'What was the average goals per game?',
        option1: '3.15',
        option2: '2.6875',
        option3: '2',
        option4: '1.83',
        answer: '2.6875',
    },
    {
        question: 'What is my name?',
        option1: 'Harry',
        option2: 'Danny',
        option3: 'Sammy',
        option4: 'Charlie',
        answer: 'Danny',
    },
    {
        question: 'What is my name?',
        option1: 'Harry',
        option2: 'Danny',
        option3: 'Sammy',
        option4: 'Charlie',
        answer: 'Danny',
    },
    {
        question: 'What is my name?',
        option1: 'Harry',
        option2: 'Danny',
        option3: 'Sammy',
        option4: 'Charlie',
        answer: 'Danny',
    },
    {
        question: 'What is my name?',
        option1: 'Harry',
        option2: 'Danny',
        option3: 'Sammy',
        option4: 'Charlie',
        answer: 'Danny',
    },
    {
        question: 'What is my name?',
        option1: 'Harry',
        option2: 'Danny',
        option3: 'Sammy',
        option4: 'Charlie',
        answer: 'Danny',
    },
    
]

const POINT_PER_QUESTION = 1
const TOTAL_QUESTIONS = 10

