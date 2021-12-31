const displayTop = document.querySelector('.displayTop')
const displayBottom = document.querySelector('.displayBottom')
let buttons = document.querySelectorAll('button')
let preValue = displayBottom.textContent 
let baseNumber = 0

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

function changeLowerDisplay(id) {
    (preValue == 0) ? preValue = id : preValue += id
    displayBottom.textContent = preValue
}

function buttonClick(input) {
    changeLowerDisplay(input)
}

buttons.forEach((buttons) => {
    buttons.addEventListener ('click', () => {
        buttonClick(buttons.id)
    })
    buttons.addEventListener('mouseover', () => {
        buttons.classList.add('hover')
    })
    buttons.addEventListener('mouseleave', () => {
        buttons.classList.remove('hover')
    })
})

