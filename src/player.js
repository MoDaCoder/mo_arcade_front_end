class Player {
    static renderedScores = []
    constructor(player) {
        this.name = player.name;
        this.score = player.score
    }

    // static fetchPlayers(){
    //     // this.loadedPlayers = []
    //     fetch(playersURL)
    //     .then(res => res.json())
    //     .then(players => {
    //         for (let player of players){
    //             let newPlayer = new Player(player.data)
    //         }
    //         // this.renderPlayers()
    //     })
    // }

    //render player name to DOM
    //Post Player
    static submitPlayer(event) {
        const nameInput = event
        console.log(event.target.innerHTML)
        const configObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                player: {
                    name: nameInput,
                    score: player.score,
                }
            })
        }
        fetch(playersURL, configObj)
    }
}















