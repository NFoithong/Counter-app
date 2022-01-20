// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log (btns);
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // console.log(e.currentTarget.classList);
        // create a loop for each button click / perform operation, where are either increased, decreased and reset
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
        } else if (style.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        // color each function change
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});