//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
const numOne = Number(prompt("ENTER FIRST NUMBER"))
const operator = prompt("ENTER OPERATOR (+, -, *, /)");
const numTwo = Number(prompt("ENTER SECOND NUMBER"))

switch (operator) {
//addition
case "+":
    const addValue = add(numOne,numTwo)
    alert(`${numOne} ${operator} ${numTwo} = ${addValue}`)
    break 
//subtraction
case "-":
    const subtractValue = subtract(numOne,numTwo)
    alert(`${numOne} ${operator} ${numTwo} = ${subtractValue}`)
    break 
//multiplication
case "*":
    const multiplyValue = multiply(numOne,numTwo)
    alert(`${numOne} ${operator} ${numTwo} = ${multiplyValue}`)
    break
//division
case "/":
    const divideValue = divide(numOne,numTwo)
    alert(`${numOne} ${operator} ${numTwo} = ${divideValue}`)
    break

default:
    alert("PLEASE CHOOSE THE CORRECT OPERATOR (+, -, *, /)")
}

//functions
    function add(numberOne, numTwo) {
    return numberOne + numTwo  
}   
    function subtract(numberOne, numTwo) {
    return numberOne - numTwo
}
    function multiply(numberOne, numTwo) {
    return numberOne * numTwo
}
    function divide(numberOne, numTwo) {
    return numberOne / numTwo
}