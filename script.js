const displayTop = document.querySelector('.displayTop')
const displayBottom = document.querySelector('.displayBottom')
const operatorRegex = /[\x\-\+\^\/]/

let recentlySolved = false
let buttons = document.querySelectorAll('button')
let preValue = displayBottom.textContent 

function add(a, b) {
    return parseInt(a) + parseInt(b)
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

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a,b);

        case '-':
            return subtract(a,b)

        case 'x':
            return multiply(a,b)

        case '÷':
            return divide(a,b)

        case '^':
            return exponent(a,b)
    }
}

function deleteBottom() {
    (preValue.length === 1 || preValue.length === 2 && preValue.charAt(0) === '-' ) ? preValue = 0 : preValue = preValue.substring(0, preValue.length - 1)
    displayBottom.textContent = preValue
}

function deleteTop() {
    displayTop.textContent = ''
    recentlySolved = false
}

function deleteFunc() {
    (recentlySolved) ? deleteTop() : (preValue === 0) ? deleteTop() : deleteBottom()
}

function plusOrMinus() {
    (preValue.charAt(0) === '-' ) ? preValue = preValue.slice(1) : preValue = `-` + preValue
    displayBottom.textContent = preValue
}

function changeDisplayBottom(oldPreValue) {
    (preValue == 0 || recentlySolved) ? preValue = oldPreValue : preValue += oldPreValue
    displayBottom.textContent = preValue
}

function changeDisplayTop(id) {
    displayTop.textContent = preValue + ` ` + id
    preValue = 0
    displayBottom.textContent = preValue
}

function convertEquation () { //converts all the text in the display area to an array
    let topHalf = displayTop.textContent
    let equation = topHalf.split(' ')
    equation.push(displayBottom.textContent)
    return equation
}

function evaluate() {
    equation = convertEquation()
    sum = operate(equation[0], equation[1], equation[2])
    recentlySolved = true
    displayTop.textContent = equation.join(' ') + ` =`
    changeDisplayBottom(sum.toString())
}

function buttonClick(id) {
    console.log(id)
    if (operatorRegex.test(id)) { //if the id is a mathematical operator
        changeDisplayTop(id)
    }
    else if (id === `clearButton`) {
        deleteFunc()
    }
    else if (id === '±') {
        plusOrMinus()
    }
    else if (id === `=`) {
        evaluate()
    }
    else {
    changeDisplayBottom(id)
    }
}

buttons.forEach((buttons) => {
    buttons.addEventListener ('click', () => {
        buttonClick(buttons.id)
    })
    buttons.addEventListener('mouseover', () => { //adds hover css effect
        buttons.classList.add('hover')
    })
    buttons.addEventListener('mouseleave', () => { //removes effect once mouse leaves
        buttons.classList.remove('hover')
    })
})

