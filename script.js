// JavaScript: Declaring and Defining Variables

// var, let, const
/**
for (var i = 0; i < 10; i++) {
    console.log(i); 
}
 */
/**
for (let i = 0; i < 10; i++) { 
    console.log(i); 
}
 */
const constValue = 10;
constValue = 20;
console.log(constValue); //10
console.log(constValue); 
//Uncaught TypeError: Assignment to constant variable [20].

