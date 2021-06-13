// ES6 - Spread syntax (...)

const person = {
  name: "Veda",
  age: 25,
  isPresent: true,
};

const person_fee = {
  fee: undefined,
};

const family = { ...person, ...person_fee };
console.log(family); // combining key in both objects

// Destructuring
const {name, isPresent} = family;
console.log(name);
console.log(isPresent);
// filter name & isPresent
