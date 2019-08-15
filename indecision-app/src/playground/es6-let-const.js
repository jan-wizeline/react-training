var nameVar = "Andrew";
var nameVar = "Mike"; //var based variables can both redefine and reassign
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie"; // not valid to redefine but can reassign
console.log("nameLet", nameLet);

const nameConst = "Frank";
// nameConst = 'Gunther'; //cannot redefine, cannot reassing
console.log("nameConst", nameConst);

// var, let, const are function scoped; blocked-level scope

function getPetName() {
  var petName = 'Hal';
  return petName; 
}

getPetName();
// console.log(petName); error

const fullName = 'Jan Tampos';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
