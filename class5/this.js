// the "this" keyword, is contextual to
// its parent scope.

// in this context, the "this" keyword
// refers to the global scope
this;

// console is an object, within the global
// scope. You can also access it using
// the this keyword
console.log('hello world');
this.console.log('hello world');

const can = {
  a: 1,
  b: 2,
  c: 3,
  touchThis() {
    // in this context, the "this" keyword
    // refers to the object itself
    return this;
  }
};

// lets print the object into the console
console.log(can);

// lets print the object to the console
// by accessing it through the "this"
// keyword
console.log( can.touchThis() );


// exercise

const calc = {
  num1: 2,
  num2: 2,
  // to print to the console the
  // what the value of num1 + num2 is
  add: function () {
    const result = this.num1 + this.num2;
    console.log( `${this.num1} + ${this.num2} = ${result}` );
  }
}

calc.add();
calc.num1 = 5;
calc.num2 = 3;
calc.add();

/**
 * this and its context between a function and a method
 */

// in this case, "this" refers to the parent scope
const hello = function(){
  console.log( 'hello function context', this );
}

// in this case, "this" refers to the the object itself
const person = {
  hello: hello
}





