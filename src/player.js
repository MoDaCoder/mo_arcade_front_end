class Player {
    
    static allPlayers = []

    constructor(player) {
        // console.log(player)
        this.name = player.attributes.name
        Player.allPlayers.push(this)
        // console.log(this)
        //this is the player new object
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
        const playerUl = document.createElement('span')
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deletePlayer)
        playerLi.innerText = this.name
        
        playerUl.append(playerLi, deleteBtn)
        // playerUl.append(playerLi)
        playerName.appendChild(playerUl)
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















