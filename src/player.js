class Player {

    static allPlayers = []
    constructor(player) {
        console.log(player)
        this.name = player.name;
        this.score = player.score
        Player.allPlayers.push(this)
    }
//render player name to DOM
    static renderPlayers(){
        for(let player of this.allPlayers){
            player.renderPlayer()
        }
    }
    renderPlayer(){
        const playerLi = document.createElement('li')
        const scoreLi = document.createElement('li')
        playerLi.innerText = this.name
        scoreLi.innerText = this.score
        nameOl.appendChild(playerLi)
        scoreUl.appendChild(scoreUl)
        playerForm.reset()
    }
//Get Player
    static fetchPlayers(){
        // this.loadedPlayers = []
        fetch(playersURL)
        .then(res => res.json())
        .then(players => {
            for (let player of players){
                let newPlayer = new Player(player.data)
            }
            this.renderPlayers()
        })
    }
//Post Player
    static submitPlayer(name, score){
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                player: {name: name, 
                    score: score, 
                    board_id: 1
                }
            })
        }
        fetch(playersURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newPlayer = new Player(data.data)
            newPlayer.renderPlayer()
        })
    }
    }















