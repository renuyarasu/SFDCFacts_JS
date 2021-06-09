// JavaScript: 4 ways to convert a string into an array in javaScript!
const str = "VEDAGNA";

// #1
console.log(str.split(""));

// #2
console.log([...str]);

// #3
console.log(Array.from(str));

// #4
console.log(Object.assign([], str));
