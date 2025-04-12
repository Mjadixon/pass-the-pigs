let bank = 0
let roundScore = 0
let pigScore1 = 0
let pigScore2 = 0
let pig1 = 0
let pig2 = 0
let playerTrack = 0
ranks = ["Razorback", "Trotter", "Snouter", "Leaning Jowler", "Dot", "No Dot"]
scores = { Razorback: 5, Dot: 1, noDot: 1, Trotter: 5, Snouter: 10, leaningJowler: 15 }
playerScore = 0
r = 0

function rolls() {
    r = Math.random()
    if (r < .359) {
        return ranks[5]
    } else if (r < .661) {
        return ranks[4]
    } else if (r < .885) {
        return ranks[0]
    } else if (r < .915) {
        return ranks[1]
    } else if (r < .922) {
        return ranks[2]
    } else {
        return ranks[3]
    }
}
function handleClick(id) {
    console.log(id)
    if (id.includes("Pass")) {
        console.log("pass Clicked")
        pass()
        roundScore = 0
        pigScore1 = 0
        pigScore2 = 0

    }
    if (id.includes("Roll")) {
        console.log("roll Clicked")
        pigScore1 = rolls()
        pigScore2 = rolls()
        console.log(pigScore1)
        console.log(pigScore2)
        if ((pigScore1 == ranks[4] && pigScore2 == ranks[5]) || pigScore1 == ranks[5] && pigScore2 == ranks[4]) {
            console.log("pig out")
            roundScore = 0
            pass()
            return;
        }
        scoringSystem()
        hand = document.getElementById("player1HandScore").innerHTML
        hand.innerHTML = roundScore
        bank = roundScore + playerScore;
        console.log(pigScore1)
    }
}
function scoringSystem() {
    if (pigScore1 === pigScore2 && pigScore1 !== "Dot" && pigScore1 !== "No Dot") {
        roundScore += (scores[pigScore1] * 2);
    } else {
        roundScore += scores[pigScore1];
        roundScore += scores[pigScore2];
    }
    console.log(roundScore)
}
function pass() {
    playerTrack = (playerTrack + 1) % 4
    for (let i = 0; i < 4; i++) {
        otherPlayer = document.getElementById("player" + i)
        if (otherPlayer) {
            otherPlayer.classList.remove("w3-dark-gray")
            otherPlayer.classList.add("w3-light-gray")
        }
    }
    currentPlayer = document.getElementById("player" + playerTrack)
    if (currentPlayer) {
        currentPlayer.classList.remove("w3-light-gray");
        currentPlayer.classList.add("w3-dark-gray");
    }
}

