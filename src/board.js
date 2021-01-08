class Board {

    static allBoards = []

    constructor(board){
        this.id = board.id
        this.name = board.attributes.name
        this.players = board.attributes.players
        Board.allBoards.push(this)
    }

    static renderBoardNames(){
        console.log(this.allBoards)
        for(let board of this.allBoards){
            board.renderBoardName()
        }
    }    

    static fetchBoards(){
        fetch(boardsURL)
        .then(res => res.json())
        .then(boards => {
            for(let board of boards){
                let newBoard = new Board(board.data)
            }
            this.renderBoardNames()
        })
    }

     renderBoardName(){
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
    
        h3.innerText = this.name
        
        p.appendChild(h3)
        
        boardTitle.append(p)
    
        boardNameForm.reset()
    }

}
