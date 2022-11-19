
const buttons = document.getElementsByClassName('kbd-btn')
const input1 = document.getElementById('0-0')
let row = 0
let col = 0
let curGuess = ''
let gameOver = false
const events = ['onkeyup', 'click']
abc ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Focus on first cell on page load
document.addEventListener('DOMcontentloaded', foucsCell(input1))


function foucsCell() {
    if (row > 5) {
        alert('done')
        gameOver = true;
    }
    document.getElementById(`${row}-${col}`).style.border = 'groove rgb(187 132 231)'
}

function unFocusCell() {
    document.getElementById(`${row}-${col}`).style.border = 'solid #2e3e5b'
}

const handleClick = (key) => {
    addLetter(key);
}

const handleKey = (key) => {
    addLetter(key)
}

function addLetter(letter){
    const curCell = document.getElementById(`${row}-${col}`);
    if (abc.includes(letter)) {
        curGuess += letter;
        console.log(curGuess)
        curCell.textContent = letter;
        unFocusCell();
        col++;
        nextCell();

    } else if (letter == 'Backspace' || letter == 'del') {
        if (col > 0) {
            unFocusCell();
            curGuess = curGuess.substring(0, curGuess.length - 1);
            col--;
            document.getElementById(`${row}-${col}`).textContent = '';
            nextCell();
        }
    } 
}

function nextCell() {
    if (row > 5) {
        alert('done');
        gameOver = true;
    } else if (col > 4) {
        row++;
        col = 0
        foucsCell();
    } else {
        foucsCell();
    }
}


    
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => handleClick(buttons[i].id))
}
    