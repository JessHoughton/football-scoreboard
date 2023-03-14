let homeScore = 0
let awayScore = 0

let homeScoreEl = document.getElementById("home-score-el")
let awayScoreEl = document.getElementById("away-score-el")
let timerEl = document.getElementById("timer-el")

// Home //

function increaseHomeScore1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function increaseHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore 
}

function increaseHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore 
}

// Timer & Start/Pause/Reset //

let seconds = 0
let minutes = 0
let buffer = -1

function timerTing() {
    seconds++
    timerEl.textContent = seconds + buffer
}

function start() {
    setInterval(timerTing, 1000)
}

// Away //

function increaseAwayScore1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore 
}

function increaseAwayScore2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore 
}

function increaseAwayScore3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore 
}