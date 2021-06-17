// JavaScript: MDN - Destructuring

let a, b, rest;
[a, b] = [1, 2];
console.log(a); //1
console.log(b); //2
[a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest);
