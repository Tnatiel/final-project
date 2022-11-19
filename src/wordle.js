
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

//  Focus funcs
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


// Handle clicks and keypress
const handleClick = (key) => {
    addLetter(key);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => handleClick(buttons[i].id))
}
const handleKey = (key) => {
    kbdAdd(key)
}

function addLetter(letter){
    const curCell = document.getElementById(`${row}-${col}`);
    if (abc.includes(letter)) {
        curGuess += letter;
        curCell.textContent = letter;
        unFocusCell();
        col++;
        nextCell();

    } else if (letter == 'del') {
        if (col > 0) {
            unFocusCell();
            curGuess = curGuess.substring(0, curGuess.length - 1);
            col--;
            document.getElementById(`${row}-${col}`).textContent = '';
            nextCell();
        }
    } 
}
document.addEventListener('keyup', (e) =>{
    kbdAdd(e)
})

// document.onkeyup = function (e) {
//     // console.log('key down');
//     console.log(e);
//     kbdAdd(e)
//   };

function kbdAdd(letter){
    const curCell = document.getElementById(`${row}-${col}`);
    // alert(letter.code)
    if ('KeyA' <= letter.code && letter.code <= 'KeyZ') {
        curCell.textContent = letter.code[3]
        curGuess += letter;
        unFocusCell();
        col++;
        nextCell();
        // alert(letter.code)
    } else if (letter.code == 'Backspace') {
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
    
    
