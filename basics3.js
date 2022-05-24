
// Math library functions

let num1 = 64;
let squareRoot = Math.sqrt(num1); // gets the square root of a number

// console.log("The square root of " + num1 + " is " + squareRoot); 

let num2 = 7; 
let square = Math.pow(7,2); // 7 ** 2; aka 7 * 7 = 49 same thing!

// console.log("If you square " + num2 + " you get " + square); 

// String methods 

let planet = "Mars"; 

// console.log(planet.toLowerCase()); // turns the value of planet into all lower case 

console.log(planet.toUpperCase()); // turns thge value of planet into all UPPER case

console.log("The type of " + planet + " is " + typeof planet); // typeof can find the type of anything, in this case a string. 

console.log("The type of " + num1 + " is " + typeof num1); // typeof can find the type of anything, in this case a number. 


let num3 = "5"; 
console.log("The type of " + num3 + " is " + typeof num3); // anything in quotes becomes a string

console.log("The type of " + num3 + " is " + typeof Number(num3)); // Number() converts whatever is inside of it to a number type if what is inside can be treted as a number 

let num4 = 5 ; 
let word = "word"; 

console.log(typeof Number(word)); // This method is called "CASTING" still thinks it is a number but... THIS IS A BAD CODING PRACTICE...you can force a value to be a number if it really is a number. If its not, then it is considered to be a bad coding practice becasue its displaying an incorrect result. Can be used if you know the displaying result will be correct. 

console.log(Number(num4)); // (NaN means "Not a Number") THIS IS A GOOD CODING PRACTICE... terminal will display NaN if its not a number...if it is a number it will display "number" once it has been console.logged. 
console.log(Number(planet)); // Not a number therefore, the result displayed on terminal is "NaN" aka Not a Number


// NaN is still considered a number, yes as confusing as it sounds


