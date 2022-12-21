const question = document.querySelector('#question');
const answerOptions = Array.from(document.querySelector('.answer-option-text'));
const statusText = document.querySelector('#statusText');
const pointsText = document.querySelector('#points')
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
        option2: '2.69',
        option3: '2',
        option4: '1.83',
        answer: '2.6875',
    },
    {
        question: 'How many goals in total were scored at the World Cup?',
        option1: '128',
        option2: '203',
        option3: '172',
        option4: '85',
        answer: '172',
    },
    {
        question: 'At 40 years, 63 days, Who was the oldest player at the World Cup?',
        option1: 'Alfredo Talavera (Mexico)',
        option2: 'Cristiano Ronaldo (Portugal)',
        option3: 'Harry Kane (England)',
        option4: 'Paul McGrath (Rep. of Ireland)',
        answer: 'Alfredo Talavera (Mexico)',
    },
    {
        question: 'At 18 years, 3 days, who was the youngest player at the World Cup?',
        option1: 'Youssoufa Moukoko (Germany)',
        option2: 'Kylian Mbappé (France)',
        option3: 'Robbie Keane (Rep. of Ireland)',
        option4: 'Mohammed Muntari (Qatar)',
        answer: 'Youssoufa Moukoko (Germany)',
    },
    {
        question: 'Which team claimed 3rd place at the World Cup?',
        option1: 'Croatia',
        option2: 'Germany',
        option3: 'Brazil',
        option4: 'France',
        answer: 'Croatia',
    },
    {
        question: 'Which player received the most Man of the Match awards?',
        option1: 'Kylian Mbappé (France)',
        option2: 'Lionel Messi (Argentina)',
        option3: 'Cristiano Ronaldo (Portugal)',
        option4: 'Thiago Silva (Brazil)',
        answer: 'Lionel Messi (Argentina)',
    },
    
]

const POINT_PER_QUESTION = 1
const TOTAL_QUESTIONS = 10
const MAX_SCORE = 10

beginQuiz = () => {
    points = 0;
    questionCount = 0;
    remainingQuestions = [...questions];
    displayQuestion()
}

displayQuestion = () => {
    if(remainingQuestions.length === 0 || questionCount > TOTAL_QUESTIONS) {
        localSave.setItems('lastScore', points)
        return window.location.assign('./quizcomplete.html')
    }

    questionCount++
    statusText.innerText = `Question ${questionCount} of ${TOTAL_QUESTIONS}`
    statusBarFull.style.width = `${(questionCount/TOTAL_QUESTIONS) * 100}%`

    const indexQuestions = Math.floor(Math.random() * remainingQuestions.length)
    currentQuestion = remainingQuestions(indexQuestions)
    question.innerText = currentQuestion.question

    answerOptions.forEach(option =>)
}


