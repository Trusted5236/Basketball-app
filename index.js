let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let resetEl = document.getElementById("reset-el")
let guestcount = 0
let homecount = 0

function plusoneh() {
    homecount = homecount + 1
    homeScore.textContent = homecount 
}

function plustwoh() {
    homecount  = homecount  + 2
    homeScore.textContent = homecount 
}

function plusthreeh() {
    homecount  = homecount  + 3
    homeScore.textContent = homecount 
}

function plusoneg() {
    guestcount = guestcount + 1
    guestScore.textContent = guestcount
}

function plustwog() {
    guestcount = guestcount + 2
    guestScore.textContent = guestcount
}

function plusthreeg() {
    guestcount = guestcount + 3
    guestScore.textContent = guestcount
}

function reset1() {
    homeScore.textContent = 0
    homecount  = 0
}

function reset2() {
    guestScore.textContent = 0
    guestcount = 0
}