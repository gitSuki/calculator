const displayTop = document.querySelector('.displayTop')
const displayBottom = document.querySelector('.displayBottom')

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

let buttons = document.querySelectorAll('button')

buttons.forEach((buttons) => {
    buttons.addEventListener('mouseover', () => {
        buttons.classList.add('hover')
    })
    buttons.addEventListener('mouseleave', () => {
        buttons.classList.remove('hover')
    })
})