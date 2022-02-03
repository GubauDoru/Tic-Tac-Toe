let round = 1;

function startGame(buttonId) {
	const turnParagraph = document.getElementById('whoPlays');
	let buttonChanger;
	if (round % 2 != 0) {//----------------------------------tura impara
		turnParagraph.textContent = '_O_';
		buttonChanger = document.getElementById(buttonId);
		buttonChanger.textContent = 'X';
		buttonChanger.disabled = true;
		buttonChanger.setAttribute('value', '1');
	} else {//-----------------------------------------------tura Para
		turnParagraph.textContent = '_X_';
		buttonChanger = document.getElementById(buttonId);
		buttonChanger.textContent = 'O';
		buttonChanger.disabled = true;
		buttonChanger.setAttribute('value', '0');
	}
	++round;
	checkGame();
}

function checkGame() {
	let winner = 'N';
	const winPossibilities = [
		['1','2','3'],
		['4','5','6'],
		['7','8','9'],
		['1','4','7'],
		['2','5','8'],
		['3','6','9'],
		['1','5','9'],
		['3','5','7'],
	]
	for(let c = 0; c <= 7; ++c) {
		let verifyWinX = 0;
		let verifyWin0 = 0;
		for(let l = 0; l <= 2; ++l) {
			if(document.getElementById(winPossibilities[c][l]).value === '1') {
				++verifyWinX;
			} else if(document.getElementById(winPossibilities[c][l]).value === '0') {
				++verifyWin0;
			}
			if(verifyWinX === 3) {
				winner = 'X';
			}else if(verifyWin0 === 3) {
				winner = 'O';
			}else if(round === 10 && c === 7 && l === 2) {
				winner = 'TIE';
			}
		}
	}
	if(winner != 'N') {
		showGameWinner(winner);
	}
}

function showGameWinner(userIndex) {
	const winLoseParagraph = document.getElementById('winLoseParagraph');
	if(userIndex === 'X') {
		winLoseParagraph.textContent = 'Player X WON';
		blockButtons();
	} else if(userIndex === 'O') {
		winLoseParagraph.textContent = 'Player O WON';
		blockButtons();
	} else if(userIndex === 'TIE') {
		winLoseParagraph.textContent = 'TIE!';
	}
}

function blockButtons() {
	for(let i = 1; i <= 9; ++i) {
		const blockCell = document.getElementById(i);
		blockCell.disabled = true;
	}
}

function restartGame() {
	window.location.reload();
}
