// JavaScript: Data Types - Array

const numbers = [1, 5, 8, 9, 4, 5, 6, 2, 3];
/* numbers.push(5); // The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(numbers);

numbers.pop(5); // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(numbers);

// numbers[2] = 300
// console.log(numbers);

numbers.slice(0, 3); 
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(numbers);
console.log(numbers.slice(2)); // expected output: Array [2, 3, 4, 6, 7, 8, 9]
console.log(numbers.slice(2, 4)); // expected output: Array [2, 3]
console.log(numbers.slice(0, 5)); // expected output: Array [ 0, 1, 2, 3, 4 ]


numbers.unshift(100); 
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(numbers);

numbers.sort();
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

console.log(numbers);
*/
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
