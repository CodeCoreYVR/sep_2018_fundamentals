// exercise in slide 23
const car = {
  speed: 200,
  park() {
    console.log('parking!')
  },
  stops() {
    return 'stopping';
  }
}

car.park();
console.log( car.stops() );

// alternatives
const park = function() {}
const stop = function() {}

const car = {
  speed: 100,
  park: park,
  stop: stop
}