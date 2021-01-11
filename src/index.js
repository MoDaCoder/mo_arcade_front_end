//**** Score Board ****
//Board Name
const boardNameForm = document.getElementById("board-name-form")
const boardPlayer = document.getElementById("board-player")
const boardNameInput = document.getElementById("board-name-Input")
const boardTitle = document.getElementById("h3")
const boardsURL = 'http://localhost:3000/boards'
//Player Name & Score
const scoreTitle = document.getElementById('score-title')
// scoreTitle.style.display = "none"


const playersURL = 'http://localhost:3000/players'
const playerForm = document.getElementById('player-form')
const playerInput = document.getElementById('player-input')
const playerName = document.getElementById('player-name')

playerForm.addEventListener("submit", Player.submitPlayer)
playerForm.addEventListener("submit", Board.fetchBoards)


Board.fetchBoards()
Player.fetchPlayers()