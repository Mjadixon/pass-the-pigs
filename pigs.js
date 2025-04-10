bank = 0
roundScore = 0
pigScore1 = 0
pigScore2 = 0
pig1 = 0
pig2 = 0
playerTrack = 0
ranks = ["Razorback", "Trotter", "Snouter", "Leaning Jowler", "Dot", "No Dot"]
scores = { razorBack: 5 ,Dot: 1, noDot: 1, Trotter: 5, Snouter: 10, leaningJowler: 15}
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
        pig1 = "/"
        pig2 = "/"
    }
    if (id.includes("Roll")) {
        console.log("roll Clicked")
        let pigScore1 = rolls()
        let pigScore2 = rolls()
        console.log(pigScore1)
        console.log(pigScore2)
        scoringSystem()
        score = document.
        if (pigScore1 == ranks[4] && pigScore2 == ranks[5] || pigScore1 == ranks[5] && pigScore2 == ranks[4]) {
           roundScore = 0
            pigScore1 = "Pig Out"
            console.log(pigScore1)
        }
        bank = roundScore + playerScore
    }
}

function scoringSystem() {
 if (pigScore1 == scores.razorBack || pigScore2 == scores.razorBack && pigScore1 || pigScore2 != 0  ){
    roundScore += 5
 } else if ()

    if (pig1 == pig2 && pig1 || pig2 != 0) {
        roundScore = (pig1 + pig2 * (2))
        bank = roundScore + playerScore
      
    }
    
}
function pass() {
    playerTrack++
    console.log("track")
    if (playerTrack == 0) {
        document.getElementById("player0").classList.remove("w3-dark-gray")

        document.getElementById("player1").classList.remove("w3-light-gray")

        document.getElementById("player1").classList.add("w3-dark-gray")
    } else if (playerTrack == 1) {
        document.getElementById("player0").classList.remove("w3-dark-gray")

        document.getElementById("player1").classList.remove("w3-light-gray")
        document.getElementById("player1").classList.add("w3-dark-gray")

    } else if (playerTrack == 2) {
        document.getElementById("player1").classList.remove("w3-dark-gray")
        document.getElementById("player2").classList.remove("w3-light-gray")

        document.getElementById("player2").classList.add("w3-dark-gray")
    } else if (playerTrack == 3) {
        document.getElementById("player2").classList.remove("w3-dark-gray")

        document.getElementById("player3").classList.remove("w3-light-gray")

        document.getElementById("player3").classList.add("w3-dark-gray")
    } else if (playerTrack == 4) {
        document.getElementById("player3").classList.remove("w3-dark-gray")
        document.getElementById("player0").classList.remove("w3-light-gray")
        document.getElementById("player0").classList.add("w3-dark-gray")
        playerTrack = 0


    }

}