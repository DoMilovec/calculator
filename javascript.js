// QUERY SELECTORS AND VARIABLE DECLARATIONS
let display = document.querySelector('#display');
let result = 0;
let selected = 0;
let previous = 0;
let operation = '';
let selectedOperator = document.querySelector('#selectedOperator');

// BUTTON QUERY SELECTORS AND SHOW ON DISPLAY
let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 0;
        } else {
            previous = previous * 10 + 0;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 0;
        } else {
            selected = selected * 10 + 0;
        }
        display.textContent = selected;
    }
});
let one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 1;
        } else {
            previous = previous * 10 + 1;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 1;
        } else {
            selected = selected * 10 + 1;
        }
        display.textContent = selected;
    }
});
let two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 2;
        } else {
            previous = previous * 10 + 2;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 2;
        } else {
            selected = selected * 10 + 2;
        }
        display.textContent = selected;
    }
});
let three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 3;
        } else {
            previous = previous * 10 + 3;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 3;
        } else {
            selected = selected * 10 + 3;
        }
        display.textContent = selected;
    }
});
let four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 4;
        } else {
            previous = previous * 10 + 4;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 4;
        } else {
            selected = selected * 10 + 4;
        }
        display.textContent = selected;
    }
});
let five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 5;
        } else {
            previous = previous * 10 + 5;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 5;
        } else {
            selected = selected * 10 + 5;
        }
        display.textContent = selected;
    }
});
let six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 6;
        } else {
            previous = previous * 10 + 6;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 6;
        } else {
            selected = selected * 10 + 6;
        }
        display.textContent = selected;
    }
});
let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 7;
        } else {
            previous = previous * 10 + 7;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 7;
        } else {
            selected = selected * 10 + 7;
        }
        display.textContent = selected;
    }
});
let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 8;
        } else {
            previous = previous * 10 + 8;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 8;
        } else {
            selected = selected * 10 + 8;
        }
        display.textContent = selected;
    }
});
let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (operation === '') {
        if (previous === null) {
            previous = 9;
        } else {
            previous = previous * 10 + 9;
        }
        display.textContent = previous;
    } else {
        if (selected === null) {
            selected = 9;
        } else {
            selected = selected * 10 + 9;
        }
        display.textContent = selected;
    }
});
let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operate(previous, operation, selected);
    display.textContent = result;
    operation = '+';
    selectedOperator.textContent = '+';
});
let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    operate(previous, operation, selected);
    display.textContent = result;
    operation = '-';
    selectedOperator.textContent = '-';
});
let times = document.querySelector('#times');
times.addEventListener('click', () => {
    operate(previous, operation, selected);
    display.textContent = result;
    operation = '*';
    selectedOperator.textContent = '*';
});
let by = document.querySelector('#by');
by.addEventListener('click', () => {
    operate(previous, operation, selected);
    display.textContent = result;
    operation = '/';
    selectedOperator.textContent = '/';
});
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '0';
    previous = 0;
    selected = 0;
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
    selected = 0;
}

// EQUALS OPERATOR
let equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
    operate(previous, operation, selected);
}); 