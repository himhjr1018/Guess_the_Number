let ran =parseInt(Math.round((Math.random()*100+1)))
console.log(ran);

const submit = document.querySelector("#subt")
const UserInput = document.querySelector("#guess-field")
const guessSlot = document.querySelector(".guessresult")
const remaining = document.querySelector(".guessremaining")
const srartover = document.querySelector(".resultparams")
const loworhigh = document.querySelector(".loworhigh")
const p = document.createElement("p")
 
let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault()
        const guess = parseInt(UserInput.value) 
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please enter a number")
    }else if(guess < 1) {
        alert("Please enter a number greater than 1")
    }else if (guess > 100) {
        alert("Please enter a number less than 100")
    }else {
        prevGuess.push(guess) 
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Numbers is ${ran}`) 
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

} 

function checkGuess(guess) {
    if(guess === ran) {
        displayMessage(`Correct! You got it right`)
        endGame()
    }else if (guess < ran) {
        displayMessage(`Too Low!`)
    }else if (guess > ran) {
        displayMessage(`Too High!`)
    }


}

function displayGuess(guess) {
    UserInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}` 

     
}
 
function displayMessage(message) {
    loworhigh.innerHTML = `<h3 class="msgloworhi">${message}</h3>`

}

function endGame() {
    UserInput.value = ''
    UserInput.setAttribute("disabled", '')
    p.classList.add("button")
    p.innerHTML = `<h2 id="NewGame"> Start New Game</h2>`
    srartover.appendChild(p)
    playGame = false
    newGame()

}

function newGame() {
    const newgameButton = document.querySelector("#NewGame")
    newgameButton.addEventListener("click", function(e) {
        ran =parseInt(Math.round((Math.random()*100+1)))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        UserInput.removeAttribute("disabled")
        srartover.removeChild(p)
        playGame = true
   
    })

}
