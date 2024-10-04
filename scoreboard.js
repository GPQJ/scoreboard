const homeScore = document.getElementById("homescore")
const guestScore  = document.getElementById("guestscore")

let homeActiveScore = 0
let guestActiveScore = 0

function OnTopTeam() {
	
	homeScore.style.border = guestScore.style.border = "var(--blackborder)"
	
	if (homeActiveScore > guestActiveScore) {
		homeScore.style.border = "var(--redborder)";
	}
	else if (guestActiveScore > homeActiveScore) {
		guestScore.style.border = "var(--redborder)";
	}
	else {
		homeScore.style.border = guestScore.style.border = "var(--redborder)";
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

