function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function exponent(a, b) {
    return a ** b
}

function operate(a, b, operator) {
    switch(operator) {
        case 'addition':
            return add(a,b);

        case 'subtraction':
            return subtract(a,b)

        case 'multiplication':
            return multiply(a,b)

        case 'division':
            return divide(a,b)

        case 'power':
            return exponent(a,b)
    }
}

