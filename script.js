// ES6 - Spread syntax (...)

const students_01 = [
  {
    name: "Veda",
    age: 25,
    isPresent: true,
  },
  {
    name: "Gnapika",
    age: 22,
    isPresent: false,
  },
  {
    name: "Hindu",
    age: 26,
    isPresent: true,
  },
  {
    name: "Renu",
    age: 35,
    isPresent: false,
  },
  {
    name: "Yarasu",
    age: 25,
    isPresent: true,
  },
  {
    name: "Sai",
    age: 19,
    isPresent: false,
  },
];
const students_02 = [
  {
    name: "Murari",
    age: 36,
    isPresent: true,
  },
];
const family = [...students_01, ...students_02];
// console.log(family); // combining both arrays

// Destructuring
const [V, G, H] = family;
console.log(V);
console.log(G);
console.log(H);
// filter first 3 objects
