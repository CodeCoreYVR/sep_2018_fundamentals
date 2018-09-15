// this is a statement
// instruction for the program
// to execute
let word = '    hello Canada';


// {keyword} {variable-name} = {value}
let example2 = '    hello Canada';

// when using "let" keyword, it allows you
// to update the variable
// this is an mutable variable
let myFirstVariable = 4;
 myFirstVariable = 10; // will print 10

// this is a constant, in other words
// this is an inmutable variable
const mySecondVariable = 10; // cannot change ot

// modifiable variable
// it stores in the global scope
var myThirdVariable = 10;
myThirdVariable = 15;



let hello1 = 3; // defining a variable with let (modifiable)
console.log(hello1);  // priting the variable in the global scope
let hello3 = 5;
{
  var hello2 = 33; // define a local variable
  let hello3 = 55; // assigns stricly local variable (within the curly brackets)
  console.log(hello1); // prints value
  console.log(hello2); // prints value
  console.log(hello3); // prints value
}
// print the same variable in the global scope agian
console.log(hello1); // prints value (because it's in the global space)
console.log(hello2); // prints value (because it's defined with var)
console.log(hello3); // crash.

// 3
// 3
// 33
// 55
// 3
// 33
// hello3 is not defined

/**
 * what happens when i update hello3
 * after the previous block of code
 * (line 27 - 29)?????
 * 
 * hello3 = 3 // hello3 is undefined
 * let hello3 = 'test'; // we can however work
 */

// variable definition
// variable initialization
// variable assingment

let test;
test = 2;