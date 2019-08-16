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

const me = new Person('Jan Tampos', 25);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

