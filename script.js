console.log('Menu')
console.log('1. Add')
console.log('2. Subtract')
console.log('3. Multiply')
console.log('4. Divide')
console.log('5. Average')
console.log('6. Exit')


let prompt = require('prompt-sync')()

let num1 = Number(prompt('Please select an option (1-6): '))

function result() {
    if (num1 === 6) {
        return 'see ya later, gator'
    }
    else if (num1 === 1 || num1 === 2 || num1 === 3 || num1 === 4) {
        var num2 = Number(prompt('Type in a number: '))
        var num3 = Number(prompt('Type in a number: '))
    }
    else if (num1 === 5) {
        var num2 = Number(prompt('Type in a number: '))
        var num3 = Number(prompt('Type in a number: '))
        var num4 = Number(prompt('Type in a number: '))
        var num5 = Number(prompt('Type in a number: '))
        var num6 = Number(prompt('Type in a number: '))
    }
    else {
        return 'invalid entry'
    }

    switch (num1) {
        case 1:
            function add() {
                return num2 + num3
            }
            return `${num2} + ${num3} = ${add()}`
            break;
        case 2:
            function subtract() {
                return num2 - num3
            }
            return `${num2} - ${num3} = ${subtract()}`
            break;
        case 3:
            function multiply() {
                return num2 * num3
            }
            return `${num2} * ${num3} = ${multiply()}`
            break;
        case 4:
            function divide() {
                return num2 / num3
            }
            return `${num2} / ${num3} = ${divide()}`
            break;
        case 5:
            function average() {
                let sum = num2 + num3 + num4 + num5 + num6
                return sum / 5
            }
            return `the average of ${num2}, ${num3}, ${num4}, ${num5}, and ${num6} = ${average()}`
            break;
        default:
            return 'invalid entry'
            break
    }

}