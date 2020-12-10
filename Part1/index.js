const board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    const playerName = document.getElementById('player').innerText;
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);  
    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const lowerLeft = board[6];
    const lowerMiddle = board[7];
    const lowerRight = board[8];

    if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
        window.alert(`${playerName} is the winner!`);
    } else if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft) {
        window.alert(`${playerName} is the winner!`);
    } else if (lowerRight !== undefined && lowerRight === lowerMiddle && lowerRight === lowerLeft) {
        window.alert(`${playerName} is the winner!`);
    } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === lowerLeft) {
        window.alert(`${playerName} is the winner!`);
    } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === lowerMiddle) {
        window.alert(`${playerName} is the winner!`);
    } else if (topRight !== undefined && topRight === middleRight && topRight === lowerRight) {
        window.alert(`${playerName} is the winner!`);
    } else if (topLeft !== undefined && topLeft === middleCenter && topLeft === lowerRight) {
        window.alert(`${playerName} is the winner!`);
    } else if (topRight !== undefined && topRight === middleCenter && topRight === lowerLeft) {
        window.alert(`${playerName} is the winner!`);
    } 
}



// const clicked = document.getElementById('click', play)

console.log(document.getElementById('player').innerText)