'use strict';

function squareFn(x) {
  return x * x;
}

console.log(squareFn(7));

var square = function square(x) {
  return x * x;
};

console.log(square(8));

// All arrrow functions are considered anonymous; have to assign to a variable

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(9));

// for single expressions
var squareArrowSingle = function squareArrowSingle(x) {
  return x * x;
};

console.log(squareArrowSingle(10));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Jan Tampos'));

var getFirstNameSingle = function getFirstNameSingle(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstNameSingle('Nam Nguyen'));
