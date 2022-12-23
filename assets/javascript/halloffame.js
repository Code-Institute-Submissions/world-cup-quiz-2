// This code below was adapted from the Tutorial created by 'Brian Design' on Youtube, https://www.youtube.com/watch?v=f4fB9Xg2JEY


const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getitem('highScores')) || [];

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');