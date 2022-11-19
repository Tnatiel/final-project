


// const btns = document.querySelectorAll()
const buttons = document.getElementsByClassName('kbd-btn')
const input1 = document.getElementById('0-0')
let row = 0
let col = 0
let gameOver = false
const events = ['onkeyup', 'click']
abc ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Focus on first cell on page load
document.addEventListener('DOMcontentloaded', foucsCell(input1))
function foucsCell(cell) {
    cell.style.border = 'groove rgb(187 132 231)'
}

const handleClick = (key) => {
    addLetter(key);
}

function addLetter(letter){
    let curCell = document.getElementById(`${row}-${col}`);
    curCell.textContent = letter;
}

function validate(e) {
    if (abc.includes(e)) {
        console.log(e)
        e.innerHTML = e.id.toUpperCase();
    } else {
        e.innerHTML = ''
    }
    nextCell(e)
}

function nextCell(cur) {
    let row = cur.id.split('-')[0];
    let col = cur.id.split('-')[1];
    let newCell;
    if (row > 5) {
        gameOver = true;
    } else if (col > 4) {
        row += 1;
        newCell = document.getElementById(`${row}-${col}`);
        foucsCell(newCell);
        validate()
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => handleClick(buttons[i].id))
}
    