//**** Score Board ****
//Board Name
const boardForm = document.getElementById('board-form')
const boardPlayer = document.getElementById('board-player')
const boardNameInput = document.getElementById('board-name-Input')
const boardTitle = document.getElementById('h3')
const boardsURL = 'http://localhost:3000/boards'

//Player Name & Score
const playersURL = 'http://localhost:3000/players'
const playerForm = document.getElementById('player-form')
const playerInput = document.getElementById('player-input')
const playerName = document.getElementById('player-name')

const scoreURL = 'http://localhost:3000/scores'
const scoreForm = document.getElementById('score-form')
const scoreInput = document.getElementById('score-input')
const scoreNumber = document.getElementById('player-score')

// const scoreTitle = document.getElementById('result')
// scoreTitle.style.display = "none"
// const scoreTitles = scoreTitle.style.display = "visible"

playerForm.addEventListener("submit", Player.submitPlayer)
boardForm.addEventListener("submit", Board.fetchBoards)

scoreForm.addEventListener("submit", Score.renderScore)
// scoreForm.addEventListener("submit", Score.allowOrNot)

Player.fetchPlayers()