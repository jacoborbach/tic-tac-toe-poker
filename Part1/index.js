const board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = '0';
        clickedElement.innerText = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = '0';
    }
    
}



// const clicked = document.getElementById('click', play)
