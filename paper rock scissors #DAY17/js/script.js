let elements = document.querySelectorAll(".container div")
let container = document.getElementById("container")
let results = document.getElementById("results")
let playAgain = document.getElementById("play-again")
let score = document.getElementById("score")
let resultsHeading = document.getElementById("results__heading")


elements.forEach((e) => {
    e.onclick = function() {
        if(e.innerHTML !== elements[1].innerHTML && e.innerHTML !== results.innerHTML) {
            e.classList.add("clicked")
        }
        let opponent = elements[Math.floor(Math.random() * 3)]
        if(e.innerHTML === elements[2].innerHTML) {
            elements[0].classList.add("opacity")
            elements[1].classList.add("opacity")
            setTimeout(function() {
                elements[0].innerHTML = opponent.innerHTML
                elements[0].classList.remove("opacity")
                results.style.display = "flex"
            }, 500)
        }
        if(e.innerHTML === elements[1].innerHTML) {
            elements[2].classList.add("opacity")
            elements[0].classList.add("left")
            e.classList.add("left")
            setTimeout(function() {
                elements[2].innerHTML = opponent.innerHTML
                elements[2].classList.remove("opacity")
                results.style.display = "flex"
            }, 500)
        }
        if(e.innerHTML === elements[0].innerHTML) {
            elements[2].classList.add("opacity")
            elements[1].classList.add("opacity")
            setTimeout(function() {
                elements[2].innerHTML = opponent.innerHTML
                elements[2].classList.remove("opacity")
                results.style.display = "flex"
            }, 500)
        }
        playAgain.onclick = function() {
            results.style.display = "none"
            elements[0].innerHTML = `<img src="images/rock.png" alt="">`
            elements[2].innerHTML = `<img src="images/scissors.png" alt="">`
            elements[0].classList.remove("opacity","left")
            elements[1].classList.remove("opacity","left")
            elements[2].classList.remove("opacity")
            e.classList.remove("clicked")
            e.classList.remove("winner")
            opponent.classList.remove("winner")
            e.classList.remove("paper-winner")
        }
        if(e.innerHTML === opponent.innerHTML) {
            resultsHeading.innerHTML = "You Tied."
        }
        if(e.innerHTML === elements[0].innerHTML && opponent.innerHTML === elements[2].innerHTML) {
            score.innerHTML = Number(score.innerHTML) + 1
            resultsHeading.innerHTML = "you win."
            setTimeout(function() {
                e.classList.add("winner")
            },600)
        }
        if(e.innerHTML === elements[0].innerHTML && opponent.innerHTML === elements[1].innerHTML) {
            resultsHeading.innerHTML = "You Lost."
            score.innerHTML = Number(score.innerHTML) - 1
            setTimeout(function() {
                opponent.classList.add("winner")
            }, 600)
        }
        if(e.innerHTML === elements[1].innerHTML && opponent.innerHTML === elements[0].innerHTML) {
            score.innerHTML = Number(score.innerHTML) + 1
            resultsHeading.innerHTML = "you win."
            setTimeout(function() {
                e.classList.add("paper-winner")
            },600)
        }
        if(e.innerHTML === elements[1].innerHTML && opponent.innerHTML === elements[2].innerHTML) {
            resultsHeading.innerHTML = "You Lost."
            score.innerHTML = Number(score.innerHTML) - 1
            setTimeout(function() {
                opponent.classList.add("winner")
            }, 600)
        }
        if(e.innerHTML === elements[2].innerHTML && opponent.innerHTML === elements[1].innerHTML) {
            score.innerHTML = Number(score.innerHTML) + 1
            resultsHeading.innerHTML = "you win."
            setTimeout(function() {
                e.classList.add("winner")
            },600)
        }
        if(e.innerHTML === elements[2].innerHTML && opponent.innerHTML === elements[0].innerHTML) {
            resultsHeading.innerHTML = "You Lost."
            score.innerHTML = Number(score.innerHTML) - 1
            setTimeout(function() {
                opponent.classList.add("winner")
            }, 600)
        }
    }
})