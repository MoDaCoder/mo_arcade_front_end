class Player {
    static renderedScores = []
    constructor(player) {
        this.name = player.name;
        this.score = player.score
    }
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
                    score: "place.score",
                }
            })
        }
        fetch(playersURL, configObj)
    }
}















