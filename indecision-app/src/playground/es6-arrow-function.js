function squareFn(x) {
  return x * x;
}

console.log(squareFn(7));

const square = function(x) {
  return x * x;
};

console.log(square(8));

// All arrrow functions are considered anonymous; have to assign to a variable

const squareArrow = x => {
  return x * x;
};

console.log(squareArrow(9));

// for single expressions
const squareArrowSingle = (x) => x * x;

console.log(squareArrowSingle(10));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Jan Tampos'));

const getFirstNameSingle = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameSingle('Nam Nguyen'));


