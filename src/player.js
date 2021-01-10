class Player {
    static renderedPlayer = []

    constructor(player) {
        this.name = player.name;
        Player.renderdPlayer.push(this)
    }

    static fetchPlayers(){
        // event.preventDefault()
        // this.loadedPlayers = []
        fetch(playersURL)
        .then(res => res.json())
        .then(players => {
            for (let player of players){
                let newPlayer = new Player(player.data)
            }
            Player.renderPlayer()
        })
    }

    static renderPlayer(){
        console.log(Player.renderdPlayer)
        const playerLi = document.createElement('li')
        playerLi.innerText = this.name
        console.log(this.name)
        playerName.appendChild(playerLi)
        playerForm.reset()
    }

    //render player name to DOM
    //Post Player
    static submitPlayer(nameInput) {
        // const nameInput = event
        // console.log(event.target.innerHTML)
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                player: {
                    name: nameInput
                }
            })
        }
        fetch(playersURL, configObj)
    }
}















