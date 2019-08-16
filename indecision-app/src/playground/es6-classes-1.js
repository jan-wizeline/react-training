class Person {
  // constructor function
  constructor(name = 'Anonymous', age = 0) { //arguement default values
    this.name = name; // || 'test';
    this.age = age;
  }

  getGreeting() {
    //return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` His/her major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name,age,homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting;
  }
}


const me = new Person('Jan Tampos', 25);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

const meStudent = new Student('Jan Tampos', 25, 'Computer Science');
console.log(meStudent);
console.log(meStudent.hasMajor());
console.log(meStudent.getDescription());


const otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.hasMajor());
console.log(otherStudent.getDescription());


const meTraveler = new Traveler('Jan Tampos', 25, 'Philippines');
console.log(meTraveler);
console.log(meTraveler.getGreeting());


const otherTraveler = new Traveler();
console.log(otherTraveler);
console.log(otherTraveler.getGreeting());
