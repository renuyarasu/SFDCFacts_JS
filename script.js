// JavaScript: MDN - Destructuring
// Combined Array and Object Destructuring
//FizzBuzz
console.clear();
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];
const [, , {name}] = props;
console.log(name);
const [, , {id}] = props;
console.log(id);