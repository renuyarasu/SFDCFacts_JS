// JavaScript: MDN - Array: Destructuring

const foo = [1, 2, 3];

const [red, green, yellow] = foo;
console.log(red); // 1
console.log(green); // 2
console.log(yellow); // 3

// Swapping Variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

const myArr = [1,2,3];
[myArr[2], myArr[1]] = [myArr[1], myArr[2]];
console.log(myArr); //[ 1, 3, 2 ]


