// QUERY SELECTORS AND VARIABLE DECLARATIONS
let display = document.querySelector('#display');
let result = 0;
let selected = 0;
let previous = 0;
let operation = '';

// BUTTON QUERY SELECTORS AND SHOW ON DISPLAY
let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    display.textContent = '0';
    selected = 0;
    previous = 0;
});
let one = document.querySelector('#one');
one.addEventListener('click', () => {
    display.textContent = '1';
    if (operation === '') {
        previous = 1;
    } else {
        selected = 1;
    }
});
let two = document.querySelector('#two');
two.addEventListener('click', () => {
    display.textContent = '2';
    if (operation === '') {
        previous = 2;
    } else {
        selected = 2;
    }
});
let three = document.querySelector('#three');
three.addEventListener('click', () => {
    display.textContent = '3';
    if (operation === '') {
        previous = 3;
    } else {
        selected = 3;
    }
});
let four = document.querySelector('#four');
four.addEventListener('click', () => {
    display.textContent = '4';
    if (operation === '') {
        previous = 4;
    } else {
        selected = 4;
    }
});
let five = document.querySelector('#five');
five.addEventListener('click', () => {
    display.textContent = '5';
    if (operation === '') {
        previous = 5;
    } else {
        selected = 5;
    }
});
let six = document.querySelector('#six');
six.addEventListener('click', () => {
    display.textContent = '6';
    if (operation === '') {
        previous = 6;
    } else {
        selected = 6;
    }
});
let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    display.textContent = '7';
    if (operation === '') {
        previous = 7;
    } else {
        selected = 7;
    }
});
let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    display.textContent = '8';
    if (operation === '') {
        previous = 8;
    } else {
        selected = 8;
    }
});
let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    display.textContent = '9';
    if (operation === '') {
        previous = 9;
    } else {
        selected = 9;
    }
});
let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    display.textContent = '+';
    operation = '+';
});
let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    display.textContent = '-';
    operation = '-';
});
let times = document.querySelector('#times');
times.addEventListener('click', () => {
    display.textContent = '*';
    operation = '*';
});
let by = document.querySelector('#by');
by.addEventListener('click', () => {
    display.textContent = '/';
    operation = '/';
});
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = ' ';
});

// OPERATION FUNCTIONS
let add = function(a, b) {
    result = a + b;
    console.log(result);
}
let subtract = function (a, b) {
    result = a - b;
}
let multiply = function (a, b) {
    result = a * b;
}
let divide = function (a, b) {
    result = a / b;
}

// 'OPERATE' FUNCTION
let operate = function (a, operator, b) {
    if (operator === '+') {
        add(a, b);
    }
    if (operator === '-') {
        subtract(a, b);
    }
    if (operator === '*') {
        multiply(a, b);
    }
    if (operator === '/') {
        divide(a, b);
    }
    display.textContent = result;
    previous = result;
}

// EQUALS OPERATOR
let equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
    operate(previous, operation, selected);
}); 