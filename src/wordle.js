


// document.addEventListener('DOMContentLoaded', initalFocus)
const inputArr =  document.getElementsByClassName('ur-input')
const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


let f = inputArr.item(0)
console.log(f)
document.g

for (let i = 0; i < inputArr.length; i++) {
    const e = inputArr[i];
    e.addEventListner('click', () => {alert('hi')})

}

// for (let i = 0; i < inputArr.length; i++) {
//     let ipt = array[i];
//     console.log(ipt)
//     ipt.addEventListener('click', validate)}


const validate = function(ipt)  {
    console.log(hello)
    if ('abc'.indexOf(ipt.innerHTML) > -1) {
        ipt.innerHTML = 'h';
    } 
    }

// abc.forEach(e => {
//     console.log(e)
// });


    