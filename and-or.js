let age = 20;


// && stands for AND
// when using &&, you are saying to check if condition 1 istrue AND if condition2 is true
// if(true && true){ do this !} 
// when using multiple &&'s all ands have to be true in order to work together
if (age >= 18 && age <= 24){
    console.log("You can vote but not rent a car");
}

// || stands for OR
// when using ||, one of the conditions must be true in order for it to run
if(age === 16 || age === 17){
    console.log("You can drive but not vote.");
}

// booleans 
// another datatype (variable type) like string or number that can only be equal to true or false
let sunny = false; 

if (sunny === true){
    console.log("it is sunny out!");
} 
else {
    console.log("it is not sunny out :(")
}
