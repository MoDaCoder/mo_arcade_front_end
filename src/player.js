class Player {
    
    static allPlayers = []

    constructor(player) {
        // this.id = player.id
        this.name = player.attributes.name
        Player.allPlayers.push(this)
        console.log(this)
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
                let newPlayer = new Player(player.data)
            }
            this.renderPlayers()
        })

    }

    renderPlayer(){
        const playerLi = document.createElement('li')
        playerLi.innerText = this.name
        playerName.appendChild(playerLi)
        playerForm.reset()
    }

    //Post Player
    static submitPlayer() {
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
            let newPlayers = new Player(data)
            newPlayers.renderPlayer()
        })
    }




    // static fetchPlayers(){
    //     fetch(playersURL)
    //     .then(res => res.json())
    //     .then(players => {
    //         console.log(players)
    //         for (let player of players.data){
    //             let newPlayer = new Player(player.data)
    //         }
    //         Player.renderPlayer()
    //     })
    // }

    // fetchPlayers(){
    //     fetch(playersURL)
    //     .then(res => res.json())
    //     .then(console.log)
    // }

    // static renderPlayer(){
    //     const playerLi = document.createElement('li')
    //     playerLi.innerText = playerInput.value
    //     playerName.appendChild(playerLi)
    //     playerForm.reset()
    // }

//     static renderPlayer(event){
//         console.log(event)
//         const playerLi = document.createElement('li')
//         playerLi.innerText = this.name
//         console.log(playerLi)
//         playerName.appendChild(playerLi)
//         playerForm.reset()
//     }

//     //render player name to DOM
//     //Post Player
//     static submitPlayer(nameInput) {
//         // const nameInput = event
//         // console.log(event.target.innerHTML)
//         const configObj = {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({
//                 player: {
//                     name: nameInput
//                 }
//             })
//         }
//         fetch(playersURL, configObj)
//     }
}















