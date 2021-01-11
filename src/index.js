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
// const submitPlayer = document.getElementById('submit-name')
const playerInput = document.getElementById('player-input')
const playerName = document.getElementById('player-name')

// submitPlayer.addEventListener("click", Board.fetchBoards)
// playerForm.addEventListener("submit", Board.fetchBoards)
// submitPlayer.addEventListener("submit", Player.renderPlayer)

//Can we declare the submitName inside a class to make it more explicit? 
//So if we declare it in the constructor in player we'd be able to call it in
//Board class as 
//CAN WE COMBINE DOMcontentLoaded with submitName event listener??

playerForm.addEventListener("submit", submitPlayer)

function fetchPlayers(){
    fetch(playersURL)
    .then(res => res.json())
    .then(players => players.forEach(data => renderPlayer(data.data.attributes)))

}

    //Post Player
    function submitPlayer() {
        event.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                player: {
                    name: playerInput.value
                }
            })
        }
        fetch(playersURL, configObj)
        .then(res => res.json())
        .then(data => renderPlayer(data))
    }

    function renderPlayer(player){
        console.log(player)
        const playerLi = document.createElement('li')
        playerLi.innerText = player.name
        playerName.appendChild(playerLi)
        playerForm.reset()
    }

// Board.fetchBoards()
fetchPlayers()