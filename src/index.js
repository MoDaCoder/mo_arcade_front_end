//**** Score Board ****
//Board Name
const boardNameForm = document.getElementById('board-name-form')
const boardPlayer = document.getElementById('board-player')
const boardNameInput = document.getElementById('board-name-Input')
const boardTitle = document.getElementById('h3')
const boardsURL = 'http://localhost:3000/boards'
//Player Name & Score
const scoreTitle = document.getElementById('score-title')
// scoreTitle.style.display = "none"

const playersURL = 'http://localhost:3000/players'
const playerForm = document.getElementById('player-form')
const playerInput = document.getElementById('player-input')
const playerName = document.getElementById('player-name')

const scoreURL = 'http://localhost:3000/scores'
const scoreForm = document.getElementById('score-form')
const scoreInput = document.getElementById('score-input')
const scoreNumber = document.getElementById('player-score')

playerForm.addEventListener("submit", Player.submitPlayer)
playerForm.addEventListener("submit", Board.fetchBoards)
scoreForm.addEventListener("submit", Score.renderScore)

// function renderScore(){
//     event.preventDefault()
//     const scoreLi = document.createElement('li')
//     scoreLi.innerText = scoreInput.value
//     scoreNumber.append(scoreLi)
//     submitScore(scoreInput.value)
//     scoreForm.reset()
// }

// function submitScore(score){
//     console.log(score)
//     fetch(scoreURL, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             score_value: score,
//             player_id: 1
//         })
//     })
// }

Board.fetchBoards()
Player.fetchPlayers()