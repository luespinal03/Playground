const prompt = require('prompt-sync')({sigint: true});

// let input = prompt("Enter anything: "); // This requests an input from the user

// console.log(input); 

let num1 = Number(prompt("Enter your first number: "));

let num2 = Number(prompt("Enter your second number: ")); 

let operation = prompt("Enter an operation (+, -, *, /): ")

// console.log(num1 + num2); 

console.log("Your equation is: " + num1 + " " + operation + " " + num2); 


// syntax
// if (mycondition) {


// }
// check the operation 

if (operation === "+") { // if this statement is true
    // do this (everything inside of the curly brackets)
console.log("Addition!"); 
console.log(num1 + num2); 
}


if (operation === "-") {
    console.log("Subtraction")
    console.log(num1 - num2); 
}
if (operation === "/") {
    console.log("Division")
    console.log(num1 / num2); 
}
if (operation === "*") {
    console.log("Multiplication")
    console.log(num1 * num2); 
}
else { 
    console.log("Invalid operation " + operation);
}





