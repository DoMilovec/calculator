// QUERY SELECTORS AND VARIABLE DECLARATIONS
let display = document.querySelector('#display');
let result = 0;
let selected = 0;
let previous = 0;
let operation = '';
let selectedOperator = document.querySelector('#selectedOperator');
const MAX_DIGITS = 7;

// BUTTON QUERY SELECTORS AND SHOW ON DISPLAY
let zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 0;
        } else {
            previous = `${previous}0`;
        }
        display.textContent = previous;
    } 
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 0;
        } else {
            selected = `${selected}0`;
        }
        display.textContent = selected;
    }
}
});
let one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0 || previous === '0') {
            previous = 1;
        } else {
            previous = `${previous}1`;
        }
        display.textContent = previous;
    }
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0 || selected === '0') {
            selected = 1;
        } else {
            selected = `${selected}1`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 2;
        } else {
            previous = `${previous}2`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    } 
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 2;
        } else {
            selected = `${selected}2`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 3;
        } else {
            previous = `${previous}3`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    }
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 3;
        } else {
            selected = `${selected}3`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 4;
        } else {
            previous = `${previous}4`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    } 
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 4;
        } else {
            selected = `${selected}4`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 5;
        } else {
            previous = `${previous}5`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    }
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 5;
        } else {
            selected = `${selected}5`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 6;
        } else {
            previous = `${previous}6`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    }
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 6;
        } else {
            selected = `${selected}6`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 7;
        } else {
            previous = `${previous}7`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    } 
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 7;
        } else {
            selected = `${selected}7`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {  
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 8;
        } else {
            previous = `${previous}8`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    }
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 8;
        } else {
            selected = `${selected}8`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});
let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (operation === '') {
        if (previous.toString().length < 9) {
        if (previous === 0) {
            previous = 9;
        } else {
            previous = `${previous}9`;
        }
        previous = parseFloat(previous);
        display.textContent = previous;
    } 
    } else {
        if (selected.toString().length < 9) {
        if (selected === 0) {
            selected = 9;
        } else {
            selected = `${selected}9`;
        }
        selected = parseFloat(selected);
        display.textContent = selected;
    }
}
});

// OPERATIONS
let plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (operation === '') {
        operation = '+';
        display.textContent += ' + ';
    } else if (operation === '-' || operation === '*' || operation === '/') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '+'; 
        display.textContent += ' + ';
    } else if (operation === '+') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '+'; 
        display.textContent += ' + ';
    }
});
let minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (operation === '') {
        operation = '-';
        display.textContent += ' - ';
    } else if (operation === '+' || operation === '*' || operation === '/') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '-';
        display.textContent += ' - ';
    } else if (operation === '-') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '-';
        display.textContent += ' - ';
    }
});
let times = document.querySelector('#times');
times.addEventListener('click', () => {
    if (operation === '') {
        operation = '*';
        display.textContent += ' * ';
    } else if (operation === '+' || operation === '-' || operation === '/') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '*';
        display.textContent += ' * ';
    } else if (operation === '*') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '*';
        display.textContent += ' * ';
    }
});
let by = document.querySelector('#by');
by.addEventListener('click', () => {
    if (operation === '') {
        operation = '/';
        display.textContent += ' / ';
    } else if (operation === '+' || operation === '-' || operation === '*') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '/';
        display.textContent += ' / ';
    } else if (operation === '/') {
        selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
        operate(previous, operation, selected);
        display.textContent = parseFloat(result.toFixed(7));
        operation = '/';
        display.textContent += ' / ';
    }
});

// CLEAR OPERATION
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '0';
    previous = 0;
    selected = 0;
    operation = '';
    selectedOperator.textContent = '';
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
    display.textContent = parseFloat(result.toFixed(7));
    previous = result;
    selected = 0;
}

// EQUALS OPERATOR
let equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => {
    if (operation === '') {
        display.textContent = previous;
        selectedOperator.textContent = '';
    } else if (operation === '/' && selected === 0) {
        display.textContent = 'Cant divide with 0!';
        selectedOperator.textContent = 'Error';
        previous = 0;
        selected = 0;
        operation = ''
    } else {
    previous = parseFloat(previous);
    selected = parseFloat(selected);
    selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
    operate(previous, operation, selected);
    operation = '';
    display.textContent = parseFloat(result.toFixed(7));
    }
});

// BACKSPACE
let backspace = document.querySelector('#backspace');
backspace.addEventListener('click', (e) => {
    if (operation === '') {
        let strPrev = previous.toString();
        if (strPrev.length > 1) {
        strPrev = strPrev.slice(0, -1);
        let numPrev = parseFloat(strPrev);
        display.textContent = numPrev;
        previous = numPrev;
        } else {
            numPrev = 0;
            display.textContent = numPrev;
            previous = numPrev;
        }
    } else if (operation !== '') {
        let strSelect = selected.toString();
        if (strSelect.length > 1) {
        strSelect = strSelect.slice(0, -1);
        let numSelect = parseFloat(strSelect);
        display.textContent = numSelect;
        selected = numSelect;
        } else {
            numSelect = 0;
            display.textContent = numSelect;
            selected = numSelect;
        }
    } 
});

// DOT
let dot = document.querySelector('#dot');
dot.addEventListener('click', (e) => {
    if (operation === '') {
        if (!previous.toString().includes('.')) {
            previous += '.';
            display.textContent = previous;
        }
    } else {
        if (!selected.toString().includes('.')) {
            selected += '.';
            display.textContent = selected;
        }
    }
});

// *** KEYBOARD SUPPORT ***
document.addEventListener('keydown', (e) => {

    // KEYBOARD NUMBERS - 1-9
    if (e.key >= '0' && e.key <= '9') {
        let number = parseInt(e.key);
        if (operation === '') {
            if (previous.toString().length < 9) {
                if (previous === 0) {
                    previous = number;
                } else {
                    previous = `${previous}${number}`;
                }
                display.textContent = previous;
            }
        } else {
            if (selected.toString().length < 9) {
                if (selected === 0) {
                    selected = number;
                } else {
                    selected = `${selected}${number}`;
                }
                selected = parseFloat(selected);
                display.textContent = selected;
            }
        }
    }

    // KEYBOARD OPERATORS - +-*/
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        if (operation === '') {
            operation = e.key;
            display.textContent += ` ${e.key} `;
        } else if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
            selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
            operate(previous, operation, selected);
            display.textContent = parseFloat(result.toFixed(7));
            operation = e.key; 
            display.textContent += ` ${e.key} `;
        }
    }

    // KEYBOARD EQUALS - ENTER
    if (e.key === 'Enter') {
        if (operation === '') {
            display.textContent = previous;
            selectedOperator.textContent = '';
        } else if (operation === '/' && selected === 0) {
            display.textContent = 'Cant divide by 0!';
            selectedOperator.textContent = 'Error';
            previous = 0;
            selected = 0;
            operation = ''
        } else {
            previous = parseFloat(previous);
            selected = parseFloat(selected);
            selectedOperator.textContent = `${parseFloat(previous.toFixed(7))} ${operation} ${selected}`;
            operate(previous, operation, selected);
            operation = '';
        }
    }

    // KEYBOARD BACKSPACE - <-
    if (e.key === 'Backspace') {
        if (operation === '') {
            let strPrev = previous.toString();
            if (strPrev.length > 1) {
                strPrev = strPrev.slice(0, -1);
                let numPrev = parseFloat(strPrev);
                display.textContent = numPrev;
                previous = numPrev;
            } else {
                let numPrev = 0;
                display.textContent = numPrev;
                previous = numPrev;
            }
        } else if (operation !== '') {
            let strSelect = selected.toString();
            if (strSelect.length > 1) {
                strSelect = strSelect.slice(0, -1);
                let numSelect = parseFloat(strSelect);
                display.textContent = numSelect;
                selected = numSelect;
            } else {
                let numSelect = 0;
                display.textContent = numSelect;
                selected = numSelect;
            }
        }
    }

    // KEYBOARD DOT - .
    if (e.key === '.') {
        if (operation === '') {
            if (!previous.toString().includes('.')) {
                previous += '.';
                display.textContent = previous;
            }
        } else {
            if (!selected.toString().includes('.')) {
                selected += '.';
                display.textContent = selected;
            }
        }
    }

    // KEYBOARD C - CLEAR
    if (e.key.toLowerCase() === 'c') {
        display.textContent = '0';
        previous = 0;
        selected = 0;
        operation = '';
        selectedOperator.textContent = '';
    }
});