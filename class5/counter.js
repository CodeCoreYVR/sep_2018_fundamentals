const counter = {
  // this method is designed
  // to assign a value to the counter
  // property
  // this method is also called
  // a setter
  set (number) {
    this.number = number;
  },
  // this method is designed to
  // increment the counter value
  // by one
  inc(){
    this.number++;
  },
  // this method is designed to
  // decrement the counter value
  // by one
  dec(){
    this.number--;
  },
  // this method is designed to retrieve
  // the counter value.
  // this is also known as a Getter.
  now() {
    return this.number;
  }
};

counter.set(4); // set the counter value to 4
console.log(counter.now()); // print the counter value

counter.inc() // increse the value by 1 to 5
console.log(counter.now()); // print the counter value

counter.inc() // increse the value by 1 to 6
console.log(counter.now()); // print the counter value
counter.inc() // increse the value by 1 to 7
console.log(counter.now()); // print the counter value

counter.dec() // decrease the value by 1 to 6
console.log(counter.now()); // print the counter value

/**
 * Anonymous Function
 */

const obj = {
  // this what is called an anonymous function
  // the meaning of this references the parent
  // scope
  func1: () => {
    // console.log(this, arguments);
    console.log(this);
  },
  // the meaning of this references the object
  // javascript wil place the "arguments" variable
  // within your function, so you can access
  // all parameters without assigning them
  // to variables.
  func2 () {
    console.log(this);
    console.log(arguments);
  }
}

// 
obj.func1('test1', 'test2')
obj.func2('test1', 'test2')


obj.func1(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
obj.func2(); // {func1: ƒ, func2: ƒ}



const parenting = {
  a: 2,
  b() {
    // i'm defining the function "c" within
    // the function b. Which means that the this
    // keyword, talks about the object
    const c = () => {
      console.log( this.a );
    }
    // this will call the inner function "c".
    // which in turn, will print the value of
    // a within the object.
    c();
  }
}

// * this will call the "b" method.
// * which in turn, will call the "c" function
// * which in turn, will acces the property a
//   through the "this" keyword.
// * "this", references the object, because
//   "c" is an anonymous function.
parenting.b()







