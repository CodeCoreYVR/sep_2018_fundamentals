/**
 * Exercise:
 * 
 * Write a function that takes
 * any number but always returns 0
 * 
 * ALgorithm:
 * 
 * design a function that will:
 *   . have a function that receives a value
 *   . check if value given is a number
 *   . return 0
 */

//  . have a function that receives a value
//  . check if value given is a number
//  . return 0
const aFunction = (aNumber) => {

  
  // if the aNumber is not an integer
  // show a message
  if( ! Number.isInteger(aNumber) ) {
    console.log('HEY!!!! not an integer');
  }
  
  return 0;
};

console.log( aFunction('hello world') );








/**
 * Exercise:
 * 
 * Write a function that takes a user object
 * with 'name' and 'age' properties and
 * logs the string "[name] is [age] years old".
 * 
 * Algorithm:
 * 
 *   . create variable to store object
 *   . define name property
 *   . define age property
 *   . define a function that will receive an object
 *   . have that function print a message
 *     to the console with the content 
 *     "[name] is [age] years old"
 */

const person = {
  name: 'arturo',
  age: 35
};
const printMessage = (person) => {
  console.log(`${person.name} is ${person.age} years old`);
}
printMessage( person );

/**
 * Exercise:
 * 
 * Write a function that takes a sentence, returns an object
 * of all words and their lengths.
 * 
 * Data Structure that looks like this:
 * 
 *   statement: "Hello everyone at code core"
 *   object: {
 *     "Hello": 5,
 *     "everyone": 8,
 *     "at": 2,
 *     "code": 4,
 *     "core": 4
 *   }
 * 
 * Algorithm:
 * 
 *   . Write a function that takes a string
 *   . Define a variable with an object as a data type that will
 *     be returned.
 *   . Split the statement by spaces so that i can get a list of words
 *   . Loop through words to get the length of each word
 *   . Store the word as the key/value pair in the object we are going to return
 */


// Write a function that takes a string 
const countCharacters = (sentence) => {
  //Define a variable with an object as
  // a data type that will be returned.
  let wordCount = {};

  // Split the statement by spaces so
  // that i can get a list of words
  const wordList = sentence.split(' ');

  // console.log(wordList) // returns a list

  // Loop through words to get the length
  // of each word
  for( let word of wordList ) {
    // console.log(word, word.length); // returns each word
    
    // Store the word/length as the key/value
    // pair in the object we are going
    // to return
    wordCount[word] = word.length;
  }

  return wordCount;
}

const result = countCharacters('hello everyone at code core');
console.log(result);