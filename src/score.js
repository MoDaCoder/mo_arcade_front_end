class Score {

    constructor(score){
        this.player_id = score.player_id
        this.score_value = score.score_value
        this.id = score.id
    }

    static createScore(e){
        e.preventDefault()
        const playerId = e.target.parentElement.dataset.id
        const scoreList = e.target.nextElementSibling
        const scoreInput = document.getElementById('result').innerHTML

        Score.submitScore(scoreInput, scoreList, playerId)
        e.target.reset()
    }

    renderScore(scoreList){
        const li = document.createElement('li')
        li.dataset.id = this.player_id
        li.innerText = this.score_value
        console.log(li)

        scoreList.appendChild(li)    
    }

       static allowOrNot(){
        // event.preventDefault()
        const result = document.getElementById('result').innerHTML
        if (result === "Score:"){
            alert("You have no score to submit!");
        } else {
            this.renderScore()
        }
    }

    static submitScore(score, scoreList, playerId){
        fetch(scoreURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                score_value: score, 
                player_id: playerId
            })
        }).then(res => res.json())
        .then(score => {
            let newScore = new Score(score)
            newScore.renderScore(scoreList)
        })
    }
}