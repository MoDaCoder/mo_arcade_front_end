class Board {
    static allBoards = []
    constructor(board) {
        this.id = board.id;
        this.name = board.attributes.name;
        this.img = board.attributes.img;
        Board.allBoards.push(this)
    }
    //changed Player.submitPlayer on line 14 to 
    // Player.submitName and innerHTML was missing THE L
    //WHAT IF WE DO ON CLICK DOM CONTENT LOADED??
    static fetchBoards(event) {
        // debugger EVENT IS UNDEFINED
        console.log(event)
        Player.submitName(event.target.innerHTML)
        fetch(boardsURL)
            .then(res => res.json())
            .then(boards => {
                for (let board of boards.data) {
                    let newBoard = new Board(board)
                }
            })
        Board.renderBoard()
    }
    
    static renderBoard() {
        Board.allBoards.sort(() => 0.5 - Math.random())
        //You Used let here instead of var/Might cause errors
        const grid = document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        let cardsChosen = []
        let cardsChosenId = []
        let cardsWon = []
        //creating board
        //using for loop to iterate through card array and adding an img element to it
        function createBoard() {
            for (let i = 0; i < Board.allBoards.length; i++) {
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
            resultDisplay.textContent = cardsWon.length * 1350
            if (cardsWon.length === Board.allBoards.length / 2) {
                resultDisplay.textContent = 'Congratulations! You won!'
            }
        }
        // flip your card
        // You Used let here instead of let/Might cause errors
        function flipCard() {
            let cardId = this.getAttribute('data-id')
            cardsChosen.push(Board.allBoards[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', Board.allBoards[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
        createBoard()
    }
}
// })