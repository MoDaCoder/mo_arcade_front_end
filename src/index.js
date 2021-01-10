//**** Score Board ****
//Board Name
const boardNameForm = document.getElementById("board-name-form")
const boardPlayer = document.getElementById("board-player")
const boardNameInput = document.getElementById("board-name-Input")
const boardTitle = document.getElementById("h3")
const boardsURL = 'http://localhost:3000/boards'
//Player Name & Score
const scoreTitle = document.getElementById('score-title')

const playersURL = 'http://localhost:3000/players'
const playerForm = document.getElementById('player-form')
const submitPlayer = document.getElementById('submit-name')
const playerName = document.getElementById('player-name')
// scoreTitle.style.display = "none"

// submitPlayer.addEventListener("click", Board.fetchBoards)
playerForm.addEventListener("submit", Board.fetchBoards)
// playerForm.addEventListener("submit", Player.renderPlayer)


//Can we declare the submitName inside a class to make it more explicit? 
//So if we declare it in the constructor in player we'd be able to call it in
//Board class as 
//CAN WE COMBINE DOMcontentLoaded with submitName event listener??
//WHAT IF DO A ON CLICK DOM CONTENT LOADED??

Board.fetchBoards()
Player.fetchPlayers()