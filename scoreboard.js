const homeScore = document.getElementById("homescore")
const guestScore  = document.getElementById("guestscore")

let homeActiveScore = 0
let guestActiveScore = 0

function OnTopTeam() {
	
	homeScore.style.border = guestScore.style.border = "var(--blackborder)"
	homeScore.style.boxShadow = guestScore.style.boxShadow = "none"
	homeScore.style.textShadow = guestScore.style.textShadow = "none"
	
	if (homeActiveScore > guestActiveScore) {
		homeScore.style.border = "var(--redborder)"
		homeScore.style.boxShadow = homeScore.style.textShadow = "var(--redshadow)"
	}
	else if (guestActiveScore > homeActiveScore) {
		guestScore.style.border = "var(--redborder)"
		guestScore.style.boxShadow = guestScore.style.textShadow = "var(--redshadow)"
	}
	else {
		homeScore.style.border = guestScore.style.border = "var(--redborder)"
	}
}

function updateScore(team, points) {
	
	if (team === 'home') {
		homeActiveScore += points
    homeScore.textContent = homeActiveScore
	}
	else if (team === 'guest') {
		guestActiveScore += points
    guestScore.textContent = guestActiveScore
	}

	OnTopTeam()
}

function clearScores() {
	homeActiveScore = 0
	guestActiveScore = 0
	homeScore.textContent = homeActiveScore
	guestScore.textContent = guestActiveScore

	guestScore.style.border = homeScore.style.border = "var(--blackborder)"
}

