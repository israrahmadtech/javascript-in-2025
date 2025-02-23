
function calculator(numOne, numTwo, operator){
    if(operator === '+'){
        return numOne + numTwo
    }
    else if(operator === '-'){
        return numOne - numTwo
    }
    else if(operator === '*'){
        return numOne * numTwo
    }
    else if(operator === '/'){
        return numOne / numTwo
    }
    else if(operator === '%'){
        return numOne % numTwo
    }
    else{
        console.log("Please enter a valid operator")
    }
}
console.log("Addition: " + calculator(10, 10, '+'))
console.log("Subtraction: " + calculator(10, 10, '-'))
console.log("Multiplication: " + calculator(10, 10, '*'))
console.log("Division: " + calculator(10, 10, '/'))
console.log("Modulus: " + calculator(10, 10, '%'))
calculator(10, 10, '&')
