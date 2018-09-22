/**
 * We are going to write a function
 * that receives an argument so we
 * can say hello in the console.
 */

// one way to define a function
function sayHello(name) {
  console.log(`Hello there ${name}`);
}

// second way to define a function
const sayHello = function (name) {
  console.log(`Hello there ${name}`);
}

// Third way
const hayHello = (name) => {
  console.log(`Hello there ${name}`);
}