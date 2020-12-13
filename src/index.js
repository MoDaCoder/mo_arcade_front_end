const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const playerName = document.getElementById("player-name")

nameForm.addEventListener("submit", submitName)

function submitName(e){
    e.preventDefault()

    const ol = document.createElement('ol')
    const li = document.createElement('li')
    li.innerText = nameInput.value + " - "

    ol.append(li)

    playerName.appendChild(ol)
}