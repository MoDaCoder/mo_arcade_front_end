class Player {

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

//render player name to DOM
renderPlayer(e){
    e.preventDefault()
    const nameInput = e.target.children[0].value
    const nameLi = document.createElement('li')
    nameLi.innerText = nameInput + " -"
    nameOl.append(nameLi)

    const scoreInput = e.target.children[1].value
    const scoreLi = document.createElement('li')
    scoreLi.innerText = scoreInput

    scoreUl.append(scoreLi)

    submitPlayer(nameInput, scoreInput)

    e.target.reset()
}

}
