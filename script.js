// JavaScript: MDN - Array: Destructuring
console.clear();
// Object destructuring
const user = {
  id: 42,
  is_verified: true,
};
const { id, is_verified } = user;
console.log(is_verified);


const {a = 10, b=20} = {a:100}
console.log(a); // 3
console.log(b); // 5