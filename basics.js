console.log("Javascripts basics");


// Variables
// Variable declaration
let a = 5; 
let b = 6;

// Printing statements
console.log(a); // Variable a
console.log(b); // Variable b
console.log(a + b); // addition
console.log(a - b); // substraction
console.log(a * b); // multiplication
console.log(a / b); // division



let myName = "Luis";

console.log(myName);

let title = "coding student";

console.log(myName + " works as a " + title); // string concatination 
//          "Luis" + "works  as a " + "coding student"


let myLastName = "Espinal"

let myFullName = myName + " " + myLastName; 
console.log(myFullName); 

let c = a +b; 
console.log(c); 
let d = a * b-c; 
console.log(d);

let x = 10; // 
let y = 2;
console.log(x/y); 

console.log(x % y); // (modulus) this spits out the remainder number after division
console.log(x % 3); // (modulus) remainder is 1

console.log(x ** 2); // square a number 10*2

console.log("Old x: " + x);
x = 20; 
//Variable reassignment. Once we have declared a variable, we can always set it equal to another value
console.log("New x: " + x);

y = 4; 
console.log(x/y);

let z = 10; 
console.log(z); 

console.log("(numbers) Here is x + y: " + (x + y)); // put x and y in () to treat them as numbers. If not, they will be treated as strings and concatenate as such.

//                             "20"+ "4"
console.log("(strings) Here is x + y:  " + "20" + "4"); 
z = x+y; 
console.log("(numbers) Here is x + y" + z); 

/* opening 

Multi line comment
a comment that takes up multiple lines

closing */

a = 7; 
b = 9; 

console.log(a+b);

console.log("Here is a + b: " + a + b); // Is going to print out as a string aka the values next to each other which is 79 
console.log("Here is a + b: " + (a + b)); // printing as numbers aka adds the numberrs to each other 

let color1 = "blue"; 
let color2 = "red"; 

console.log(color1 + color2); 

color2 = "yellow"; 

console.log(color1 + " " + color2);

let color3 = color1 + color2; 

console.log(color3 + " " + color3); 

