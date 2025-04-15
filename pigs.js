
let roundScore = 0
let pigScore1 = 0
let pigScore2 = 0
let pig1 = 0
let pig2 = 0
let playerTrack = 0
ranks = ["Razorback", "Trotter", "Snouter", "Leaning Jowler", "Dot", "No Dot"]
scores = { Razorback: 5, Trotter: 5, Snouter: 10, "Leaning Jowler": 15, Dot: 1, noDot: 1, }
playerScore = [0, 0, 0, 0]
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
        playerScore[playerTrack] += roundScore
        pass()
        roundScore = 0
        pigScore1 = ""
        pigScore2 = ""

    }
    if (id.includes("Roll")) {
        console.log("roll Clicked")
        pigScore1 = rolls()
        pigScore2 = rolls()
        console.log(pigScore1)
        console.log(pigScore2)
        if ((pigScore1 === "Dot" && pigScore2 === "No Dot") || (pigScore1 === "No Dot" && pigScore2 === "Dot")
        ) {
            console.log("pig out");
            roundScore = 0;
            changeScores();
            pigBars()
            pass()
            return;
        }
        gameEnd();
        scoringSystem();
        changeScores();
        pigBars();
    }
}
function scoringSystem() {
    if (pigScore1 === pigScore2 && pigScore1 !== "Dot" && pigScore1 !== "No Dot") {
        roundScore += (scores[pigScore1] * 2);
    } else {
        roundScore += scores[pigScore1] || 0;
        roundScore += scores[pigScore2] || 0;
    }
    console.log(roundScore)
}
function changeScores() {
    for (let i = -1; i < 4; i++) {
        hand = document.getElementById("player" + [i] + "HandScore")
        score = document.getElementById("player" + [i] + "TotalScore")
        if (hand) {
            if (i === playerTrack) {
                hand.innerHTML = "Round: " + roundScore
            } else {
                hand.innerHTML = "Score: " + playerScore[i]
                score.innerHTML = "Total Score: " + playerScore[i]
            }
        }
    }

}
function pigBars() {
    document.getElementById("player" + playerTrack + "Pig1").innerHTML = pigScore1
    document.getElementById("player" + playerTrack + "Pig2").innerHTML = pigScore2
    if (playerTrack) {
        pigScore1.innerHTML = ""
        pigScore2.innerHTML = ""
    }
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
function gameEnd() {
    if (playerScore[playerTrack] >= 10) {
       const unhide = document.getElementById("replayButton")
        if (unhide) {
            unhide.classList.remove("w3-hide")
            replayButton.onClick = function () {
                pigScore1 = 0
                pigScore2 = 0
                playerTrack = 0
                currentPlayer0
                otherPlayer = 0
                roundScore = 0
                pig1 = 0
                pig2 = 0
                playerScore = [0, 0, 0, 0]
            }
        }
    }
}