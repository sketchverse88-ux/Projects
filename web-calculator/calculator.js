const display = document.getElementById('display');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('delete');
const equal = document.getElementById('equal');


/////////////////////////////////////
//Users view
/////////////////////////////////////
numbers.forEach(function(number) {
    number.addEventListener('click', function(event) {
        display.textContent += event.target.textContent;
    })
})

operators.forEach(function(operator) {
    operator.addEventListener('click', function(event) {
        display.textContent += event.target.textContent
    })
})

clear.addEventListener('click', function(event) {
    display.textContent = ''
})

/////////////////////////////////////
//Calculations
/////////////////////////////////////

function sumArray(array) {
    let result = 0
    for (let index = 0; index < array.length; index++) {
        result += array[index]
    }
    return result
}
function subArray(array) {
    let result = array[0]
    for (let index = 1; index < array.length; index++) {
        result -= array[index]
    }
    return result
}
function mulArray(array) {
    let result = 1
    for (let index = 0; index < array.length; index++) {
        result *= array[index]
    }
    return result
}
function divArray(array) {
    let result = array[0]
    for (let index = 1; index < array.length; index++) {
        result /= array[index]
    }
    return result
}

equal.addEventListener('click', function(event) {
    //addition
    if (display.textContent.includes('+')) {
        let values = display.textContent.split('+')
        let intValues = []
        for (let num = 0; num < values.length; num++) {
            intValues.push(Number(values[num]))
        }
        display.textContent = sumArray(intValues);
    }
    //subtraction
    else if (display.textContent.includes('-')) {
        let values = display.textContent.split('-')
        let intValues = []
        for (let num = 0; num < values.length; num++) {
            intValues.push(Number(values[num]))
        }
        display.textContent = subArray(intValues);
    }
    //multiplication
    else if (display.textContent.includes('*')) {
        let values = display.textContent.split('*')
        let intValues = []
        for (let num = 0; num < values.length; num++) {
            intValues.push(Number(values[num]))
        }
        display.textContent = mulArray(intValues);
    }
    //division
    else if (display.textContent.includes('/')) {
        let values = display.textContent.split('/')
        let intValues = []
        for (let num = 0; num < values.length; num++) {
            intValues.push(Number(values[num]))
        }
        display.textContent = divArray(intValues);
    }
})
