class Score {

    constructor(score){
        this.player_id = score.player_id
        this.score_value = score.score_value
    }

    static renderScore(){
        event.preventDefault()
        const scoreLi = document.createElement('li')
        scoreLi.innerText = scoreInput.value
        scoreNumber.append(scoreLi)

        Score.submitScore(scoreInput.value)
        scoreForm.reset()
    }
    
    static submitScore(score){
        fetch(scoreURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                score_value: score,
                player_id: 1
            })
        })
    }
}