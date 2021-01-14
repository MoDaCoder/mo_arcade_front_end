class Player {
    
    static allPlayers = []

    constructor(player) {
        this.id = player.id
        this.name = player.attributes.name
        // console.log(this.id) This gives back all player Id's
        // console.log(this.id)
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
                // console.log(player)
                let newPlayer = new Player(player.data)
            }
            this.renderPlayers()
        })

    }

    renderPlayer(){
        // debugger
        const playerLi = document.createElement('li')
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deletePlayer)
        playerLi.dataset.id = this.id
        playerLi.innerText = this.name

        const scoreForm = document.createElement('form')
        scoreForm.innerHTML += `<input value="Submit Score"><input type="submit">`
        scoreForm.addEventListener("submit", Score.renderScore)
        
        playerLi.append(deleteBtn)
        playerName.appendChild(playerLi)
        playerForm.reset()
    }
        
    deletePlayer(){
        // debugger
        // const playerId = this.parentElement.id
        // fetch(`${playerURL}`/`${playerId}`, {
        //     method: "DELETE"
        // })
        this.parentElement.remove()
    }

    //Post Player
    static submitPlayer() {
        // debugger
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
            //How can I access that data correctly?!
            let newPlayers = new Player(data.data)
            newPlayers.renderPlayer()
        })
    }
}















