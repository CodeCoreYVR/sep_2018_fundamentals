
// this is regular function
const doubleIt = (val) => {
  return 2 * val;
}

const tripleIt = (number) => {
  return 3 * number;
}

// the higher order function
// would look like this:

const call = (number, func) => {
  return func(number);
}

call(4, doubleIt); // will produce 8
call(4, tripleIt); // will produce 12
