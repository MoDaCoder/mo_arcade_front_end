//**** Score Board ****
//Temporary Player Score
const scoreForm = document.getElementById("score-form")
const scoreInput = document.getElementById("score-input")
const scoreUl = document.getElementById('score-ul')
const boards = 'http://localhost:3000/boards'

//Post Score Fetch
console.log('about to post a score');

fetch(boards).then(response => {
    console.log(response);
    return response.boards();
})
.then(response => { 
    console.log(response);
});

function submitScore(){


}

scoreForm.addEventListener("submit", renderScore)

function renderScore(){
    event.preventDefault()

    const li = document.createElement('li')
    li.innerText = scoreInput.value

    scoreUl.append(li)

    scoreForm.reset()
}

//Player Name
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const ol = document.getElementById('ol1')

nameForm.addEventListener("submit", renderName)

function submitName(){

}
// **** CHANGE FUNCTION TO INPUT MOCK SCORE FIIIIRRRSSTTT ****
// **** OTHERWISE FETCH POST TO WON'T WORK IF NAME IS FIRST ****
//render player name to DOM
function renderName(){
    event.preventDefault()

    const ol = document.getElementById('ol1')
    const li = document.createElement('li')
    li.innerText = nameInput.value + " -"

    ol.append(li)

    nameForm.reset()
}