var startGameCard = document.getElementById("start-game-card")
var gameOverCard = document.getElementById("game-over-card")
var gameCard = document.getElementById("game-card")

var gameResult = document.getElementById("game-result")
var gameResultDetail = document.getElementById("game-result-detail")
var gameOverDetail = document.getElementById("game-over-detail")

var rounds = null
var gameOver = false
var playing = false

var wins = 0
var loses = 0
var ties = 0

function newGame() {
  rounds = null
  gameOver = false
  playing = false

  wins = 0
  loses = 0
  ties = 0

  gameResult.innerHTML = "Pick Your Poison"
  gameResultDetail.innerHTML = ""
  gameOverDetail.innerHTML = ""

  startGameCard.style.display = "block"
  gameOverCard.style.display = "none"
  gameCard.style.display = "none"  
}

function startGame() {
  var roundAmount = parseInt(document.getElementById("round-amount").value)
  rounds = roundAmount

  startGameCard.style.display = "none"
  gameOverCard.style.display = "none"
  gameCard.style.display = "block"
  playing = true
}

function game(player) {
  var choices = ["rock", "paper", "scissors"]
  var random = Math.floor(Math.random() * 3)
  var computer = choices[random]
  var beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
  }

  if (!choices.includes(player.toLowerCase()) || player == null || player == undefined) return "invalid choice"

  if (playing) {
    if (rounds != 0) {
      if (player.toLowerCase() == computer) {
        console.log("tie")
        gameResult.innerHTML = "It was a tie 😑!"
        ties = ties + 1
      } else if (beats[player.toLowerCase()] == computer) {
        console.log("won")
        gameResult.innerHTML = "You won 😄!"
        wins = wins + 1
      } else {
        console.log("lost")
        gameResult.innerHTML = "You lost 😢."
        loses = loses + 1
      }

      gameResultDetail.innerHTML = `Computer chose ${computer}.`
      rounds = rounds - 1
    } else {
      gameOver = true
      playing = false
    }
  } else {
    return "not started"
  }
}

function checkPlaying() {
  if (rounds == 0) {
    setTimeout(() => {
      gameOver = true
      playing = false
    }, 1500)
  }

  if (gameOver) {
    startGameCard.style.display = "none"
    gameOverCard.style.display = "block"
    gameCard.style.display = "none"

    if (wins > loses) {
      gameOverDetail.innerHTML = `You won that game with ${wins} wins!`
    } else if (loses > wins) {
      gameOverDetail.innerHTML = `You lost that game with ${loses} loses.`
    } else {
      gameOverDetail.innerHTML = `You tied with the computer!`
    }
  }

  setTimeout(() => {checkPlaying()}, 1)
}

startGameCard.style.display = "block"
gameOverCard.style.display = "none"
gameCard.style.display = "none"

setTimeout(() => {checkPlaying()}, 1)