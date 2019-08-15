'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

var addArrow = function addArrow(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(addArrow(55, 1));

// this keywords - no longer bound

var user = {
  name: 'Jan',
  cities: ['Cebu', 'HCM', 'Bangkok'],
  // printPlacesLived: function() {
  /*
  const that = this;
  console.log(this.name);
  console.log(this.cities);
  this.cities.forEach(function(city) {
    console.log(that.name + ' has lived in ' + city); //this.name is not accessible inside another function
  })*/
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city); //this.name is not accessible inside another function
    });
    /*
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    */
    var cityMessages = this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (n) {
      return n * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
