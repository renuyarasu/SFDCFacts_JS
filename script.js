// JavaScript: For loop 3 different ways

// #1
for (let i = 1; i < 5; i++) {
  console.log(i);
}

// #2
const numbers = [1, 2, 3, 4, 5];
for (let element of numbers) {
  console.log(element);
}

// #3
const person = {
  name: "VedaGna",
  role: "Play",
};

// #4
for (let key in person) {
  console.log(key);
}