let age = 20;


// && stands for AND
// when using &&, you are saying to check if condition 1 istrue AND if condition2 is true
// if(true && true){ do this !} 
// when using multiple &&'s all ands have to be true in order to work together
if (age >= 18 && age <= 24){
    // console.log("You can vote but not rent a car");
}

// || stands for OR
// when using ||, one of the conditions must be true in order for it to run
if(age === 16 || age === 17){
    // console.log("You can drive but not vote.");
}

// booleans 
// another datatype (variable type) like string or number that can only be equal to true or false
let sunny = false; 

if (sunny === true){
    // console.log("it is sunny out!");
} 
else {
    // console.log("it is not sunny out :(")
}



bool1 = true; 
bool2 = false;

if(bool1 === true && bool1 === true){
    console.log("True!");
}

/* 

if(bool1 && bool1){
    console.log("True!"); // this is the same as the equation above
    since it is still checking if each condition is equal to true
}

*/ 

if(bool1 === true && bool1 === false){
    console.log("1. Print?");
}

if(bool1 === true && bool2 === true){
    console.log("2. Print?");
}

if(bool1 === true || bool2 === true){
    console.log("3. Print?");
}

if(bool1 === true && bool2 === false){
    console.log("4. Print?");
}



let bool1 = true; 
let bool2 = false;
let bool3 = true; 


if((bool1 === true && bool2 === true) && bool1 === true){
    console.log("5. Print?"); // does not print it will read the inner ()
    // first
    
}

if((bool1 === true && bool2 === true) || bool1 === true){
    console.log("6. Print?");
}


if((bool1 === true || bool2 === true) && bool1 !== true){
    // (true) && (false) doesnt print because there is an && involved and only one is true. Both need to be positive in order for an && to print the equation
    console.log("7. Print?"); 
}

if(bofol1 === false || bool2 === false && bool3 === false){
    // (false) || (true) && (false) && OVERPOWERS THE || 
    // when || and && are together if there is a false && the equation wont print
    console.log("8. Print?"); 
}

if(bool1 === false || bool2 === false && bool3 === true){
    console.log("9. Print?"); // this will print because both &&'s are true
}




let num = 15; 

if(num % 3 === 0 && num % 5 === 0){
    console.log("fizzbuzz");
}

if(num % 3 === 0){
    console.log("fizz");
}

if(num % 5 === 0){
    console.log("buzz");
}


// nested if statements
if (num % 3 === 0){
    console.log("fizz");
    if(num % 5 === 0){
        console.log("fizzbuzz");
    }
}

if (num % 5 === 0){
    console.log("buzz");
    if(num % 3 === 0){
        console.log("fizzbuzz");
    }
}




