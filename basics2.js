// Quick review
// double fwd salash comments 
/* 
nulti-line comment
*/

console.log("Happy Friday!");


let day = "Friday";  // this is a string because it is in quotes

console.log(day);

day = "Saturday";
console.log(day); 

let dayNumber = "20th"; // this is a string because it is in quotes

console.log("Today is " + day + " the " + dayNumber); // string concatenation - combining strings together

let num = 7; // this is a number because is not in qutoes 

// let num = seven; this wont work because it thinks the variable "seven" has a value and it doesnt

let num2 = 5; 
let num3 = num + num2; 

console.log(num3);


num2 = num; // 7

num = num2; // 7 
num3 = num + num2; // 14

let x = 10; 

x += 5; // x = x + 5

console.log(x); 

x += 7; // x = x + 7 

console.log(x); 

let y = 9; 

//y + 4; // get value 13 BUT we arent storing it back into y, so y will remain 9 for the future lines of code

y + 4; 

console.log(y);

let z = 11; 

z-= 5; // z = z - 5; 

console.log("The variable z is equal to : " + z); 

// *= and /= are available too for multiplication and divisin respectively

let a = 0;

a++; // a += 1 or a = a + 1; 

console.log(a); 

a++; // 2
a++; // 3
a++; // 4 

console.log(a);

let b = 100; 

b--; // b -= 1 or b = b - 1

console.log(b); 

console.log(b % 11); // modulus operatpr (%) gets us the remainder of b divided by 11

console.log(b % 10);

b = 10; 

console.log(b ** 2); // b^2 or get b squared or multiply b by itself equals to 100

console.log(b ** 3); // cube the number equals to 1,000

console.log("The sqrt of 100 is: " + Math.sqrt(100)); // Math library square root function

