let displayValue = '';
let operator = '';
let firstOperand = '';
let awaitingSecondOperand = false;

function appendNumber(number) {
    if (awaitingSecondOperand) {
        displayValue = number;
        awaitingSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (awaitingSecondOperand) {
        operator = op;
        return;
    }
    if (firstOperand === '') {
        firstOperand = displayValue;
        displayValue = '';
    } else if (operator) {
        const result = calculate(parseFloat(firstOperand), parseFloat(displayValue), operator);
        displayValue = String(result);
        firstOperand = displayValue;
    }
    operator = op;
    awaitingSecondOperand = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    awaitingSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculate(first, second, op) {
    let result;
    switch (op) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }
    return result;
}

function calculateResult() {
    if (operator && !awaitingSecondOperand) {
        const result = calculate(parseFloat(firstOperand), parseFloat(displayValue), operator);
        displayValue = String(result);
        firstOperand = '';
        operator = '';
        updateDisplay();
    }
}

