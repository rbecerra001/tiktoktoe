console.log('JavaScript link: Successful');

const moves = new Array(9);
const squares = document.querySelectorAll('#board > div');
const winMessageDiv = document.querySelector('.board-message');
const board = document.querySelector('#board');
const reset = document.querySelector('#restart-game')
let turnCount = 0;
let turn = 'X';

function checkForWin() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[0].classList.add('blink')
            squares[1].classList.add('blink')
            squares[2].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[3] === moves[4] && moves[4] === moves[5]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[3].classList.add('blink')
            squares[4].classList.add('blink')
            squares[5].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[6] === moves[7] && moves[7] === moves[8]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[6].classList.add('blink')
            squares[7].classList.add('blink')
            squares[8].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[0] === moves[3] && moves[3] === moves[6]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[0].classList.add('blink')
            squares[3].classList.add('blink')
            squares[6].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[1] === moves[4] && moves[4] === moves[7]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[1].classList.add('blink')
            squares[4].classList.add('blink')
            squares[7].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[2] === moves[5] && moves[5] === moves[8]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[2].classList.add('blink')
            squares[5].classList.add('blink')
            squares[8].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[0] === moves[4] && moves[4] === moves[8]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[0].classList.add('blink')
            squares[4].classList.add('blink')
            squares[8].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else if (moves[2] === moves[4] && moves[4] === moves[6]){
        if (turnCount > 5) {
            removeClickEventCallback()
            squares[2].classList.add('blink')
            squares[4].classList.add('blink')
            squares[6].classList.add('blink')
            winMessageDiv.innerHTML = `${turn} WON!!!`;
        }
    } else {
        if (turnCount > 1) {
            console.log('no winner yet')
        }
    }
}

function removeClickEventCallback() {
    squares.forEach(square => {
        (square.innerText !== turn) ? square.innerText = '' : null;
        square.removeEventListener('click', handleClickEventCallback)
    })
}

function handleClickEventCallback(event) {
    moves[event.target.id] = turn
    event.target.innerText = turn
    checkForWin()
    turn = (turnCount % 2 === 0) ? "O" : "X";
    turnCount++
}

squares.forEach((square, index) => {
    square.setAttribute('id', `${index}`)
    square.addEventListener('click', handleClickEventCallback, {once: true})
})

reset.addEventListener('click', () => {
    location.reload();
})
