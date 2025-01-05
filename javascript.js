// QUERY SELECTORS AND VARIABLE DECLARATIONS
let display = document.querySelector('#display');
let result = 0;
let selected = 0;

// OPERATION FUNCTIONS
let add = function(a, b) {
    result = a + b;
    console.log(result);
}
let subtract = function (a, b) {
    result = a - b;
    console.log(result);
}
let multiply = function (a, b) {
    result = a * b;
    console.log(result);
}
let divide = function (a, b) {
    result = a / b;
    console.log(result);
}

// 'OPERATE' FUNCTION
let operate = function (operator, a, b) {
    if (operator === '+') {
        result = a + b;
    }
    if (operator === '-') {
        result = a - b;
    }
    if (operator === '*') {
        result = a * b;
    }
    if (operator === '/') {
        result = a / b;
    }
    console.log(result);
}

// BUTTON QUERY SELECTORS AND SHOW ON DISPLAY
let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    display.textContent = '0';
});
let one = document.querySelector('#one');
one.addEventListener('click', () => {
    display.textContent = '1';
});
let two = document.querySelector('#two');
two.addEventListener('click', () => {
    display.textContent = '2';
});
let three = document.querySelector('#three');
three.addEventListener('click', () => {
    display.textContent = '3';
});
let four = document.querySelector('#four');
four.addEventListener('click', () => {
    display.textContent = '4';
});
let five = document.querySelector('#five');
five.addEventListener('click', () => {
    display.textContent = '5';
});
let six = document.querySelector('#six');
six.addEventListener('click', () => {
    display.textContent = '6';
});
let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    display.textContent = '7';
});
let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    display.textContent = '8';
});
let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    display.textContent = '9';
});
let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    display.textContent = '+';
});
let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    display.textContent = '-';
});
let times = document.querySelector('#times');
times.addEventListener('click', () => {
    display.textContent = '*';
});
let by = document.querySelector('#by');
by.addEventListener('click', () => {
    display.textContent = '/';
});