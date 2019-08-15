//arguments object - no longer bound with arrow functions

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

const addArrow = (a,b) => {
  // console.log(arguments);
  return a + b;
};

console.log(addArrow(55, 1));

// this keywords - no longer bound

const user = {
  name : 'Jan',
  cities: ['Cebu', 'HCM', 'Bangkok'],
  // printPlacesLived: function() {
    /*
    const that = this;
    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function(city) {
      console.log(that.name + ' has lived in ' + city); //this.name is not accessible inside another function
    })*/
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city); //this.name is not accessible inside another function
    });
    /*
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    */
    const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
    return cityMessages;
  }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((n) => n * this.multiplyBy);
  }
}

console.log(multiplier.multiply());