
let hello1 = 3; // defining a variable with let (modifiable)
console.log(hello1);  // priting the variable in the global scope
let hello3 = 5;
function hello() {
  var hello2 = 33; // define a local variable
  let hello3 = 55; // assigns stricly local variable (within the curly brackets)
  console.log(hello1); // prints value
  console.log(hello2); // prints value
  console.log(hello3); // prints value
}
// print the same variable in the global scope agian
console.log(hello1); // prints value (because it's in the global space)
// console.log(hello2); // prints value (because it's defined with var)
console.log(hello3); // crash.

hello();

function tripleIt (number) {
  return number * 3;
}
const tripleIt = function (number) {
  return number * 3;
}
const tripleIt = (number) => {
  return number * 3;
}
const tripleIt = number => {
  const result = number * 3;
  console.log(`calculating ${number} * 3 = ${result}`)
  return result;
}
console.log(tripleIt(3)) // returns 9
console.log(tripleIt(2)) // returns 6