/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let num1 = '';
let num2 = '';
let total = '';
let firstNumDone = false;
let operator;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // show on display 
      const clickedButtontext = event.target.innerText;
      display.innerText += clickedButtontext;
      const clear = ['C'];
      
      

if (event.target.classList.contains('number')) {
    // const clear = ['C'];
    if (firstNumDone != true) {
        num1 += clickedButtontext;
    } else {
        num2 += clickedButtontext;
    }
} else { 
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(clickedButtontext)) {
    firstNumDone = true;
    operator = clickedButtontext;
        }
    }
    if (clear.includes(clickedButtontext)){
        display.innerText = [''];
         
    }
});

});


calculator.addEventListener('click', (event) => {
    const clickedButtontext = event.target.innerText;
    if (event.target.innerText === '=') {
        if (operator === '+'){
            total = parseInt(num1) + parseInt(num2);
        } 
        if (operator === '-'){
            total = parseInt(num1) - parseInt(num2);
        }
        if (operator === '*'){
            total = parseInt(num1) * parseInt(num2);
        }
        if (operator === '/') {
            total = parseInt(num1) / parseInt(num2);
        }
        
        display.innerText = total 
        console.log(total)
    }

});

