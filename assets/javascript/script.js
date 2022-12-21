const question = document.querySelector('#question');
const answerOptions = Array.from(document.querySelectorAll('.answer-option-text'));
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
        option4: 'Ireland',
        answer: 3,
    },
    {
        question: 'Who scored the most goals at this World Cup?',
        option1: 'Harry Kane',
        option2: 'Lionel Messi',
        option3: 'Cristiano Ronaldo',
        option4: 'Kylian Mbappé',
        answer: 4,
    },
    {
        question: 'How many teams qualified to play at the World Cup?',
        option1: '24',
        option2: '40',
        option3: '32',
        option4: '56',
        answer: 3,
    },
    {
        question: 'How many matches were played in total at the World Cup?',
        option1: '108',
        option2: '72',
        option3: '64',
        option4: '48',
        answer: 3,
    },
    {
        question: 'What was the average goals per game?',
        option1: '3.15',
        option2: '2.6875',
        option3: '2',
        option4: '1.83',
        answer: 2,
    },
    {
        question: 'How many goals in total were scored at the World Cup?',
        option1: '128',
        option2: '203',
        option3: '172',
        option4: '85',
        answer: 3,
    },
    {
        question: 'At 40 years, 63 days, Who was the oldest player at the World Cup?',
        option1: 'Alfredo Talavera',
        option2: 'Cristiano Ronaldo',
        option3: 'Harry Kane',
        option4: 'Paul McGrath',
        answer: 1,
    },
    {
        question: 'At 18 years, 3 days, who was the youngest player at the World Cup?',
        option1: 'Youssoufa Moukoko',
        option2: 'Kylian Mbappé',
        option3: 'Robbie Keane',
        option4: 'Mohammed Muntari',
        answer: 1,
    },
    {
        question: 'Which country claimed 3rd place at the World Cup?',
        option1: 'Croatia',
        option2: 'Germany',
        option3: 'Brazil',
        option4: 'France',
        answer: 1,
    },
    {
        question: 'Which player received the most Man of the Match awards?',
        option1: 'Kylian Mbappé',
        option2: 'Lionel Messi',
        option3: 'Cristiano Ronaldo',
        option4: 'Thiago Silva',
        answer: 2,
    },
    
]

const POINT_PER_QUESTION = 10
const TOTAL_QUESTIONS = 10
const MAX_SCORE = 100

beginQuiz = () => {
    points = 0;
    questionCount = 0;
    remainingQuestions = [...questions];
    displayQuestion()
}

displayQuestion = () => {
    if(remainingQuestions.length === 0 || questionCount > TOTAL_QUESTIONS) {
        localStorage.setItems('lastScore', points)

        return window.location.assign('/quizcomplete.html')
    }

    questionCount++
    statusText.innerText = `Question ${questionCount} of ${TOTAL_QUESTIONS}`
    statusBarFull.style.width = `${(questionCount/TOTAL_QUESTIONS) * 100}%`

    const indexQuestions = Math.floor(Math.random() * remainingQuestions.length)
    currentQuestion = remainingQuestions[indexQuestions]
    question.innerText = currentQuestion.question

    answerOptions.forEach(option => {
        const number = option.dataset['number']
        option.innerText = currentQuestion['option' + number]
    })

    remainingQuestions.splice(indexQuestions, 1)

    allowAnswers = true
}

answerOptions.forEach(option => {
    option.addEventListener('click', e => {
        if(!allowAnswers) return

        allowAnswers = false
        const optionSelected = e.target
        const answerSelected = optionSelected.dataset['number']

        let optionClass = answerSelected == currentQuestion.answer ? 'right-answer' : 'wrong-answer'

        if (optionClass === 'right-answer') {
            incrementPoints(POINT_PER_QUESTION)
        }

        optionSelected.parentElement.classList.add(optionClass)

        setTimeout(() => {
            optionSelected.parentElement.classList.remove(optionClass)
            displayQuestion()

        }, 1000)


    })
})

incrementPoints = num => {
    points +=num
    pointsText.innerText = points
}

beginQuiz()