//**** Score Board ****
//Board Name
const boardNameForm = document.getElementById("board-name-form")
const boardPlayer = document.getElementById("board-player")
const boardNameInput = document.getElementById("board-name-Input")
const boardTitle = document.getElementById("h3")
const boardsURL = 'http://localhost:3000/boards'

//Player Name & Score
const playerForm = document.getElementById('player-form')
const nameInput = document.getElementById('name-input')
const nameOl = document.getElementById('ol1')
const scoreInput = document.getElementById("score-input")
const scoreUl = document.getElementById('score-ul')
const playersURL = 'http://localhost:3000/players'

boardNameForm.addEventListener("submit", Board.submitBoardName)

playerForm.addEventListener("submit", Player.renderPlayer)

// //Post Player
// function submitPlayer(name, score){
//         const configObj = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             player: {name: name, 
//                 score: score, 
//                 board_id: 1
//              }
//         })
//     }
//     fetch(playersURL, configObj)

// }

// //render player name to DOM
// function renderPlayer(e){
//     e.preventDefault()
//     // console.log(e.target.children[0].value)
//     const nameInput = e.target.children[0].value
//     const nameLi = document.createElement('li')
//     nameLi.innerText = nameInput + " -"
//     nameOl.append(nameLi)

//     // console.log(e.target.children[1].value)
//     const scoreInput = e.target.children[1].value
//     const scoreLi = document.createElement('li')
//     scoreLi.innerText = scoreInput
//     // console.log(scoreInput)
//     scoreUl.append(scoreLi)

//     submitPlayer(nameInput, scoreInput)

//     e.target.reset()
// }

Board.fetchBoards()

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
    resultDisplay.textContent = cardsWon.length*1350
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