// assigining an object to a variable

// a user defined object
// this is a key/value pair set of information
const Arturo = {
  age: 35, // property that has a value
  skinColor: 'Yellowish',
  wears: {
    top: 'Green Shirt',
    bottom: 'Blue jeans',
    shoes: 'brown shoes'
  },
  walks: function() { // function also known as a method
    console.log('walks like an old man');
  },
  runs: () => {
    console.log('not really :( he\'s got backpain');
  }
};

/**
 * A property is an attribute of an object
 */

/**
 * A method is a function that belongs to
 * an object
 */

/**
 * The only difference between methods and functions
 * is that the method belongs to an object
 */

/**
 * the way we access this information is
 * by using the dot notation.
 */

console.log(Arturo.age)

// Built in objects
// console
console.log


/**
 * Objects' properties
 * can be accessed using the dot notation
 */
Arturo.wears.bottom

/**
 * We can also access its properties
 * through square bracket notation
 */
Arturo['wears']['bottom']

/**
 * you get undefined when accessing a property
 * that doesn't exist
 */

const obj = {
  a: [1,2,3],
  b: {
    c: 6
  }
}


const obj2 = {
 ' a a': [1,2,3]
}

const obj3 = {
  a: 3,
  b: 6
}
// this crashes because
// the variable a doesn't exist
obj3[a] 
// to fix it, we coudl:

// solution 1
a = 'a'
obj3[a] 

// solution 2
obj3.a

// solution 3
obj3['a']



const carObject = {
  wheels: 4,
  doors: 2
}
delete carObject['wheels'];





