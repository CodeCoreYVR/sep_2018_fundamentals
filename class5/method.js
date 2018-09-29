// this is a function  that prints
// a message to the console
const bark = function () {
  console.log('bark!!!');
}

const dog = {
  bark: bark
};

const cat = {
  meow: () => {
    console.log('meow!');
  }
};

// this is a function call
bark();

// this is a method call
dog.bark();

// method call
cat.meow()