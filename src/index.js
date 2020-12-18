//**** Score Board ****
//Temporary Player Score
const scoreForm = document.getElementById("score-form")
const scoreInput = document.getElementById("score-input")
const scoreUl = document.getElementById('score-ul')
const boardsURL = 'http://localhost:3000/boards'
//Player Name
const nameForm = document.getElementById("name-form")
// const nameInput = document.getElementById("name-input")
const ol = document.getElementById('ol1')
const playersURL = 'http://localhost:3000/players'

//Get Boards Score Fetch
function fetchBoards(){
    fetch(boardsURL)
    .then(res => res.json())
    .then(boards => boards.forEach(board => renderScore(board.score)))
}

scoreForm.addEventListener("submit", submitScore)

//Post Boards Score Fetch
console.log('about to post a score');
function submitScore(){
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            score: parseInt(scoreInput.value)
        })
    }
    fetch(boardsURL, configObj)

    renderScore(scoreInput.value)
}

function renderScore(score){
    console.log(score)
    // event.preventDefault()

    const li = document.createElement('li')
    li.innerText = score

    scoreUl.append(li)

    scoreForm.reset()
}

//Player Name

nameForm.addEventListener("submit", renderName)

// **** CHANGE FUNCTION TO INPUT MOCK SCORE FIIIIRRRSSTTT ****
// **** OTHERWISE FETCH POST TO WON'T WORK IF NAME IS FIRST ****
//render player name to DOM
function renderName(e){
    e.preventDefault()
    const nameInput = e.target.children[0].value
    const ol = document.getElementById('ol1')
    const li = document.createElement('li')

    li.innerText = nameInput + " -"
    ol.append(li)

    submitName(nameInput)

    e.target.reset()
}

function submitName(name){
    fetch(playersURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            player: name
        })
    })

}

fetchBoards()