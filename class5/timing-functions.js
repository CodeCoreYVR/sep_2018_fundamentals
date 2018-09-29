// "setTimeout" is a built function
// it receives 2 arguments. 1, function. 2. millisecons (number)

const printHello = () => {
  console.log('Hi there');
};
const milliseconds = 1000;

console.log('running set timeout');
// function executed within the high order function
// is also known as callback.
setTimeout( printHello, milliseconds );

// the setTimeout function, sleeps for x amount of milliseconds

const x = function(){
  console.log('.');
  setTimeout(x, 1000)
}
x();

// the following function, does the exact same thing as the
// example above.

const printHello = () => {
  console.log('.');
};
const milliseconds = 1000;
setInterval(printHello, 1000);

// one of the differences between setInterval and setTimeout
// is that setInterval retrieves an indentifier.
// this identifier can be used to stop the setInterval
// execution


const printHello = () => {
  console.log('.');
};
const milliseconds = 1000;
// setInterval will continue to get executing
// unless i stop it with clearInterval
const id = setInterval(printHello, 1000);
// . . . . . . . .

// this will clear the execution of the setInterval function
clearInterval(id);



