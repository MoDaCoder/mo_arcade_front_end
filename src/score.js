class Score {

    constructor(attributes){
        this.player_id = attributes.player_id
        this.id = score.id
        this.score_value = score.score_value
        console.log(this.player_id)
    }

    static renderScore(e){
        e.preventDefault()
        const scoreLi = document.createElement('li')
        const playerId = document.querySelector('#player-name')
        // const currentPlayerId = playerId.
        console.log(playerId)

        scoreLi.dataset.id = this.player_id
        scoreLi.innerText = document.getElementById('result').innerHTML
        console.log(scoreLi)

        

        scoreNumber.append(scoreLi)
        Score.submitScore(scoreLi)
        scoreForm.reset()
    }

    // static allowOrNot(){
    //     event.preventDefault()
    //     const result = document.getElementById('result').innerHTML
    //     if (result === "Score:"){
    //         alert("You have no score to submit!");
    //     } else {
    //         this.renderScore()
    //     }
    // }
    
    static submitScore(score){
        // console.log(score)
        fetch(scoreURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                score_value: score,
                player_id: 1
                //Place player_id: player dataset id here
            })
        })
    }
}