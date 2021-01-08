class Player {
    static renderedScores = []

    constructor(player) {
        this.name = player.name;
        this.score = player.score
    }

//render player name to DOM
    static renderPlayer(e){
        e.preventDefault()
        const nameInput = e.target.children[0].value
        const nameLi = document.createElement('li')
        nameLi.innerText = nameInput + " -"
        nameOl.append(nameLi)

        const scoreInput = e.target.children[1].value
        const scoreLi = document.createElement('li')
        scoreLi.innerText = scoreInput

        scoreUl.append(scoreLi)

        this.submitPlayer(nameInput, scoreInput)

        e.target.reset()
    }



//Post Player
    submitPlayer(name, score){

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


    }

}
