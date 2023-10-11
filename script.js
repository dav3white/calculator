let num1, num2, operator;
const buttons = document.querySelectorAll('.button');
let display = document.querySelector('#calculatorDisplay');
display.innerHTML = 80085;

// Wait for the page to load
window.addEventListener('load', function() {  
    // Loop through each button and add a click event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
        // Pass the text content of the clicked button to the updateDisplay() function
        updateDisplay(button.textContent);
        });
    });
  
    // Function to update the display
    function updateDisplay(btn) {
        display.innerHTML = btn;
    }
});

  

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            if (num2 === 0) return null;
            else return divide(num1, num2);
        default:
            return null;
        }
}