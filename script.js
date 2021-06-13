// JavaScript: OOPs - ES6 Classes

class Person {
  constructor(personName, personGender, personDOB) {
    this.name = personName;
    this.gender = personGender;
    this.dob = personDOB;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person_01 = new Person("VedaGna", "Male", "24-02-2017");
const person_02 = new Person("Gnapika", "Female", "26-12-2015");

console.log(person_01);
console.log(person_02);

person_01.greet();
