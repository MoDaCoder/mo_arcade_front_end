class Player {
    
    static allPlayers = []

    constructor(player) {
        this.id = player.id
        this.name = player.attributes.name
        this.scores = player.attributes.scores
        Player.allPlayers.push(this)
    }
    
    static renderPlayers(){
        for(let player of this.allPlayers){
            player.renderPlayer()
        }
    }

    static fetchPlayers(){
        fetch(playersURL)
        .then(res => res.json())
        .then(players => {
            for(let player of players){
                let newPlayer = new Player(player.data)
            }
            this.renderPlayers()
        })

    }

    renderPlayer(){
        const playerLi = document.createElement('li')
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deletePlayer)
        playerLi.dataset.id = this.id
        playerLi.innerText = this.name

        const scoreForm = document.createElement('form')
        scoreForm.innerHTML += `<input type="submit" value="Submit Score">`
        scoreForm.addEventListener("submit", Score.createScore)
        
        const scoreList = document.createElement('ul')
        this.scores.forEach(score => {
            console.log(this.scores)
            let scoreObj = new Score(score)
            console.log(scoreObj)
            scoreObj.renderScore(scoreList)
        })

        playerLi.append(scoreForm, scoreList, deleteBtn)
        playerName.appendChild(playerLi)
        playerForm.reset()
    }
        
    deletePlayer(){
        this.parentElement.remove()
    }

    //Post Player
    static submitPlayer() {
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
        .then(data => {
            let newPlayers = new Player(data.data)
            newPlayers.renderPlayer()
        })
    }
}















