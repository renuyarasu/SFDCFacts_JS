// JavaScript: Loops - For Loop

// forEach loop
const students = [
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
/* 
const newArr = students.map((student) => {
    return student.isPresent;
}) */

// const newArr = students.filter((student) => student.isPresent === false);
const newArr = students.map((student) => student.name);

console.log(newArr);
