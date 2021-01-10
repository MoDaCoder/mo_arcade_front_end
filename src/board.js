class Board {
    static allBoards = []
    constructor(board) {
        this.id = board.id;
        this.name = board.attributes.name;
        this.img = board.attributes.img;
        Board.allBoards.push(this)
    }

    // Removed (e.target.innerHTML) since event was declared in player class it's out of scope here and is undefined.
    //Also to get the Player.submitPlayer input I used .value
    static fetchBoards() {
        // debugger
        //EVENT IS UNDEFINED SO IT WAS REMOVED
        console.log(Player)
        console.log(submitName)
        // Player.submitPlayer(e.target.innerHTML)
        // console.log(Player.submitPlayer.value)
        Player.submitPlayer.value
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