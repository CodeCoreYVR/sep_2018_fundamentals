// write a single line comment
/**
 * Here is the syntax for multiple line
 * comments
 */

 /*
 this is the minimum syntax required
 for comments with multiple lines
 */

// const, let, var
const day = 'Wednesday';
let day = '20th';
var day = 'Monday';

/**
 * What is the difference between const & let
 * 
 * Variables declared with const cannot change (Immutable)
 * where variables with let  can change. (mutable)
 */

let number = 3;

console.log(`number is global scope is ${number}`);
{
  let number = 10;
  console.log(`number is local scope is ${number}`);
  number = 10;
  console.log(`number is local scope is ${number}`);
}

console.log(`number is global scope is ${number}`);

// number is global scope is 3
// number is local scope is 10
// number is local scope is 10
// number is global scope is 10


let color1 = "blue";
let color2 = 'red';
let color3 = `pink`; // with backtick you can interpolate
let color4 = `${color3}`; // with backtick you can interpolate

// it's me -> we can use the escape character
const statement1 = 'it\'s me';
const statement2 = "it's me";

// in order to escape a character that
// would cause the string to break
// we use the backslack or also known as
// "escape character"

// We also have a few types of data
// int, float, string, boolean
// example of an int
2;
3456;

// float
123.45;

// string
'hello world'

// boolean
true;
false;

/**
 * The different between statements and expressions
 */

3 + 3 // produce a value 6
console.log('hello world') // statement -. it doesn't procude a value
"test" + 4 // expression 
"3" === 3 // expression 

// example Absence of value
undefined
null

// ----------------

let number = 3;

console.log(`number is global scope is ${number}`);
{
  let number = 10;
  console.log(`number is local scope is ${number}`);
  number = 10;
  console.log(`number is local scope is ${number}`);
}

console.log(`number is global scope is ${number}`);

// number is global scope is 3
// number is local scope is 10
// number is local scope is 10
// number is global scope is 3

// ---------

// incrementors
let age = 35;
age += 1;
age++; // postincrementor
++age; // preincrementor

// Math with javascript

Math.random()/ // genereates a number from 0 to 1
Math.floor(123.123); // this will will turn into an absolute number 123.
Math.ceil(123.123) // this will will turn into an absolute number 124.

// loops
// for & while
// 1 initialization
// 2 test
// 3 state change

for (let index = 0; index < 5; index  += 2) {
  console.log(`the index in this iteration is ${index}`)
}

var index = 0;
while (index < 5) {
  console.log(`the index in this iteration is ${index}`)
  index++;
}


/**
 * 
 */

 "2" * 2 // 4
 "2" + 2 // 

// example 1: In this scenario, javasript
// will place both in the global scope
var nameInGlobalScope = 'Arturo';
{
  var nameWithLocalScope = 'John';
}

// example 2: In this scenario
// nameWithLocalScope, will live only
// within the curly brackets.
let nameInGlobalScope = 'Arturo';
{
  let nameWithLocalScope = 'John';
  console.log(nameWithLocalScope)
}
console.log(nameWithLocalScope)







