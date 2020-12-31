//**** Score Board ****
//Temporary Player Score
const scoreForm = document.getElementById("score-form")
const scoreInput = document.getElementById("score-input")
const scoreUl = document.getElementById('score-ul')
const boardsURL = 'http://localhost:3000/boards'
//Player Name
const nameForm = document.getElementById("name-form")
const ol = document.getElementById('ol1')
const playersURL = 'http://localhost:3000/players'

//Get Boards Score Fetch
function fetchBoards(){
    fetch(boardsURL)
    .then(res => res.json())
    .then(boards => boards.forEach(renderBoard))
}

scoreForm.addEventListener("submit", submitScore)

//Post Boards Score Fetch
// console.log('about to post a score');
function submitScore(){
    // debugger
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
    
    .then(res => res.json())
    .then(renderBoard)
}

function renderBoard(board){
    // console.log(board)
    const li = document.createElement('li')
    li.dataset.id = board.id
    li.innerText = board.score
    li.className = "dataId"

    scoreUl.append(li)

    scoreForm.reset()
}
//Player Name

nameForm.addEventListener("submit", renderName)

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
    // debugger
    fetch(playersURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            player: {name: name, board_id: 1 }
            // player: {name: name}
        })
    })

}

fetchBoards()

// ****Urban Flipporama****
document.addEventListener('DOMContentLoaded', () => {

    //card options-
    const cardArray = [
        {
            name: 'borb',
            img: 'images/borb.png'
        },
        {
            name: 'borb',
            img: 'images/borb.png'
        },
        {
            name: 'fishbowl',
            img: 'images/fishbowl.png'
        },
        {
            name: 'fishbowl',
            img: 'images/fishbowl.png'
        },
        {
            name: 'food',
            img: 'images/food.png'
        },
        {
            name: 'food',
            img: 'images/food.png'
        },        
        {
            name: 'french_hat',
            img: 'images/french_hat.png'
        },
        {
            name: 'french_hat',
            img: 'images/french_hat.png'
        },
        {
            name: 'garfield',
            img: 'images/garfield.png'
        },
        {
            name: 'garfield',
            img: 'images/garfield.png'
        },
        {
            name: 'llama',
            img: 'images/llama.png'
        },        
        {
            name: 'llama',
            img: 'images/llama.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'snail',
            img: 'images/snail.png'
        },        
        {
            name: 'snail',
            img: 'images/snail.png'
        },
        {
            name: 'richard',
            img: 'images/richard.png'
        },
        {
            name: 'richard',
            img: 'images/richard.png'
        },
        {
            name: 'mom',
            img: 'images/mom.png'
        },
        {
            name: 'mom',
            img: 'images/mom.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

//You Used let here instead of var/Might cause errors
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//creating board
//using for loop to iterate through card array and adding an img element to it
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/pikachu.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

// check for matches
function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/coding.png')
        cards[optionTwoId].setAttribute('src', 'images/coding.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/pikachu.png')
        cards[optionTwoId].setAttribute('src', 'images/pikachu.png')
        alert("Nope that's the wrong numba!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You won!'
    }
}

// flip your card
// You Used let here instead of let/Might cause errors
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()

})