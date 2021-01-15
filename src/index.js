//**** Score Board ****
//Board Name
const boardTitle = document.getElementById('h3')
const boardsURL = 'http://localhost:3000/boards'

//Player Name & Score
const playersURL = 'http://localhost:3000/players'
const playerForm = document.getElementById('player-form')
const playerInput = document.getElementById('player-input')
const playerName = document.getElementById('player-name')

const scoreURL = 'http://localhost:3000/scores'

// const scoreTitle = document.getElementById('result')
// scoreTitle.style.display = "none"
// const scoreTitles = scoreTitle.style.display = "visible"
// function visible(){
//     scoreTitles;
// }
// boardForm.addEventListener("click", visible)

playerForm.addEventListener("submit", Player.submitPlayer)

Player.fetchPlayers()